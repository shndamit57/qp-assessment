# Use an official Node.js image as a base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Install TypeScript globally to compile TypeScript code (if needed)
RUN npm install -g typescript

# Compile TypeScript code (if needed)
RUN tsc

# Expose the port the app will run on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
