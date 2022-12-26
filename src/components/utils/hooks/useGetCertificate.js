import { useMemo, useState } from 'react';

import ccpa from '../ccpa';

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
