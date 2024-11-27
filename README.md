# Pokémon Explorer

<img src="https://github.com/Arif-un/pokemon-explorer/blob/main/screenshot.png?raw=true" alt="Pokemon website screenshot" />


## Overview

This project is a feature-rich frontend application displaying a comprehensive Pokémon list and their details, including types, abilities, and stats. It's built with modern web technologies and best practices, offering a smooth and interactive user experience for Pokémon enthusiasts.

## Technologies Used

- **React**: A popular JavaScript library for building user interfaces.
- **Vite**: A fast build tool that significantly improves the frontend development experience.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript, enhancing code quality and developer productivity.
- **React Query**: A powerful data synchronization library for React applications.
- **TanStack Router**: A fully type-safe router for React applications.
- **Vitest**: A Vite-native unit test framework with a focus on speed and simplicity.
- **React Testing Library**: A light-weight solution for testing React components.
- **Jotai**: A primitive and flexible state management library for React.
- **ESLint**: A static code analysis tool for identifying problematic patterns in JavaScript code.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.
- **Framer Motion**: A production-ready motion library for React.
- **GraphQL**: A query language for APIs and a runtime for executing those queries with your existing data.
- **REST API**: Used alongside GraphQL to fetch data from various endpoints.

## Features

- Display a list of all Pokémon
- Show detailed information for each Pokémon, including:
  - Types
  - Abilities
  - Stats
- Smooth animations and transitions using Framer Motion
- Responsive design with Tailwind CSS
- Efficient data fetching and caching with React Query
- Type-safe routing with TanStack Router

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later), yarn (v1.22.0 or later), or pnpm (v6.0.0 or later)

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/pokemon-frontend-app.git
   ```

2. Navigate to the project directory:

   ```
   cd pokemon-frontend-app
   ```

3. Install the dependencies:
   ```
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

## Running the Application

To start the development server:

```
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is already in use).

## Building for Production

To create a production build:

```
npm run build
# or
yarn build
# or
pnpm build
```

The build artifacts will be stored in the `dist/` directory.

## Running Tests

To run the test suite:

```
npm run test
# or
yarn test
# or
pnpm test
```

## Linting

To run the linter:

```
npm run lint
# or
yarn lint
# or
pnpm lint
```

## Acknowledgments

- [PokéAPI](https://pokeapi.co/) for providing the Pokémon data
- All the amazing open-source libraries and tools used in this project


## License
MIT