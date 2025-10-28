/**
 * Script Principal da SPA (Single Page Application)
 *
 * Funcionalidades:
 * 1. Roteamento básico de SPA (templates).
 * 2. Manipulação do DOM para navegação (menu hambúrguer).
 * 3. Manipulação do DOM para feedback (modal).
 * 4. Validação de consistência de dados (formulário).
 * 5. Lógica de Acessibilidade (Modo Escuro) - NOVO
 */

// Espera o DOM estar completamente carregado
document.addEventListener('DOMContentLoaded', () => {

    /*
    * =========================================
    * 1. LÓGICA DO MODO ESCURO (NOVO)
    * =========================================
    */

    const themeToggleButton = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement; // Apanha o <html> tag

    // Função para aplicar o tema
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            htmlElement.setAttribute('data-theme', 'dark');
            themeToggleButton.setAttribute('aria-checked', 'true');
        } else {
            htmlElement.setAttribute('data-theme', 'light');
            themeToggleButton.setAttribute('aria-checked', 'false');
        }
    };

    // Função para alternar o tema
    const toggleTheme = () => {
        const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        localStorage.setItem('theme', newTheme); // Salva a escolha do usuário
        applyTheme(newTheme);
    };

    // Event Listener para o botão
    themeToggleButton.addEventListener('click', toggleTheme);

    // Inicialização do Tema:
    // 1. Verifica se o usuário já escolheu um tema (localStorage)
    const savedTheme = localStorage.getItem('theme');
    // 2. Se não, verifica a preferência do sistema (prefers-color-scheme)
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (prefersDark) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }

    /*
    * =========================================
    * 2. SISTEMA DE TEMPLATES (CONTEÚDO DAS PÁGINAS)
    * =========================================
    */

    const templates = {
        /**
         * Template: Início (Homepage)
         */
        inicio: `
            <section class="page-section hero">
                <div class="container">
                    <h2 class="col-span-12">Transformando Vidas em Curitiba</h2>
                    <p class="col-span-12">
                        A ONG Raio da Esperança dedica-se a criar oportunidades através da
                        educação, capacitação profissional e apoio comunitário.
                    </p>
                    <a href="#projetos" class="btn btn-secondary">Conheça Nossos Projetos</a>
                </div>
            </section>

            <section class="page-section">
                <div class="container layout-grid">
                    <div class="col-span-12 md-col-span-6">
                        <h2>Nossa Missão</h2>
                        <p>
                            Ser um farol de esperança na comunidade, oferecendo ferramentas para 
                            que crianças, jovens e adultos possam construir um futuro mais digno 
                            e próspero. Acreditamos no poder da solidariedade para mudar realidades.
                        </p>
                        <h3>Informações de Contato</h3>
                        <p>
                            <strong>Endereço:</strong> Rua da Cidadania, 123 - Centro, Curitiba - PR<br>
                            <strong>Telefone:</strong> (41) 3333-4444<br>
                            <strong>Email:</strong> contato@raiodaesperanca.org.br
                        </p>
                    </div>
                    <div class="col-span-12 md-col-span-6">
                        <img src="https://placehold.co/600x400/005A9C/FFFFFF?text=Nossa+Sede+em+Curitiba" alt="Sede da ONG Raio da Esperança em Curitiba." class="image-responsive">
                    </div>
                </div>
            </section>
        `,

        /**
         * Template: Projetos Sociais
         */
        projetos: `
            <section class="page-section">
                <div class="container">
                    <h2 class="text-center">Nossos Projetos</h2>
                    <p class="text-center" style="max-width: 800px; margin: 0 auto var(--space-lg) auto;">
                        Conheça as frentes de atuação da Raio da Esperança. Cada projeto é 
                        uma semente plantada no futuro da nossa comunidade.
                    </p>

                    <!-- Grelha de Cards -->
                    <div class="card-grid">
                        
                        <!-- Card 1: Educação -->
                        <article class="card">
                            <img src="https://placehold.co/600x400/FDB813/4A4A4A?text=Projeto+Educação" alt="Crianças em sala de aula." class="card-image">
                            <div class="card-body">
                                <span class="badge badge-success">Educação</span>
                                <h3>Projeto Educação para o Futuro</h3>
                                <p>Oferecemos reforço escolar e aulas de informática para crianças e adolescentes em situação de vulnerabilidade social.</p>
                                <div class="card-footer">
                                    <a href="#cadastro" class="btn btn-primary">Quero ser voluntário</a>
                                </div>
                            </div>
                        </article>

                        <!-- Card 2: Oficinas -->
                        <article class="card">
                            <img src="https://placehold.co/600x400/007BFF/FFFFFF?text=Oficinas+Profissionais" alt="Pessoa aprendendo costura." class="card-image">
                            <div class="card-body">
                                <span class="badge badge-info">Capacitação</span>
                                <h3>Oficinas Profissionalizantes</h3>
                                <p>Cursos de curta duração (padaria, costura, manutenção) para jovens e adultos, visando a geração de renda e autonomia.</p>
                                <div class="card-footer">
                                    <a href="#cadastro" class="btn btn-primary">Quero ser voluntário</a>
                                </div>
                            </div>
                        </article>

                        <!-- Card 3: Sopão -->
                        <article class="card">
                            <img src="https://placehold.co/600x400/6C757D/FFFFFF?text=Sopão+Solidário" alt="Voluntários distribuindo sopa." class="card-image">
                            <div class="card-body">
                                <span class="badge badge-warning">Apoio</span>
                                <h3>Sopão Solidário</h3>
                                <p>Distribuição semanal de refeições quentes para pessoas em situação de rua no centro de Curitiba, feita inteiramente por voluntários.</p>
                                <div class="card-footer">
                                    <a href="#cadastro" class="btn btn-primary">Quero ser voluntário</a>
                                </div>
                            </div>
                        </article>

                    </div>
                </div>
            </section>
            
            <section class="page-section" style="background-color: var(--color-surface);">
                <div class="container layout-grid">
                    <div class="col-span-12 md-col-span-6">
                        <h2>Como Doar?</h2>
                        <p>Sua contribuição financeira é vital para mantermos nossos projetos ativos. Qualquer valor faz a diferença.</p>
                        <p><strong>PIX (CNPJ):</strong> 12.345.678/0001-99</p>
                        <p><strong>Banco do Brasil</strong><br>
                           Agência: 0001<br>
                           Conta Corrente: 98765-4
                        </p>
                        <a href="#" class="btn btn-secondary">Doar Agora (Online)</a>
                    </div>
                    <div class="col-span-12 md-col-span-6">
                        <h2>Transparência</h2>
                        <p>Prestamos contas de cada centavo recebido. Acesse nosso portal da transparência e veja como sua doação está sendo utilizada.</p>
                        <img src="https://placehold.co/600x300/198754/FFFFFF?text=Portal+da+Transparência" alt="Gráfico ilustrativo de transparência e gestão de fundos.">
                    </div>
                </div>
            </section>
        `,

        /**
         * Template: Cadastro (Formulário)
         */
        cadastro: `
            <section class="page-section">
                <div class="container">
                    <div class="layout-grid">
                        <div class="col-span-12 lg-col-span-10 xl-col-span-8" style="margin: 0 auto;">
                            <h2 class="text-center">Formulário de Voluntariado</h2>
                            <p class="text-center">
                                Que bom ter você aqui! Por favor, preencha seus dados e nossa equipe 
                                entrará em contato o mais breve possível.
                            </p>

                            <!-- Alerta de Erro (para consistência) -->
                            <div id="form-error-alert" class="alert alert-danger" hidden>
                                <strong>Erro de Validação:</strong> <span id="form-error-message"></span>
                            </div>

                            <form id="cadastro-form" class="layout-grid" novalidate>

                                <!-- Bloco 1: Dados Pessoais -->
                                <fieldset class="form-fieldset col-span-12">
                                    <legend>1. Dados Pessoais</legend>
                                    
                                    <div class="form-group col-span-12">
                                        <label for="nome" class="form-label">Nome Completo</label>
                                        <input type="text" id="nome" name="nome" class="form-control" required minlength="3">
                                        <small class="error-message" id="error-nome"></small>
                                    </div>
                                    
                                    <div class="form-group col-span-12 md-col-span-6">
                                        <label for="nascimento" class="form-label">Data de Nascimento</label>
                                        <input type="date" id="nascimento" name="nascimento" class="form-control" required>
                                        <small class="error-message" id="error-nascimento"></small>
                                    </div>

                                    <div class="form-group col-span-12 md-col-span-6">
                                        <label for="cpf" class="form-label">CPF</label>
                                        <input type="text" id="cpf" name="cpf" class="form-control" placeholder="000.000.000-00" required>
                                        <small class="error-message" id="error-cpf"></small>
                                    </div>
                                </fieldset>

                                <!-- Bloco 2: Contato -->
                                <fieldset class="form-fieldset col-span-12">
                                    <legend>2. Contato</legend>

                                    <div class="form-group col-span-12 md-col-span-7">
                                        <label for="email" class="form-label">E-mail</label>
                                        <input type="email" id="email" name="email" class="form-control" placeholder="seu.email@exemplo.com" required>
                                        <small class="error-message" id="error-email"></small>
                                    </div>

                                    <div class="form-group col-span-12 md-col-span-5">
                                        <label for="telefone" class="form-label">Telefone (Celular)</label>
                                        <input type="tel" id="telefone" name="telefone" class="form-control" placeholder="(00) 90000-0000" required>
                                        <small class="error-message" id="error-telefone"></small>
                                    </div>
                                </fieldset>

                                <!-- Bloco 3: Endereço (Validação de Consistência) -->
                                <fieldset class="form-fieldset col-span-12">
                                    <legend>3. Endereço</legend>

                                    <div class="form-group col-span-12 md-col-span-4">
                                        <label for="cep" class="form-label">CEP</label>
                                        <input type="text" id="cep" name="cep" class="form-control" placeholder="00000-000" required>
                                        <small class="error-message" id="error-cep"></small>
                                    </div>

                                    <div class="form-group col-span-12 md-col-span-8">
                                        <label for="endereco" class="form-label">Endereço (Rua e Número)</label>
                                        <input type="text" id="endereco" name="endereco" class="form-control" required>
                                        <small class="error-message" id="error-endereco"></small>
                                    </div>

                                    <div class="form-group col-span-12 md-col-span-6">
                                        <label for="cidade" class="form-label">Cidade</label>
                                        <input type="text" id="cidade" name="cidade" class="form-control" value="Curitiba" required>
                                        <small class="error-message" id="error-cidade"></small>
                                    </div>

                                    <div class="form-group col-span-12 md-col-span-6">
                                        <label for="estado" class="form-label">Estado</label>
                                        <input type="text" id="estado" name="estado" class="form-control" value="PR" required>
                                        <small class="error-message" id="error-estado"></small>
                                    </div>
                                </fieldset>

                                <div class="col-span-12 text-center">
                                    <button type="submit" class="btn btn-primary" id="submit-button">Quero ser voluntário!</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        `
    };


    /*
    * =========================================
    * 3. ROTEADOR SPA BÁSICO
    * =========================================
    */

    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('.nav-link');

    // Função para carregar o conteúdo da página
    const loadContent = (hash) => {
        // Limpa o hash (ex: #/cadastro -> cadastro)
        const page = hash.replace('#', '') || 'inicio';

        // Injeta o template no <main>
        if (templates[page]) {
            mainContent.innerHTML = templates[page];

            // Atualiza o estado 'active' nos links de navegação
            navLinks.forEach(link => {
                if (link.getAttribute('href') === `#${page}`) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });

            // Se a página for 'cadastro', inicializa os listeners do formulário
            if (page === 'cadastro') {
                initCadastroForm();
            }
        } else {
            // Página não encontrada (simples)
            mainContent.innerHTML = `
                <section class="page-section text-center">
                    <div class="container">
                        <h2>Erro 404</h2>
                        <p>Desculpe, a página que você procura não foi encontrada.</p>
                        <a href="#inicio" class="btn btn-primary">Voltar ao Início</a>
                    </div>
                </section>
            `;
        }
    };

    // Event Listener para mudanças no Hash (navegação)
    window.addEventListener('hashchange', () => {
        loadContent(window.location.hash);
        window.scrollTo(0, 0); // Rola para o topo ao mudar de página
    });

    // Carrega o conteúdo inicial (ao abrir o site)
    loadContent(window.location.hash);


    /*
    * =========================================
    * 4. NAVEGAÇÃO MOBILE (Hambúrguer)
    * =========================================
    */

    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('is-active');
    });

    // Fecha o menu ao clicar num link (comportamento de SPA)
    navMenu.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-link')) {
            navToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('is-active');
        }
    });


    /*
    * =========================================
    * 5. FEEDBACK (MODAL)
    * =========================================
    */

    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalBody = document.getElementById('modal-body');
    const modalCloseButton = document.getElementById('modal-close');

    // Função para mostrar o modal
    const showModal = (title, message) => {
        document.getElementById('modal-title').textContent = title;
        modalBody.innerHTML = message;
        modalBackdrop.hidden = false;
        modalBackdrop.classList.add('is-visible');
        modalCloseButton.focus(); // Foco no botão de fechar (Acessibilidade)
    };

    // Função para fechar o modal
    const closeModal = () => {
        modalBackdrop.hidden = true;
        modalBackdrop.classList.remove('is-visible');
    };

    // Event Listeners para fechar o modal
    modalCloseButton.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', (e) => {
        // Fecha apenas se clicar no backdrop, não no modal em si
        if (e.target === modalBackdrop) {
            closeModal();
        }
    });
    // Fecha com a tecla ESC (Acessibilidade)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modalBackdrop.hidden) {
            closeModal();
        }
    });


    /*
    * =========================================
    * 6. VALIDAÇÃO DE FORMULÁRIO (Cadastro)
    * =========================================
    */

    // Esta função é chamada sempre que o template 'cadastro' é carregado
    const initCadastroForm = () => {
        const form = document.getElementById('cadastro-form');
        const formErrorAlert = document.getElementById('form-error-alert');
        const formErrorMessage = document.getElementById('form-error-message');
        const submitButton = document.getElementById('submit-button');

        // Campos do formulário
        const inputs = {
            nome: document.getElementById('nome'),
            nascimento: document.getElementById('nascimento'),
            cpf: document.getElementById('cpf'),
            email: document.getElementById('email'),
            telefone: document.getElementById('telefone'),
            cep: document.getElementById('cep'),
            endereco: document.getElementById('endereco'),
            cidade: document.getElementById('cidade'),
            estado: document.getElementById('estado'),
        };

        // Regras de Validação (mensagens de erro)
        const validationRules = {
            nome: {
                required: "O Nome Completo é obrigatório.",
                minLength: "O Nome deve ter pelo menos 3 caracteres."
            },
            nascimento: {
                required: "A Data de Nascimento é obrigatória.",
                underAge: "Você deve ser maior de 18 anos para ser voluntário."
            },
            cpf: {
                required: "O CPF é obrigatório.",
                pattern: "O CPF deve estar no formato 000.000.000-00."
            },
            email: {
                required: "O E-mail é obrigatório.",
                pattern: "Por favor, insira um e-mail válido."
            },
            telefone: {
                required: "O Telefone é obrigatório.",
                pattern: "O Telefone deve estar no formato (00) 90000-0000."
            },
            cep: {
                required: "O CEP é obrigatório.",
                pattern: "O CEP deve estar no formato 00000-000."
            },
            endereco: {
                required: "O Endereço é obrigatório."
            },
            cidade: {
                required: "A Cidade é obrigatória."
            },
            estado: {
                required: "O Estado é obrigatório."
            }
        };

        // Função para aplicar Máscaras de Input
        const applyMasks = () => {
            maskInput(inputs.cpf, '000.000.000-00');
            maskInput(inputs.telefone, '(00) 00000-0000');
            maskInput(inputs.cep, '00000-000');
        };

        // Função genérica de máscara
        const maskInput = (input, mask) => {
            input.addEventListener('input', (e) => {
                const value = e.target.value.replace(/\D/g, ''); // Remove tudo exceto dígitos
                let maskedValue = '';
                let k = 0;
                for (let i = 0; i < mask.length; i++) {
                    if (mask[i] === '0') {
                        if (k < value.length) {
                            maskedValue += value[k];
                            k++;
                        } else {
                            break;
                        }
                    } else {
                        if (k < value.length || value.length === k && mask[i+1] === '0') {
                            maskedValue += mask[i];
                        }
                    }
                }
                e.target.value = maskedValue;
            });
        };

        // Função para mostrar erro individual
        const showError = (inputId, message) => {
            const input = inputs[inputId];
            const errorField = document.getElementById(`error-${inputId}`);
            if (input && errorField) {
                input.classList.add('is-invalid');
                input.classList.remove('is-valid');
                errorField.textContent = message;
                input.setAttribute('aria-invalid', 'true');
                input.setAttribute('aria-describedby', `error-${inputId}`);
            }
        };

        // Função para limpar erro individual
        const clearError = (inputId) => {
            const input = inputs[inputId];
            const errorField = document.getElementById(`error-${inputId}`);
            if (input && errorField) {
                input.classList.remove('is-invalid');
                errorField.textContent = '';
                input.removeAttribute('aria-invalid');
                input.removeAttribute('aria-describedby');
            }
        };

        // Função para mostrar alerta global do formulário
        const showFormAlert = (message) => {
            formErrorMessage.textContent = message;
            formErrorAlert.hidden = false;
        };

        // Função para limpar alerta global
        const clearFormAlert = () => {
            formErrorMessage.textContent = '';
            formErrorAlert.hidden = true;
        };


        // Função Principal de Validação (Chamada no Submit)
        const validateForm = () => {
            let isValid = true;
            clearFormAlert();

            // 1. Validação de Campos Individuais
            for (const inputId in inputs) {
                const input = inputs[inputId];
                const rules = validationRules[inputId];
                clearError(inputId);

                // Regra: Obrigatório (required)
                if (input.required && input.value.trim() === '') {
                    isValid = false;
                    showError(inputId, rules.required);
                    continue; // Pula para o próximo input
                }

                // Regra: Tamanho Mínimo (minLength)
                if (rules.minLength && input.value.length < rules.minLength) {
                    isValid = false;
                    showError(inputId, rules.minLength);
                    continue;
                }

                // Regra: Padrão (pattern)
                if (rules.pattern) {
                    let regex;
                    if (inputId === 'cpf') regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
                    if (inputId === 'email') regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (inputId === 'telefone') regex = /^\(\d{2}\) \d{5}-\d{4}$/;
                    if (inputId === 'cep') regex = /^\d{5}-\d{3}$/;

                    if (regex && !regex.test(input.value)) {
                        isValid = false;
                        showError(inputId, rules.pattern);
                        continue;
                    }
                }

                // Regra: Idade (Data de Nascimento)
                if (inputId === 'nascimento' && input.value) {
                    const birthDate = new Date(input.value);
                    const today = new Date();
                    let age = today.getFullYear() - birthDate.getFullYear();
                    const monthDiff = today.getMonth() - birthDate.getMonth();
                    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                        age--;
                    }
                    if (age < 18) {
                        isValid = false;
                        showError(inputId, rules.underAge);
                        continue;
                    }
                }

                // Se passou por todas as regras, marca como válido
                if(input.required) {
                    input.classList.add('is-valid');
                }
            }

            // 2. Validação de CONSISTÊNCIA de Dados
            // (Verifica se o CEP é de Curitiba/PR, já que os campos estão travados)
            const cep = inputs.cep.value;
            const cidade = inputs.cidade.value;
            const estado = inputs.estado.value;

            // CEPs de Curitiba começam com 80, 81 ou 82
            if (cep && !/^(80|81|82)\d{3}-\d{3}$/.test(cep)) {
                if (cidade === 'Curitiba' && estado === 'PR') {
                    isValid = false;
                    showError('cep', 'Este CEP não parece ser de Curitiba. Por favor, verifique.');
                    // Mostra o alerta global
                    showFormAlert('O CEP informado não é compatível com a cidade de Curitiba (PR).');
                }
            }

            return isValid;
        };


        // Event Listener do SUBMIT
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o envio tradicional

            if (validateForm()) {
                // SUCESSO!
                submitButton.disabled = true;
                submitButton.textContent = 'Enviando...';

                // Simula um envio (2 segundos)
                setTimeout(() => {
                    // Limpa o formulário
                    form.reset();
                    // Limpa todos os indicadores de validação
                    for (const inputId in inputs) {
                        clearError(inputId);
                        inputs[inputId].classList.remove('is-valid');
                    }
                    // Mostra o Modal de Sucesso
                    showModal(
                        'Cadastro Recebido!',
                        `<p>Obrigado, <strong>${inputs.nome.value}</strong>!</p>
                         <p>Recebemos seus dados e nossa equipe de voluntariado entrará em 
                         contato pelo telefone ${inputs.telefone.value} ou e-mail ${inputs.email.value} 
                         em até 5 dias úteis.</p>`
                    );
                    // Reativa o botão
                    submitButton.disabled = false;
                    submitButton.textContent = 'Quero ser voluntário!';

                }, 2000);

            } else {
                // FALHA na validação
                // Se o alerta global não foi preenchido pela consistência, preenche agora.
                if (formErrorAlert.hidden) {
                    showFormAlert('Existem erros no seu formulário. Por favor, corrija os campos marcados em vermelho.');
                }
            }
        });

        // Validação "ao vivo" (ao sair do campo)
        for (const inputId in inputs) {
            inputs[inputId].addEventListener('blur', () => {
                validateForm(); // Re-valida o formulário todo ao sair de um campo
            });
        }

        // Aplica as máscaras
        applyMasks();
    };

});