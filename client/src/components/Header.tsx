import React from "react";

interface HeaderProps {
  onSignupClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSignupClick }) => {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-gray-200 bg-white">
      {/* Left section */}
      <div className="flex items-center">
        <span className="text-xl font-semibold tracking-wide">
          FitMe
        </span>
      </div>

      {/* Right section */}
      <div className="flex items-center">
        <button
          onClick={onSignupClick}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md
                     hover:bg-blue-700 transition-colors duration-200"
        >
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
