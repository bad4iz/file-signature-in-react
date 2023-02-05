# File signature
React Компонент для подписи файла ЭЦП, с помощью плагина «КриптоПро ЭЦП Browser plug-in»

![](https://img.shields.io/npm/v/file-signature-in-react.svg)
![](https://img.shields.io/npm/dt/file-signature-in-react.svg)
![](https://img.shields.io/github/commit-activity/m/bad4iz/file-signature-in-react.svg)
![](https://img.shields.io/github/last-commit/bad4iz/file-signature-in-react.svg)
[![Wallaby.js](https://img.shields.io/badge/wallaby.js-configured-green.svg)](https://wallabyjs.com)   

#### main-branch
![master test](https://github.com/bad4iz/file-signature-in-react/actions/workflows/action.yml/badge.svg?branch=main)
![master build](https://github.com/bad4iz/file-signature-in-react/actions/workflows/test-build.yml/badge.svg?branch=main)
#### develop-branch
![develop build](https://github.com/bad4iz/file-signature-in-react/actions/workflows/test-build.yml/badge.svg?branch=develop)
![develop test](https://github.com/bad4iz/file-signature-in-react/actions/workflows/action.yml/badge.svg?branch=develop)

[//]: # ([![Wallaby.js]&#40;https://img.shields.io/badge/wallaby.js-powered-blue.svg?style=for-the-badge&logo=github&#41;]&#40;https://wallabyjs.com/oss/&#41;)

[npm file-signature-in-react](https://www.npmjs.com/package/file-signature-in-react)

Компонент на реакте для подписи файла Крипто Про с помощью плагина «КриптоПро ЭЦП Browser plug-in»

> ## пример
> [https://bad4iz.github.io/file-signature-in-react](https://bad4iz.github.io/file-signature-in-react/)
>> !!! У вас должен быть установлен сертификат и плагин
>> *[проверить работу установленного плагина и сертификата](https://www.cryptopro.ru/sites/default/files/products/cades/demopage/simple.html)*


> Используется плагин **crypto-pro-cadesplugin** https://www.npmjs.com/package/crypto-pro-cadesplugin

## ЭЦП в браузере – попробуйте прямо сейчас!
Компания КРИПТО-ПРО предлагает плагин для создания и проверки электронной подписи на web-страницах.
КриптоПро ЭЦП Browser plug-in позволяет создавать и проверять как обычную электронную подпись, так и усовершенствованную электронную подпись.

## Самое простое подключение компонента
1. Просто подключаем Компонент к себе в проект
2. Передаем в Компонент
 a. `files` - файлы которые надо подписать
 b. `onChange` функцию  callback которая сработает когда файл, будет подписан.
 c. `onSelect` функция callback при выборе сертификата. На вход принимает сертификат.
 d. `clear` - флаг очищения компонента
 e. `callbackError`  функция вызовется когда, будет ошибка
3. В onChange прейдет массив из `{fileNameSign:<String>, sign:<Blob>}`. `fileNameSign` - название файла подписи и сама `sign` - подпись в формате `Blob`

## Как подключить
```bash
yarn add file-signature-in-react
```



## Пример использования
```js
import React, { useState } from "react";
import FileSignature from "file-signature-in-react";

export const FileSignatureCryptoPro = () => {
  const [filesForSignature, setFilesForSignature] = useState(null);
  const [clear, setClear] = useState(false);

  const fileInputHandler = ({ target: { files = [] } }) => {
    setFilesForSignature(files);
  };

  const onChange = (e) => console.log(e);
  const callbackError = e => console.error(e);

  return (
    <div>
      <h2>Подписываем файл или файлы</h2>

      <input
        type="file"
        onChange={fileInputHandler}
        multiple // если хотим подписать много файлов скопом
      />

      <button onClick={() => setClear(true)}> Удалить подпись</button>

      <FileSignature
        {...{
          onChange, // функция вызовится когда файл подпишится
          files: filesForSignature, // самм файлы для подписи
          clear, // флаг очищения подписи
          callbackError  // функция вызовится когда будет ошибка
        }}
      />
    </div>
  );
};

```



## Кастомизация ... Переопределяем компоненты на основе Material UI
```js
import React, { useState } from "react";
import FileSignature from "file-signature-in-react";

import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';


const MySelect = ({options, onChange, ...props}) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <Select {...props} fullWidth onChange={handleChange}>
      {options.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  )
}

const MyButton = (props) => (
  <Button {...props} variant={'contained'} color={'primary'}>
    sign my button
  </Button>
);

export const FileSignatureCryptoPro = () => {
  const [filesForSignature, setFilesForSignature] = useState(null);
  const [clear, setClear] = useState(false);

  const fileInputHandler = ({ target: { files = [] } }) => {
    setFilesForSignature(files);
  };

  const onChange = (e) => console.log(e);
  const callbackError = e => console.error(e);

  return (
    <div>
      <h2>Подписываем файл или файлы</h2>

      <input
        type="file"
        onChange={fileInputHandler}
        multiple // если хотим подписать много файлов скопом
      />

      <button onClick={() => setClear(true)}> Удалить подпись</button>

      <FileSignature
        {...{
          SelectComponent: MySelect,
          ButtonComponent: MyButton,
          onChange, // функция вызовится когда файл подпишится
          files: filesForSignature, // самм файлы для подписи
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
git clone git@github.com:bad4iz/file-signature-in-react.git
```

Устанавливаем зависимости
```bash
yarn
```

Для запуска используем команду
```bash
yarn storybook
```
Поднимется локальный сервер на порту 6006
http://localhost:6006/

тут можно будет проверить свои кейсы

-------------------------------------------------------
> ![](https://newreleases.io/icon/github/JetBrains)

 IDE предоставлена компанией JetBrains, для поддержки опенсорса  https://jb.gg/OpenSource.
> the IDE is provided by the JetBrains to support open source https://jb.gg/OpenSource.


