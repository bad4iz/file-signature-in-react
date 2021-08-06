import React, { useEffect, useState } from "react";
import { action } from "@storybook/addon-actions";

import FileSignature from "../src";

export default {
  title: "Подпись файла",
  component: FileSignature
};

export const FileSignatureCriptoPro = () => {
  const [filesForSignature, setFilesForSignature] = useState(null);
  const [clear, setClear] = useState(false);

  const fileInputHandler = ({ target: { files = [] } }) => {
    if (filesForSignature && filesForSignature !== files[0]) {
      setClear(true);
    }
    setFilesForSignature(files);
  };

  useEffect(() => {
    if (clear) {
      setClear(false);
    }
  }, [clear]);

  const onChange = e => {
    action("callback подписи")(e);
    if (Array.isArray(e)) {
      e.forEach(item => downloadAsFile(item.sign, item.fileNameSign));
    } else {
      downloadAsFile(e.sign, e.fileNameSign);
    }
  };

  const downloadAsFile = (data, name = "example.txt") => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(data);
    a.download = name;
    a.click();
  };

  return (
    <div>
      <h2>Подписываем файл</h2>

      <input type="file" onChange={fileInputHandler} multiple="multiple" />

      <button type="button" onClick={() => setClear(true)}>
        Удалить подпись
      </button>

      <FileSignature
        {...{
          onChange,
          files: filesForSignature,
          clear,
          callbackError: action("callback ошибки")
        }}
      />
    </div>
  );
};
