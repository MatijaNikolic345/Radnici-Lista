export function changeCurrency(amount, fromCur, toCur) {
  let data;
  if (fromCur === "RSD" && toCur === "USD") data = amount / 110;
  if (fromCur === "RSD" && toCur === "EUR") data = amount / 117;
  if (fromCur === "EUR" && toCur === "USD") data = amount * 1.06;
  if (fromCur === "EUR" && toCur === "RSD") data = amount * 117;
  if (fromCur === "USD" && toCur === "EUR") data = amount * 0.94;
  if (fromCur === "USD" && toCur === "RSD") data = amount * 110;
  return data;
}
export const formatCurrency = (value, currency) =>
  new Intl.NumberFormat("en", {
    style: "currency",
    currency: { currency },
  }).format(value);
