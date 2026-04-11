# teste_prova_nest


npm i -g @nestjs/cli

<!-- Criando o Projeto: -->
nest new biblioteca-api

Escolha: `Npm`

<!-- Entrando na Pasta -->

cd biblioteca-api

<!-- Rode para testar: -->

npm run start:dev

<!-- Instalando MySQL -->

npm install @nestjs/typeorm typeorm mysql2

<!-- se não der certo: -->
npm install @nestjs/typeorm@11 typeorm@0.3 mysql2

<!-- Criar módulo de Livro -->

nest g module livro
nest g controller livro
nest g service livro


<!-- Entrar na pasta biblioteca  -->

cd biblioteca-api

<!-- Rodar -->
npm run start:dev

<!-- Instalar Biblioteca SWAGGER -->
npm install @nestjs/swagger swagger-ui-express