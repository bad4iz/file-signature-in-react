/**
 * Проверка содержания строки на ковычки.
 *
 * @param str
 * @returns {boolean}
 */
export const checkQuotes = (str: string): boolean => {
  let result = 0

  // todo: переделать на регулярку
  for (let i = 0; i < str.length; i++) if (str[i] === '"') result++
  return !(result % 2)
}
