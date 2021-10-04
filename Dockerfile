FROM node:8.11.1

# アプリのディレクトリ
WORKDIR /app

COPY package*.json ./

# node_module インストール
RUN npm install

# DockerfileのあるディレクトリからWORKDIRへコピー
COPY ./weblog/ .

EXPOSE 8000

CMD ["npm", "start" ]
