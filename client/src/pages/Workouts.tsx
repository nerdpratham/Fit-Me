import React from "react";

interface WorkoutCard {
  title: string;
  description: string;
}

const workouts: WorkoutCard[] = [
  {
    title: "Yoga",
    description:
      "Improve flexibility, mobility, and mental focus through controlled movements and breathwork.",
  },
  {
    title: "Weight Training",
    description:
      "Build muscle mass and strength using progressive overload and compound lifts.",
  },
  {
    title: "Resistance Training",
    description:
      "Enhance muscular endurance using bands, bodyweight, and controlled resistance.",
  },
  {
    title: "Hyrox",
    description:
      "Hybrid fitness combining functional strength and endurance in high-intensity formats.",
  },
  {
    title: "Endurance Training",
    description:
      "Increase cardiovascular capacity with structured aerobic conditioning.",
  },
  {
    title: "Combined Fitness",
    description:
      "Balanced programming integrating strength, mobility, and conditioning.",
  },
];

const Workouts: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-8 py-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold mb-4">
            Choose Your Training Style
          </h1>
          <p className="text-gray-400">
            Select the workout format that aligns with your fitness goals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700
                         hover:border-orange-500 transition-all duration-300
                         hover:shadow-lg hover:shadow-orange-500/20"
            >
              <h2 className="text-xl font-semibold mb-3">
                {workout.title}
              </h2>

              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {workout.description}
              </p>

              <button
                className="w-full py-2 bg-orange-500 rounded-md
                           hover:bg-orange-600 transition-colors font-medium"
              >
                Start Training
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workouts;