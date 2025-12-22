# Use lightweight Node.js image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy dependency definitions first (layer caching)
COPY package.json package-lock.json* ./

# Install only production dependencies
RUN npm install --only=production

# Copy application source
COPY . .

# Expose application port (adjust if needed)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
