# File signature 

![](https://travis-ci.org/bad4iz/file-signature-in-react.svg?branch=main)
![](https://img.shields.io/npm/v/file-signature-in-react.svg)
![](https://img.shields.io/npm/dt/file-signature-in-react.svg)   

![](https://img.shields.io/github/commit-activity/m/bad4iz/file-signature-in-react.svg)   
![](https://img.shields.io/github/last-commit/bad4iz/file-signature-in-react.svg)   

[npm file-signature-in-react](https://www.npmjs.com/package/file-signature-in-react)     

Компонент на реакте для подписи файла Крипто Про с помощью плагина «КриптоПро ЭЦП Browser plug-in»  

## ЭЦП в браузере – попробуйте прямо сейчас!
Компания КРИПТО-ПРО предлагает плагин для создания и проверки электронной подписи на web-страницах.   
КриптоПро ЭЦП Browser plug-in позволяет создавать и проверять как обычную электронную подпись, так и усовершенствованную электронную подпись. 

## Самое простое подключение компонента
1. Просто подключаем Компонент к себе в проект   
2. Передаем в Компонент   
 a. `file` - файл который надо подписать   
 b. `callback` функцию  callback которая сработает когда файл будет подписан  
 c. `clear` - флаг очищения компонента   
 d. `callbackError`  функция вызовится когда будет ошибка
3. В callback прийдет `{fileNameSign:<String>, sign:<Blob>}`. `fileNameSign` - название файла подписи и сама `sign` - подпись в формате `Blob`

## Как подключить
```bash
yarn add file-signature-in-react 
```



## Пример использования
```js
import React, { useState } from "react";
import FileSignature from "./file-signature-in-react";

export const FileSignatureCryptoPro = () => {
  const [file, setFile] = useState(null);
  const [clear, setClear] = useState(false);
  
  const fileInputHandler = ({ target: { files = [] } }) => {
    setFile(files[0]);
  };

  const callback = console.log;
  const callbackError = console.error;

  return (
    <div>
      <h2>Подписываем файл</h2>

      <input type="file" onChange={fileInputHandler} />

      <button onClick={() => setClear(true)}> Удалить подпись</button>

      <FileSignature
        {...{
          callback, // функция вызовится когда файл подпишится
          file, // сам файл для подписи
          clear, // флаг очищения подписи
          callbackError  // функция вызовится когда будет ошибка
        }}
      />
    </div>
  );
};

```

> ## Обратите внимание! Для пробной работы с Компонентом вам необходимо иметь
> * Компьютер под управлением Windows, Linux, MacOS или FreeBSD
> * Один из современных браузеров (Internet Explorer, Mozilla Firefox, Opera, Chrome, Яндекс.Браузер, Safari) с поддержкой сценариев JavaScript
> * Установленный плагин для браузера «КриптоПро ЭЦП Browser plug-in» ([Установить](https://www.cryptopro.ru/products/cades/plugin/get_2_0))
> * Если планируется создание ЭЦП по ГОСТ Р 34.10-2001/2012, то необходимо установить [СКЗИ КриптоПро CSP](https://www.cryptopro.ru/products/csp/overview)
> * Cертификат ключа подписи, который можно получить на странице [тестового центра](https://www.cryptopro.ru/certsrv/certrqma.asp)
> * [Проверить работу установленного плагина](https://www.cryptopro.ru/sites/default/files/products/cades/demopage/simple.html) 

## для поднятия песочницы используется Storybook
скачиваем репозиторий
```bash
git clone тут урл до репозитория
```

устанавливаем зависимости
```bash
yarn
```

для запуска используем команду   
```bash
yarn storybook
```
подымится локальный сервер на порту 6006   
http://localhost:6006/   

тут можно будет проверить свои кейсы

