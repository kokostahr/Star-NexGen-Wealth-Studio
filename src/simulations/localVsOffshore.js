//doing the same for this one too

const localVsOffshore = {
  id: "local-vs-offshore",
  title: "Local vs Offshore Investing",

  inputs: [
    { key: "lumpSum", label: "Once‑Off Investment", min: 0, max: 1000000, default: 100000 },
    { key: "localReturn", label: "Local Return (%)", min: 0, max: 20, default: 9 },
    { key: "offshoreReturn", label: "Offshore Return (%)", min: 0, max: 25, default: 11 },
    { key: "randDepreciation", label: "Rand Weakening per Year (%)", min: 0, max: 20, default: 5 },
  ],

  outputLabels: {
    local: "Local",
    offshore: "Offshore (ZAR)",
  },

  calculate: (values) => {
    const { lumpSum, localReturn, offshoreReturn, randDepreciation } = values;

    const years = 5;
    const localRate = localReturn / 100;
    const offshoreRate = offshoreReturn / 100;
    const fxRate = randDepreciation / 100;

    //local growth
    const localFinal = lumpSum * Math.pow(1 + localRate, years);

    //offshore growth in foreign currency, then adjusted for rand weakening
    const offshoreForeign = lumpSum * Math.pow(1 + offshoreRate, years);
    const fxMultiplier = Math.pow(1 + fxRate, years);
    const offshoreInRand = offshoreForeign * fxMultiplier;

    const verdict =
      offshoreInRand > localFinal
        ? "Offshore investing outperforms local in this scenario, especially with rand weakening."
        : "Local investing remains competitive or better in this scenario.";

    const localPerYear = localFinal / years;
    const offshorePerYear = offshoreInRand / years;

    return {
      verdict,
      yearly: {
        local: localPerYear,
        offshore: offshorePerYear,
      },
    };
  },

  education: {
    title: "Thinking About Local vs Offshore",
    paragraphs: [
      "Local investing keeps your money in rands and closer to home, often with better familiarity and easier access.",
      "Offshore investing gives you exposure to global markets and currencies, which can protect you if the rand weakens.",
    ],
    bulletTitle: "Key Considerations",
    bullets: [
      "Currency risk can work for or against you depending on how the rand moves.",
      "Offshore platforms and funds may have higher fees or minimums.",
      "Diversifying between local and offshore can balance risk and opportunity.",
    ],
  },

  explainers: [
    {
      title: "Currency Risk",
      text: "When you invest offshore, your returns depend on both market performance and exchange rate movements.",
    },
    {
      title: "Home Bias",
      text: "Investors often prefer local markets they know, but this can limit diversification.",
    },
    {
      title: "Diversification",
      text: "Spreading investments across regions and currencies can reduce risk over the long term.",
    },
  ],
};

export default localVsOffshore;
