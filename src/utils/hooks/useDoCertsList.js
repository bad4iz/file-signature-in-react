import {useMemo} from "react";
import ccpa from "crypto-pro-cadesplugin";
import {extract} from "src/utils/extract";

export const useDoCertsList = callbackError =>
  useMemo(async () => {
    const certsApi = await ccpa();
    const certsList = await certsApi.getCertsList();
    return  certsList.map(({ subjectInfo, thumbprint }) => ({
      value: thumbprint,
      label: extract(subjectInfo, "CN="),
    }));
  }, []);
