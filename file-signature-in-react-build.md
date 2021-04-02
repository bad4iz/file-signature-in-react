# Инструкция delivery в npm репозиторий в CI/CD GitLab
Исходный код: https://gitlab.ahml.ru/fap.altarics/file-signature-in-react


> для полноценной работы необходимо указать переменные окружения npm локального хранилища пакетов

1. `NPM_USER` - логин (user_login)
2. `NPM_PASS` - пароль (superParol)
3. `NPM_EMAIL` - email почта (user_login@mail.com)
4. `NPM_REGISTRY` - путь до хранилища (http://173.26.66.161:6969)


### Устанавливаем зависимости
```bash
yarn
```

### Собираем проект
```bash
yarn build
```

### Устанавливаем глобально пакет `npm-cli-login`
```bash
npm install -g npm-cli-login
```

### Выполняем `npm-cli-login`
> тут команда считывает переменные окружения CI/CD GitLab которые мы указали выше   
> переменная `NPM_REGISTRY` считывается в явном виде `${NPM_REGISTRY}`   
> остальные 3 переменных (`NPM_USER`, `NPM_PASS`, `NPM_EMAIL`)  в неявном     

```bash
npm-cli-login -r ${NPM_REGISTRY}
```

### Публикуем пакет в локальное хранилище пакетов
```bash
npm publish --registry ${NPM_REGISTRY}
```



