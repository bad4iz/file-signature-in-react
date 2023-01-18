import ccpa from 'crypto-pro-cadesplugin'

const checkQuotes = (str) => {
  let result = 0

  for (let i = 0; i < str.length; i++) if (str[i] === '"') result++
  return !(result % 2)
}

export const extract = (from, what) => {
  let certName = ''

  const begin = from.indexOf(what) + what.length

  if (begin >= 0) {
    let end = from.indexOf(', ', begin)
    while (end > 0) {
      if (checkQuotes(from.substr(begin, end - begin))) break
      end = from.indexOf(', ', end + 1)
    }
    certName = end < 0 ? from.substr(begin) : from.substr(begin, end - begin)
  }

  return certName
}
