// @ts-ignore
import ccpa from 'crypto-pro-cadesplugin';
import { useMemo } from 'react';

import { extract } from '../extract';

/**
 * Hook.
 *
 * @returns - Returns.
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
