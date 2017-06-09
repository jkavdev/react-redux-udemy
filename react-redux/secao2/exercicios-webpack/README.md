Criar o descritor do projeto - package.json

	npm init -y

Instalando a dependencia do webpack

	npm i --save-dev webpack@1.14.0

Instalando a dependencia do webserver

	npm i --save-dev webpack-dev-server@1.16.2

Instalando as duas dependencias ao mesmo tempo, apenas para desenvolvimento

	npm i --save-dev webpack@1.14.0 webpack-dev-server@1.16.2

Uma vez que é instalando as dependencias, eh alterado o package.json com a dependencias do projeto
E quando for rodar o projeto novamente apenas utilize o comando
 
	npm i

Adicionando arquivo gitignore, com a definicao do node_modules, criado pelo comando acima

	node_modules
	*.log
	