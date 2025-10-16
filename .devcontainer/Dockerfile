FROM node:20-bullseye

# Create a non-root user and group
RUN if ! getent group node > /dev/null; then groupadd -r node; fi && if ! id -u node > /dev/null 2>&1; then useradd -r -g node -m node; fi

# Set the working directory
WORKDIR /home/node/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Change ownership of the app directory
RUN chown -R node:node /home/node/app

# Switch to the non-root user
USER node

# Run the application
CMD [ "npm", "start" ]