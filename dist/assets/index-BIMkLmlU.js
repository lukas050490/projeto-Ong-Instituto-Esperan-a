(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={"index.html":`
        <section class="hero">
            <div class="hero-conteudo">
                <h1>Juntos podemos transformar vidas</h1>
                <p>
                    O Instituto Esperança promove ações sociais
                    para construir uma sociedade mais justa,
                    inclusiva e solidária.
                </p>
                <a href="cadastro.html" data-link>Quero ser voluntário</a>
            </div>

            <figure class="hero-imagem">
                <img src="./banner.jpg" alt="banner do site referente a tecnologia e a sociedade">
            </figure>
        </section>

        <section class="sobre">
            <div>
                <h2>Sobre o Instituto</h2>
                <p>
                    Somos uma organização dedicada a desenvolver projetos que promovam
                    educação, inclusão social e qualidade de vida.
                </p>
                <p>
                    Acreditamos que pequenas ações podem gerar
                    grandes transformações quando realizadas
                    coletivamente.
                </p>
            </div>

            <figure>
                <img src="./projetos-banner.jpg" alt="banner do site referente a inclusão social">
            </figure>
        </section>

        <section class="projetos">
            <header>
                <h2>Conheça nossas iniciativas</h2>
                <p>Descubra alguns dos projetos desenvolvidos pelo Instituto Esperança.</p>
            </header>

            <div class="cards">
                <article class="card">
                    <img src="./projeto-1.jpg" alt="Crianças participando de atividade educacional">
                    <div>
                        <h3>Educação para Todos</h3>
                        <p>Desenvolvemos atividades educacionais para crianças e jovens.</p>
                        <a href="projetos.html" data-link>Conheça o projeto</a>
                    </div>
                </article>

                <article class="card">
                    <img src="./projeto-4.jpg" alt="Voluntários organizando alimentos para doação">
                    <div>
                        <h3>Campanha Alimentar</h3>
                        <p>Arrecadamos e distribuímos alimentos para famílias que precisam.</p>
                        <a href="projetos.html" data-link>Conheça o projeto</a>
                    </div>
                </article>

                <article class="card">
                    <img src="./projeto-3.jpg"
                        alt="Pessoa utilizando computador durante atividade de inclusão digital">
                    <div>
                        <h3>Inclusão Digital</h3>
                        <p>Promovemos acesso à tecnologia e conhecimentos digitais.</p>
                        <a href="projetos.html" data-link>Conheça o projeto</a>
                    </div>
                </article>
            </div>
        </section>

        <section class="chamada">
            <h2>Faça parte dessa transformação</h2>
            <p>Seu tempo e suas habilidades podem fazer a diferença na vida de muitas pessoas.</p>
            <a href="cadastro.html" data-link>Quero ser voluntário</a>
        </section>

        <address class="contato">
            <p><strong>Instituto Esperança</strong></p>
            <p>Rua luiz Giarola, 100 - Colônia do Marçal</p>
            <p>São João Del Rei - MG</p>
            <p>Telefone: <a href="tel:+5532999999999">(32) 99999-9999</a></p>
            <p>E-mail: <a href="mailto:contato@institutoesperanca.org">contato@institutoesperanca.org</a></p>
        </address>
    `,"projetos.html":`
        <section class="hero">
            <div class="hero-conteudo">
                <h1>Nossos projetos</h1>
                <p>
                    Conheça as iniciativas do Instituto Esperança
                    e descubra como nossas ações ajudam a
                    transformar a comunidade.
                </p>
                <a href="cadastro.html" data-link>Quero ser voluntário</a>
            </div>

            <figure class="hero-imagem">
                <img src="./projetos-banner.jpg" alt="Voluntários reunidos durante uma ação comunitária">
            </figure>
        </section>

        <section class="projetos-introducao">
            <header>
                <h2>Nossas iniciativas</h2>
                <p>
                    Cada projeto nasce de uma necessidade
                    identificada na comunidade e busca gerar
                    impacto social positivo.
                </p>
            </header>
        </section>

        <article class="projeto-detalhado">
            <figure>
                <img src="./projeto-1.jpg" alt="Crianças participando de uma atividade educacional">
            </figure>
            <div class="explicacao-projetos">
                <span class="badge badge-ativo">Projeto ativo</span>
                <h2>Educação para Todos</h2>
                <p>
                    O projeto Educação para Todos oferece
                    atividades educacionais e oficinas para
                    crianças e adolescentes.
                </p>
                <p>
                    A iniciativa busca incentivar o aprendizado,
                    estimular a criatividade e ampliar as
                    oportunidades educacionais dos participantes.
                </p>
                <h3>Como você pode ajudar</h3>
                <ul>
                    <li>Apoio nas atividades educacionais</li>
                    <li>Doação de materiais escolares</li>
                    <li>Participação em oficinas</li>
                    <li>Apoio na organização das atividades</li>
                </ul>
            </div>
        </article>

        <article class="projeto-detalhado projeto-invertido">
            <figure>
                <img src="./projeto-4.jpg" alt="Voluntários organizando alimentos para doação">
            </figure>
            <div class="explicacao-projetos">
                <span class="badge badge-ativo">Projeto ativo</span>
                <h2>Campanha Alimentar</h2>
                <p>
                    A Campanha Alimentar arrecada alimentos
                    e organiza sua distribuição para famílias
                    que enfrentam dificuldades.
                </p>
                <p>
                    Além das campanhas de arrecadação,
                    voluntários ajudam na organização,
                    separação e distribuição das doações.
                </p>
                <h3>Como você pode ajudar</h3>
                <ul>
                    <li>Doação de alimentos</li>
                    <li>Divulgação das campanhas</li>
                    <li>Organização das doações</li>
                    <li>Apoio na distribuição</li>
                </ul>
            </div>
        </article>

        <article class="projeto-detalhado">
            <figure>
                <img src="./projeto-3.jpg" alt="Pessoa participando de uma oficina de informática">
            </figure>
            <div class="explicacao-projetos">
                <span class="badge badge-ativo">Projeto ativo</span>
                <h2>Inclusão Digital</h2>
                <p>
                    O projeto Inclusão Digital oferece oficinas
                    para aproximar pessoas da tecnologia.
                </p>
                <p>
                    Os participantes aprendem conceitos básicos
                    de informática, internet e ferramentas
                    digitais que podem ser úteis no dia a dia.
                </p>
                <h3>Como você pode ajudar</h3>
                <ul>
                    <li>Ministrar oficinas</li>
                    <li>Apoiar os participantes</li>
                    <li>Doar computadores e equipamentos</li>
                    <li>Compartilhar conhecimentos</li>
                </ul>
            </div>
        </article>

        <section class="chamada">
            <h2>Faça parte dessa transformação</h2>
            <p>Você pode contribuir com seu tempo, conhecimento ou recursos.</p>
            <a href="cadastro.html" data-link>Quero ser voluntário</a>
        </section>
    `,"cadastro.html":`
        <section class="hero">
            <div class="hero-conteudo">
                <h1>Faça parte da nossa equipe</h1>
                <p>
                    Preencha o formulário para demonstrar
                    seu interesse em participar dos nossos
                    projetos sociais.
                </p>
            </div>

            <figure class="hero-imagem">
                <img src="./projeto-2.jpg" alt="Grupo de voluntários trabalhando em uma ação social">
            </figure>
        </section>

        <section class="formulario">
            <header>
                <h2>Cadastro de voluntário</h2>
                <p>Preencha seus dados abaixo.</p>
            </header>

            <div class="alerta alerta-sucesso" role="status" hidden>
                <strong>✓ Cadastro realizado com sucesso!</strong>
                <p>Obrigado por se tornar voluntário do Instituto Esperança.</p>
            </div>

            <form id="formCadastro">
                <fieldset>
                    <legend>Dados pessoais</legend>

                    <div class="campo">
                        <label for="nome">Nome completo:</label>
                        <input type="text" id="nome" name="nome" required minlength="3" autocomplete="name"
                            placeholder="Digite seu nome completo">
                    </div>

                    <div class="campo">
                        <label for="email">E-mail:</label>
                        <input type="email" id="email" name="email" required autocomplete="email"
                            placeholder="exemplo@email.com">
                    </div>

                    <div class="campo">
                        <label for="cpf">CPF:</label>
                        <input type="text" id="cpf" name="cpf" required minlength="11"
                            pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" inputmode="numeric" placeholder="000.000.000-00">
                    </div>

                    <div class="campo">
                        <label for="telefone">Telefone:</label>
                        <input type="tel" id="telefone" name="telefone" required maxlength="15"
                            pattern="\\(\\d{2}\\) 9\\d{4}-\\d{4}" inputmode="numeric" autocomplete="tel"
                            placeholder="(00) 90000-0000">
                    </div>

                    <div class="campo">
                        <label for="dataNascimento">Data de nascimento:</label>
                        <input type="date" id="dataNascimento" name="dataNascimento" required>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Endereço</legend>

                    <div class="campo">
                        <label for="cep">CEP:</label>
                        <input type="text" id="cep" name="cep" required maxlength="9" pattern="\\d{5}-\\d{3}"
                            inputmode="numeric" autocomplete="postal-code" placeholder="00000-000">
                    </div>

                    <div class="campo">
                        <label for="endereco">Endereço:</label>
                        <input type="text" id="endereco" name="endereco" required placeholder="Rua, avenida...">
                    </div>

                    <div class="campo">
                        <label for="numero">Número:</label>
                        <input type="number" id="numero" name="numero" required min="1" placeholder="Número">
                    </div>

                    <div class="campo">
                        <label for="cidade">Cidade:</label>
                        <input type="text" id="cidade" name="cidade" required autocomplete="address-level2"
                            placeholder="Digite sua cidade">
                    </div>

                    <div class="campo">
                        <label for="estado">Estado:</label>
                        <select id="estado" name="estado" required>
                            <option value="">Selecione seu estado</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Interesse em voluntariado</legend>

                    <div class="campo">
                        <label for="area">Área de interesse:</label>
                        <select id="area" name="area" required>
                            <option value="">Selecione uma área</option>
                            <option value="educacao">Educação</option>
                            <option value="alimentacao">Alimentação</option>
                            <option value="eventos">Eventos</option>
                            <option value="tecnologia">Tecnologia</option>
                            <option value="comunicacao">Comunicação</option>
                        </select>
                    </div>

                    <div class="campo">
                        <label for="disponibilidade">Disponibilidade:</label>
                        <select id="disponibilidade" name="disponibilidade" required>
                            <option value="">Selecione sua disponibilidade</option>
                            <option value="manha">Manhã</option>
                            <option value="tarde">Tarde</option>
                            <option value="noite">Noite</option>
                            <option value="finais-de-semana">Finais de semana</option>
                        </select>
                    </div>

                    <div class="campo">
                        <label for="mensagem">Conte um pouco sobre você:</label>
                        <textarea id="mensagem" name="mensagem" rows="6" minlength="10"
                            placeholder="Conte-nos por que gostaria de ser voluntário..."></textarea>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Confirmação</legend>
                    <div class="checkbox">
                        <input type="checkbox" id="termos" name="termos" required>
                        <label for="termos">
                            Confirmo que as informações fornecidas são verdadeiras.
                        </label>
                    </div>
                </fieldset>

                <button type="submit" class="botao-toast">Enviar cadastro</button>
            </form>
        </section>

        <div id="toast-sucesso" class="toast" role="status">
            <strong>✓ Cadastro realizado!</strong>
            <p>Obrigado por participar do Instituto Esperança.</p>
            <a href="#" class="toast-fechar" aria-label="Fechar notificação">×</a>
        </div>
    `};function t(){let e=document.querySelector(`#cpf`),t=document.querySelector(`#telefone`),n=document.querySelector(`#cep`),r=document.querySelector(`#formCadastro`),i=document.querySelector(`.alerta-sucesso`),a=document.querySelector(`#toast-sucesso`);if(!r||r.dataset.inicializado===`true`)return;r.dataset.inicializado=`true`;let o={nome:`Digite seu nome completo, com pelo menos 3 caracteres.`,email:`Digite um e-mail válido, como exemplo@email.com.`,cpf:`Digite o CPF completo no formato 000.000.000-00.`,telefone:`Digite o telefone completo no formato (00) 90000-0000.`,dataNascimento:`Informe sua data de nascimento.`,cep:`Digite o CEP completo no formato 00000-000.`,endereco:`Digite o nome da rua ou avenida.`,numero:`Digite um número de endereço maior que zero.`,cidade:`Digite o nome da sua cidade.`,estado:`Selecione seu estado.`,area:`Selecione uma área de interesse.`,disponibilidade:`Selecione sua disponibilidade.`,mensagem:`Digite pelo menos 10 caracteres sobre você.`};function s(e,t){let n=e.parentElement.querySelector(`.mensagem-erro`);if(!n)return;let r=!e.checkValidity();e.classList.toggle(`campo-invalido`,t&&r),e.setAttribute(`aria-invalid`,t&&r?`true`:`false`),n.classList.toggle(`visivel`,t&&r)}if(document.querySelectorAll(`.campo input, .campo select, .campo textarea`).forEach(function(e){let t=document.createElement(`small`);t.className=`mensagem-erro`,t.id=`${e.id}-erro`,t.textContent=o[e.id]||`Preencha este campo corretamente.`,e.parentElement.appendChild(t),e.setAttribute(`aria-describedby`,t.id),e.addEventListener(`blur`,function(){e.dataset.tocado=`true`,s(e,!0)}),e.addEventListener(`input`,function(){e.dataset.tocado===`true`&&queueMicrotask(function(){s(e,!0)})})}),e&&e.addEventListener(`input`,function(){let t=e.value.replace(/\D/g,``);t=t.replace(/(\d{3})(\d)/,`$1.$2`),t=t.replace(/(\d{3})(\d)/,`$1.$2`),t=t.replace(/(\d{3})(\d{1,2})$/,`$1-$2`),e.value=t}),t&&t.addEventListener(`input`,function(){let e=t.value.replace(/\D/g,``);e=e.replace(/^(\d{2})(\d)/g,`($1) $2`),e=e.replace(/(\d)(\d{4})$/,`$1-$2`),t.value=e}),n&&n.addEventListener(`input`,function(){let e=n.value.replace(/\D/g,``);e=e.replace(/^(\d{5})(\d)/,`$1-$2`),n.value=e}),r.addEventListener(`submit`,function(e){if(e.preventDefault(),r.querySelectorAll(`.campo input, .campo select, .campo textarea`).forEach(function(e){e.dataset.tocado=`true`,s(e,!0)}),!r.checkValidity()){r.reportValidity();return}r.reset(),r.querySelectorAll(`.campo input, .campo select, .campo textarea`).forEach(function(e){e.dataset.tocado=`false`,s(e,!1)}),i&&(i.hidden=!1),a&&a.classList.add(`visivel`)}),a){let e=a.querySelector(`.toast-fechar`);e&&e.addEventListener(`click`,function(e){e.preventDefault(),a.classList.remove(`visivel`),window.history.replaceState(null,``,window.location.pathname+window.location.search)})}}var n=document.querySelector(`#app`),r={"index.html":`Instituto Esperança | Transformando vidas`,"projetos.html":`Nossos Projetos | Instituto Esperança`,"cadastro.html":`Seja Voluntário | Instituto Esperança`},i=`index.html`;function a(e){if(!e)return i;let t=e.split(`#`)[0].split(`?`)[0];return t=t.replace(/^.*\//,``),t===``||t===`/`?i:r[t]?t:i}async function o(a,{atualizarHistorico:o=!0}={}){n.innerHTML=e[a]||e[i],document.title=r[a]||r[i],window.scrollTo({top:0,behavior:`instant`in window?`instant`:`auto`});let s=document.querySelector(`#menu-toggle`);if(s&&(s.checked=!1),a===`cadastro.html`&&(await new Promise(e=>requestAnimationFrame(e)),t()),o){let e=a===i?`/`:`/${a}`;history.pushState({rota:a},``,e)}}function s(){document.addEventListener(`click`,function(e){let t=e.target.closest(`a[data-link]`);if(!t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;let n=t.getAttribute(`href`);!n||n.startsWith(`http`)||n.startsWith(`#`)||n.startsWith(`mailto:`)||n.startsWith(`tel:`)||(e.preventDefault(),o(a(n)))})}function c(){window.addEventListener(`popstate`,function(e){o(e.state?.rota||a(window.location.pathname),{atualizarHistorico:!1})})}function l(){s(),c();let e=a(window.location.pathname);o(e,{atualizarHistorico:!1}),history.replaceState({rota:e},``,window.location.pathname)}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,l):l();