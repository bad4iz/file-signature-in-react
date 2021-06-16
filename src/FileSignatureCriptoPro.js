import React, { useState } from "react";

import SelectCert from "./SelectCert";
import { signFile } from "./utils";

const FileSignatureCriptoPro = ({
  callback = _ => _,
  file = null,
  files = null,
  clear = false,
  SelectComponent,
  ButtonComponent = props => (
    <button type="button" className="button btn_green btn_sign" {...props}>
      Подписать
    </button>
  ),
  callbackError = _ => _
}) => {
  const [thumbprint, setThumbprint] = useState(null);
  const [sign, setSign] = useState(null);
  const [fileNameSign, setFileNameSign] = useState(null);
  const cleanOut = () => {
    setSign(null);
    setFileNameSign(null);
  };

  if (clear && (sign || fileNameSign)) {
    cleanOut();
  }

  const signing = () => {
    if (file) {
      signFile({ thumbprint, file })
        .then(({ fileName, blob }) => {
          console.log(fileName);
          callback({ fileNameSign: fileName, sign: blob });
          setSign(blob);
          setFileNameSign(fileName);
        })
        .catch(e => callbackError(String(e)));
    }
    if (files && files.length) {
      const signs = [];

      Promise.all(
        Array.from(files).map(item => {
          return signFile({ thumbprint, file: item }).then(({ fileName, blob }) => {
            signs.push({ fileNameSign: fileName, sign: blob });
          });
        })
      ).then(() => callback(signs));
    }
  };

  return (
    !sign &&
    (file || (files && files.length)) && (
      <div>
        {<SelectCert {...{ setThumbprint, callbackError, Component: SelectComponent }} />}
        {thumbprint && <ButtonComponent disabled={!thumbprint} onClick={signing} />}
      </div>
    )
  );
};

export default FileSignatureCriptoPro;
