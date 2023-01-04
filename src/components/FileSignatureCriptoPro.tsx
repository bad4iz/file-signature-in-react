import React, { FC, FunctionComponent, useEffect, useState } from 'react'

import SelectCert from './SelectCert'
import { FileSignatureCryptoProInterface, IButtonComponentProps, SignInterface } from './types'
import { useGetCertificate } from './utils/hooks'
import { signFile } from './utils/signFile'

const Button = ({ disabled, onClick }: IButtonComponentProps) => (
  <button type="button" className="file-signature-crypto-pro__btn " {...{ disabled, onClick }}>
    Подписать
  </button>
)

/**
 * Главный компонент подписи.
 *
 * @param {object} props - Properties.
 * @param {Function} [props.callback] - Deprecated: A.
 * @param {Function} props.onChange - A.
 * @param {Function} props.onSelect - A.
 * @param {File} props.file - A.
 * @param {FileList} props.files - A.
 * @param {boolean} props.clear - A.
 * @param {FC} props.SelectComponent - A.
 * @param {FC} props.ButtonComponent - A.
 * @param {Function} props.callbackError - A.
 * @returns {FunctionComponent}.
 */
export const FileSignatureCryptoPro = ({
  /**
   * @deprecated since version 2.0.0 use newName instead
   */
  callback = () => {},
  onChange = () => {},
  onSelect = () => {},
  /**
   * @deprecated since version 2.0.0 use newName instead
   */
  file = null,
  files = null,
  clear = false,
  SelectComponent = undefined,
  ButtonComponent = Button,
  callbackError = (_: any) => _,
}: FileSignatureCryptoProInterface) => {
  const [thumbprint, setThumbprint] = useState(null)
  const [sign, setSign] = useState<Blob | null>(null)
  const [fileNameSign, setFileNameSign] = useState<string | null>(null)
  const selectCert = useGetCertificate(thumbprint)
  const cleanOut = () => {
    setSign(null)
    setFileNameSign(null)
  }

  if (clear && (sign || fileNameSign)) {
    cleanOut()
  }
  useEffect(() => {
    if (selectCert) {
      onSelect(selectCert)
    }
  }, [onSelect, selectCert])

  const signing = () => {
    try {
      if (file) {
        signFile({ thumbprint, file })
          .then(({ fileName, blob }) => {
            // eslint-disable-next-line no-console
            console.error('callback is deprecated. use onChange')
            callback({ fileNameSign: fileName, sign: blob })
            if (typeof onChange === 'function') {
              onChange({ fileNameSign: fileName, sign: blob })
            }
            setSign(blob)
            setFileNameSign(fileName)
          })
          .catch((e) => callbackError(String(e)))
      } else if (files?.length) {
        const signs: SignInterface[] = []
        Promise.all(
          Array.from(files).map((item) => {
            return signFile({ thumbprint, file: item }).then(({ fileName, blob }) => {
              signs.push({ fileNameSign: fileName, sign: blob })
            })
          }),
        )
          .then(() => {
            onChange(signs)
            if (typeof callback === 'function') {
              // eslint-disable-next-line no-console
              console.error('callback is deprecated. use onChange')
              callback(signs)
            }
          })
          .catch((e) => callbackError(String(e)))
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
      callbackError(String(e))
    }
  }

  return !sign
    ? (file || files?.length) && (
        <div className="file-signature-crypto-pro">
          <SelectCert
            {...{
              setThumbprint,
              callbackError,
              Component: SelectComponent,
              value: thumbprint,
            }}
          />
          {thumbprint && <ButtonComponent disabled={!thumbprint} onClick={signing} />}
        </div>
      )
    : null
}

export default FileSignatureCryptoPro
