# Use a Node.js base image
FROM node:20.18.1

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose Vite's default development port
EXPOSE 80

# Command to start the development server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "80"]