"use client";
import React, { useEffect, useState } from "react";

type GeoData = {
  ip: string;
  country_short: string;
  country_long: string;
  region_name: string;
  city_name: string;
  latitude: number;
  longitude: number;
};

const GeoLocationWidget: React.FC = () => {
  const [geoData, setGeoData] = useState<GeoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
  async function fetchGeoData() {
    try {
      const res = await fetch("/api/geo");
      if (!res.ok) throw new Error("Failed to fetch geo data");
      const data: GeoData = await res.json();
      setGeoData(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unknown error");
      }
    } finally {
      setLoading(false);
    }
  }

  fetchGeoData();
}, []);


  if (loading) return null;

  if (error)
    return (
      <div style={styles.container}>
        <p style={styles.error}>Error: {error}</p>
      </div>
    );

  return (
    <div style={styles.container} title="Visitor Location">
      <p style={styles.title}>Last Visitor from</p>
      <p style={styles.location}>
        {geoData?.city_name
          ? `${geoData.city_name}, ${geoData.region_name}`
          : "Unknown location"}
      </p>
      {/* <p style={styles.ip}>IP: {geoData?.ip}</p> */}
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    position: "fixed",
    bottom: 24,
    right: 24,
    backgroundColor: "#1e293b", // Slate 800 - dark blue gray
    color: "#f1f5f9", // Slate 100 - light text
    padding: "16px 20px",
    borderRadius: 12,
    fontFamily: "'Inter', sans-serif",
    fontSize: 14,
    width: 240,
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
    userSelect: "none",
    cursor: "default",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    zIndex: 1000,
  },
  title: {
    margin: 0,
    fontWeight: 600,
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    color: "#38bdf8", // Light blue accent
  },
  location: {
    marginTop: 4,
    marginBottom: 0,
    fontWeight: 700,
    fontSize: 18,
    color: "#e0e7ff", // lighter than container text
  },
  country: {
    marginTop: 2,
    marginBottom: 8,
    fontWeight: 500,
    fontSize: 13,
    color: "#94a3b8", // grayish text
  },
  ip: {
    fontSize: 11,
    fontWeight: 400,
    color: "#64748b", // darker gray
  },
  error: {
    color: "#f87171", // red-400
    fontWeight: 600,
  },
};

export default GeoLocationWidget;
