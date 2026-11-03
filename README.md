# color-clock

A simple React application that displays the current time and date.

## Overview

`color-clock` is a minimal Vite + React 19 single-page application. On render it shows the current local time and date, styled with a dark theme.

## Features

- Shows the current time (e.g. `14:08:05`) using `Date.toLocaleTimeString()`
- Shows the current date (e.g. `11/3/2026`) using `Date.toLocaleDateString()`
- Dark themed UI with a centered layout

## Tech Stack

- **React** 19 (UI library)
- **React DOM** 19 (rendering)
- **Vite** 8 (build tool / dev server)
- **date-fns** (date utilities)
- **ESLint** 10 with React Hooks + React Refresh plugins (linting)

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Lint the codebase

```bash
npm run lint
```

## Project Structure

```
color-clock/
├── public/            # Static assets (favicon, etc.)
├── src/
│   ├── App.jsx        # Root component — renders the clock
│   ├── App.css        # Component styles
│   ├── main.jsx       # React entry point
│   └── index.css      # Global styles
├── index.html         # HTML shell
├── vite.config.js     # Vite configuration
├── package.json       # Dependencies and scripts
└── package-lock.json  # Lockfile
</file>

## License

This project is private.