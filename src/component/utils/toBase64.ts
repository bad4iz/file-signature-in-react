/**
 * Конвертируем файл в Base64.
 * @param file - File.
 * @returns Форматированные данные в Base64.
 */
export const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = (error) => reject(error);
  });
