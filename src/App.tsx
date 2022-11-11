import { useState, useEffect } from 'react'

import FileSignatureCryptoPro from './components'

function App() {
  const [filesForSignature, setFilesForSignature] = useState(null)
  const [clear, setClear] = useState(false)

  const fileInputHandler = ({ target: { files = [] } }) => {
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

  // @ts-ignore
  // eslint-disable-next-line no-console
  const log = (...e) => console.log(...e)

  const onChange = (e: any) => {
    // @ts-ignore
    // eslint-disable-next-line no-console
    log('callback подписи', e)
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
      {/*// @ts-ignore*/}
      <input type="file" onChange={fileInputHandler} multiple="multiple" />

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
