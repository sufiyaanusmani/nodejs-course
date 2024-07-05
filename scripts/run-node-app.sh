#!/bin/bash

# Build Docker image
docker build -t node-lab-image .

# Run Docker container with volume mount and auto-remove
docker run -it --rm \
  -v "$(pwd)":/app \
  -p 3000:3000 \
  --name node-lab-container \
  node-lab-image

# Wait a few seconds before stopping and removing the container
sleep 5s
docker rmi node-lab-image