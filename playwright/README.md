# Playwright task

## Task
Open `https://playwright.dev/` and verify the page title.
Run the same test in at least two browsers.

## Run
```bash
npm init -y
npm i -D @playwright/test
npx playwright install
npx playwright test
```

The configured projects are `chromium` and `firefox`.
