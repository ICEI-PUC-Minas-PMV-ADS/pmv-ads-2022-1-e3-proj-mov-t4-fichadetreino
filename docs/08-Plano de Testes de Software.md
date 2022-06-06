# Plano de Testes de Software

Os requisitos para realização dos testes de software incluem: Instalar o aplicativo que será publicado na Play Store, Ter acesso a Internet.

Abaixo estão os testes a serem realizados:
 
## CASOS DE TESTES SUCESSO: 
<ol>

  | CASO DE TESTE| CT-01 – CRUD DE USUÁRIO EDUCADOR FÍSICO|
  |--------------|------------------------|
  |REQUISITOS ASSOCIADOS	|RF-001|
  |                                                   |
  |OBJETIVO DO TESTE	| Verificar se o cadastro do usuário ocorre sem erros. |
  |      |	1) Acessar a aplicação|
  |PASSOS| 2) Clicar em "cadastrar-me"|
  |      | 3) O usuário conseguirá acessar a página para realizar o cadastro e efetivará o cadastro com os dados solicitados|
  |                                                          |
  |CRITÉRIO DE ÊXITO| Após a efetivação do cadastro, o usuário deverá ser redirecionado a página de login|

 
|CASO DE TESTE |CT-02 – LOGIN DO EDUCADOR FÍSICO|
|--------------|-------------------------------------|
|REQUISITOS ASSOCIADOS	|RF-002 | 
|OBJETIVO DO TESTE|	Verificar se o login e ações para o usuário estão sendo realizados|
|      	|1)	Acessar a aplicação|
|       |2)	Clicar no botão de Login|
|       |3)	Realizar o Login|
|       |4)	Abrir perfil com fichas de alunos relacionada  usuário|
|PASSOS |5)	Alterar os dados de ficha de usuários|
|       |6)	Clicar em concluir|
|       |7)	Clicar no botão Excluir Conta|
|       |8)	Clicar em Concluir|
|       |9)	Sair da Conta|
|                 	| Quando o usuário logar, a aplicação apresentará o menu inicial com as fichas de alunos relacionados a esse educador físico|
|CRITÉRIO DE ÊXITO	| Após o login o usuário deverá ser capaz de editar e alterar as fichas de alunos relacionadas a esse educador físico|
|                 	| Quando necessário o usuário será capaz de excluir sua conta|
 
 
 
| CASO DE TESTE| CT-03 – CRUD DE EXERCÍCIOS FÍSICOS|
  |--------------|------------------------|
  |REQUISITOS ASSOCIADOS	|RF-003|
  |                                                   |
  |OBJETIVO DO TESTE	| Verificar se o cadastro do exercícios físicos ocorre sem erros. |
  |      |	1) Acessar a aplicação|
  |PASSOS| 2) Clicar no ícone de cadastro de exercícios físicos|
  |      | 3) O usuário conseguirá acessar a página para visualizar o cadastro com os dados dos exercícios físicos adicionados|
  |                                                          |
  |CRITÉRIO DE ÊXITO| Após a efetivação do cadastro, o usuário deverá ser redirecionado lista de atividades físicas|
 
 | CASO DE TESTE| CT-04 – VISUALIZAÇÃO DA TELA DE PERFIL|
  |--------------|------------------------|
  |REQUISITOS ASSOCIADOS	|RF-004|
  |                                                   |
  |OBJETIVO DO TESTE	| Verificar se a visualização do perfil do usuário ocorre sem erros. |
  |      |	1) Acessar a aplicação|
  |PASSOS| 2) Realizar login|
  |      | 3) Clicar no ícone para visualizar o seu perfil|
  |                                                          |
  |CRITÉRIO DE ÊXITO| Visualização da tela de perfil|
 
  | CASO DE TESTE| CT-05 – VISUALIZAÇÃO DA TELA DE USUÁRIOS CADASTRADOS|
  |--------------|------------------------|
  |REQUISITOS ASSOCIADOS	|RF-005|
  |                                                   |
  |OBJETIVO DO TESTE	| Verificar se a visualização dos usuários cadastrados ocorre sem erros. |
  |      |	1) Acessar a aplicação|
  |PASSOS| 2) Realizar login|
  |      | 3) Clicar no ícone para visualizar a lista de usuários cadastrados|
  |                                                          |
  |CRITÉRIO DE ÊXITO| Visualização da lista de usuários cadastrados|


 
 </ol>

 
## CASOS DE TESTE INSUCESSO: CT-01 (RF-001)
<ol>
 
 |CASO DE TESTE |	CT-01 – ERRO EM LOGIN E CADASTRO DE USUÁRIO| 
 |-------------|-----------------------|
 |REQUISITOS ASSOCIADOS	|RF-001|
 |OBJETIVO DO TESTE|Confirmar validação do formulário de cadastro e login|
 |                 |1) Acessar a aplicação|
 |Passos           |2) Clicar em "cadastre-me"|
 |                 |3) Digitar caracteres especiais|
 |                 |4) Clicar em "concluir cadastro"|
 |                  	| Clicar no botão cadastro e digitar caracteres especiais e validar se ocorre o redirecionamento para tela cadastro|
 |Critérios de Êxito	|	Clicar no botão login e digitar caracteres especiais e validar se ocorre o redirecionamento para tela cadastro|
 


  </ol>
 </ol>

 
