/* eslint-disable */
import { useEffect, useState } from 'react';

import FileSignatureCryptoPro from './component';
import { SignInterface } from './component/types';

/**
 * Пример использования плагина.
 * App.
 * @returns {JSX.Element}
 */
function App() {
  const [filesForSignature, setFilesForSignature] = useState<FileList | null>(
    null,
  );
  const [clear, setClear] = useState(false);

  // todo fix any
  const fileInputHandler = (event: any) => {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;

    if (filesForSignature && filesForSignature[0] !== files[0]) {
      setClear(true);
    }

    setFilesForSignature(files);
  };

  useEffect(() => {
    if (clear) {
      setClear(false);
    }
  }, [clear]);

  // eslint-disable-next-line no-console
  const log = (message: string, e?: SignInterface[] | SignInterface) =>
    console.log(message, e);

  const onChange = (e: SignInterface | SignInterface[]) => {
    log('callback подписи', e);
    if (Array.isArray(e)) {
      e.filter((item) => item.sign && item.fileNameSign).forEach((item) => {
        if (item.sign && item.fileNameSign) {
          downloadAsFile(item.sign, item.fileNameSign);
        }
      });
    } else {
      if (e.sign && e.fileNameSign) {
        downloadAsFile(e.sign, e.fileNameSign);
      }
    }
  };

  const downloadAsFile = (data: any, name = 'example.txt') => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(data);
    a.download = name;
    a.click();
  };
  return (
    <div className="App">
      <h2>Подписываем файл</h2>
      <input type="file" onChange={fileInputHandler} multiple />

      <button type="button" onClick={() => setClear(true)}>
        Удалить подпись
      </button>
      <FileSignatureCryptoPro
        callback={(_) => _}
        onChange={onChange}
        onSelect={(sign) => log('callback выбора подписи', sign)}
        files={filesForSignature}
        clear={clear}
        callbackError={(err) => log('callback ошибки', err)}
      />
    </div>
  );
}

export default App;
