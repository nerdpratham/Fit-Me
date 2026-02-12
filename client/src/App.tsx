import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";

const App: React.FC = () => {
  const [page, setPage] = useState<"landing" | "signup">("landing");

  if (page === "signup") {
    return <Signup onBack={() => setPage("landing")} />;
  }

  return (
    <LandingPage
      onSignupClick={() => setPage("signup")}
      onGetStartedClick={() => setPage("signup")}
    />
  );
};

export default App;
