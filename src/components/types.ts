import { FC } from 'react'

export interface SignInterface {
  fileNameSign: string | null
  sign: Blob | null
}
export interface FileInterface {
  blob: Blob | null
  fileName: string | null
}

export type FileType = File | null
export type FileListType = FileList | null

/**
 * Подпись.
 * todo: сузить определение типа.
 */
export type ThumbprintType = string

export interface SignFileInterface {
  file: File | null
  thumbprint: ThumbprintType | null
}

export interface FileSignatureCryptoProInterface {
  callback: (_: any) => _
  onChange: (_: any) => _
  onSelect: (_: any) => _
  file?: File | null
  files: FileList | null
  clear?: boolean
  SelectComponent?: FC
  ButtonComponent?: FC
  callbackError: (_: any) => _
}
