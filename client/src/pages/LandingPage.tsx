import React from "react";
import Header from "../components/Header";

interface LandingPageProps {
  onSignupClick?: () => void;
  onGetStartedClick?: () => void;
  onGoToNutrition?: () => void;
  onGoToWorkouts?: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({
  onSignupClick,
  onGoToNutrition,
  onGoToWorkouts,
}) => {
  return (
    <div className="min-h-screen overflow-hidden bg-[#d6d7d2] text-[#181818]">
      <div className="relative min-h-screen">
        {/* Base gradient: grey top → lime green bottom */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#cacacb_0%,#d0d1cc_38%,#ccd882_68%,#c8f03c_100%)]" />

        {/* Soft white radial spotlight at the very top */}
        <div className="absolute inset-x-0 top-0 h-[55%] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.78)_0%,rgba(236,237,232,0.3)_50%,transparent_80%)]" />

        {/* Subtle dark shadow blob behind the hero card area */}
        <div className="absolute left-1/2 top-[40%] h-44 w-[72%] -translate-x-1/2 rounded-full bg-[rgba(40,40,28,0.16)] blur-[80px]" />

        {/* Lime glow behind card */}
        <div className="absolute left-1/2 top-[48%] h-56 w-[65%] -translate-x-1/2 rounded-full bg-[rgba(200,242,60,0.22)] blur-[100px]" />

        {/* Strong lime radial at bottom */}
        <div className="absolute inset-x-0 bottom-[-6%] h-[32%] bg-[radial-gradient(ellipse_70%_100%_at_50%_100%,rgba(200,245,60,0.9),rgba(195,238,55,0.6)_40%,transparent_70%)] blur-2xl" />

        <Header onSignupClick={onSignupClick} />

        <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center px-4 pb-16 pt-10 text-center sm:px-6 lg:px-8">

          {/* Hero headline */}
          <div className="relative mt-20 flex w-full flex-col items-center sm:mt-28">
            {/* Subtle dark glow behind title */}
            <div className="pointer-events-none absolute left-1/2 top-[6rem] z-0 h-36 w-[22rem] -translate-x-1/2 rounded-full bg-[rgba(55,50,35,0.14)] blur-[72px] sm:h-44 sm:w-[30rem]" />

            <div className="relative z-10 mx-auto max-w-4xl">
              <h1 className="text-5xl leading-[0.94] tracking-[-0.05em] text-black drop-shadow-[0_2px_12px_rgba(50,48,38,0.14)] sm:text-7xl lg:text-[6.5rem]">
                <span className="font-serif font-normal">Move With </span>
                <span className="font-serif italic">Meaning</span>
              </h1>
              <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-black sm:text-base">
                FitMe is your AI-driven fitness companion that listens, learns,
                and adapts — helping your body find its natural rhythm every
                day.
              </p>
            </div>
          </div>

          {/* Chat / prompt card */}
          <div className="mt-8 w-full max-w-xl rounded-[22px] border border-[rgba(220,226,182,0.38)] bg-[rgba(86,96,54,0.20)] p-[10px] text-left shadow-[0_20px_44px_rgba(58,62,30,0.28)] backdrop-blur-xl">
            <div className="rounded-[16px] border border-[rgba(235,242,206,0.14)] bg-[rgba(78,88,50,0.26)] px-4 py-4">
              {/* Input row */}
              <div className="flex items-start justify-between gap-4">
                <p className="max-w-xs text-sm leading-6 text-[rgba(245,244,232,0.56)]">
                  Good morning, how are you feeling, and how do you want to
                  move today?
                </p>
                <div className="flex shrink-0 items-center gap-2 pt-0.5">
                  {/* Mic button */}
                  <button
                    type="button"
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-[#cef05a] text-[#38420d] shadow-[0_0_0_1px_rgba(255,255,255,0.20)_inset]"
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1="12" y1="19" x2="12" y2="23" />
                    </svg>
                  </button>
                  {/* Send button */}
                  <button
                    type="button"
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-[#cef05a] text-[#38420d] shadow-[0_0_0_1px_rgba(255,255,255,0.20)_inset]"
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="19" x2="12" y2="5" />
                      <polyline points="5 12 12 5 19 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Quick-action chips */}
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  { label: "+ Energize", onClick: undefined },
                  { label: "+ Recover", onClick: onGoToWorkouts },
                  { label: "◉ Focus", onClick: undefined },
                  { label: "♡ Calm", onClick: onGoToNutrition },
                  { label: "↺ Reset", onClick: undefined },
                ].map(({ label, onClick }) => (
                  <button
                    key={label}
                    type="button"
                    onClick={onClick}
                    className="rounded-full border border-[rgba(235,242,208,0.20)] bg-[rgba(240,246,218,0.08)] px-3 py-1 text-xs text-[rgba(248,248,236,0.80)] transition-colors hover:bg-[rgba(240,246,218,0.14)]"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Partner logos */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 px-6">
            <span className="flex items-center gap-1.5 text-sm font-medium tracking-wide text-[rgba(62,60,52,0.55)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[rgba(62,60,52,0.40)]" />
              headspace
            </span>
            {/* Nike swoosh approximation */}
            <span className="text-xl font-black italic tracking-tighter text-[rgba(62,60,52,0.48)]" style={{ fontFamily: "Georgia, serif" }}>
              ✓
            </span>
            <span className="text-sm font-black uppercase tracking-[0.14em] text-[rgba(62,60,52,0.52)]">
              STRAVA
            </span>
            <span className="text-sm font-semibold italic tracking-widest text-[rgba(62,60,52,0.50)]">
              asics
            </span>
            <span className="text-sm font-black uppercase tracking-[0.08em] text-[rgba(62,60,52,0.48)]">
              adidas
            </span>
            <span className="text-sm font-light uppercase tracking-[0.24em] text-[rgba(62,60,52,0.48)]">
              WHOOP
            </span>
          </div>

          {/* AI Companion section */}
          <div className="mt-16 max-w-3xl">
            <span className="inline-flex rounded-full border border-[rgba(118,138,28,0.22)] bg-[rgba(255,255,255,0.44)] px-4 py-1.5 text-xs font-medium tracking-wide text-[#5a6820] shadow-sm backdrop-blur-sm">
              AI Wellness Companion
            </span>
            <p className="mx-auto mt-6 max-w-2xl font-serif text-3xl leading-tight tracking-[-0.03em] text-[#22201a] sm:text-4xl">
              <em>FitMe</em> combines the precision of a tracker with the
              intuition of a coach — helping you move better, eat smarter, and
              rest deeper.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LandingPage;
