# 9RED

## Что сделано (по порядку)

1. Создан репозиторий `9RED` и базовая структура папок:
   - `test case`
   - `playwright`
   - `probability theory`

2. Раздел `test case`:
   - создан файл `task` с условием по тестированию оплаты банковской картой;
   - создан файл `test case` с набором тест-кейсов (позитивные, негативные, валидация, граничные значения, интеграция с платежным шлюзом).

3. Раздел `playwright`:
   - создан файл `task` с заданием на проверку заголовка страницы [https://playwright.dev/](https://playwright.dev/);
   - добавлен автотест `tests/title.spec.js`;
   - добавлен конфиг `playwright.config.js` с запуском на двух браузерах: `chromium` и `firefox`;
   - добавлены `package.json` и `package-lock.json` для запуска через npm.

4. Настроен запуск в GitHub Actions:
   - добавлен workflow `.github/workflows/playwright.yml`;
   - настроены шаги: checkout, установка Node.js, установка зависимостей, установка браузеров Playwright, запуск тестов, публикация отчета.

5. Раздел `probability theory`:
   - создан файл `task` с задачей по теории вероятности (3 подбрасывания монеты);
   - создан файл `decision` с пошаговым решением и ответом `3/8`.

6. Добавлен `.gitignore` для исключения служебных артефактов Playwright:
   - `playwright/node_modules/`
   - `playwright/test-results/`
   - `playwright/playwright-report/`
