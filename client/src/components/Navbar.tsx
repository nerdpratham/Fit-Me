import React from "react";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  logo?: string;
  navItems?: NavItem[];
  showCTA?: boolean;
  ctaLabel?: string;
  onCTAClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  logo = "FitMe",
  navItems = [],
  showCTA = true,
  ctaLabel = "Sign Up",
  onCTAClick,
}) => {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-semibold tracking-wide cursor-pointer">
          {logo}
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        {showCTA && (
          <button
            onClick={onCTAClick}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md
                       hover:bg-blue-700 transition-colors duration-200"
          >
            {ctaLabel}
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
