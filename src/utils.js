import ccpa from './crypto-pro-cadesplugin'

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })

function b64toBlob(b64Data, contentType = '', sliceSize = 512) {
  const byteCharacters = atob(b64Data)

  const byteArrays = []

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize)

    const byteNumbers = new Array(slice.length)
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i)
    }

    const byteArray = new Uint8Array(byteNumbers)

    byteArrays.push(byteArray)
  }

  return new Blob(byteArrays, { type: contentType })
}

export const signFile = async ({ file = null, thumbprint }) => {
  if (file) {
    const header = ';base64,'
    const sFileData = await toBase64(file)
    const sBase64Data = sFileData.substr(sFileData.indexOf(header) + header.length)
    const type = sFileData.substr(0, sFileData.indexOf(header))

    const certsApi = await ccpa()

    const sign = await certsApi.signBase64(thumbprint, sBase64Data)

    const contentType = type.split(':')[1]
    const blob = b64toBlob(sign, contentType)

    return { blob, fileName: `${file.name}.sig` }
  }
  return { blob: null, fileName: null }
}

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
