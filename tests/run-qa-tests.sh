#!/bin/bash
set -e

# Ensure the script runs from the project directory
cd "$(dirname "$0")/.."

# Kill any existing Next.js processes
pkill -f "next dev" || true

# Start Next.js development server in the background
npm run dev &
DEV_SERVER_PID=$!

# Wait for the server to start and be ready
max_attempts=30
attempt=0
while [ $attempt -lt $max_attempts ]; do
    if curl -s http://localhost:3000 > /dev/null; then
        echo "Development server is ready."
        break
    fi
    sleep 2
    ((attempt++))
done

if [ $attempt -eq $max_attempts ]; then
    echo "Development server did not start in time."
    kill $DEV_SERVER_PID
    exit 1
fi

# Run Playwright tests
npm run test:qa || TEST_RESULT=$?

# Kill the development server
kill $DEV_SERVER_PID

# Exit with the test result
exit ${TEST_RESULT:-0}