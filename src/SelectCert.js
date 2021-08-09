import React, { useEffect, useMemo, useState } from "react";
import ccpa from "crypto-pro-cadesplugin";

import Select from "./Select";
import {useDoCertsList} from "./utils/hooks";


const SelectCert = ({ setThumbprint = _ => _, Component = Select, callbackError, value }) => {
  const [listCert, setListCert] = useState([{ value: "подпись", label: "подпись" }]);

  const [selectItem, setSelectItem] = useState(null);

  useDoCertsList(callbackError)
    .then(setListCert)
    .catch(e => callbackError(String(e)));

  useEffect(() => {
    if (selectItem) {
      setThumbprint(selectItem);
    } else {
      setThumbprint(listCert[0].value);
    }
  }, [selectItem, listCert, setThumbprint]);

  const onChange = value => setSelectItem(value);

  return (
    <Component
      defaultValue={listCert[0].value}
      label="Выберите сертификат"
      name="thumbprint"
      value={value}
      options={listCert}
      onChange={onChange}
    />
  );
};

export default SelectCert;
