import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface SignupProps {
  onBack?: () => void;
}

const Signup: React.FC<SignupProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add signup logic
    console.log("Signup submitted:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Header onSignupClick={onBack} buttonLabel="Log In" />

      <main className="flex-1 flex flex-col items-center justify-center px-8 py-12">
        <div className="w-full max-w-md">
          <img
            src="/logo.png"
            alt="FitMe"
            className="h-20 object-contain mx-auto mb-6"
          />
          <h1 className="text-2xl font-bold text-white text-center mb-2">
            Create your account
          </h1>
          <p className="text-gray-400 text-center mb-8">
            Start tracking your fitness journey today.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-600
                         text-white placeholder-gray-500 focus:outline-none focus:ring-2
                         focus:ring-[#00A3CC] focus:border-transparent"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-600
                         text-white placeholder-gray-500 focus:outline-none focus:ring-2
                         focus:ring-[#00A3CC] focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={6}
                className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-600
                         text-white placeholder-gray-500 focus:outline-none focus:ring-2
                         focus:ring-[#00A3CC] focus:border-transparent"
                placeholder="••••••••"
              />
              <p className="mt-1 text-xs text-gray-500">
                At least 6 characters
              </p>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                minLength={6}
                className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-600
                         text-white placeholder-gray-500 focus:outline-none focus:ring-2
                         focus:ring-[#00A3CC] focus:border-transparent"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 text-white bg-[#00A3CC] rounded-md font-medium
                       hover:bg-[#008BA3] transition-colors duration-200"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <button
              type="button"
              onClick={onBack}
              className="text-[#00A3CC] hover:underline"
            >
              Log in
            </button>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Signup;
