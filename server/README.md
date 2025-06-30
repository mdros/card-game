# Card Game Backend Server

A GraphQL server built with Apollo Server, Prisma, and TypeScript for a Star Wars card game.

## Tech Stack

- **Runtime**: Node.js with TypeScript
- **GraphQL**: Apollo Server
- **Database**: PostgreSQL with Prisma ORM
- **Testing**: Jest with ts-jest

## Project Structure

```
server/
├── src/
│   ├── index.ts          # Server entry point
│   ├── schema.ts         # GraphQL schema definitions
│   └── resolvers.ts      # GraphQL resolvers
├── prisma/
│   ├── schema.prisma     # Database schema
│   ├── seed.ts           # Database seeding
│   └── migrations/       # Database migrations
├── tests/
│   └── resolvers.test.ts # Resolver unit tests
└── package.json
```

## Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Database setup**:
   ```bash
   npx prisma generate
   npx prisma migrate dev
   npx prisma db seed
   ```

3. **Environment variables**:
   Create a `.env` file with your database connection string:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/cardgame"
   ```

## Development

- **Start development server**: `npm run dev`
- **Build for production**: `npm run build`
- **Start production server**: `npm start`

## Testing

- **Run tests**: `npm test`
- **Test files**: Located in `tests/` directory
- **Test configuration**: Jest with ts-jest preset

### Test Structure

Tests use Jest globals and mock Prisma client for isolated unit testing:

```typescript
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
```

## API Endpoints

### GraphQL Queries

- `people(page: Int, limit: Int)`: Get paginated list of people
- `starships(page: Int, limit: Int)`: Get paginated list of starships

### Example Query

```graphql
query GetPeople {
  people(page: 1, limit: 10) {
    people {
      id
      name
      attack
    }
    total
  }
}
```

## Database Schema

- **Person**: id, name, attack
- **Starship**: id, name, crew, model

## Docker Support

The server can be run with Docker Compose (see root `docker-compose.yml`).
