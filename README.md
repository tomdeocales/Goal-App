# Tech Stack: Frontend - REACT, Backend - Node.js, Express, PostgreSQL

# Setup

## Environment Variables
Create an `.env` file in the root directory and configure the required environment variables:

```bash /server
PORT=5000
DOCKER_PASSWORD=
DOCKER_USER=
DOCKER_NAME=
DOCKER_PORT=5434
DATABASE_URL=
```

## Database setup
Create a PostgreSQL database
You can set up a PostgreSQL database using your preferred method:

Using Docker (Optional):
```bash /server
// make sure to copy the required environment variables for docker from env-sample

docker compose up
// to close the container
docker compose down
```

Create table initialization:
```bash /server
node config/initDb.js
```
Run backend server:
```bash /server
npm run dev
```

## Running the React Application
Development Mode
```bash Main Root
npm start
```
