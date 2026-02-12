import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface LandingPageProps {
  onSignupClick?: () => void;
  onGetStartedClick?: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({
  onSignupClick,
  onGetStartedClick,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      {/* Header */}
      <Header onSignupClick={onSignupClick} />

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-8">
        <img
          src="/logo.png"
          alt="FitMe"
          className="h-32 object-contain mb-8"
        />
        <div className="text-center max-w-xl">
          <h1 className="text-4xl font-bold text-white mb-4">
            Track your fitness. Build consistency.
          </h1>

          <p className="text-gray-400 mb-6">
            FitMe helps you manage workouts, calories, and progress in one
            simple and powerful platform.
          </p>

          <button
            onClick={onGetStartedClick}
            className="px-6 py-3 text-white bg-[#00A3CC] rounded-md font-medium
                       hover:bg-[#008BA3] transition-colors"
          >
            Get Started
          </button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
