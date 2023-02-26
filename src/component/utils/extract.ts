import { checkQuotes } from './utils';

export const extract = (from: string, what: string) => {
  let certName = '';

  const begin = from.indexOf(what) + what.length;

  if (begin >= 0) {
    let end = from.indexOf(', ', begin);
    while (end > 0) {
      if (checkQuotes(from.substr(begin, end - begin))) break;
      end = from.indexOf(', ', end + 1);
    }
    certName = end < 0 ? from.substr(begin) : from.substr(begin, end - begin);
  }

  return certName;
};
