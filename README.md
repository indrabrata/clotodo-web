# Clotodo Web - Complete Setup Guide

## Step 1: Database Setup

```bash
# Start PostgreSQL using Docker Compose
docker compose -f compose.dev.yaml up -d
```

## Step 2: Install Dependencies

```bash
# Install Leiningen dependencies
lein deps

# Install shadow-cljs globally (optional but recommended)
npm install -g shadow-cljs

# Install npm dependencies for shadow-cljs
npm init -y
npm install --save-dev shadow-cljs
```

## Step 3: Run Database Migrations

```bash
# Run migrations using Leiningen
lein migratus migrate

# If you encounter issues, check your database connection in project.clj
```

## Step 4: Start Development Environment

### Terminal 1: Start Backend Server

```bash
lein run
# Backend will start on http://localhost:3000
```

### Terminal 2: Start Frontend Development Server

```bash
# Using shadow-cljs watch
npx shadow-cljs watch app

# Or if installed globally
shadow-cljs watch app

# Frontend will be available at http://localhost:8080
```

## Step 5: Access the Application

Open your browser and navigate to:

- Frontend: [http://localhost:8080](http://localhost:8080)
- Backend API: [http://localhost:3000/api](http://localhost:3000/api)

## Project Structure Overview

```md
clotodo-web/
├── project.clj              # Leiningen configuration
├── shadow-cljs.edn          # ClojureScript build config
├── resources/
│   ├── public/
│   │   ├── index.html       # Main HTML file
│   │   └── css/
│   │       └── style.css    # Application styles
│   ├── migrations/          # Database migration files
│   └── sql/
│       └── queries.sql      # HugSQL queries
├── src/
│   ├── clj/clotodo_web/         # Backend Clojure code
│   │   ├── core.clj         # Main application entry
│   │   ├── handler.clj      # HTTP handlers & routes
│   │   ├── db.clj           # Database connection
│   │   └── auth.clj         # Authentication logic
│   └── cljs/clotodo_web/        # Frontend ClojureScript code
│       ├── core.cljs        # Main app component
│       ├── state.cljs       # Application state
│       ├── api.cljs         # API client
│       ├── router.cljs      # Client-side routing
│       └── views/           # React components
│           ├── auth.cljs    # Login/Signup views
│           ├── dashboard.cljs  # Dashboard view
│           └── room.cljs    # Room/Todo view

```

## Development Workflow

### Backend Development

The backend uses Ring with auto-reload. Any changes to `.clj` files will require a restart:

```bash
# Stop the server (Ctrl+C) and restart
lein run
```

For faster development, you can use a REPL:

```bash
lein repl
# In REPL:
(require '[clotodo-web.core :as core])
(def system (core/system {:port 3000 :db {...}}))
(alter-var-root #'system component/start)
```

### Frontend Development

Shadow-cljs provides hot module reloading. Changes to `.cljs` files are automatically compiled and reloaded:

```bash
# Shadow-cljs automatically watches for changes
npx shadow-cljs watch app
```

## Building for Production

### Backend

```bash
# Create uberjar
lein uberjar

# Run the uberjar
java -jar target/uberjar/clotodo-web-0.1.0-SNAPSHOT-standalone.jar
```

### Frontend

```bash
# Build optimized production bundle
npx shadow-cljs release app

# The compiled JS will be in resources/public/js/main.js
```

### Deploy

For production deployment, you'll need to:

1. Set up environment variables for database credentials
2. Configure the secret key for JWT in `auth.clj`
3. Set up a reverse proxy (nginx) to serve both frontend and backend
4. Use a process manager like systemd or supervisord

## Common Commands

```bash
# Database migrations
lein migratus create create-new-table  # Create new migration
lein migratus migrate                  # Run pending migrations
lein migratus rollback                 # Rollback last migration

# Backend
lein run                               # Start server
lein test                              # Run backend tests
lein uberjar                           # Build production JAR

# Frontend
npx shadow-cljs watch app              # Development mode with hot reload
npx shadow-cljs release app            # Production build
npx shadow-cljs compile app            # One-time compilation
npx shadow-cljs cljs-repl app          # ClojureScript REPL
```

## Configuration

### Database Configuration

Edit `project.clj` to update database settings:

```clojure
:migratus {:store :database
            :migration-dir "migrations"
            :db {:dbtype "postgresql"
                :dbname "clotodo_web"
                :host "localhost"
                :port 5432
                :user "postgres"
                :password "postgres"}}
```

### JWT Secret

Update the secret in `src/clj/clotodo/auth.clj`:

```clojure
(def secret "your-secret-key-change-in-production")
```

For production, use environment variables:

```clojure
(def secret (or (System/getenv "JWT_SECRET") "fallback-secret"))
```

### API URL

Update the API URL in `src/cljs/clotodo/api.cljs` for production:

```clojure
(def api-url (or (.-API_URL js/window) "http://localhost:3000/api"))
```

## Testing the Application

### 1. Create an Account

1. Navigate to [http://localhost:8080](http://localhost:8080)
2. Click "Sign Up" tab
3. Enter email, username, and password
4. Click "Sign Up"

### 2. Create a Room

1. After login, click "+ Create Room"
2. Enter room name
3. Choose "Public" or leave unchecked for private
4. Click "Create"
5. For private rooms, note the access code displayed

### 3. Add Todos

1. Click on a room card
2. Enter todo title and optional description
3. Click "Add Todo"
4. Check/uncheck todos to mark as done
5. Click × to delete todos

### 4. Join a Room

1. Click "Join Room" on dashboard
2. Enter the access code from a private room
3. Click "Join"

## API Endpoints

### Authentication

- `POST /api/auth/signup` - Create new user
  ```json
  {
    "email": "user@example.com",
    "username": "username",
    "password": "password"
  }
  ```

- `POST /api/auth/signin` - Login
  ```json
  {
    "email": "user@example.com",
    "password": "password"
  }
  ```

### Rooms

- `GET /api/rooms` - Get user's rooms (requires auth)
- `POST /api/rooms` - Create new room (requires auth)
  ```json
  {
    "name": "My Room",
    "is_public": false
  }
  ```

- `POST /api/rooms/join` - Join room with code (requires auth)
  ```json
  {
    "access_code": "ABCD1234"
  }
  ```

### Todos

- `GET /api/rooms/:room-id/todos` - Get todos for room (requires auth)
- `POST /api/rooms/:room-id/todos` - Create todo (requires auth)
  ```json
  {
    "title": "Buy groceries",
    "description": "Milk, eggs, bread"
  }
  ```

- `PUT /api/todos/:todo-id/toggle` - Toggle todo status (requires auth)
- `DELETE /api/todos/:todo-id` - Delete todo (requires auth)

## Environment Variables

For production deployment, use environment variables:

```bash
# .env file (not committed to git)
DATABASE_URL=postgresql://user:pass@localhost:5432/clotodo
JWT_SECRET=your-very-secure-secret-key-here
PORT=3000
NODE_ENV=production
```