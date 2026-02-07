# JobCompass

A full-stack React + Node.js application with mapping (ArcGIS) and a structured codebase for rapid development.

## Tech Stack

| Layer    | Technologies |
|----------|--------------|
| Frontend | React 18, Vite, TypeScript, Tailwind CSS, ArcGIS Maps SDK for JavaScript |
| Backend  | Node.js, Express, TypeScript |
| Tooling  | ESLint, PostCSS |

## Project Structure

```
JobCompass/
├── frontend/                 # React (Vite) app
│   ├── src/
│   │   ├── components/       # UI components
│   │   ├── hooks/            # Custom React hooks
│   │   ├── services/         # API clients & external integrations
│   │   ├── types/            # TypeScript types & interfaces
│   │   └── utils/            # Pure helpers
│   ├── .env.example
│   └── package.json
├── backend/                  # Express API
│   ├── src/
│   │   ├── routes/           # Route definitions
│   │   ├── controllers/      # Request handlers
│   │   ├── services/         # Business logic & data access
│   │   ├── types/            # TypeScript types
│   │   └── middleware/       # Express middleware (e.g. error handler)
│   ├── .env.example
│   └── package.json
├── .gitignore
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm (or pnpm/yarn)

### Frontend

1. Go to the frontend folder and install dependencies:

   ```bash
   cd frontend
   npm install
   ```

2. Copy environment template and add your ArcGIS API key:

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and set:

   - `VITE_ARCGIS_API_KEY` – from [ArcGIS for Developers](https://developers.arcgis.com/)

3. Start the dev server:

   ```bash
   npm run dev
   ```

   App runs at **http://localhost:5173**.

### Backend

1. Go to the backend folder and install dependencies:

   ```bash
   cd backend
   npm install
   ```

2. Copy environment template and configure:

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and set:

   - `PORT` – server port (default `3000`)
   - `CORS_ORIGIN` – frontend URL (e.g. `http://localhost:5173`)
   - `DATABASE_URL` (or your DB credentials) when you add a database

3. Run the API:

   ```bash
   npm run dev
   ```

   API runs at **http://localhost:3000**. Health check: `GET http://localhost:3000/api/health`.

### Running Both

From the repo root:

- Terminal 1: `cd frontend && npm run dev`
- Terminal 2: `cd backend && npm run dev`

The frontend Vite config proxies `/api` to the backend (port 3000).

### Running with Docker

Run both apps with Docker Compose from the repo root:

```bash
docker compose up --build
```

- **Frontend** (React + nginx): **http://localhost** (port 80)  
- **Backend** (Express): **http://localhost:3000**  
- Frontend serves the app and proxies `/api` to the backend.

Stop with `Ctrl+C` or run in the background: `docker compose up -d --build`.

## Sprint Progress Tracker

| Sprint | Focus                        | Status   | Notes |
|--------|------------------------------|----------|--------|
| 1      | Project setup & structure    | Complete | Frontend + backend scaffold |
| 2      | TBD                          | Planned  | |
| 3      | TBD                          | Planned  | |

Update this table as you complete sprints.

## License

See [LICENSE](LICENSE).
