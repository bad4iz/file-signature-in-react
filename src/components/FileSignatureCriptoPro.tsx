import React, {useEffect, useState} from "react";

import SelectCert from "./SelectCert";
import {SignInterface} from './types';
import { useGetCertificate } from "./utils/hooks";
import { signFile } from "./utils/signFile";


const FileSignatureCryptoPro = ({
  callback,
  onChange = (_: any) => _,
  onSelect = (_: any)=>_,
  file = null,
  files = null,
  clear = false,
  SelectComponent,
  ButtonComponent = (props: any) => (
    <button type="button" className="file-signature-crypto-pro__btn " {...props}>
      Подписать
    </button>
  ),
  callbackError = (_: string) => _
}: any) => {
  const [thumbprint, setThumbprint] = useState(null);
  const [sign, setSign] = useState(null);
  const [fileNameSign, setFileNameSign] = useState(null);
  const selectCert = useGetCertificate(thumbprint)
  const cleanOut = () => {
    setSign(null);
    setFileNameSign(null);
  };

  if (clear && (sign || fileNameSign)) {
    cleanOut();
  }
  useEffect(()=>{
    if (selectCert) {
      onSelect(selectCert)
    }
  }, [selectCert])

  const signing = () => {
    if (file) {
      signFile({ thumbprint, file })
        .then(({ fileName, blob }: any) => {
          callback({ fileNameSign: fileName, sign: blob });
          setSign(blob);
          setFileNameSign(fileName);
        })
        .catch((e: any) => callbackError(String(e)));
    }
    if (files && files.length) {
      const signs: SignInterface[] = [];

      Promise.all(
        Array.from(files).map(item => {
          return signFile({ thumbprint, file: item }).then(({ fileName, blob }: any) => {
            signs.push({ fileNameSign: fileName, sign: blob });
          });
        })
      ).then(() => {
        onChange(signs)
        if(typeof callback === 'function'){
          // eslint-disable-next-line no-console
          console.info('callback is deprecated. use onChange')
          callback(signs)
        }
      }).catch(e => callbackError(e));
    }
  };

  return (
    !sign &&
    (file || (files && files.length)) && (
      <div className="file-signature-crypto-pro">
        {<SelectCert {...{ setThumbprint, callbackError, Component: SelectComponent, value:thumbprint}} />}
        {thumbprint && <ButtonComponent disabled={!thumbprint} onClick={signing} />}
      </div>
    )
  );
};

export default FileSignatureCryptoPro;
