# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Database Commands

- `docker-compose up -d` - Start PostgreSQL database in Docker
- `docker-compose down` - Stop PostgreSQL database
- `docker ps` - Check if PostgreSQL container is running
- `node ace migration:run` - Run database migrations
- `node ace migration:rollback` - Rollback last migration
- `node ace migration:fresh` - Drop all tables and re-run migrations
- `node ace db:seed --files=database/seeders/production_backup_seeder.ts` - Restore production data with all images

### Core Commands

- `pnpm dev` - Start development server with HMR
- `pnpm build` - Build the application for production
- `pnpm start` - Start production server
- `pnpm test` - Run all tests using Japa
- `pnpm lint` - Lint code using ESLint
- `pnpm format` - Format code using Prettier
- `pnpm typecheck` - Run TypeScript type checking

### Testing

- `node ace test` - Run all test suites
- Test files are located in `tests/unit/**/*.spec.ts` and `tests/functional/**/*.spec.ts`
- Unit tests timeout after 2 seconds, functional tests after 30 seconds

### Documentation

- `pnpm docs:dev` - Start VitePress docs development server
- `pnpm docs:build` - Build documentation
- `pnpm docs:preview` - Preview built documentation

## Project Architecture

This is an **AdonisJS + React full-stack starter kit** using Inertia.js for seamless client-server communication.

### Backend Architecture (AdonisJS 6)

- **Entry point**: `start/routes.ts` - defines HTTP routes
- **Controllers**: `app/controllers/` (not yet created)
- **Models**: `app/models/` - Lucid ORM models (User model exists)
- **Middleware**: `app/middleware/` - authentication and request processing
- **Config**: `config/` - application configuration files
- **Database**: `database/migrations/` - Lucid database migrations

### Frontend Architecture (React 19 + Inertia.js)

- **Entry point**: `resources/js/app/app.tsx` - Inertia React setup
- **Pages**: `resources/js/pages/` - Inertia page components
- **Components**: `resources/js/components/` - reusable React components
- **UI Components**: `resources/js/components/ui/` - ShadCN UI components
- **Styles**: `resources/css/app.css` - Tailwind CSS entry point

### Key Integrations

- **Inertia.js**: Connects AdonisJS backend with React frontend seamlessly
- **ShadCN UI**: Pre-built accessible components with Tailwind CSS
- **Tailwind CSS 4**: Utility-first styling with CSS variables for theming
- **TypeScript**: Full type safety across frontend and backend
- **Vite**: Fast build tool with HMR for React components

## File Structure Patterns

### Path Aliases

- `#controllers/*` → `./app/controllers/*.js`
- `#models/*` → `./app/models/*.js`
- `#middleware/*` → `./app/middleware/*.js`
- `#config/*` → `./config/*.js`
- `@/*` → `./resources/js/*` (frontend only)

### Import Conventions

- Use path aliases for cleaner imports
- Backend uses `.js` extensions in imports (TypeScript compilation target)
- Frontend uses standard React/TypeScript import patterns

## Development Workflow

### Adding New Features

1. **Backend**: Create controllers in `app/controllers/`, add routes in `start/routes.ts`
2. **Database**: Create migrations with `node ace make:migration`
3. **Frontend**: Add pages in `resources/js/pages/`, components in `resources/js/components/`
4. **Types**: Shared types go in `shared/types.ts`

### Authentication

- Session-based authentication is configured
- Auth middleware available: `auth_middleware.ts`, `guest_middleware.ts`, `silent_auth_middleware.ts`
- User model exists in `app/models/user.ts`

### UI Development

- Uses ShadCN UI components with Tailwind CSS
- Components use CSS variables for theming (see `tailwind.config.cjs`)
- Dark mode support configured with class-based toggle

### Hot Reloading

- Hot Hook configured for controllers and middleware
- Vite HMR for React components
- Edge template reloading configured

## Planned Features

### tRPC Integration

- Routes commented out in `start/routes.ts`: `router.any('/trpc/*', [TrpcController, 'handle'])`
- Full-stack type safety planned with tRPC integration
- Would provide end-to-end TypeScript types from backend to frontend

## Configuration Notes

- **Database**: PostgreSQL configured via Lucid ORM
  - Docker setup available via `docker-compose.yml`
  - Default credentials: user=`root`, password=`root`, db=`adonisjs_react_starter_kit_db`
  - Container name: `adonisjs_postgres`
  - Port: `5432`
- **Session**: File-based session storage configured
- **CORS**: Enabled for cross-origin requests
- **Security**: Shield middleware for CSRF protection
- **Static Assets**: Served from `public/` directory
- **Build**: Uses SWC for fast TypeScript compilation

## Database Setup with Docker

The project includes a `docker-compose.yml` file for easy PostgreSQL setup:

1. Start the database: `docker-compose up -d`
2. Run migrations: `node ace migration:run`
3. Stop the database: `docker-compose down`

Database credentials are configured in `.env`:
- Host: `127.0.0.1`
- Port: `5432`
- User: `postgres`
- Password: `postgres`
- Database: `postgres` (or create your own database)

## What are Migrations?

Migrations are version-controlled database schema changes. They:
- Automatically create and modify database tables
- Keep track of database structure history
- Allow team collaboration with consistent database schemas
- Make deployment across environments easy

This project includes 2 migrations:
1. `create_users_table` - Creates the users table with email, password, name fields
2. `create_remember_me_tokens_table` - Creates tokens for "remember me" functionality

## Coolify Deployment

This project is configured for deployment on Coolify (self-hosted PaaS).

### Deployment Method: Dockerfile

The project uses a multi-stage Dockerfile for optimized production builds:
- **Base**: Node.js 22 Alpine with pnpm
- **Deps**: Install dependencies
- **Builder**: Build the application with `node ace build --ignore-ts-errors`
- **Runner**: Production image with only built files

### Coolify Setup

1. **Create PostgreSQL Database**:
   - Resources → New → Database → PostgreSQL 16
   - Start the database
   - Get the internal IP: Terminal → `hostname -i`

2. **Create Application**:
   - Resources → New → Application
   - Source: GitHub repository
   - Build Pack: **Dockerfile**
   - Port Exposes: **3333**

3. **Environment Variables**:
   ```
   NODE_ENV=production
   APP_ENV=production
   HOST=0.0.0.0
   PORT=3333
   APP_KEY=<generate with: node ace generate:key>
   DB_HOST=<PostgreSQL internal IP from step 1>
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=<coolify generated password>
   DB_DATABASE=postgres
   DATABASE_CONNECTION=pg
   SESSION_DRIVER=cookie
   LOG_LEVEL=info
   TZ=UTC
   VITE_APP_NAME=<App Name>
   VITE_BACKEND_URL=/api/
   ```

4. **Configure Domain**: Add your domain in the Domains tab

5. **Deploy**: Click Redeploy

### Post-Deployment Commands (via Coolify Terminal)

```bash
# Run migrations
node ace migration:run --force

# Run seeds (if any)
node ace db:seed

# Restore production data (services, pages, testimonials, footer)
node ace db:seed --files=database/seeders/production_backup_seeder.ts

# Full reset with production data
node ace migration:fresh --force && node ace db:seed --files=database/seeders/production_backup_seeder.ts

# Rollback migrations
node ace migration:rollback

# Fresh migration (drop all + re-run)
node ace migration:fresh --force
```

### Network Configuration

- Use the **internal IP** of PostgreSQL (found via `hostname -i` in DB terminal)
- Both services communicate over Docker's internal network (secure, not exposed)
- Domain and SSL are managed automatically by Coolify via Traefik

### Production URL

- **Domain**: https://mariejobard.miraubolant.com/
