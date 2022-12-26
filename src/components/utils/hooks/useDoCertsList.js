import { extract } from 'core/uiKit/inputs/FileSignatureCriptoPro/utils/utils';
import { useMemo } from 'react';

import ccpa from '../ccpa';

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
