/**
 * Конвертируем файл в Base64;
 *
 * @param {File} file
 * @return {Promise<string | ArrayBuffer | null>}
 */
export const toBase64 = (file:File):Promise<string> =>
  new Promise((resolve, reject) => {

    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = error => reject(error);
  });
