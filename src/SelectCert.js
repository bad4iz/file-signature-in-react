import React, { useEffect, useMemo, useState } from "react";
import ccpa from "crypto-pro-cadesplugin";

import Select from "./Select";
import { extract } from "./utils";

const useDoCertsList = callbackError =>
  useMemo(async () => {
    const certsApi = await ccpa();
    const certsList = await certsApi.getCertsList();

    const list = certsList.map(({ subjectInfo, thumbprint }) => ({
      value: thumbprint,
      label: extract(subjectInfo, "CN=")
    }));
    return list;
  }, []);

const SelectCert = ({ setThumbprint = _ => _, Component = Select, callbackError }) => {
  const [listSert, setListSert] = useState([{ value: "подпись", label: "подпись" }]);

  const [selectItem, setSelectItem] = useState(null);

  useDoCertsList(callbackError)
    .then(setListSert)
    .catch(e => callbackError(String(e)));

  useEffect(() => {
    if (selectItem) {
      setThumbprint(selectItem);
    } else {
      setThumbprint(listSert[0].value);
    }
  }, [selectItem, listSert, setThumbprint]);

  const onChange = ({ target: { value } }) => setSelectItem(value);

  return (
    <Component
      defaultValue={listSert[0].value}
      label="Выберите сертификат"
      name="thumbprint"
      options={listSert}
      onChange={onChange}
    />
  );
};

export default SelectCert;
