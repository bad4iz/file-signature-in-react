/* eslint-disable */
import ccpa from 'crypto-pro-cadesplugin';
import { useMemo, useState } from 'react';

/* eslint-disable */
export const useGetCertificate = (thumbprint) => {
  const [certificate, setCertificate] = useState();
  useMemo(async () => {
    const certsApi = await ccpa();
    const certsList = await certsApi.getCertsList();

    const findCert = certsList.find((item) => item.thumbprint === thumbprint);

    setCertificate(findCert);
  }, [thumbprint]);
  return certificate;
};
