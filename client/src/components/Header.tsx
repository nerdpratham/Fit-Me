import React from "react";

interface HeaderProps {
  onSignupClick?: () => void;
  buttonLabel?: string;
}

const Header: React.FC<HeaderProps> = ({
  onSignupClick,
  buttonLabel = "Sign Up",
}) => {
  return (
    <header className="flex items-center justify-between px-8 py-2 border-b border-gray-700 bg-gray-900">
      {/* Left section */}
      <div className="flex items-center">
        <span className="text-xl font-semibold text-white">FitMe</span>
      </div>

      {/* Right section */}
      <div className="flex items-center">
        {onSignupClick && (
        <button
          onClick={onSignupClick}
          className="px-4 py-2 text-sm font-medium text-white bg-[#00A3CC] rounded-md
                     hover:bg-[#008BA3] transition-colors duration-200"
        >
          {buttonLabel}
        </button>
        )}
      </div>
    </header>
  );
};

export default Header;
