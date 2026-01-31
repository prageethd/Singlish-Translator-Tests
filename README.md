# Singlish to Sinhala Translator – Playwright Test Suite

## 📋 Overview

This repository contains a comprehensive automated test suite for a Singlish to Sinhala translation system. The test suite is built using Playwright, a modern end-to-end testing framework, and validates both functional translation capabilities and user interface behavior across multiple browsers.

The test suite covers:
- **Functional Testing**: Positive and negative test cases for various Singlish input scenarios
- **UI Testing**: Real-time translation updates, input/output synchronization, and user interaction validation
- **Cross-Browser Testing**: Automated testing across Chromium, Firefox, and WebKit (Safari) browsers

##  Features

- **Comprehensive Test Coverage**: 34 test cases covering various scenarios including:
  - Simple, compound, and complex sentences
  - Different sentence types (questions, commands, positive, negative)
  - Various tenses (past, present, future)
  - Edge cases (joined words, repeated words, mixed languages)
  - UI interaction and real-time updates
  
- **Multi-Browser Support**: Tests run automatically on:
  - Chromium (Chrome/Edge)
  - Firefox
  - WebKit (Safari)

- **Professional Test Reporting**: HTML-based test reports with detailed execution results

- **Parallel Test Execution**: Optimized test execution for faster results

##  Prerequisites

Before installing and running the tests, ensure you have the following installed on your system:

- **Node.js**: Version 16 or higher ([Download Node.js](https://nodejs.org/))
- **npm**: Usually comes bundled with Node.js (version 7 or higher)
- **Git**: For cloning the repository ([Download Git](https://git-scm.com/))

To verify your installations, run the following commands in your terminal:

```bash
node --version
npm --version
git --version
```

## 📦 Installation

### Step 1: Clone the Repository

If you haven't already cloned the repository, use the following command:

```bash
git clone <your-repository-url>
cd Singlish-Translator-Tests
```

### Step 2: Install Dependencies

Install all required dependencies using npm:

```bash
npm install
```

This command will install:
- `@playwright/test` - The Playwright testing framework
- `@types/node` - TypeScript type definitions for Node.js

### Step 3: Install Playwright Browsers

After installing npm dependencies, install the Playwright browser binaries:

```bash
npx playwright install
```

This will download the necessary browser binaries (Chromium, Firefox, and WebKit) required for testing.

**Note**: The browser installation may take a few minutes depending on your internet connection.

## ⚙️ Configuration

The test configuration is defined in `playwright.config.js`. Key configuration settings include:

- **Test Directory**: `./tests` - All test files are located in this directory
- **Parallel Execution**: Tests run in parallel for faster execution
- **Retries**: Automatic retry on failure (2 retries in CI environments)
- **Reporters**: HTML reporter for detailed test results
- **Browsers**: Chromium, Firefox, and WebKit are configured

You can modify the configuration file to adjust test behavior, add new browsers, or change test execution settings.

##  Running Tests

### Run All Tests

To execute all tests across all configured browsers:

```bash
npx playwright test
```

### Run Tests in a Specific Browser

To run tests in a specific browser only:

```bash
# Run tests in Chromium only
npx playwright test --project=chromium

# Run tests in Firefox only
npx playwright test --project=firefox

# Run tests in WebKit only
npx playwright test --project=webkit
```

### Run Tests in Headed Mode

To see the browser while tests are running (useful for debugging):

```bash
npx playwright test --headed
```

### Run Tests in UI Mode

For an interactive test execution experience:

```bash
npx playwright test --ui
```

### Run a Specific Test File

To run tests from a specific file:

```bash
npx playwright test tests/translation-tests.spec.js
```

### Run Tests with Debug Mode

To run tests in debug mode with Playwright Inspector:

```bash
npx playwright test --debug
```

## 📊 Viewing Test Results

After test execution, you can view detailed HTML reports:

```bash
npx playwright show-report
```

This command opens the HTML test report in your default browser, showing:
- Test execution summary
- Pass/fail status for each test
- Execution time
- Screenshots and traces for failed tests
- Browser-specific results

The test reports are automatically generated in the `playwright-report/` directory.

##  Project Structure

```
Singlish-Translator-Tests/
│
├── tests/
│   └── translation-tests.spec.js    # Main test file containing all test cases
│
├── playwright.config.js              # Playwright configuration file
├── package.json                       # Project dependencies and metadata
├── README.md                          # This file
│
├── playwright-report/                 # Generated HTML test reports
│   └── index.html
│
└── test-results/                      # Test execution artifacts (screenshots, traces)
```

##  Test Categories

The test suite is organized into three main categories:

### 1. Positive Functional Tests (Pos_Fun_0001 - Pos_Fun_0024)
Tests valid Singlish input scenarios including:
- Simple and complex sentences
- Different sentence types (questions, commands, statements)
- Various tenses and grammatical structures
- Mixed language inputs
- Special characters and formatting

### 2. Negative Functional Tests (Neg_Fun_0001 - Neg_Fun_0010)
Tests edge cases and error handling:
- Heavy slang and ambiguous inputs
- Excessive formatting issues
- Typographical errors
- Edge grammar cases

### 3. UI Tests (Pos_UI_0001 - Pos_UI_0002)
Tests user interface behavior:
- Real-time translation updates
- Input/output synchronization
- Clear functionality

##  Technologies Used

- **Playwright**: Modern end-to-end testing framework
- **Node.js**: JavaScript runtime environment
- **npm**: Package manager for Node.js
- **JavaScript/ES6+**: Programming language for test scripts

##  Test Execution Notes

- Tests are designed to work with a mocked UI environment
- The test suite uses a simulated translator interface for testing
- All tests are designed to be independent and can run in any order
- Test execution time varies based on system performance and browser selection

##  Contributing

This is a test suite project. If you need to add new test cases or modify existing ones:

1. Edit the test file: `tests/translation-tests.spec.js`
2. Follow the existing test naming convention
3. Run tests to ensure they pass: `npx playwright test`
4. Commit your changes with clear commit messages

## 👤 Author

Prageeth Dilruwan

##  Support

For issues or questions regarding the test suite, please refer to the repository's issue tracker or contact the project maintainer.

---

**Note**: This test suite is designed for automated testing of a Singlish to Sinhala translation system. Ensure that the target application is accessible and properly configured before running the tests.