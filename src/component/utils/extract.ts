import { checkQuotes } from './utils';

export const extract = (from: string, what: string) => {
  let certName = '';

  const begin = from.indexOf(what) + what.length;

  if (begin >= 0) {
    let end = from.indexOf(', ', begin);
    while (end > 0) {
      if (checkQuotes(from.slice(begin, end - begin))) break;
      end = from.indexOf(', ', end + 1);
    }
    certName = end < 0 ? from.slice(begin) : from.slice(begin, end - begin);
  }

  return certName;
};
