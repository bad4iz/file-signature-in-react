// @ts-ignore
import ccpa from 'crypto-pro-cadesplugin';
import { useMemo } from 'react';

import { extract } from '../extract';

/**
 * Hook. This function returns a list of certificate labels and thumbprints using CCPA API.
 * @returns {void}
 */
export const useDoCertsList = () =>
  useMemo(async () => {
    const certsApi = await ccpa();
    const certsList = await certsApi.getCertsList();
    return certsList.map(
      ({
        subjectInfo,
        thumbprint,
      }: {
        subjectInfo: string;
        thumbprint: string;
      }) => ({
        label: extract(subjectInfo, 'CN='),
        value: thumbprint,
      }),
    );
  }, []);
