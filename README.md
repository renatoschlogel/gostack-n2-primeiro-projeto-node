# gostack-n2-primeiro-projeto-node

## Primeiro projeto com Node.js e TypeScript 

Projeto Node.js e TypeScript, incluindo ferramentas como ts-node-dev, ESLint, Prettier e EditorConfig.


# Passado a passo 
  
## Configurando Estrutura

  Criando e configurando um projeto node com typescript

  1. Criar pasta e acessa-la;
  2. iniciar projeto node     : yarn init -y;
  3. Adicionar express        : yarn add express;
  4. Adicionar o typescript   : yarn add typescript -D;
  5. iniciar configuração do typescript (tsconfig.json): yarn tsc --init;
  6. Criar pasta src ;
  7. apostar esta pasta no tsconfig.json;
     "outDir": "./dist",
     "rootDir": "./src",
  8. Comando para converter os qrquivos ts em js: yarn tsc;
  9. instalar a lib de tipos do express: yarn add @types/express -D;
  10. Adicionar ts-node-dev: yarn add ts-node-dev -D;
  11. Configurar Scrips build e dev:server  no package.json;
  12. utilizar o comando a seguir par starta o server de dev: yarn dev:server;


## EditorConfig
  
  Ferramenta para padronizar configurações entre diferentes editores de codigo;

  1. Instalar plugin EditorConfig no VcCode;
  2. Clicar com botão direito na raiz do projeto e e selecionar o Generate .editorConfig;
    * sera gerado o arquivo .editorConfig;