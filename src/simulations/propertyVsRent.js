//this is a data page that i will just (try, key emphasis on try here) to plug into the simstudio
//so that i dont have to make 3 separate pages? if this fails.. i will make 3 separate pages

const propertyVsRent = {
  id: "property-vs-rent",
  title: "Property vs Renting",
  
  inputs: [
    {
      key: "salary", label: "Monthly Salary", min: 0, max: 100000, default: 25000,
      tooltip: "Your monthly income before deductions. Helps assess affordability."
     },
    {
      key: "rent", label: "Monthly Rent", min: 0, max: 20000, default: 8000,
      tooltip: "Your current or expected monthly rental payment."
    },
    {
      key: "price", label: "Property Price", min: 0, max: 2000000, default: 950000,
      tooltip: "Total purchase price of the property you want to buy."
    },
    {
      key: "deposit", label: "Property Deposit", min: 0, max: 300000, default: 100000,
      tooltip: "Upfront amount paid to reduce your bond. Higher deposits lower repayments."
    },
    {
      key: "interest", label: "Interest Rate (%)", min: 0, max: 20, default: 7,
      tooltip: "Bond interest rate based on SA prime lending rate. Affects monthly repayments."
    },
  ],

  outputLabels: {
    rent: "Rent",
    bond: "Bond",
  },

  calculate: (values) => {
    const { rent, price, deposit, interest } = values;

    const loanAmount = price - deposit;
    const interestRateDecimal = interest / 100;
    const monthlyBond = (loanAmount * interestRateDecimal) / 12;

    const totalRent5 = rent * 12 * 5;
    const totalBond5 = monthlyBond * 12 * 5;

    const rentPerYear = totalRent5 / 5;
    const bondPerYear = totalBond5 / 5;

    const verdict =
      totalBond5 < totalRent5
        ? "Buying becomes cheaper than renting over this 5‑year period."
        : "Renting remains cheaper than buying over this 5‑year period.";

    return {
      verdict,
      yearly: {
        rent: rentPerYear,
        bond: bondPerYear,
      },
    };
  },

  education: {
    title: "Understanding This Scenario",
    paragraphs: [
      "In South Africa, buying property is heavily influenced by the prime lending rate, which affects your monthly bond repayment. When interest rates rise, buying becomes more expensive; when they fall, buying becomes more attractive.",
      "Renting offers flexibility and lower upfront costs, but you don’t build equity. Buying requires a deposit, transfer costs, and bond registration fees, but it can become cheaper over time as rent increases annually.",
    ],
    bulletTitle: "From a South African Lens...",
    bullets: [
      "Prime lending rate in SA typically ranges between 7%–11% depending on the year.",
      "Transfer duty applies to properties above a certain threshold.",
      "Bond registration and attorney fees can add 5%–8% to the upfront cost.",
      "Rent in major cities like Johannesburg and Cape Town often increases annually.",
    ],
  },

  explainers: [
    {
      title: "What is a Bond?",
      text: "A home loan repaid monthly over 20–30 years. Your repayment depends on the interest rate set by SA banks.",
    },
    {
      title: "Why Interest Rate Matters",
      text: "Higher interest rates increase your monthly repayment. When rates drop, buying becomes more affordable.",
    },
    {
      title: "Renting vs Buying",
      text: "Renting offers flexibility and lower upfront costs, while buying builds equity but requires a deposit and legal fees.",
    },
  ],
};
export default propertyVsRent;
