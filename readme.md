# Risk Game App
A multiplayer risk game application built with React 19 and Tailwind CSS 4, featuring a client-server architecture.

## Project Structure
The project follows this architecture pattern:

```
RiskApp/
├── client/                  # Client-side React application
│   ├── components/             # Reusable UI components
│   ├── pages/                  # Page components (Home, Lobby, Game)
│   ├── assets/                 # Static assets (images, fonts)
│   ├── providers/              # Context providers
│   ├── hooks/                  # Custom React hooks
│   ├── contexts/               # React context definitions
│   └── app.tsx                 # Main App component
│
├── server/                  # Server application
│   ├── types/                  # Server-specific type definitions
│   ├── index.ts                # Server entry point
│   └── store/                  # State management for the server
│       ├── storeProvider.ts        # Central store management
│       └── gameStore.ts            # Game state management
│
├── shared/                   # Shared code between client and server
│   └── types/                  # Shared TypeScript definitions
│       ├── index.ts                # Re-exports all types
│       └── users/                  # User-related types
│           └── user.ts                 # User interface definitions
│
└── public/                   # Static public assets
```

## Key Architectural Patterns
- **Singleton Pattern**: The server uses a singleton store provider that manages various stores (like GameStore) and provides access to them.
- **Observer Pattern**: Communication between components uses a publish-subscribe system where subjects (publishers) notify observers (subscribers) of state changes and data updates.
- **Shared Types**: Types are shared between client and server via the @shared/types alias to ensure consistency.

## Available Commands

### Development
```bash
npm run dev
```
Starts the Vite development server for the client application.

```bash
npm run dev:server
```
Runs the server in development mode with automatic reloading using tsx watch.

### Building
```bash
npm run build
```
Builds both client and server applications for production.

```bash
npm run build:client
```
Builds only the client application using Vite.

```bash
npm run build:server
```
Builds only the server application using TypeScript compiler.

### Production
```bash
npm run start:server
```
Starts the production server from the built files.

### Utilities
```bash
npm run lint
```
Runs ESLint to check code quality.

```bash
npm run preview
```
Previews the built client application locally before deployment.

## Technology Stack
- **Frontend**: React 19, Tailwind CSS 4
- **Backend**: Node.js with TypeScript
- **Development Tools**: Vite 6, TypeScript, ESLint
- **State Management**: Custom observer-based store system

The application is structured to maintain a clean separation between client and server code while sharing common type definitions to ensure type safety across the entire application.