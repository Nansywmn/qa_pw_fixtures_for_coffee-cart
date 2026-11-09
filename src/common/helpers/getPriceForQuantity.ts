export function unitPriceFormatStr(unitPrice, unitsNumber) {
  const formattedPrice = `${unitPrice.toFixed(2)} x ${unitsNumber}`;
  return formattedPrice;
} //10.00 x 1

export function priceFormatStr(unitPrice) {
  const formattedPrice = `$${unitPrice.toFixed(2)}`;
  return formattedPrice;
} //$10.00

export function totalPriceFormatStr(unitPrice) {
  const formattedPrice = `Total: $${unitPrice.toFixed(2)}`;
  return formattedPrice;
} //Total: $10.00
