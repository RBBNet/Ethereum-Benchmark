## Rodar um teste de stress de forma rápida
Este repositório tem o intuito de tirar a dependência do docker no teste de estresse da lacchain: https://github.com/lacchain/Ethereum-Benchmark.  

## Requisito 

* node js version 12


## Como usar

* Passo 1: Clonar o projeto para a sua máquina 



* Passo 2: Acessar a pasta server1 e adicionar o seu nó Rpc na variável RPC_URL: "" dentro do arquivo key.js
```
RPC_URL: ""
```
* Passo 3: Execute o "npm install" ainda dentro da pasta server1
```
npm install
```
* Passo 4 :Execute node index.js para iniciar o teste
```
node index.js
```
