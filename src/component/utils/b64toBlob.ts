/**
 * Конвертирует base64 в Blob object.
 * @param b64Data - Blob data.
 * @param contentType - Content type.
 * @param sliceSize - Size of the slice.
 * @returns Конвертируемые данные в Blob.
 * @example ---
 * const sign = await certsApi.signBase64(thumbprint, sBase64Data);
 * const contentType = type.split(':')[1]
 * const blob = b64toBlob(sign, contentType)
 */
export function b64toBlob(
  b64Data: string,
  contentType = '',
  sliceSize = 512,
): Blob {
  const byteCharacters = Buffer.from(b64Data, 'base64').toString('binary');

  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }

  return new Blob(byteArrays, { type: contentType });
}
