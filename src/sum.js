export default function sum(...values) {
  let sum = 0

  for (let value of values) {
    if (
      (typeof value === 'string' && value.length && !isNaN(+value)) ||
      typeof value === 'number'
    )
      sum += +value
    else return NaN
  }

  return sum
}
