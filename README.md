# Events Widget Automated Tests

This repository contains automated tests for the Events Widget page at https://dev.3snet.info/eventswidget/ using Playwright and TypeScript.

## What is tested
- **Page loading**: Verifies that the page loads without errors and has the correct URL/title.
- **Widget visibility**: Checks that the main widget container is visible after loading.
- **Content display**: Ensures events are loaded and at least one event item is displayed.
- **Interactions**: Tests basic interactions like clicking a filter button (if present).
- **Error handling**: Monitors for console errors during page load.

## Observations
- The widget loads dynamically (likely via AJAX), so tests include waits for visibility.
- If the page uses iframes or has slow loading, adjust timeouts in the config.
- No major issues observed, but if CORS or network errors occur, they may affect tests in CI.

## Prerequisites
- Node.js (v16+)
- npm

## Setup and Run
1. Clone the repo: `git clone <your-repo-url>`
2. Install dependencies: `npm install`
3. Run tests: `npm test`

This will execute the tests in headless Chromium. Results will be in `playwright-report/`.

## Project Structure
- `tests/`: Test files and page objects.
- `playwright.config.ts`: Playwright configuration.
- `package.json`: Dependencies and scripts.
