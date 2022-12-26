import React, { useEffect, useState } from 'react'

import SelectCert from './SelectCert'
import { useGetCertificate } from './utils/hooks'
import { signFile } from './utils/signFile'

export const FileSignatureCryptoPro = ({
  callback = (_: any) => _,
  onChange = (_: any) => _,
  onSelect = (_: any) => _,
  file = null,
  files = null,
  clear = false,
  SelectComponent = undefined,
  ButtonComponent = (props: any) => (
    <button type="button" className="file-signature-crypto-pro__btn " {...props}>
      Подписать
    </button>
  ),
  callbackError = (_: any) => _,
}) => {
  const [thumbprint, setThumbprint] = useState(null)
  const [sign, setSign] = useState(null)
  const [fileNameSign, setFileNameSign] = useState(null)
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
            callback({ fileNameSign: fileName, sign: blob })
            setSign(blob)
            setFileNameSign(fileName)
          })
          .catch((e) => callbackError(String(e)))
      }
      if (files && files.length) {
        const signs = []

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
    }
  }

  return !sign
    ? (file || (files && files.length)) && (
        <div className="file-signature-crypto-pro">
          {
            <SelectCert
              {...{
                setThumbprint,
                callbackError,
                Component: SelectComponent,
                value: thumbprint,
              }}
            />
          }
          {thumbprint && <ButtonComponent disabled={!thumbprint} onClick={signing} />}
        </div>
      )
    : null
}

export default FileSignatureCryptoPro
