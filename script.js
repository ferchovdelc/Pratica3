/*
 * == SCRIPT PRINCIPAL DA ONG RAIO DA ESPERANÇA (SPA) ==
 *
 * Este script controla:
 * 1. TEMPLATES: O conteúdo HTML de cada "página".
 * 2. ROTEADOR (Router): A lógica de navegação da SPA.
 * 3. VALIDAÇÃO: A verificação de consistência dos formulários.
 * 4. COMPONENTES: Interatividade do menu, modal, etc.
 */

// Espera o DOM estar completamente carregado para executar
document.addEventListener('DOMContentLoaded', () => {

    /*
     * 1. TEMPLATES JAVASCRIPT
     * ------------------------
     * O conteúdo de cada "página" é armazenado aqui como uma string.
     * Usamos template literals (crases) para permitir HTML multilinha.
     * NOTA: Atualize os caminhos das imagens (ex: "img/...")
     */
    const templates = {
        inicio: `
            <div class="section">
                <div class="grid-container grid-container-2col-fixed">
                    <div>
                        <h1 class="section-title" style="text-align: left;">Bem-vindo à Raio da Esperança</h1>
                        <p>Somos uma organização não-governamental dedicada a transformar vidas na comunidade de Curitiba. Através de projetos de educação, capacitação profissional e assistência social, levamos esperança e novas oportunidades para quem mais precisa.</p>
                        <p>Nossa missão é construir um futuro mais justo e solidário, um dia de cada vez. Junte-se a nós!</p>
                        <a href="#/cadastro" class="btn btn-primary">Seja Voluntário</a>
                        <a href="#/projetos" class="btn btn-outline">Nossos Projetos</a>
                    </div>
                    <div>
                        <!-- Atualize o caminho da imagem -->
                        <img src="img/equipe-voluntarios.jpg" alt="Equipe de voluntários da ONG" style="border-radius: var(--raio-borda); box-shadow: var(--sombra-card);">
                    </div>
                </div>
            </div>
            
            <div class="section" style="background-color: var(--cor-neutra-01); border-radius: var(--raio-borda); padding: var(--esp-4);">
                 <h2 class="section-title">Nosso Impacto</h2>
                 <div class="grid-container grid-container-3col">
                    <div style="text-align: center;">
                        <h3 class="section-title" style="color: var(--cor-primaria);">+500</h3>
                        <p>Crianças atendidas em projetos educacionais.</p>
                    </div>
                    <div style="text-align: center;">
                        <h3 class="section-title" style="color: var(--cor-primaria);">+200</h3>
                        <p>Jovens em oficinas profissionalizantes.</p>
                    </div>
                    <div style="text-align: center;">
                        <h3 class="section-title" style="color: var(--cor-primaria);">+1.000</h3>
                        <p>Refeições distribuídas mensalmente.</p>
                    </div>
                 </div>
            </div>
        `,
        projetos: `
            <div class="section">
                <h1 class="section-title">Nossos Projetos</h1>
                <p style="text-align: center; max-width: 700px; margin: 0 auto var(--esp-4);">Conheça as frentes de atuação que estão mudando a realidade da nossa comunidade. Você pode fazer parte disso através do voluntariado ou de doações.</p>

                <!-- Grid de Cards de Projetos -->
                <div class="grid-container grid-container-3col">
                    
                    <!-- Card 1: Educação -->
                    <article class="card">
                        <!-- Atualize o caminho da imagem -->
                        <img src="img/projeto-educacao.jpg" alt="Projeto Educação" class="card-image">
                        <div class="card-content">
                            <div class="card-tags">
                                <span class="badge tag-educacao">Educação</span>
                            </div>
                            <h3 class="card-title">Educação para o Futuro</h3>
                            <p>Oferecemos reforço escolar, atividades lúdicas e acesso à tecnologia para crianças de 6 a 12 anos, fomentando a paixão pelo aprendizado.</p>
                            <div class="card-footer">
                                <a href="#/doar" class="btn btn-secondary btn-sm">Quero Doar</a>
                            </div>
                        </div>
                    </article>

                    <!-- Card 2: Oficinas -->
                    <article class="card">
                        <!-- Atualize o caminho da imagem -->
                        <img src="img/projeto-oficinas.jpg" alt="Projeto Oficinas" class="card-image">
                        <div class="card-content">
                            <div class="card-tags">
                                <span class="badge tag-oficina">Capacitação</span>
                            </div>
                            <h3 class="card-title">Oficinas Profissionalizantes</h3>
                            <p>Capacitamos jovens e adultos com cursos de informática, corte e costura e panificação, aumentando suas chances no mercado de trabalho.</p>
                            <div class="card-footer">
                                <a href="#/doar" class="btn btn-secondary btn-sm">Quero Doar</a>
                            </div>
                        </div>
                    </article>

                    <!-- Card 3: Sopão Solidário -->
                    <article class="card">
                        <!-- Atualize o caminho da imagem -->
                        <img src="img/sopao-solidario.jpg" alt="Sopão Solidário" class="card-image">
                        <div class="card-content">
                            <div class="card-tags">
                                <span class="badge tag-alimento">Assistência</span>
                            </div>
                            <h3 class="card-title">Sopão Solidário</h3>
                            <p>Todas as quartas-feiras, nossos voluntários preparam e distribuem refeições quentes para pessoas em situação de vulnerabilidade no centro de Curitiba.</p>
                            <div class="card-footer">
                                <a href="#/cadastro" class="btn btn-outline btn-sm">Seja Voluntário</a>
                            </div>
                        </div>
                    </article>

                </div>
            </div>
        `,
        cadastro: `
            <div class="section">
                <h1 class="section-title">Formulário de Voluntariado</h1>
                <p style="text-align: center; max-width: 700px; margin: 0 auto var(--esp-4);">Ficamos felizes com seu interesse! Por favor, preencha o formulário abaixo para analisarmos seu perfil e entrarmos em contato.</p>
                
                <form id="cadastro-form" class="form-container" novalidate>
                    <!-- Alerta de Erro Global -->
                    <div id="form-global-error" class="alert alert-error" style="display: none;">
                        Por favor, corrija os erros no formulário antes de enviar.
                    </div>
                
                    <fieldset class="form-fieldset">
                        <legend class="form-legend">Dados Pessoais</legend>
                        
                        <!-- Nome Completo -->
                        <div class="form-group">
                            <label for="nome" class="form-label">Nome Completo</label>
                            <input type="text" id="nome" name="nome" class="form-input" required minlength="3">
                            <div class="form-error-message">O nome é obrigatório (mínimo 3 caracteres).</div>
                        </div>

                        <!-- Email -->
                        <div class="form-group">
                            <label for="email" class="form-label">E-mail</label>
                            <input type="email" id="email" name="email" class="form-input" required>
                            <div class="form-error-message">Por favor, insira um e-mail válido.</div>
                        </div>

                        <!-- CPF -->
                        <div class="form-group">
                            <label for="cpf" class="form-label">CPF</label>
                            <input type="text" id="cpf" name="cpf" class="form-input" required placeholder="000.000.000-00">
                            <div class="form-error-message">CPF inválido. Use o formato 000.000.000-00.</div>
                        </div>

                        <!-- Telefone -->
                        <div class="form-group">
                            <label for="telefone" class="form-label">Telefone (WhatsApp)</label>
                            <input type="tel" id="telefone" name="telefone" class="form-input" required placeholder="(00) 90000-0000">
                            <div class="form-error-message">Telefone inválido. Use o formato (00) 90000-0000.</div>
                        </div>

                        <!-- Data de Nascimento -->
                        <div class="form-group">
                            <label for="dataNascimento" class="form-label">Data de Nascimento</label>
                            <input type="date" id="dataNascimento" name="dataNascimento" class="form-input" required>
                            <div class="form-error-message">Data de nascimento é obrigatória.</div>
                        </div>
                    </fieldset>

                    <fieldset class="form-fieldset">
                        <legend class="form-legend">Endereço</legend>
                        
                        <!-- CEP -->
                        <div class="form-group">
                            <label for="cep" class="form-label">CEP</label>
                            <input type="text" id="cep" name="cep" class="form-input" required placeholder="00000-000">
                            <div class="form-error-message">CEP inválido (use 00000-000). Apenas CEPs de Curitiba (iniciados com 8) são aceitos.</div>
                        </div>
                        
                        <!-- Endereço (Rua) -->
                        <div class="form-group">
                            <label for="endereco" class="form-label">Endereço (Rua e Nº)</label>
                            <input type="text" id="endereco" name="endereco" class="form-input" required>
                            <div class="form-error-message">Endereço é obrigatório.</div>
                        </div>

                        <!-- Cidade -->
                        <div class="form-group">
                            <label for="cidade" class="form-label">Cidade</label>
                            <input type="text" id="cidade" name="cidade" class="form-input" value="Curitiba" readonly disabled>
                            <div class="form-error-message"></div>
                        </div>

                        <!-- Estado -->
                        <div class="form-group">
                            <label for="estado" class="form-label">Estado</label>
                            <input type="text" id="estado" name="estado" class="form-input" value="PR" readonly disabled>
                            <div class="form-error-message"></div>
                        </div>
                    </fieldset>

                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-full">Enviar Cadastro</button>
                    </div>
                </form>
            </div>
        `,
        // Templates de "fallback" para links de exemplo
        'sobre/quem-somos': `<h1 class="section-title">Quem Somos</h1><p>Página "Quem Somos" em construção.</p>`,
        'sobre/transparencia': `<h1 class="section-title">Transparência</h1><p>Página "Transparência" em construção.</p>`,
        doar: `<h1 class="section-title">Doe Agora</h1><p>Página "Como Doar" em construção.</p>`,
    };

    /*
     * 2. ROTEADOR (SPA Router)
     * ------------------------
     */
    const app = {
        // Elemento principal onde o conteúdo será renderizado
        root: document.getElementById('app-root'),
        // Links de navegação (para marcar como "ativo")
        navLinks: document.querySelectorAll('.nav-link'),
        // Referência ao modal de feedback
        modal: {
            overlay: document.getElementById('feedback-modal'),
            title: document.getElementById('modal-title'),
            message: document.getElementById('modal-message'),
            icon: document.getElementById('modal-icon'),
            closeBtn: document.getElementById('modal-close-btn'),
        },

        // Função principal de navegação
        navigate(path) {
            // Encontra o template correspondente ao 'path'
            // Se não encontrar, usa o template 'inicio' como padrão
            const template = templates[path] || templates.inicio;

            // Injeta o HTML do template no elemento <main>
            this.root.innerHTML = template;

            // Atualiza o link "ativo" no menu
            this.updateActiveLink(path);

            // Após carregar o template, verifica se é o formulário
            if (path === 'cadastro') {
                // Se for o cadastro, inicializa os 'event listeners' desse formulário
                this.initCadastroForm();
            }

            // Rola a página para o topo
            window.scrollTo(0, 0);
        },

        // Marca o link de navegação atual como "ativo"
        updateActiveLink(path) {
            this.navLinks.forEach(link => {
                // Compara o hash do link (ex: #/projetos) com o path atual
                if (link.getAttribute('href') === `#/${path}`) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        },

        // Inicializa o formulário de cadastro (adiciona máscaras e validação)
        initCadastroForm() {
            const form = document.getElementById('cadastro-form');
            if (!form) return; // Segurança: sai se o formulário não existir

            const inputs = {
                cpf: form.querySelector('#cpf'),
                telefone: form.querySelector('#telefone'),
                cep: form.querySelector('#cep'),
            };

            // Aplica máscaras aos inputs
            this.applyInputMasks(inputs);

            // Adiciona o listener para o evento "submit" do formulário
            form.addEventListener('submit', (e) => {
                e.preventDefault(); // Impede o recarregamento da página

                // Roda a função de validação
                const isValid = this.validateForm(form);

                const globalError = document.getElementById('form-global-error');

                if (isValid) {
                    // SUCESSO: Formulário é válido
                    console.log("Formulário válido. Enviando dados...");
                    globalError.style.display = 'none';
                    // Simula o envio e mostra modal de sucesso
                    this.showModal(
                        'Sucesso!',
                        'Seu cadastro foi enviado. Entraremos em contato em breve.',
                        'success'
                    );
                    form.reset(); // Limpa o formulário
                } else {
                    // ERRO: Formulário inválido
                    console.error("Formulário inválido.");
                    globalError.style.display = 'block'; // Mostra o alerta global
                    // Foca no primeiro campo inválido
                    form.querySelector('.invalid .form-input').focus();
                }
            });
        },

        /*
         * 3. VALIDAÇÃO DE CONSISTÊNCIA
         * ---------------------------
         * Sistema de verificação de dados do formulário.
         */
        validateForm(form) {
            let isFormValid = true; // Flag: se torna 'false' se UM campo falhar

            // Pega todos os campos que precisam de validação
            const fieldsToValidate = form.querySelectorAll('[required]');

            // Loop por cada campo
            fieldsToValidate.forEach(field => {
                // 'this.validateField' retorna 'true' (válido) ou 'false' (inválido)
                const isFieldValid = this.validateField(field);

                // Se UM campo for inválido, o formulário inteiro é inválido
                if (!isFieldValid) {
                    isFormValid = false;
                }
            });

            return isFormValid;
        },

        // Validação individual de cada campo
        validateField(field) {
            const value = field.value.trim();
            const type = field.type;
            const id = field.id;
            const parentGroup = field.closest('.form-group');
            let isValid = true;

            // 1. Validação básica (natura do HTML5)
            if (!field.checkValidity()) {
                isValid = false;
            }

            // 2. Validação de Consistência (Regras de Negócio)
            // Aqui entram as verificações mais complexas (Regex, etc.)

            // Validação de CPF (formato)
            if (id === 'cpf') {
                const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
                if (!cpfRegex.test(value)) isValid = false;
            }

            // Validação de Telefone (formato)
            if (id === 'telefone') {
                const telRegex = /^\(\d{2}\) 9\d{4}-\d{4}$/;
                if (!telRegex.test(value)) isValid = false;
            }

            // Validação de CEP (formato E regra de negócio: ser de Curitiba)
            if (id === 'cep') {
                const cepRegex = /^\d{5}-\d{3}$/;
                if (!cepRegex.test(value)) {
                    // Formato errado
                    isValid = false;
                } else if (!value.startsWith('8')) {
                    // Regra de Negócio: Não é de Curitiba (CEP de Curitiba começa com 8)
                    isValid = false;
                }
            }

            // 3. Manipulação do DOM (Mostrar/Esconder Erros)
            if (isValid) {
                // Campo VÁLIDO
                parentGroup.classList.remove('invalid');
            } else {
                // Campo INVÁLIDO
                parentGroup.classList.add('invalid');
            }

            return isValid;
        },

        // Função para aplicar máscaras (CPF, Tel, CEP)
        applyInputMasks(inputs) {
            // Máscara de CPF: 000.000.000-00
            inputs.cpf?.addEventListener('input', (e) => {
                let v = e.target.value.replace(/\D/g, ''); // Remove não-números
                v = v.slice(0, 11); // Limita a 11 dígitos
                if (v.length > 9) {
                    v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
                } else if (v.length > 6) {
                    v = v.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
                } else if (v.length > 3) {
                    v = v.replace(/(\d{3})(\d{1,3})/, '$1.$2');
                }
                e.target.value = v;
            });

            // Máscara de Telefone: (00) 90000-0000
            inputs.telefone?.addEventListener('input', (e) => {
                let v = e.target.value.replace(/\D/g, '');
                v = v.slice(0, 11);
                if (v.length > 10) {
                    v = v.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
                } else if (v.length > 6) {
                    v = v.replace(/(\d{2})(\d{4})(\d{1,4})/, '($1) $2-$3');
                } else if (v.length > 2) {
                    v = v.replace(/(\d{2})(\d{1,4})/, '($1) $2');
                } else if (v.length > 0) {
                    v = v.replace(/(\d{1,2})/, '($1');
                }
                e.target.value = v;
            });

            // Máscara de CEP: 00000-000
            inputs.cep?.addEventListener('input', (e) => {
                let v = e.target.value.replace(/\D/g, '');
                v = v.slice(0, 8);
                if (v.length > 5) {
                    v = v.replace(/(\d{5})(\d{1,3})/, '$1-$2');
                }
                e.target.value = v;
            });
        },

        /*
         * 4. COMPONENTES (Modal, Menu)
         * ---------------------------
         */

        // Função para exibir o modal de feedback
        showModal(title, message, type = 'success') {
            this.modal.title.textContent = title;
            this.modal.message.textContent = message;

            // Define o ícone (sucesso ou erro)
            this.modal.icon.className = 'fas'; // Limpa classes antigas
            if (type === 'success') {
                this.modal.icon.classList.add('fa-check-circle');
            } else {
                this.modal.icon.classList.add('fa-times-circle');
            }

            this.modal.overlay.classList.add('visible');
        },

        // Inicializa os listeners do Modal
        initModal() {
            this.modal.closeBtn.addEventListener('click', () => {
                this.modal.overlay.classList.remove('visible');
            });
            this.modal.overlay.addEventListener('click', (e) => {
                // Fecha se clicar fora do 'modal-content'
                if (e.target === this.modal.overlay) {
                    this.modal.overlay.classList.remove('visible');
                }
            });
        },

        // Inicializa o Menu Hambúrguer (Mobile)
        initMenuMobile() {
            const navToggle = document.querySelector('.nav-toggle');
            const mainNav = document.querySelector('.main-nav');
            const dropdownLinks = document.querySelectorAll('.has-dropdown > .nav-link');

            navToggle.addEventListener('click', () => {
                mainNav.classList.toggle('is-open');
            });

            // Lógica para dropdown no mobile (requer clique)
            dropdownLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    // Só ativa no modo mobile (quando o nav-toggle está visível)
                    if (window.getComputedStyle(navToggle).display !== 'none') {
                        e.preventDefault(); // Impede a navegação do link pai
                        link.parentElement.classList.toggle('is-open');
                    }
                });
            });
        },

        // Função principal de inicialização do Roteador
        initRouter() {
            // Ouve mudanças na hash (ex: #/inicio -> #/projetos)
            window.addEventListener('hashchange', () => {
                const path = window.location.hash.slice(2) || 'inicio';
                this.navigate(path);
            });

            // Carrega a página inicial ou a página da hash atual
            const initialPath = window.location.hash.slice(2) || 'inicio';
            this.navigate(initialPath);
        }
    };

    // --- INICIALIZAÇÃO DA APLICAÇÃO ---
    app.initRouter();    // Inicia o roteador
    app.initModal();     // Inicia os listeners do modal
    app.initMenuMobile(); // Inicia os listeners do menu mobile

});

