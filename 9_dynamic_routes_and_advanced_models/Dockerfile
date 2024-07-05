# Use the official Node.js 22 image from Docker Hub
FROM node:22

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 (adjust if your Node.js app runs on a different port)
EXPOSE 3000

# Start the Node.js application
CMD ["npm", "start"]
