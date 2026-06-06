//same thing but lifestyle investing

const lifestyleInvesting = {
  id: "lifestyle-investing",
  title: "Lifestyle & Investing",
  subtitle: "Your 5‑year roadmap",

  years: [
    {
      year: 1,
      milestones: [
        { key: "budget", label: "Build a Realistic Budget" },
        { key: "track", label: "Track Spending Habits" },
      ],
      actions: [
        "Categorise monthly expenses",
        "Identify lifestyle leaks",
      ],
    },
    {
      year: 2,
      milestones: [
        { key: "startInvest", label: "Start Monthly Investing" },
        { key: "emergency", label: "Build Emergency Fund" },
      ],
      actions: [
        "Automate monthly contributions",
        "Open a TFSA or RA",
      ],
    },
    {
      year: 3,
      milestones: [
        { key: "increaseInvest", label: "Increase Investment % of Income" },
        { key: "reduceLifestyle", label: "Reduce Lifestyle Inflation" },
      ],
      actions: [
        "Review subscriptions",
        "Optimise discretionary spending",
      ],
    },
    {
      year: 4,
      milestones: [
        { key: "diversify", label: "Diversify Investments" },
        { key: "rebalance", label: "Rebalance Portfolio" },
      ],
      actions: [
        "Explore offshore exposure",
        "Review risk tolerance",
      ],
    },
    {
      year: 5,
      milestones: [
        { key: "longTermPlan", label: "Set Long‑Term Investment Plan" },
        { key: "reviewWealth", label: "Review Wealth Growth" },
      ],
      actions: [
        "Assess 5‑year progress",
        "Adjust goals for next phase",
      ],
    },
  ],

  focus: {
    thisYear: "Build discipline while still enjoying the things you love.",
    nextSteps: (state) => {
      if (state.year1.budget === "Not started")
        return "Start with a realistic budget to understand your lifestyle baseline.";
      if (state.year2.emergency === "Not started")
        return "Build an emergency fund before increasing investment risk.";
      if (state.year3.increaseInvest !== "Done")
        return "Increasing your investment rate accelerates long‑term wealth.";
      return "You're building a strong balance between lifestyle and investing.";
    },
    why:
      "Balancing lifestyle and investing helps you enjoy the present while building long‑term financial security.",
  },

  learn: {
    title: "Learn: Balancing Lifestyle & Investing",
    paragraphs: [
      "Lifestyle creep is one of the biggest threats to long‑term wealth.",
      "Small, consistent investments grow significantly through compounding.",
      "A balanced approach helps you enjoy life while still building financial freedom.",
    ],
  },

  explainers: [
    { title: "Lifestyle Creep", text: "Spending increases as income increases — often unnoticed." },
    { title: "Compounding", text: "Your returns earn returns, creating exponential growth." },
    { title: "Diversification", text: "Spreading investments reduces risk and improves stability." },
    { title: "Emergency Fund", text: "Protects you from unexpected expenses without derailing investments." },
  ],
};

export default lifestyleInvesting;
