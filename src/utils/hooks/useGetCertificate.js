import {useMemo, useState} from "react";
import ccpa from "crypto-pro-cadesplugin";
import {extract} from "src/utils/utils";

export const useGetCertificate = thumbprint =>{
  const [certificate, setCertificate] = useState()
   useMemo(async () => {
    const certsApi = await ccpa();
    const certsList = await certsApi.getCertsList();

    const findCert =  certsList.find(item=>item.thumbprint === thumbprint)

    setCertificate(findCert)
  }, [thumbprint]);
  return certificate
}
