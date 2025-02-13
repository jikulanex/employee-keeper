# Specify a base image.
FROM node:14-alpine

# Create app directory.
WORKDIR /usr/src/app

# Install app dependencies,
# A wildcard is used to ensure both package.json AND package-lock.json are copied where available (npm@5+),
COPY ./ /usr/src/app/

# Install angular cli package.
RUN npm install --global @angular/cli

# Install some dependencies.
RUN npm install

# If you are building your code for production,
# RUN npm ci --only=production

# Bundle app source
# COPY . .

EXPOSE 4200

# Default command.
CMD ["npm", "start"]
