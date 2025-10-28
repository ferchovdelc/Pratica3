Este repositório documenta a evolução de um site institucional para a ONG fictícia "Raio da Esperança". O projeto foi desenvolvido como uma experiência prática de competências avançadas em Front-End, transformando um protótipo estático numa Single Page Application (SPA) dinâmica, acessível e otimizada.
## Visão Geral do Projeto
O objetivo deste projeto é demonstrar o ciclo de vida completo do desenvolvimento front-end, desde a prototipagem rápida até uma aplicação web robusta (Prática 1, Prática 2 e Prática 3, incluindo o feature modo acessibilidade). A versão final (v3.0) é uma SPA construída com JavaScript puro (Vanilla JS), focada em performance, semântica e acessibilidade (Nível AA).
## Evolução do Projeto (Branches)

Este repositório está estruturado para mostrar diferentes abordagens técnicas, com cada versão principal num branch dedicado:
### 1. Pratica 1 (Protótipo Rápido)

- **Branch:** `master` (ou `main`)
- **Tecnologias:** HTML5 Semântico, **Tailwind CSS**.
- **Foco:** Agilidade e prototipagem. Entrega rápida de um site responsivo e visualmente agradável, utilizando um framework utility-first.
### 2. Pratica 2 (Design System Customizado)

- **Branch:** `versao-css3`
- **Tecnologias:** HTML5 Semântico, **CSS3 Puro (sem frameworks)**.
- **Foco:** Refatoração completa. Substituição do Tailwind CSS por um **Design System personalizado** construído com Variáveis CSS (`:root`), CSS Grid (layout de 12 colunas) e Flexbox (componentes). Implementação de componentes (Cards, Modals, Botões) do zero.
### 3. Versão 3.0 (SPA Acessível)
- **Branch:** `develop` (e `feature/acessibilidade-modo-escuro`)
- **Tecnologias:** HTML5 (casca única), CSS3 (com Modo Escuro), **JavaScript (ES6+)**. 
- **Foco:** Evolução para uma **Single Page Application (SPA)**.
    - Implementação de roteamento JavaScript e templates dinâmicos.
    - Manipulação avançada do DOM para validação de consistência de dados em formulários    
    - Foco total em **Acessibilidade (WCAG 2.1 Nível AA)**.
## Principais Funcionalidades e Competências Técnicas
Este projeto demonstra proficiência nas seguintes áreas:

- **Arquitetura SPA (Vanilla JS):**
    - Criação de um roteador baseado em `hashchange`.        
    - Sistema de templates JavaScript para renderização dinâmica de conteúdo no `<main>`.

- **Acessibilidade (WCAG 2.1 Nível AA):**
    - Implementação de navegação completa por teclado (visibilidade do `:focus-visible`).     
    - Utilização correta de `aria-roles` e atributos (`aria-label`, `aria-expanded`, `aria-invalid`).
    - Garantia de contraste de cores (mínimo 4.5:1) em ambos os temas.       
    - Implementação de "Skip Link" para navegação principal.

- **Modo Escuro (Alto Contraste) Acessível:**
    - Sistema de temas (claro/escuro) com Variáveis CSS.
    - Detecção da preferência do sistema (`prefers-color-scheme`).
    - Persistência da escolha do utilizador via `localStorage`.

- **Design System Customizado (CSS3):**    
    - Definição de uma paleta de cores (+8 cores) e tokens de design (`:root`).
    - Sistema de espaçamento modular (base 8px) e tipografia hierárquica

- **Layouts Responsivos Avançados (Mobile-First):**    
    - Sistema de grelha (grid) customizado de 12 colunas (CSS Grid).
    - Uso de Flexbox para alinhamento e componentes internos.
    - 5 breakpoints responsivos (`sm`, `md`, `lg`, `xl`).

- **Manipulação Avançada do DOM:**    
    - Validação de consistência de dados em formulários (ex: verificar se o CEP pertence à cidade selecionada).
    - Sistema de feedback visual (mensagens de erro, classes `.is-invalid`).
    - Componentes interativos (Modal, Menu Hambúrguer) controlados via JS.

- **Controlo de Versão (Git):**
    - Aplicação da estratégia **GitFlow** (`master`, `develop`, `feature/*`).
    - Manutenção de um histórico de **Commits Semânticos** (ex: `feat:`, `fix:`, `refactor:`, `style:`).
## Design System & Acessibilidade (WCAG)
O núcleo da v3.0 é a acessibilidade. O `style.css` foi estruturado como um Design System.
- **Temas:** As cores são definidas em `:root`. Um seletor `[data-theme="dark"]` sobrescreve estas variáveis para ativar o Modo Escuro. 
- **Contraste:** Todas as combinações de cor de texto/fundo (em ambos os temas) foram verificadas para atingir, no mínimo, o rácio de 4.5:1 (Nível AA).
- **Navegação:** O estado `:focus-visible` é estilizado globalmente para garantir que utilizadores de teclado saibam sempre onde estão. O `Tab` segue uma ordem lógica (HTML semântico).
- **Componentes:** O Modal bloqueia o foco (Acessibilidade) e pode ser fechado com `Esc`. O menu hambúrguer atualiza os atributos `aria-expanded`.
## Arquitetura SPA (Single Page Application)
A transição para SPA (v3.0) eliminou a necessidade de múltiplos ficheiros HTML, melhorando drasticamente a performance de navegação.
- `index.html`: Atua como a "casca" (shell) principal, contendo o `<header>`, `<footer>` e um `<main>` vazio.
- `script.js`:
    1. Contém os "templates" HTML das páginas (Início, Projetos, Cadastro) como _template literals_.       
    2. Escuta o evento `window.onhashchange`.
    3. Ao detetar uma mudança (ex: `#cadastro`), a função `loadContent` injeta o template correspondente no `<main>`.       
    4. Após a injeção, reinicializa os _event listeners_ necessários para essa página (ex: `initCadastroForm()`).
