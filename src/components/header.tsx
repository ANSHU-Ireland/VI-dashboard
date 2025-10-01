"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, Github, SquareStack } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-bone/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
              <SquareStack className="w-4 h-4 transform scale-x-[-1]" />
            </div>
            <span className="font-bold text-lg">FVI</span>
          </Link>

          {/* Domain Badge */}
          <div className="hidden md:flex items-center space-x-1 bg-muted px-3 py-1 rounded-xl text-sm">
            <span className="opacity-60">FutureViability.org</span>
            <span className="opacity-40">|</span>
            <span className="opacity-60">FutureViability.com</span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                href="/" 
                className="text-sm hover:text-cobalt-600 transition-colors relative group"
              >
                Home
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-cobalt-600 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </Link>
              <Link 
                href="/about" 
                className="text-sm hover:text-cobalt-600 transition-colors relative group"
              >
                About
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-cobalt-600 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </Link>
              <Link 
                href="/get-involved" 
                className="text-sm hover:text-cobalt-600 transition-colors relative group"
              >
                Get involved
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-cobalt-600 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </Link>
              <Link 
                href="/strategy" 
                className="text-sm hover:text-cobalt-600 transition-colors relative group"
              >
                Strategy
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-cobalt-600 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </Link>
            </div>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-xl hover:bg-muted transition-colors focus-visible"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}

            {/* GitHub */}
            <button 
              className="p-2 rounded-xl hover:bg-muted transition-colors focus-visible"
              aria-label="GitHub repository"
            >
              <Github className="w-4 h-4" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}