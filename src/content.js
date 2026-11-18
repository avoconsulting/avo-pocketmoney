// OPPGAVE 1: Endre en tekst, lagre, og se endringen i nettleseren.
export const content = {
  greeting: "Hei, Alex!",
  headline: "Små penger. Store muligheter.",
  introduction: "En liten oversikt over pengene dine – og alt du drømmer om.",
  simulatorTitle: "Hva har du igjen etter kjøpet?",
  simulatorDescription:
    "Prøv en pris og se hvor mye penger du har igjen. Pengene trekkes først når du trykker «Registrer kjøp».",
  goalName: "En ny sykkel",
  goalEmoji: "🚲",
};

// Beløp lagres i øre: 450 kroner = 45 000 øre.
export const initialBalance = 45_000;
export const goalTarget = 120_000;

export const initialTransactions = [
  {
    id: "demo-1",
    description: "Ukepenger",
    amount: 5_000,
    date: "Denne uken",
    emoji: "🌟",
  },
  {
    id: "demo-2",
    description: "Ryddet rommet",
    amount: 2_000,
    date: "Denne uken",
    emoji: "🧹",
  },
  {
    id: "demo-3",
    description: "Is med venner",
    amount: -3_500,
    date: "Forrige uke",
    emoji: "🍦",
  },
];
// Saldoen inkluderer eldre bevegelser som ikke vises i denne korte historikken.
