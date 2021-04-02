import React, { useState } from 'react'

import SelectCert from './SelectCert'
import { signFile } from './utils'

const FileSignatureCriptoPro = ({
  callback = (_) => _,
  file = null,
  clear = false,
  SelectComponent,
  ButtonComponent = (props) => (
    <button className="button btn_green btn_sign" {...props}>
      Подписать
    </button>
  ),
  callbackError = (_) => _,
}) => {
  const [thumbprint, setThumbprint] = useState(null)
  const [sign, setSign] = useState(null)
  const [fileNameSign, setFileNameSign] = useState(null)
  const cleanOut = () => {
    setSign(null)
    setFileNameSign(null)
  }

  if (clear && (sign || fileNameSign)) {
    cleanOut()
  }

  const subscribe = () =>
    signFile({ thumbprint, file })
      .then(({ fileName, blob }) => {
        console.log(fileName)
        callback({ fileNameSign: fileName, sign: blob })
        setSign(blob)
        setFileNameSign(fileName)
      })
      .catch((e) => callbackError(String(e)))

  return (
    !sign &&
    file && (
      <div>
        {<SelectCert {...{ setThumbprint, callbackError, Component: SelectComponent }} />}
        {thumbprint && <ButtonComponent disabled={!thumbprint} onClick={subscribe} />}
      </div>
    )
  )
}

export default FileSignatureCriptoPro
