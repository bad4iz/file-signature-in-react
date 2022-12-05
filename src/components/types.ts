export interface SignInterface {
    fileNameSign: string;
    sign: Blob;
}
export interface FileInterface {
    blob:Blob|null,
    fileName: string|null
}

/**
 * Подпись.
 * todo: сузить определение типа.
 */
export type ThumbprintType = string

export interface SignFileInterface {
    file: File,
    thumbprint: ThumbprintType,
}
