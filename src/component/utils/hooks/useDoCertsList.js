import ccpa from 'crypto-pro-cadesplugin';
import { useMemo } from 'react';

import { extract } from '../extract';

/**
 * Hook.
 *
 * @returns {Promise<*>} - Returns.
 */
export const useDoCertsList = () =>
  useMemo(async () => {
    const certsApi = await ccpa();
    const certsList = await certsApi.getCertsList();
    return certsList.map(({ subjectInfo, thumbprint }) => ({
      label: extract(subjectInfo, 'CN='),
      value: thumbprint,
    }));
  }, []);
