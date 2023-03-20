export const formatCurrency = (amount: number) => {
  const formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "usd",
    notation: "compact",
  });
  return formatter.format(amount);
};
