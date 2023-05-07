// @ts-ignore
import ccpa from 'crypto-pro-cadesplugin';
import { useMemo, useState } from 'react';

export const useGetCertificate = (thumbprint: string) => {
  const [certificate, setCertificate] = useState();
  useMemo(async () => {
    const certsApi = await ccpa();
    const certsList = await certsApi.getCertsList();

    const findCert = certsList.find(
      (item: { thumbprint: string }) => item.thumbprint === thumbprint,
    );

    setCertificate(findCert);
  }, [thumbprint]);
  return certificate;
};
