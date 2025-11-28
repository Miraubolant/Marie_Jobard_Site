#!/bin/sh
set -e

echo "Starting application..."
exec node build/bin/server.js
