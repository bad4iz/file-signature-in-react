import React, { useEffect, useState } from "react";
import { action } from "@storybook/addon-actions";


import FileSignature from "../dist";

export default {
  title: "Подпись файла",
  component: FileSignature
};

export const FileSignatureCriptoPro = () => {
  const [file, setFile] = useState(null);
  const [clear, setClear] = useState(false);

  const fileInputHandler = ({ target: { files = [] } }) => {
    if (file && file !== files[0]) {
      setClear(true);
    }
    setFile(files[0]);
  };

  useEffect(() => {
    if (clear) {
      setClear(false);
    }
  }, [clear]);

  const callback = e => {
    action("callback подписи")(e);
  };

  return (
    <div>
      <h2>Подписываем файл</h2>

      <input type="file" onChange={fileInputHandler} />

      <button onClick={() => setClear(true)}> Удалить подпись</button>

      <FileSignature
        {...{
          callback,
          file,
          clear,
          callbackError: action("callback ошибки")
        }}
      />
    </div>

  );
};
