# SauceDemo Playwright Framework

[![Playwright Tests](https://github.com/teefahh/saucedemo-playwright-framework/actions/workflows/playwright.yml/badge.svg)](https://github.com/teefahh/saucedemo-playwright-framework/actions/workflows/playwright.yml)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?logo=playwright&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

An end-to-end UI test automation framework for [SauceDemo](https://www.saucedemo.com), built with **Playwright** and **TypeScript** using the **Page Object Model (POM)** design pattern. Covers the full purchase flow: login, product browsing, cart, and checkout.

## Key Highlights
- Page Object Model for Login, Products, Cart, and Checkout pages
- End-to-end checkout flow coverage, from login through order confirmation
- Cross-browser test execution (Chromium, Firefox, WebKit)
- Continuous integration via GitHub Actions on every push and pull request
- Centralized test data and environment-driven configuration

## Tech Stack
- [Playwright](https://playwright.dev)
- TypeScript
- Node.js
- GitHub Actions (CI)

## Project Structure
```
saucedemo-playwright-framework/
├── .github/workflows/
│   └── playwright.yml          # CI pipeline
├── page-objects/saucedemo/
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   ├── CartPage.ts
│   └── CheckOutPage.ts
├── tests/
│   ├── saucedemo-login.spec.ts
│   ├── saucedemo-products.spec.ts
│   └── saucedemo-checkout.spec.ts
├── utils/
│   └── test-data.ts            # Shared test users, URLs, and API endpoints
├── playwright.config.ts
└── package.json
```

## Getting Started

Install dependencies and browsers:
```bash
npm install
npx playwright install
```

Run the full suite:
```bash
npm test
```

Run a specific browser:
```bash
npm run test:chromium
npm run test:firefox
npm run test:webkit
```

Run in headed mode (visible browser):
```bash
npm run test:headed
```

Run with Playwright's UI mode or debugger:
```bash
npm run test:ui
npm run test:debug
```

View the last HTML report:
```bash
npm run report
```

## Design Approach

The framework follows the Page Object Model to separate test logic from page interaction:

- **Maintainability** — UI element changes are isolated to a single page object
- **Reusability** — Common actions and locators are shared across tests
- **Scalability** — New pages and scenarios extend the same pattern

Page objects own locators and UI actions; spec files own assertions and test flow.

## Continuous Integration

Every push and pull request to `main` runs the full suite headlessly via [GitHub Actions](.github/workflows/playwright.yml), with the HTML report uploaded as a build artifact.

## Future Improvements
- API testing alongside UI automation
- Allure/HTML reporting integration
- Data-driven test scenarios via `utils/test-data.ts`

## Author
**Latifat Yisa**
[GitHub](https://github.com/teefahh) · latifat.yisa@gmail.com

## License
[MIT](LICENSE)
