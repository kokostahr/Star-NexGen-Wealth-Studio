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
       { text: "Categorise monthly expenses", tip: "Sort your spending into categories to see patterns clearly." },
       { text: "Identify lifestyle leaks", tip: "Find small recurring expenses that add up over time." },
      ],
    },
    {
      year: 2,
      milestones: [
        { key: "startInvest", label: "Start Monthly Investing" },
        { key: "emergency", label: "Build Emergency Fund" },
      ],
      actions: [
        { text: "Automate monthly contributions", tip: "Set up automatic transfers to stay consistent with investing." },
        { text: "Open a TFSA or RA", tip: "Tax‑efficient accounts help your investments grow faster." },
      ],
    },
    {
      year: 3,
      milestones: [
        { key: "increaseInvest", label: "Increase Investment % of Income" },
        { key: "reduceLifestyle", label: "Reduce Lifestyle Inflation" },
      ],
      actions: [
        { text: "Review subscriptions", tip: "Cancel unused or forgotten subscriptions to save money." },
        { text: "Optimise discretionary spending", tip: "Cut back on non‑essentials without hurting your lifestyle." },
      ],
    },
    {
      year: 4,
      milestones: [
        { key: "diversify", label: "Diversify Investments" },
        { key: "rebalance", label: "Rebalance Portfolio" },
      ],
      actions: [
        { text: "Explore offshore exposure", tip: "Diversify your investments across global markets." },
        { text: "Review risk tolerance", tip: "Ensure your portfolio matches your comfort with risk." },
      ],
    },
    {
      year: 5,
      milestones: [
        { key: "longTermPlan", label: "Set Long‑Term Investment Plan" },
        { key: "reviewWealth", label: "Review Wealth Growth" },
      ],
      actions: [
        { text: "Assess 5‑year progress", tip: "Review your financial growth and adjust your goals." },
        { text: "Adjust goals for next phase", tip: "Refine your long‑term plan based on your progress." },
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
