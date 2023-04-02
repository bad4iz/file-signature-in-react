/* eslint-disable */
import React, { FC, ReactElement, useEffect, useState } from 'react';
import Select from './Select';
import { ISelectCertProps, ThumbprintType, ValueSelectI } from './types';
import { useDoCertsList } from './utils/hooks';

/**
 * Селектор выбора сертификата подписи.
 *
 * @param {ISelectCertProps} props - Props.
 * @param {ISelectCertProps.setThumbprint} props.setThumbprint - Функция прокидывания подписи.
 * @param {ISelectCertProps.Component} props.Component - Select для.
 * @param {ISelectCertProps.callbackError} props.callbackError - Callback error - для перехвата ошибок.
 * @param {ISelectCertProps.value}  props.value - Значения.
 * @returns {FC}.
 */
const SelectCert: FC<ISelectCertProps> = ({
  setThumbprint = () => { },
  Component = Select,
  callbackError = () => { },
  value,
}): ReactElement => {
  const [listCert, setListCert] = useState<ValueSelectI[]>([
    { value: 'подпись', label: 'подпись' },
  ]);

  const [selectItem, setSelectItem] = useState<ThumbprintType | null>(null);

  useDoCertsList()
    .then(setListCert)
    .catch((e) => callbackError(String(e)));

  useEffect(() => {
    if (selectItem) {
      setThumbprint(selectItem);
    } else {
      setThumbprint(listCert[0].value);
    }
  }, [selectItem, listCert, setThumbprint]);

  const onChange = (value: ThumbprintType) => {
    callbackError();
    setSelectItem(value);
  };

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
