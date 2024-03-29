// @ts-ignore
import ccpa from 'crypto-pro-cadesplugin';

import { FileInterface, SignFileInterface } from '../types';
import { b64toBlob } from './b64toBlob';
import { toBase64 } from './toBase64';

/**
 * Подпись файла.
 *
 * @param params - Parameters.
 * @param params.file - Файл на подпись.
 * @param params.thumbprint - Печать.
 * @returns Подписанные данные в b64toBlob и название файла.
 */
export const signFile = async ({
  file,
  thumbprint,
}: SignFileInterface): Promise<FileInterface> => {
  if (file) {
    const header = ';base64,';
    const sFileData = await toBase64(file);

    const sBase64Data = sFileData?.slice(
      sFileData.indexOf(header) + header.length,
    );
    const type = sFileData?.slice(0, sFileData.indexOf(header));

    const certsApi = await ccpa();

    const sign = await certsApi.signBase64(thumbprint, sBase64Data);

    const contentType = type.split(':')[1];
    const blob = b64toBlob(sign, contentType);

    return { blob, fileName: `${file.name}.sig` };
  }
  return { blob: null, fileName: null };
};
