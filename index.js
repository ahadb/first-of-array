/**
 * Returns the first element of array
 * @param {arr} array
 * @return {value}
 */

module.exports = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('First Argument must be array')
  }
  if (arr === []) {
    return undefined
  }
  // don't mutate arr
  return arr[0]
}
