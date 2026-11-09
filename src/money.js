// Ren logikk: kan testes uten nettleser, React eller database.
export function parseAmount(text) {
  const value = text.trim();
  if (!/^\d+(?:[.,]\d{1,2})?$/.test(value)) return null;
  const [kroner, decimals = ""] = value.replace(",", ".").split(".");
  const amount = Number(kroner) * 100 + Number(decimals.padEnd(2, "0"));
  return Number.isSafeInteger(amount) ? amount : null;
}

export function formatMoney(ore) {
  return new Intl.NumberFormat("nb-NO", {
    style: "currency",
    currency: "NOK",
    minimumFractionDigits: ore % 100 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(ore / 100);
}

export function getPurchaseError(amount, balance) {
  if (amount === null) return "Skriv et gyldig beløp med maks to desimaler.";
  if (amount <= 0) return "Beløpet må være større enn 0 kr.";
  if (amount > balance) return "Du har ikke nok penger til dette kjøpet ennå.";
  return "";
}
