//same same thing but for debtfree stable track

const debtFreeStable = {
  id: "debt-free-stable",
  title: "Debt‑Free & Stable",
  subtitle: "Your 5‑year roadmap",

  years: [
    {
      year: 1,
      milestones: [
        { key: "listDebt", label: "List All Debts" },
        { key: "minPayments", label: "Meet Minimum Payments" },
      ],
      actions: [
        { text: "Create a debt overview", tip: "List every debt, balance, interest rate, and minimum payment." },
        { text: "Avoid new debt", tip: "Pause credit use to prevent your debt from growing." },
      ],
    },
    {
      year: 2,
      milestones: [
        { key: "snowball", label: "Start Debt Snowball/Avalanche" },
        { key: "cutCosts", label: "Cut High‑Cost Expenses" },
      ],
      actions: [
        { text: "Pay off smallest or highest‑interest debt first", tip: "Snowball boosts motivation; avalanche saves the most money." },
        { text: "Reduce lifestyle costs", tip: "Cut back on non‑essentials to free up cash for debt repayment." },
      ],
    },
    {
      year: 3,
      milestones: [
        { key: "halfDebt", label: "Reach 50% Debt Reduction" },
        { key: "creditImprove", label: "Improve Credit Score" },
      ],
      actions: [
        { text: "Pay bills on time", tip: "Payment history is the biggest factor in your credit score." },
        { text: "Lower credit utilisation", tip: "Keep credit usage under 30% to improve your score." },
      ],
    },
    {
      year: 4,
      milestones: [
        { key: "debtFree", label: "Become Debt‑Free" },
        { key: "startSaving", label: "Start Building Savings" },
      ],
      actions: [
        { text: "Open a savings account", tip: "Start building a financial buffer once debt is cleared." },
        { text: "Automate contributions", tip: "Automatic transfers help you stay consistent with saving." },
      ],
    },
    {
      year: 5,
      milestones: [
        { key: "stability", label: "Achieve Financial Stability" },
        { key: "futurePlan", label: "Plan Long‑Term Goals" },
      ],
      actions: [
        { text: "Set new financial goals", tip: "Define your next phase: investing, property, or wealth building." },
        { text: "Build long‑term habits", tip: "Maintain budgeting, saving, and responsible spending." },
      ],
    },
  ],

  focus: {
    thisYear: "Break the debt cycle and build long‑term stability.",
    nextSteps: (state) => {
      if (state.year1.listDebt === "Not started")
        return "Start by listing all your debts to understand your full picture.";
      if (state.year2.snowball === "Not started")
        return "Choose a debt repayment strategy — snowball or avalanche.";
      if (state.year3.halfDebt !== "Done")
        return "Reaching 50% debt reduction is a major milestone toward stability.";
      return "You're close to long‑term financial freedom — keep going!";
    },
    why:
      "Becoming debt‑free improves affordability, reduces stress, and opens the door to long‑term wealth building.",
  },

  learn: {
    title: "Learn: Becoming Debt‑Free",
    paragraphs: [
      "Debt repayment frees up income for savings and investing.",
      "Improving your credit score lowers borrowing costs.",
      "Financial stability comes from consistent habits over time.",
    ],
  },

  explainers: [
    { title: "Debt Snowball", text: "Pay off smallest debts first for motivation." },
    { title: "Debt Avalanche", text: "Pay off highest‑interest debts first to save money." },
    { title: "Credit Score", text: "Affects your ability to borrow and your interest rates." },
    { title: "Financial Stability", text: "A foundation for long‑term wealth and security." },
  ],
};

export default debtFreeStable;
