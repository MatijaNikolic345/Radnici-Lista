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

var missingNumber = function (nums) {
  let result;
  let newArr = nums.sort((a, b) => a - b);

  newArr.forEach((int, i) => {
    console.log(newArr[i + 1] - int);
    if (newArr[i + 1]) {
      if (newArr[i + 1] - int > 1) {
        result = int + 1;
      }
    }
    if (!newArr[i + 1] && !result) {
      result = int + 1;
    }
  });
  return result;
};
console.log(missingNumber([3, 0, 1]));
