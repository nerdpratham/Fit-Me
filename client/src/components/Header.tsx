import React from "react";

interface HeaderProps {
  onSignupClick?: () => void;
  onLogoClick?: () => void;
  buttonLabel?: string;
}

const Header: React.FC<HeaderProps> = ({
  onSignupClick,
  onLogoClick,
  buttonLabel = "Sign In",
}) => {
  const navItems = ["Overview", "Features", "Technology", "Community"];

  return (
    <header className="relative z-20 px-4 pt-5 sm:px-6">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-6 rounded-full border border-[#7a7a78] bg-[linear-gradient(180deg,#8c8c88_0%,#6f6f6b_100%)] px-4 py-2 text-black shadow-[0_8px_18px_rgba(255,255,255,0.16)_inset,0_-10px_18px_rgba(70,70,66,0.18)_inset,0_16px_34px_rgba(68,70,63,0.18)] backdrop-blur-2xl sm:px-6">
        <button
          type="button"
          onClick={onLogoClick}
          className="flex items-center gap-3 text-black focus:outline-none"
        >
          <img
            src="/logo.png"
            alt="FitMe logo"
            className="h-8 w-8 rounded-full border border-white/35 object-cover shadow-[0_0_0_1px_rgba(255,255,255,0.15)_inset]"
          />
          <span className="text-lg font-bold tracking-wide">
            FitMe
          </span>
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs font-bold text-black transition-colors duration-200 hover:text-[#1f1f1f] sm:text-sm"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center">
          {onSignupClick && (
            <button
              type="button"
              onClick={onSignupClick}
              className="flex items-center gap-1.5 rounded-full border border-black/28 bg-[linear-gradient(180deg,#1c1c1c_0%,#060606_100%)] px-5 py-2 text-sm font-medium text-white shadow-[0_2px_0_rgba(255,255,255,0.08)_inset,0_10px_18px_rgba(0,0,0,0.24)] transition-opacity duration-200 hover:opacity-90"
            >
              {buttonLabel}
              <svg className="h-3.5 w-3.5 opacity-70" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="2" x2="8" y2="14" />
                <polyline points="3 9 8 14 13 9" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
