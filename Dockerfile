
## Node alpine
FROM cypress/included:9.4.1 AS environment-spec
## Variáveis 
ENV DEVELOPMENT_DIR=/usr/local/environment-spec
ENV DEVELOPMENT_PORT=9000

## diretorios de trabalho
WORKDIR ${DEVELOPMENT_DIR}

## Arquivos de iniciacao par ao node
COPY package*.json ./

## install dependences
RUN npm install

## Copia projeto
COPY . .

## porta de acesso
EXPOSE ${DEVELOPMENT_PORT}  

## diretorio padrao
VOLUME ${DEVELOPMENT_DIR}

## start do ambiente
CMD ["npm", "run", "development"]