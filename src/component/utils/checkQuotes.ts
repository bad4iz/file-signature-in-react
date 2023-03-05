/**
 * Написать нормальнную jsdoc.
 *
 * @param str - String to.
 * @returns Ret.
 */
export const checkQuotes = (str: string) => {
  let result = 0;

  for (let i = 0; i < str.length; i++) if (str[i] === '"') result++;
  return !(result % 2);
};
