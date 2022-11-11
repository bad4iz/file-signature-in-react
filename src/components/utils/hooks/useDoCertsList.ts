// @ts-ignore
import ccpa from 'crypto-pro-cadesplugin'
import { useMemo } from 'react'

import { extract } from '../extract'

export const useDoCertsList = () =>
  useMemo(async () => {
    const certsApi = await ccpa()
    const certsList = await certsApi.getCertsList()
    // @ts-ignore
    return certsList.map(({ subjectInfo, thumbprint }) => ({
      value: thumbprint,
      label: extract(subjectInfo, 'CN='),
    }))
  }, [])
