import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-8">
        <div className="text-center max-w-xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Track your fitness. Build consistency.
          </h1>

          <p className="text-gray-600 mb-6">
            FitMe helps you manage workouts, calories, and progress in one
            simple and powerful platform.
          </p>

          <button className="px-6 py-3 text-white bg-blue-600 rounded-md font-medium
                             hover:bg-blue-700 transition-colors">
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
