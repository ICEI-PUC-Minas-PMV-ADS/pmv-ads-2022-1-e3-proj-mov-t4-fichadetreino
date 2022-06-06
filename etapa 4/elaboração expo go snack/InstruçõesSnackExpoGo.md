O aplicativo foi desenvolvido inicialmente utilizando a função snack do expo go, e esse desenvolvimento encontra-se na pasta <a href="etapa 4/elaboração expo go snack"> /etapa 4/elaboração expo go snack </a> seguindo os aprendizados do microfundamento "Desenvolvimento de uma aplicação móvel", cada integrante continuava a partir do link com o codigo em que o outro parou. <br>
A versão final está no link https://snack.expo.dev/@matheussilvino/ficha-de-treino-etapa-4.<br>
O banco de dados foi feito utilizando o recurso JSON Server conforme a documentação disponível em https://github.com/typicode/json-server<br>
<br>
Para utilização é necessário realizar o download dos arquivos na pasta <a href="etapa 4/JsonServer"> JsonServer</a> e realizar a instalação e execução dos comandos no terminal:

Instalação:<br>
npm install -g json-server<br>
npm install -g json-server-auth<br>
npm install -g localtunnel<br>

Execução:<br>
json-server-auth db.json<br>
lt --port 3000<br>

Após a execução será retornada uma URL que deverá ser inserida no arquivo <a href="etapa 4/elaboração expo go snack/src/services/urls.js">urls.js</a>
Com isso, será possível realizar os testes a partir do <a href="https://snack.expo.dev/@matheussilvino/ficha-de-treino-etapa-4">link do snack do expo go</a>.
