# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
FROM node:10
 
# A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
WORKDIR /home/f3rn4nd0/Escritorio/Tienda/frontend
 
# Installs all node packages


# Copies package.json and package-lock.json to Docker environment
COPY package*.json ./
 
RUN npm install -g @angular/cli
# Copies everything over to Docker environment
COPY . .
 
# Uses port which is used by the actual application
EXPOSE 4200
 
# Finally runs the application
CMD [ "npm", "run","start" ]