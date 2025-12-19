FROM node:18

WORKDIR /app

# Copy package.json first for caching node_modules
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app (needed for initial build)
COPY . .

# Expose React dev server port
EXPOSE 3000

# Default command
CMD ["npm", "start"]