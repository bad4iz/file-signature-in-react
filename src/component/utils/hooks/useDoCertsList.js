/* eslint-disable */
import ccpa from 'crypto-pro-cadesplugin';
import { useMemo } from 'react';

import { extract } from '../utils.js';

/* eslint-disable */
export const useDoCertsList = (callbackError) =>
  useMemo(async () => {
    const certsApi = await ccpa();
    const certsList = await certsApi.getCertsList();
    return certsList.map(({ subjectInfo, thumbprint }) => ({
      value: thumbprint,
      label: extract(subjectInfo, 'CN='),
    }));
  }, []);
