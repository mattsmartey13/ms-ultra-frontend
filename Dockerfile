# Use a Node.js base image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the development server port
EXPOSE 3000

# Run the development server
CMD ["npm", "start"]
