# Dockerfile (for Truffle)
FROM node:18

RUN apt-get update && apt-get install -y netcat-openbsd

WORKDIR /app

RUN npm install -g truffle

COPY ./contracts ./contracts
COPY ./migrations ./migrations
COPY ./truffle-config.js ./truffle-config.js
# Copy any other needed files, e.g., package.json if you have one

# No npm install here because Truffle global installed already

CMD ["tail", "-f", "/dev/null"]
# keep container alive for now
