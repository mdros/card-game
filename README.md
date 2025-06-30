# Card Game

A Star Wars card game built with Next.js frontend and GraphQL backend.

## Architecture

- **Frontend**: Next.js with TypeScript
- **Backend**: Apollo GraphQL Server with Prisma
- **Database**: PostgreSQL
- **Containerization**: Docker Compose

## Quick Start

### With Docker (Recommended)

```bash
# Start all services
docker-compose up

# Access the application
# Frontend: http://localhost:3000
# Backend: http://localhost:4000
```

### Manual Setup

1. **Backend**:
   ```bash
   cd server
   npm install
   npx prisma migrate dev
   npx prisma db seed
   npm run dev
   ```

2. **Frontend**:
   ```bash
   cd client
   npm install
   npm run dev
   ```

## Project Structure

```
card-game/
├── client/          # Next.js frontend
├── server/          # GraphQL backend
└── docker-compose.yml
```

## Services

- **Frontend**: Next.js app on port 3000
- **Backend**: Apollo GraphQL server on port 4000
- **Database**: PostgreSQL on port 5432

## Development

- **Frontend**: `cd client && npm run dev`
- **Backend**: `cd server && npm run dev`
- **Tests**: `cd server && npm test`

See individual README files in `client/` and `server/` directories for detailed information.
