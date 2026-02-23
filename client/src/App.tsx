import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import NutritionPage from "./pages/Nutrition";
import WorkoutsPage from "./pages/Workouts";

type Page = "landing" | "signup" | "nutrition" | "workouts";

const App: React.FC = () => {
  const [page, setPage] = useState<Page>("landing");

  if (page === "signup") {
    return <Signup onBack={() => setPage("landing")} />;
  }

  if (page === "nutrition") {
    return <NutritionPage />;
  }

  if (page === "workouts") {
    return <WorkoutsPage />;
  }

  return (
    <LandingPage
      onSignupClick={() => setPage("signup")}
      onGetStartedClick={() => setPage("signup")}
      onGoToNutrition={() => setPage("nutrition")}
      onGoToWorkouts={() => setPage("workouts")}
    />
  );
};

export default App;
