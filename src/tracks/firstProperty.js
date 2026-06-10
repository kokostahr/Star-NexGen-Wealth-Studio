//data that will dynamically load when the usar click ths relevant page oki

const firstProperty = {
  id: "first-property",
  title: "First Property Path",
  subtitle: "Your 5‑year roadmap",

  years: [
    {
      year: 1,
      milestones: [
        { key: "emergency", label: "Emergency Fund" },
        { key: "budget", label: "Stabilise Budget" },
      ],
      actions: [
        { text: "Track monthly expenses", tip: "Know exactly where your money goes each month." },
        { text: "Cut unnecessary spending", tip: "Reduce non‑essential costs to boost savings." },
      ],
    },
    {
      year: 2,
      milestones: [
        { key: "depositStart", label: "Start Deposit Savings" },
        { key: "credit", label: "Improve Credit Score" },
      ],
      actions: [
        { text: "Pay bills on time", tip: "On‑time payments improve your credit score." },
        { text: "Reduce credit utilisation", tip: "Keep credit usage below 30% for a healthier score." },
      ],
    },
    {
      year: 3,
      milestones: [
        { key: "depositHalf", label: "Reach 50% Deposit" },
        { key: "debt", label: "Reduce Debt" },
      ],
      actions: [
        { text: "Increase monthly savings", tip: "Boost your deposit faster by saving more each month." },
        { text: "Pay off high‑interest debt", tip: "Reduce expensive debt to improve affordability." },
      ],

    },
    {
      year: 4,
      milestones: [
        { key: "depositFull", label: "Reach Full Deposit" },
        { key: "preapproval", label: "Bond Pre‑Approval" },
      ],
      actions: [
        { text: "Compare banks", tip: "Different banks offer different interest rates and fees." },
        { text: "Check affordability", tip: "Ensure your income qualifies you for the bond you want." },
      ],
    },
    {
      year: 5,
      milestones: [
        { key: "offer", label: "Make an Offer" },
        { key: "legal", label: "Prepare Legal Fees" },
      ],
      actions: [
        { text: "Find conveyancer", tip: "A conveyancer handles the legal transfer of property." },
        { text: "Review transfer costs", tip: "Understand all fees before making an offer." },
      ],
    },
  ],

  focus: {
    thisYear:
      "Build financial stability and prepare for long‑term affordability.",
    nextSteps: (state) => {
      if (state.year1.emergency === "Not started")
        return "Start with an emergency fund of at least R10 000 before saving for a deposit.";
      if (state.year2.credit === "Not started")
        return "Improving your credit score can reduce your bond interest rate in South Africa.";
      if (state.year3.debt !== "Done")
        return "Reducing debt improves your affordability score when applying for a bond.";
      if (state.year4.depositFull !== "Done")
        return "Aim to reach your full deposit goal to reduce monthly repayments.";
      return "You're on track! Continue preparing for transfer and legal fees in Year 5.";
    },
    why:
      "South African banks assess affordability, credit score, and deposit size when approving a bond. Strong financial habits now reduce your long‑term repayment burden.",
  },

  learn: {
    title: "Learn: How to Approach Your First 5 Years",
    paragraphs: [
      "Buying property in South Africa requires patience, planning, and a strong financial foundation.",
      "Transfer duty applies to properties above R1.1 million, and bond registration fees can add 5–8% to your upfront costs.",
      "A larger deposit reduces your monthly repayment and improves your chances of securing a favourable interest rate from SA banks.",
    ],
  },

  explainers: [
    { title: "Emergency Fund", text: "A safety buffer covering 3–6 months of expenses." },
    { title: "Deposit", text: "A larger deposit reduces your monthly bond repayment." },
    { title: "Transfer Duty", text: "A tax paid when buying property above R1.1 million." },
    { title: "Bond Registration Fees", text: "Legal fees required to register your home loan." },
  ],
};

export default firstProperty;
