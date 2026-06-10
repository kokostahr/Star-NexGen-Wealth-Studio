//this simulation is a personal one because idk how im gonna get to work once i start working....sadly idk how to drive yet

const transportDecision = {
  id: "transport-decision",
  title: "Transport Cost Decision",

  inputs: [
    {
      key: "distance", label: "One‑Way Distance (km)", type: "km", min: 1, max: 100, default: 45,
      tooltip: "Total kilometres from home to work. Used to calculate petrol and Uber costs."
    },
    {
      key: "days", label: "Commute Days per Month", type: "days", min: 1, max: 30, default: 20, 
      tooltip: "How many days per month you travel to work. Affects petrol and Uber totals."
     },
    {
      key: "petrolPrice", label: "Petrol Price per Litre (R)", type: "money", min: 10, max: 40, default: 25,
      tooltip: "Current petrol price per litre in South Africa. Updated monthly by the government."
    },
    {
      key: "fuelConsumption", label: "Car Fuel Consumption (L/100km)", type: "litres", min: 4, max: 12, default: 6.5,
      tooltip: "How many litres of petrol your car uses per 100 km. Lower = more fuel efficient."
     },

    {
      key: "friendFee", label: "Friend’s Monthly Fee (R)", type: "money", min: 0, max: 5000, default: 1500,
      tooltip: "Amount you pay a friend monthly to drive you. May include petrol but not maintenance included."
     },
    {
      key: "uberCost", label: "Uber Cost per Trip (R)", type: "money", min: 20, max: 500, default: 180,
      tooltip: "Average Uber fare for one trip. Multiply by 2 for a round trip."
     },
    {
      key: "uberSurge", label: "Uber Surge Multiplier", type: "number", min: 1, max: 3, default: 1.2,
      tooltip: "Uber increases prices during peak hours, bad weather, or high demand."
     },

    {
      key: "carPrice", label: "2nd‑Hand Car Price (R)", type: "money", min: 20000, max: 300000, default: 120000,
      tooltip: "Estimated price of a reliable 2nd‑hand car in South Africa."
     },
    {
      key: "deposit", label: "Deposit (R)", type: "money", min: 0, max: 100000, default: 20000,
      tooltip: "Upfront payment that reduces your monthly instalment."
     },
    {
      key: "interest", label: "Interest Rate (%)", type: "percent", min: 5, max: 20, default: 13,
      tooltip: "Car finance interest rate. Depends on your credit score and SA prime rate."
     },
    {
      key: "insurance", label: "Monthly Insurance (R)", type: "money", min: 200, max: 2000, default: 650,
      tooltip: "Monthly car insurance premium. Required for financed vehicles."
     },
    {
      key: "maintenance", label: "Monthly Maintenance (R)", type: "money", min: 100, max: 2000, default: 400,
      tooltip: "Estimated monthly cost for servicing, tyres, and general wear and tear."
     },

  ],

  outputLabels: {
    friend: "Friend",
    mom: "Petrol (Mom)",
    uber: "Uber",
    car: "Own Car",
  },

  calculate: (values) => {
    const {
      distance,
      days,
      petrolPrice,
      fuelConsumption,
      friendFee,
      uberCost,
      uberSurge,
      carPrice,
      deposit,
      interest,
      insurance,
      maintenance,
    } = values;

    const roundTrip = distance * 2;
    const monthlyKm = roundTrip * days;

    //petrol cost
    const litresUsed = (monthlyKm / 100) * fuelConsumption;
    const petrolCost = litresUsed * petrolPrice;

    //uber cost
    const uberMonthly = uberCost * uberSurge * days * 2;

    //frriend cost (travelling with friend cheaper?)
    const friendMonthly = friendFee;

    //caar finance calculation (simple SA-style)
    const loanAmount = carPrice - deposit;
    const monthlyRate = interest / 100 / 12;
    const termMonths = 60; // 5 years
    const carInstalment =
      (loanAmount * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -termMonths));

    const carMonthly = carInstalment + insurance + maintenance + petrolCost;

    //5 year totals
    const friend5 = friendMonthly * 12 * 5;
    const mom5 = petrolCost * 12 * 5;
    const uber5 = uberMonthly * 12 * 5;
    const car5 = carMonthly * 12 * 5;

    const yearly = {
      friend: friend5 / 5,
      mom: mom5 / 5,
      uber: uber5 / 5,
      car: car5 / 5,
    };

    //the verdiktlogic
    let verdict = "";

    const cheapest = Math.min(friend5, mom5, uber5, car5);

    if (cheapest === mom5) {
      verdict = "Using petrol for your mother to drive you is the cheapest option over 5 years.";
    } else if (cheapest === friend5) {
      verdict = "Paying a friend is the cheapest option short‑term, but offers no long‑term benefit.";
    } else if (cheapest === uber5) {
      verdict = "Uber is convenient but becomes the most expensive option long‑term.";
    } else {
      verdict = "Buying a 2nd‑hand car becomes cheaper than Uber and friend transport over time.";
    }

    return {
      verdict,
      yearly,
    };
  },

  education: {
    title: "Understanding Your Transport Options",
    paragraphs: [
      "Transport costs in South Africa vary widely depending on petrol prices, distance, and vehicle efficiency.",
      "Uber offers convenience but becomes expensive over long distances or during surge pricing.",
      "Owning a car has upfront and ongoing costs, but becomes cheaper over time if you commute far.",
    ],
    bulletTitle: "Key SA Considerations",
    bullets: [
      "Petrol prices fluctuate monthly based on global oil and the rand.",
      "Car insurance is essential, especially in high‑risk areas.",
      "Maintenance costs rise as a car ages.",
      "Uber surge pricing can increase costs by 20%–200%.",
    ],
  },

  explainers: [
    {
      title: "Fuel Consumption",
      text: "Measured in L/100km — lower numbers mean better fuel efficiency.",
    },
    {
      title: "Car Finance",
      text: "Most SA banks offer 60‑month terms with interest rates based on your credit score.",
    },
    {
      title: "Uber Surge",
      text: "Prices increase during peak hours, bad weather, or high demand.",
    },
    {
      title: "Total Cost of Ownership",
      text: "Owning a car includes instalments, insurance, maintenance, and petrol.",
    },
  ],
};

export default transportDecision;
