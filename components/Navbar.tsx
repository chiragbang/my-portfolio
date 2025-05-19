"use client"
import React, { useState } from 'react'
import { HoveredLink, Menu, MenuItem, ProductItem } from './ui/navbar-menu'
// import { Menu, MenuItem, ProductItem, HoveredLink } from "@/components/ui/menu"; // ✅


const Navbar = () => {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="grid grid-cols-1 gap-4">
            <ProductItem
              title="AI Platform"
              description="Deploy machine learning models easily."
              href="/products/ai-platform"
              src="/images/ai-platform.jpg"
            />
            <ProductItem
              title="Analytics"
              description="Understand your users better."
              href="/products/analytics"
              src="/images/analytics.jpg"
            />
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Company">
          <div className="flex flex-col gap-2">
            <HoveredLink href="/about">About Us</HoveredLink>
            <HoveredLink href="/careers">Careers</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Resources">
          <div className="flex flex-col gap-2">
            <HoveredLink href="/blog">Blog</HoveredLink>
            <HoveredLink href="/docs">Docs</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default Navbar