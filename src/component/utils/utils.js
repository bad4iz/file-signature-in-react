/**
 * Написать нормальнную jsdoc.
 *
 * @param {string} str - String to.
 * @returns {boolean} - Ret.
 */
export const checkQuotes = (str) => {
  let result = 0;

  for (let i = 0; i < str.length; i++) if (str[i] === '"') result++;
  return !(result % 2);
};
