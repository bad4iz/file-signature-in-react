import { useEffect, useState } from 'react'

import FileSignatureCryptoPro from './components'
import {SignInterface} from './components/types'
/**
 * Пример использования плагина
 *
 */
function App() {
  const [filesForSignature, setFilesForSignature] = useState(null)
  const [clear, setClear] = useState(false)

  const fileInputHandler = ({ target: { files = [] } }: any) => {
    if (filesForSignature && filesForSignature !== files[0]) {
      setClear(true)
    }
    setFilesForSignature(files)
  }

  useEffect(() => {
    if (clear) {
      setClear(false)
    }
  }, [clear])

  // eslint-disable-next-line no-console
  const log = (message: string, e?:SignInterface) => console.log(message, e)

  const onChange = (e: SignInterface ) => {
    log('callback подписи', e  )
    if (Array.isArray(e)) {
      e.forEach((item) => downloadAsFile(item.sign, item.fileNameSign))
    } else {
      downloadAsFile(e.sign, e.fileNameSign)
    }
  }

  const downloadAsFile = (data: any, name = 'example.txt') => {
    const a = document.createElement('a')
    a.href = URL.createObjectURL(data)
    a.download = name
    a.click()
  }
  return (
    <div className="App">
      <h2>Подписываем файл</h2>
      <input type="file" onChange={fileInputHandler} multiple />

      <button type="button" onClick={() => setClear(true)}>
        Удалить подпись
      </button>
      <FileSignatureCryptoPro
        {...{
          onChange,
          onSelect: () => log('callback выбора подписи'),
          files: filesForSignature,
          clear,
          callbackError: () => log('callback ошибки'),
        }}
      />
    </div>
  )
}

export default App
