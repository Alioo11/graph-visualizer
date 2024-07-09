# Base Image
FROM node:16-alpine AS build

# Set Working Directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Dependencies
RUN npm install

# Copy Source Code
COPY . .

# Build the Application
RUN npm run build

# Final Image
FROM node:16-alpine

# Set Working Directory
WORKDIR /app

# Copy Built Files from Build Stage
COPY --from=build /app/build ./build

# Expose Port
EXPOSE 3000

# Start the Application
CMD ["npm", "start"]
