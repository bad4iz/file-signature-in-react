// @ts-ignore
import ccpa from 'crypto-pro-cadesplugin';
import { useMemo, useState } from 'react';

/**
 * This function returns a certificate object based on a given thumbprint using CCPA API.
 * @param {string} thumbprint - The `thumbprint` parameter is a string that represents the unique
 * identifier of a certificate. The function `useGetCertificate` uses this parameter to search for a
 * certificate in a list of certificates and returns the matching certificate.
 * @returns The `useGetCertificate` custom hook is returning the `certificate` object that matches the
 * `thumbprint` passed as a parameter. The `certificate` object is obtained by calling the `ccpa()`
 * function and then calling the `getCertsList()` method on the returned object. The `find()` method is
 * then used to find the certificate object that matches the `thumbprint` passed as a.
 */
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
