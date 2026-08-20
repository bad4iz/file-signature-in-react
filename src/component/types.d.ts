export interface SignInterface {
  fileNameSign: string | null;
  sign: Blob | null;
}

/**
 * @param blob - Подписанные данные в b64toBlob.
 * @param fileName - Название файла с расширением *.sig .
 */
export interface FileInterface {
  blob: Blob | null;
  fileName: string | null;
}

export type FileType = File | null;
export type FileListType = FileList | null;

/**
 * Подпись.
 *
 * Todo: сузить определение типа.
 */
export type ThumbprintType = string;

export interface SignFileInterface {
  file: File | null;
  thumbprint: ThumbprintType | null;
}

/**
 * Interface кнопки подписи.
 */
export interface IButtonComponentProps {
  disabled: boolean;
  onClick: () => void;
}

/**
 * Interface компонента селекта для выбора подписи.
 */
export interface ISelectComponentProps {
  disabled: boolean;
  setThumbprint: () => void;
}

export interface ISelectCertProps {
  // todo разобраться с типом
  Component: any;
  // todo разобраться с типом
  setThumbprint?: (e: any) => void;

  /**
   * Callback error - для перехвата ошибок.
   *
   * @param {string | void} error
   */
  callbackError?: (error: string | void | undefined) => void;
  value: ThumbprintType | null;
}
export interface ValueSelectI {
  value: string;
  label: string;
}
