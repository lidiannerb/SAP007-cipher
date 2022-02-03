# Sistema de Rotas

## Índice

- [1. Resumo do projeto](#1-resumo-do-projeto)
- [2. Objetivo](#2-objetivo)
- [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)

---

## 1. Resumo do projeto

A [Sitema de Rotas](linkdoprojeto) é uma ferramenta que pode ser utilizada em empresas que prestam serviço de transporte de valores. 
Seu uso é limitado ao cliente (contratante do serviço) e a empresa de transporte (somente Motoristas e o Departamento de Monitoramento de Rotas).
Os usuários trocam informações via mensagem de texto por aplicativo de celular através de mensagem codificada, ou seja, antes de trocar qualquer tipo de informação sobre o trajeto dos veículos, codificam ou descodificam suas mensagens através da ferramenta.

Os clientes utilizam a ferramenta para cifrar o ponto de retirada e de entrega de valores utilizando o seguinte padrão.
 
- [ ] **NOME DA EMPRESA (letra maiúscula)**
- [ ] **RETIRADA (letra maiúscula) nome do bairro (letra minúsula)**
- [ ] **ENTREGA (letra maiúscula) nome do bairro (letra minúsula)**

As mensagens não podem conter acentos ou caracteres especiais.

As localidades exatas (nome da rua, número, cep) utilizadas por cada cliente são cadastradas em outro sistema de segurança. O departamento que monitora as rotas utiliza o mesmo padrão para informar aos motoristas qual será o trajeto de cada empresa. Os motoristas devem informar qualquer tipo de ocorrência no trajeto também através de mensagens codificadas.

A chave para cifrar e decifrar é definida pelo cliente a cada envio de nova rota. O departamento repassa essa informação aos motoristas.
 
## 2. Objetivo

O objetivo é prevenir que qualquer outra pessoa de ambas as empresas (contratada e contratante), que não estiverem envolvidas no processo, tenham acesso às rotas dos veículos que transportam grandes quantias de dinheiro em espécie, evitando assim, que qualquer tipo de sinistro seja proveniente do vazamento dessas informações.

## 3. Objetivos de aprendizagem

Esses foram os objetivos de aprendizagem alcançados no projeto

### HTML

- [ ] **Uso de HTML semântico**

    <details><summary>Links</summary><p>

  - [HTML semántico](https://curriculum.laboratoria.la/pt/topics/html/02-html5/02-semantic-html)
  - [Semantics in HTML - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
  </p></details>

### CSS

- [ ] **Uso de seletores de CSS**

    <details><summary>Links</summary><p>

  - [Intro a CSS](https://curriculum.laboratoria.la/pt/topics/css/01-css/01-intro-css)
  - [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
  </p></details>

- [ ] **Empregar o modelo de caixa (box model): borda, margem, preenchimento**

    <details><summary>Links</summary><p>

  - [Modelo de Caixa e Display](https://curriculum.laboratoria.la/pt/topics/css/01-css/02-boxmodel-and-display)
  - [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  - [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  - [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
  </p></details>

### Web APIs

- [ ] **Uso de seletores de DOM**

    <details><summary>Links</summary><p>

  - [Modificando o DOM](https://curriculum.laboratoria.la/pt/topics/browser/02-dom/03-1-dom-methods-selection)
  - [Introdução ao DOM - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction)
  - [Locating DOM elements using selectors - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
  </p></details>

- [ ] **Gerenciamento de eventos de DOM**

    <details><summary>Links</summary><p>

  - [Introdução a eventos - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Events)
  - [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener)
  - [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/removeEventListener)
  - [El objeto Event](https://developer.mozilla.org/pt-BR/docs/Web/API/Event)
  </p></details>

- [ ] **Manipulação dinâmica de DOM**

    <details><summary>Links</summary><p>

  - [Introdução ao DOM](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM/Introdu%C3%A7%C3%A3o)
  - [Node.appendChild() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild)
  - [Document.createElement() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement)
  - [Document.createTextNode()](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createTextNode)
  - [Element.innerHTML - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML)
  - [Node.textContent - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent)
  </p></details>

### JavaScript

- [ ] **Tipos de dados primitivos**

    <details><summary>Links</summary><p>

  - [Valores Primitivos - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures#valores_primitivos)
  </p></details>

- [ ] **Strings (cadenas de caracteres)**

    <details><summary>Links</summary><p>

  - [Strings](https://curriculum.laboratoria.la/pt/topics/javascript/06-strings)
  - [String - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String)
  </p></details>

- [ ] **Variáveis (declaração, atribuição, escopo)**

    <details><summary>Links</summary><p>

  - [Valores, tipos de dados e operadores](https://curriculum.laboratoria.la/pt/topics/javascript/01-basics/01-values-variables-and-types)
  - [Variáveis](https://curriculum.laboratoria.la/pt/topics/javascript/01-basics/02-variables)
  </p></details>

- [ ] **Uso de condicionais (if-else, switch, operador ternário)**

    <details><summary>Links</summary><p>

  - [Estruturas condicionais e repetitivas](https://curriculum.laboratoria.la/pt/topics/javascript/02-flow-control/01-conditionals-and-loops)
  - [Tomando decisões no seu código — condicionais - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals)
  </p></details>

- [ ] **Uso de laços (for, for..of, while)**

    <details><summary>Links</summary><p>

  - [Laços (Loops)](https://curriculum.laboratoria.la/pt/topics/javascript/02-flow-control/02-loops)
  - [Laços e iterações - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration)
  </p></details>

- [ ] **Uso de funções (parâmetros, argumentos, valor de retorno)**

    <details><summary>Links</summary><p>

  - [Funções (controle de fluxo)](https://curriculum.laboratoria.la/pt/topics/javascript/02-flow-control/03-functions)
  - [Funções clásicas](https://curriculum.laboratoria.la/pt/topics/javascript/03-functions/01-classic)
  - [Arrow Functions](https://curriculum.laboratoria.la/pt/topics/javascript/03-functions/02-arrow)
  - [Funções — blocos reutilizáveis de código - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Functions)
  </p></details>

- [ ] **Testes unitários**

    <details><summary>Links</summary><p>

  - [Introdução ao Jest - Documentação oficial](https://jestjs.io/docs/pt-BR/getting-started)
  </p></details>

- [ ] **Uso ES modules**

    <details><summary>Links</summary><p>

  - [import - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import)
  - [export - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export)
  </p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descritivos (Nomenclatura | Semântica)**

### Git e GitHub

- [ ] **Git: Instalação e configuração**

- [ ] **Git: Controle de versão com git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **GitHub: Criação de contas e repositórios, configuração de chave SSH**

- [ ] **GitHub: Implantação com GitHub Pages**

    <details><summary>Links</summary><p>

  - [Site oficial do GitHub Pages](https://pages.github.com/)
  </p></details>

### UX (User eXperience)

- [ ] **Desenhar a aplicação pensando e entendendo o usuário**

- [ ] **Criar protótipos para obter feedback e iterar**

- [ ] **Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)**