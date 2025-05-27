"use client";

import React, { useState } from "react";
import LinkAsBtn from "../button/LinkAsBtn.comp";

const Navbar: React.FC<{ navs: Object; className?: string }> = ({
  navs,
  className,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`relative flex w-full px-4 sm:px-6 md:px-12 py-8 items-center justify-between ${
        className || ""
      }`}
    >
      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center space-x-6">
        {Object.keys(navs).map((navUrl) => (
          <li key={navUrl}>
            <LinkAsBtn href={navUrl}>
              {
                //@ts-ignore
                navs[navUrl]
              }
            </LinkAsBtn>
          </li>
        ))}
      </ul>
      <div className="hidden md:block">
        <LinkAsBtn className="active" href="/business">
          Connect Now
        </LinkAsBtn>
      </div>

      {/* Hamburger Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Open navigation menu"
          className="text-[var(--text-primary)] focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12" // X icon
                  : "M4 6h16M4 12h16m-7 6h7" // Hamburger icon
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu (Collapsible) */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[var(--background-secondary)] md:hidden z-50 shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {Object.keys(navs).map((navUrl) => (
              <li key={navUrl}>
                <LinkAsBtn
                  href={navUrl}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {
                    //@ts-ignore
                    navs[navUrl]
                  }
                </LinkAsBtn>
              </li>
            ))}
            <li>
              <LinkAsBtn
                className="active"
                href="/business"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Connect Now
              </LinkAsBtn>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
