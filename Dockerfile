FROM node:alpine
    COPY . /src
    WORKDIR /src
    CMD ["node", "/index.js"]
    CMD node index.js