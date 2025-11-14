# Build
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
# Install serve to run the build
RUN npm install -g serve
EXPOSE 9090
# Serve the build folder on port 9090
CMD ["serve", "-s", "build", "-l", "9090"]