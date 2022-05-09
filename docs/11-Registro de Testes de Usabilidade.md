# Registro de Testes de Usabilidade

Após realizar os testes de usabilidade, obtém-se um relatório a partir das análises realizadas. O Registro de Testes de Usabilidade é um relatório que contém as evidências dos testes e relatos dos usuários participantes, baseado no Plano de Testes de Usabilidade desenvolvido para os casos de uso desta etapa.

| **Caso de Teste** |**CT-01 - Fazer Login no sistema**| 
|---|----|
|Requisitos Associados | RNF-01 O sistema deve ser capaz de tratar exceções e se recuperar de falhas sem que haja perda de dados <br/> A tela deve ser visualizada com letras roxas e fundo branco, os botões abaixo dos campos para inserção de dados | 
|Objetivo do Teste | Não haver falhar irrecuperáveis |
|Passos |1) Acessar o aplicativo <br/> 2) Inserir e-mail e senha <br/> 3) Clicar em "entrar" <br/> 
|Critérios de Êxito | Validar que todas as telas carregaram corretamente. |
|Resultados obtidos | Requisito atendido  - A tela de login funcionou perfeitamente carregando os dados conforme o esperado sem erros. |

|**Caso de Teste** |**CT-02 - Cadastrar ficha de treino**| 
|---|----|
|Requisitos Associados | RNF-02 O aplicativo deverá ser fácil de ser compreendido, permitindo a visualização em um celular de forma adequada. |
|Objetivo do Teste | Ser intuitivo e fácil de ser visualizado |
|Passos |1) Acessar o aplicativo <br/> 2) Acessar a tela de login <br/> | 3) Realizar o login 4)Clicar em Menu Principal 5) Clicar em "+" 6) Adicionar ficha de treino 7) Salvar
|Critérios de Êxito |Ao acessar o aplicativo, ser fácil de ser manipulado sem ajuda |
|Resultados obtidos | Requisito atendido - As telas são intuitivas e fáceis de navegar |

|**Caso de Teste** |**CT-03 - Dados utilizados**| 
|---|----|
|Requisitos Associados | RNF-04 O sistema vai utilizar React Native,PHP,SQL.<br/> RNF-05 Será utilizada a ferramenta MYSQL Workbench para desenvolvimento e administração de base de dados. |
|Objetivo do Teste | Verificar se React, PHP e SQL estão funcionando de forma integrada. |
|Passos |1) Acessar o aplicativo <br/> 2) Inserir dados para cadastro <br/> 3) Fazer o login utilizando banco de dados. <br/> 4)Acessar ficha de treino já cadastrada | 
|Critérios de Êxito | Os usuários conseguirem acessar e utilizar todas as ferramentas do aplicativo de acordo com o que tiver sido salvo anteiormente. |
|Resultados obtidos | Requisito parcialmente atendido - Sistema utilizando React Native corretamente |

|**Caso de Teste** |**CT-04 - Resposta do aplicativo**| 
|---|----|
|Requisitos Associados | RNF-06 O sistema não poderá demorar mais de 4 segundos para carregar	<br/> 
|Passos | 1) Acessar o aplicativo <br/> 2) Acessar a tela de login <br/> | 3) Realizar o login 4)Clicar em Menu Principal <br/> 5) Acessar ficha de treino |
|Critérios de Êxito | O aplicativo deverá responder a todas as solicitações do usuário em até 4 segundos. |
|Resultados obtidos | Requisito atendido - As telas respondem rapidamente aos comando, retornado os dados solicitados.|
