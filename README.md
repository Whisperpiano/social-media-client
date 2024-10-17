# Workflow CA
[![Automated Unit Testing](https://github.com/Whisperpiano/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/Whisperpiano/social-media-client/actions/workflows/unit-test.yml)
[![Automated E2E Testing](https://github.com/Whisperpiano/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/Whisperpiano/social-media-client/actions/workflows/e2e-test.yml)
[![Deploy static content to Pages](https://github.com/Whisperpiano/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/Whisperpiano/social-media-client/actions/workflows/pages.yml)

This branch contains the work for the Workflow Course Assignment, where I have implemented a series of tools and workflows to improve the quality of a software package. Below is a summary of the tasks and tools implemented as required by the assignment brief.

## Branches Setup

All the work for this assignment is contained within the `workflow` branch. During development, I created sub-branches (e.g., `workflow-tools`, `workflow-testing`) to isolate specific tasks. After completing each task, I merged those sub-branches back into the `workflow` branch to keep the workflow organized and modular.

## Tools and Configurations

### 1. **Prettier Setup**
   - Configured Prettier for consistent code formatting across the project.
   - Created a `.prettierrc.json` configuration file with commonly used settings for this project.
   - Added a format script in `package.json` to allow easy formatting of code.
   - Prettier runs automatically when commit.
     
### 2. **ESLint Setup**
   - Installed and configured ESLint for JavaScript and TypeScript linting.
   - Added `eslint-config-prettier` to ensure that Prettier and ESLint work together seamlessly.
   - Created an `eslint.config.mjs` file with project-specific linting rules.
   - Added a lint script to `package.json` to easily run ESLint across the project.
   - ESLint runs automatically when commit.

### 3. **Jest Testing Setup**
   - Installed Jest for unit testing across the project.
   - Wrote unit tests for various functions.
   - Configured Jest to run as part of the GitHub Actions workflow for this branch.

### 4. **Commit Hooks with Husky**

- Configured Husky to add pre-commit hooks to the repository.
- The hooks ensure that ESLint and Prettier are executed before every commit to maintain code quality and consistency.

### 5. **Cypress Testing Setup**
   - Installed Cypress for end-to-end testing.
   - Wrote tests for the user login functionality to ensure the flow works correctly within the UI.
   - Configured Cypress to run as part of the GitHub Actions workflow for this branch.

### 6. **GitHub Actions Workflow**
   - Created a GitHub Action workflow for this branch to:
     - Run Jest for unit testing.
     - Run Cypress for end-to-end testing.
   - Configured the existing GitHub Action (inherited from the `master` branch) to ensure that deployments are correctly triggered for the appropriate branch.
   - The workflow is triggered on every push to the `workflow` branch, ensuring continuous integration and deployment.





