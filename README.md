Como rodar esta aplicação?

Para rodar o backend
1 - No arquivo appsettings.json , digite sua conexão do banco de dados localhost do sql server
2-  Excluir todos os arquivos dentro da pasta Migrations 
2 - Abrir o console nuget do visual studio (Package Manager Console)
3- Digitar Add-Migration Migrations
4- Em seguida, digitar Update-Database
5 -  apertar f5 para rodar a API

Para rodar o front end:
1 - instalar a ultima versão do pacote do node 
2 - instalar a ultima versão do pacote do angular 
3 - abrir o vs code
4 - abrir o terminal powershell 
5 - copiar a pasta (..\projetosAngular\rotaViagem) em um diretorio separado
6- abrir esse diretorio separado no terminal
7 - digitar npm install bootstrap --save
8 -digitar npm install
9- digitar npm run ng serve
10 - angular vai mostrar o link localhost 
11 - digitar esse link em um browser
12 - complete esse link com \rotas\index
