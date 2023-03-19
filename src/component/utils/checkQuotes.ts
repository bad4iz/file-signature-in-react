/**
 * Проверяет, является ли количество кавычек в строке четным числом.
 * 
 * @param str - проверяемая строка.
 * @returns true, если количество кавычек в строке четно, иначе - false.
 */
export const checkQuotes = (str: string) => {
  const result = str.split('').filter(char => char === '"').length;
  return !(result % 2);
};

