# ShareHub (or your preferred name)

A web application for managing and sharing items within a community. Users can list shareable items, request items, and track item history including usage, condition, and warranty information.

## Technology Stack

- Frontend: Angular
- Backend: NestJS
- Database: SQLite with Prisma ORM
- Documentation: Swagger (already configured)

## Project Structure

├── frontend/ # Angular application
├── backend/ # NestJS application
└── database/ # sqlite

## Development Setup

### Prerequisites

- Node.js (version TBD)
- pnpm
- Git
- nest CLI
- Angular CLI

### Local Development Setup

1. Clone the repository:

```bash
git clone [your-repo-url]
```

2. Backend setup (NestJS):

```bash
cd backend
pnpm install
pnpm run start:dev
```

3. Frontend Setup (Angular):

```bash
cd frontend
pnpm install
pnpm start
```

## CI/CD Strategy

- Branches:
  - `master` ( production )
  - `staging`
  - `dev`
  - Feature branches should branch from `dev`
