import React from "react";

interface NutritionCard {
  title: string;
  description: string;
}

const nutritionPlans: NutritionCard[] = [
  {
    title: "Caloric Deficit",
    description:
      "Consume fewer calories than you burn to reduce body fat while maintaining lean mass.",
  },
  {
    title: "Caloric Surplus",
    description:
      "Increase caloric intake strategically to support muscle growth and performance.",
  },
  {
    title: "Body Recomposition",
    description:
      "Simultaneously build muscle and reduce fat through optimized training and nutrition.",
  },
  {
    title: "Eat Healthy",
    description:
      "Focus on nutrient-dense whole foods to improve overall health and metabolic function.",
  },
];

const Nutrition: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-8 py-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold mb-4">
            Choose Your Nutrition Strategy
          </h1>
          <p className="text-gray-400">
            Select a dietary approach aligned with your fitness goals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {nutritionPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700
                         hover:border-orange-500 transition-all duration-300
                         hover:shadow-lg hover:shadow-orange-500/20"
            >
              <h2 className="text-xl font-semibold mb-3">
                {plan.title}
              </h2>

              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {plan.description}
              </p>

              <button
                className="w-full py-2 bg-orange-500 rounded-md
                           hover:bg-orange-600 transition-colors font-medium"
              >
                Explore Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nutrition;