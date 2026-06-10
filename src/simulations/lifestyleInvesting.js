//doing the same for the lifestyle investing studio

const lifestyleInvesting = {
  id: "lifestyle-investing",
  title: "Lifestyle & Investing",

  inputs: [
    {
      key: "income", label: "Monthly Income", min: 0, max: 100000, default: 25000,
       tooltip: "Your monthly take‑home pay. Used to calculate your savings and investing rate."
     },
    {
      key: "spend", label: "Lifestyle Spending", min: 0, max: 80000, default: 15000,
      tooltip: "Total monthly spending on non‑essentials such as entertainment, food, and shopping."
    },
    {
      key: "invest", label: "Monthly Investing", min: 0, max: 50000, default: 3000,
      tooltip: "Amount you invest every month. Even small amounts grow significantly over time."
    },
    {
      key: "returnRate", label: "Expected Return (%)", min: 0, max: 20, default: 8,
      tooltip: "Average annual growth rate of your investments. Higher returns increase compounding."
    },
  ],

  outputLabels: {
    lifestyle: "No Investing",
    investing: "With Investing",
  },

  calculate: (values) => {
    const { income, spend, invest, returnRate } = values;

    const monthlyReturn = returnRate / 100 / 12;
    const months = 5 * 12;

    //future value of monthly investing (simple compound approximation)
    let investedValue = 0;
    for (let i = 0; i < months; i++) {
      investedValue = (investedValue + invest) * (1 + monthlyReturn);
    }

    //scenario wan: no investing (all lifestyle)
    const lifestyleSpending5 = spend * 12 * 5;

    //scenario too: lifestyle + investing (the invested value vs pure spending)
    const verdict =
      investedValue > lifestyleSpending5
        ? "Consistent investing meaningfully grows your wealth compared to spending everything."
        : "Your current investing level has limited impact compared to your lifestyle spending.";

    const lifestylePerYear = lifestyleSpending5 / 5;
    const investingPerYear = investedValue / 5;

    return {
      verdict,
      yearly: {
        lifestyle: lifestylePerYear,
        investing: investingPerYear,
      },
    };
  },

  education: {
    title: "Balancing Lifestyle and Investing",
    paragraphs: [
      "Lifestyle spending gives you comfort and enjoyment now, while investing builds options and freedom later.",
      "Even small, consistent monthly investments can grow significantly over time due to compounding returns.",
    ],
    bulletTitle: "Things to Keep in Mind",
    bullets: [
      "Your savings and investing rate is often more important than chasing the highest return.",
      "Lifestyle creep — increasing spending as income rises — can quietly delay your financial goals.",
      "Automating investments can help you stay consistent without relying on willpower.",
    ],
  },

  explainers: [
    {
      title: "What is Compounding?",
      text: "Compounding is when your returns start earning returns. Over time, this snowball effect becomes powerful.",
    },
    {
      title: "Lifestyle Creep",
      text: "As income grows, spending often grows too. Without intention, this can block you from building wealth.",
    },
    {
      title: "Pay Yourself First",
      text: "Investing a portion of your income before spending helps you prioritise your future self.",
    },
  ],
};

export default lifestyleInvesting;