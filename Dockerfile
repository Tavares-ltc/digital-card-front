# Definindo a imagem base do Node.js
FROM node:18

# Definindo o diretório de trabalho dentro do container
WORKDIR /app

# Copiando os arquivos de dependências do projeto e instalando
COPY package*.json ./
RUN npm install

# Copiando o código fonte para o container
COPY . .

# Compilando o código TypeScript para JavaScript
RUN npm run build

# Expondo a porta 3000 do container
EXPOSE 3000

# Iniciando o servidor Next.js
CMD ["npm", "start"]
