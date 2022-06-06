# APP Ficha de Treino 

`TECNÓLOGO EM ANÁLISE DE DESENVOLVIMENTO DE SISTEMA`

`DESENVOLVIMENTO DE UM APLICAÇÃO INTERATIVA`

`EIXO 3`

## Objetivo do Trabalho

```bash
Desenvolvimento de uma aplicação móvel em um ambiente de negócio.
```

## Integrantes

* Matheus Silvino de Souza
* Stephanie da Silva Cendrethe
* Ryan Souza Camargos de Oliveira
* Ana Maria Teixeira do Carmo
* Daniel Silvério de Assis Júnior
* Fernanda Salles Furtado

## Orientador

* Mateus Curcino De Lima

## Instruções de utilização

O aplicativo foi desenvolvido inicialmente utilizando a função snack do expo go, e esse desenvolvimento encontra-se na pasta <a href="etapa 4/elaboração expo go snack"> etapa 4/elaboração expo go snack </a> seguindo os aprendizados do microfundamento "Desenvolvimento de uma aplicação móvel", cada integrante continuava a partir do link com o codigo em que o outro parou. <br>
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




Assim que a primeira versão do sistema estiver disponível, deverá complementar com as instruções de utilização. Descreva como instalar eventuais dependências e como executar a aplicação.


# Documentação

<ol>
<li><a href="docs/01-Documentação de Contexto.md"> Documentação de Contexto</a></li>
<li><a href="docs/02-Especificação do Projeto.md"> Especificação do Projeto</a></li>
<li><a href="docs/03-Metodologia.md"> Metodologia</a></li>
<li><a href="docs/04-Projeto de Interface.md"> Projeto de Interface</a></li>
<li><a href="docs/05-Arquitetura da Solução.md"> Arquitetura da Solução</a></li>
<li><a href="docs/06-Template Padrão da Aplicação.md"> Template Padrão da Aplicação</a></li>
<li><a href="docs/07-Programação de Funcionalidades.md"> Programação de Funcionalidades</a></li>
<li><a href="docs/08-Plano de Testes de Software.md"> Plano de Testes de Software</a></li>
<li><a href="docs/09-Registro de Testes de Software.md"> Registro de Testes de Software</a></li>
<li><a href="docs/10-Plano de Testes de Usabilidade.md"> Plano de Testes de Usabilidade</a></li>
<li><a href="docs/11-Registro de Testes de Usabilidade.md"> Registro de Testes de Usabilidade</a></li>
<li><a href="docs/12-Apresentação do Projeto.md"> Apresentação do Projeto</a></li>
<li><a href="docs/13-Referências.md"> Referências</a></li>
</ol>
