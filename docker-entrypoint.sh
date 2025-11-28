#!/bin/sh
set -e

echo "Running database migrations..."
node build/ace.js migration:run --force

echo "Running database seeders..."
node build/ace.js db:seed --force || echo "Seeders already run or no seeders found"

echo "Starting application..."
exec node build/bin/server.js
