# Movies App

A modern React application for browsing popular movies and viewing their details. This app uses The Movie Database (TMDB) API to fetch movie information and displays it in a clean, responsive interface.

## Table of Contents

- [Movies App](#movies-app)
  - [Table of Contents](#table-of-contents)
  - [Tech Stack](#tech-stack)
  - [Project Structure](#project-structure)
  - [Installation and Setup](#installation-and-setup)
    - [Prerequisites](#prerequisites)
    - [Installation Steps](#installation-steps)
  - [Available Scripts](#available-scripts)
  - [Pre-commit Hooks](#pre-commit-hooks)
  - [Testing](#testing)
  - [License](#license)

## Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Routing**: Wouter (lightweight alternative to React Router)
- **Styling**: CSS Modules with custom variables
- **Building/Bundling**: Vite
- **Testing**: Vitest + Testing Library
- **Linting/Formatting**: ESLint + Prettier
- **Code Quality**: Husky for pre-commit hooks, lint-staged

## Project Structure

```
movies-app/
├── public/               # Static assets
├── src/                  # Source code
│   ├── api/              # API integration code
│   ├── assets/           # SVG icons and other assets
│   ├── components/       # Reusable UI components
│   ├── containers/       # Container components (data fetching and state)
│   ├── hooks/            # Custom React hooks
│   ├── styles/           # CSS styles
│   │   ├── components/   # Component-specific styles
│   │   ├── main.css      # Main stylesheet
│   │   ├── reset.css     # CSS reset
│   │   └── variables.css # CSS variables
│   ├── tests/            # Test files
│   │   └── utils/        # Test utilities
│   ├── types/            # TypeScript type definitions
│   │   └── components/   # Component-specific types
│   ├── utils/            # Utility functions
│   ├── views/            # Page components
│   ├── App.tsx           # Main App component
│   └── main.tsx          # Entry point
├── .env.example          # Example environment variables
├── .eslintrc.js          # ESLint configuration
├── .prettierrc           # Prettier configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── vitest.config.ts      # Vitest configuration
```

## Installation and Setup

### Prerequisites

- Node.js (latest LTS version recommended)
- npm

### Installation Steps

1. Clone the repository:

   ```bash
   git clone git@github.com:jeison-fox/movies-app.git
   cd movies-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Get an API key from [The Movie Database](https://www.themoviedb.org/documentation/api) and add it to your `.env` file:
     ```
     VITE_TMDB_API_KEY=your_api_key_here
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   This will start the Vite development server and open the application in your browser at `http://localhost:5173` (or another port if 5173 is already in use).

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues
- `npm run format` - Format code using Prettier
- `npm run test` - Run tests with Vitest

## Pre-commit Hooks

This project uses Husky and lint-staged to run checks before each commit:

- ESLint will check and fix JavaScript/TypeScript files
- Prettier will format all supported files (JS, TS, CSS, MD, JSON, HTML)

The pre-commit configuration can be found in the `lint-staged` section of `package.json`.

## Testing

The project uses Vitest and React Testing Library for testing. Test files are located in the `src/tests` directory.

Run the tests with:

```bash
npm run test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
