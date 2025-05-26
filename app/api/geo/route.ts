import { NextRequest, NextResponse } from 'next/server';
import { IP2Location } from 'ip2location-nodejs';
import path from 'path';
import fs from 'fs';

const dbPath = path.join(process.cwd(), 'data', 'IP2LOCATION-LITE-DB1.IPV4.BIN');
const storagePath = path.join(process.cwd(), 'data', 'lastVisitor.json');

const ip2location = new IP2Location();
ip2location.open(dbPath);

type GeoData = {
  ip: string;
  country_short: string;
  country_long: string;
  region_name: string;
  city_name: string;
};

// Extract IP address from request headers
function getClientIp(req: NextRequest): string {
  const xff = req.headers.get('x-forwarded-for');
  return xff ? xff.split(',')[0].trim() : '127.0.0.1';
}

export async function GET(req: NextRequest) {
  const ip = getClientIp(req);
  const currentData = ip2location.getAll(ip);

  const currentGeo: GeoData = {
    ip,
    country_short: currentData.countryShort,
    country_long: currentData.countryLong,
    region_name: currentData.region,
    city_name: currentData.city,
  };

  let lastVisitor: GeoData | null = null;

  try {
    if (fs.existsSync(storagePath)) {
      const content = fs.readFileSync(storagePath, 'utf-8');
      lastVisitor = JSON.parse(content);
    }

    fs.writeFileSync(storagePath, JSON.stringify(currentGeo), 'utf-8');
  } catch (e) {
    console.error('File handling error:', e);
  }

  return NextResponse.json(
    lastVisitor || {
      ip: 'N/A',
      country_short: 'N/A',
      country_long: 'First Visitor',
      region_name: '',
      city_name: '',
    }
  );
}
