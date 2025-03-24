'use client';
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";

const navItems = {
  "/solutions": {
    name: "Solutions",
    description: "AI-powered tools and services"
  },
  "/updates": {
    name: "Updates",
    description: "Latest developments and content"
  }
};

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4">
      <div className="flex items-center justify-between">
        <Link 
          href="/" 
          className="text-2xl md:text-3xl font-semibold tracking-tight bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"
        >
          {metaData.title}
        </Link>

        <button
          className="md:hidden p-2 text-gray-400 hover:text-gray-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>

        <div className="hidden md:flex items-center space-x-6">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="text-gray-300 hover:text-violet-400 transition-colors duration-200"
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 border-t border-violet-500/10">
          <div className="flex flex-col space-y-4">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="text-gray-300 hover:text-violet-400 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </Link>
            ))}
            <div className="pt-2">
              <ThemeSwitch />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}