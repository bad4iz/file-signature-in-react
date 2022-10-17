import ccpa from "crypto-pro-cadesplugin";
import {toBase64} from "src/utils/toBase64";


function b64toBlob(b64Data, contentType = "", sliceSize = 512) {
  const byteCharacters = atob(b64Data);

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

export const signFile = async ({ file = null, thumbprint }) => {
  if (file) {
    const header = ";base64,";
    const sFileData = await toBase64(file);
    const sBase64Data = sFileData.substr(sFileData.indexOf(header) + header.length);
    const type = sFileData.substr(0, sFileData.indexOf(header));

    const certsApi = await ccpa();

    const sign = await certsApi.signBase64(thumbprint, sBase64Data);

    const contentType = type.split(":")[1];
    const blob = b64toBlob(sign, contentType);

    return { blob, fileName: `${file.name}.sig` };
  }
  return { blob: null, fileName: null };
};

