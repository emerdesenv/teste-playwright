## Temas Abordados neste Projeto PlayWright

* Testes E2E
* Testes com Multiplos Navegadores
* Testes Mobile (Web)
* GitHub Actions
* MongoDB Clound Cypress

## Primeios passos após o clone do Projeto

* Realizar o clone do projeto na sua máquina e colocar o mesmo dentro de uma pasta chamada **projetos**
* Abrir o projeto no **Visual Studio Code** ou algum editdor de sua preferência
* No terminal do **Visual Studio Code** rodar o comando: **npm init playwright@latest**
- No processo de instalação o mesmo irá perdir algumas configurações, basta seguir o passo a passo até o final

## Configuração para testes de API (localhost)

* Rodar o comando **npx serverest@latest** em um terminal do seu sistema operacional
* Ao rodar na primeira vez este comando o mesmo irá realizar o download dos pacotes necessários e após isso o mesmo irá rodar o servidor local
* A API irá rodar na porta **http://localhost:3000/**

## Instalação das Tecnologias

* **Observações**: Se você já tiver o arquivo **package.json** o mesmo pode ser implementado as instruções em **devDependencies**
* **Observações**: Se você não tiver o arquivo **package.json** crie o com o comando: **npm init -y** e depois **npm install**

* Rodar o comando no terminal: **npm install @faker-js/faker --save-dev** para instalar o FakerJS

## Documentações de Referências

* **PlayWright** - https://playwright.dev/
* **Site de Testes** - https://www.saucedemo.com/
* **GitHub Actions** - https://docs.github.com/pt/actions
* **MongoDB Clound Cypress** - https://www.npmjs.com/package/cypress-mongodb

## Rodando os Testes localmente

* Comando para rodar os testes: **npx playwright test**
* Comando para rodar os testes com tag: **npx playwright test --grep '@login'**
* Comando para abrir a interface: **npx playwright test --ui**
* Comando para abrir o debug: **npx playwright test --debug**
* Rodar o comando: **node app.js** para rodar a API com a conexão com o **MongoDB Clound**

## Extensões para o Visual Studio Code

* **Playwright Test for VSCode** - faz basicamente o mesmo papel do UI

## Estudos Futuros

* Geolocalização em Testes - Usado para simular a localidade em certo lugar
* Parallelism - Melhor conceito de como funciona o fluxo dos testes