// js/router.js

import { templates } from "./templates.js";
import { inicializarFormulario } from "./script.js";

const app = document.querySelector("#app");

// Mapa de rotas válidas → título do documento
const rotas = {
    "index.html": "Instituto Esperança | Transformando vidas",
    "projetos.html": "Nossos Projetos | Instituto Esperança",
    "cadastro.html": "Seja Voluntário | Instituto Esperança"
};

// Página inicial padrão
const ROTA_PADRAO = "index.html";

/**
 * Normaliza o caminho do link para uma chave de rota conhecida.
 * Aceita "/", "/index.html", "index.html", etc.
 */
function normalizarRota(href) {
    if (!href) return ROTA_PADRAO;

    // Remove domínio, barras iniciais e parâmetros/hash
    let caminho = href.split("#")[0].split("?")[0];
    caminho = caminho.replace(/^.*\//, "");

    if (caminho === "" || caminho === "/") {
        return ROTA_PADRAO;
    }

    return rotas[caminho] ? caminho : ROTA_PADRAO;
}

/**
 * Renderiza o conteúdo de uma rota no <main>.
 */
async function renderizar(rota, { atualizarHistorico = true } = {}) {

    const template = templates[rota] || templates[ROTA_PADRAO];

    // Injeta o HTML
    app.innerHTML = template;

    // Atualiza o título
    document.title = rotas[rota] || rotas[ROTA_PADRAO];

    // Rola para o topo (como uma navegação real)
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });

    // Fecha o menu mobile, se estiver aberto
    const toggle = document.querySelector("#menu-toggle");
    if (toggle) toggle.checked = false;

    // Executa scripts específicos da página
    if (rota === "cadastro.html") {
        // Pequeno delay para garantir que o DOM já foi pintado
        await new Promise((resolve) => requestAnimationFrame(resolve));
        inicializarFormulario();
    }

    // Atualiza histórico
    if (atualizarHistorico) {
        const url = rota === ROTA_PADRAO ? "/" : `/${rota}`;
        history.pushState({ rota }, "", url);
    }
}

/**
 * Intercepta cliques em qualquer <a data-link>.
 */
function configurarLinks() {
    document.addEventListener("click", function (event) {

        const link = event.target.closest("a[data-link]");
        if (!link) return;

        // Ignora cliques com modificadores (abrir em nova aba, etc.)
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

        const href = link.getAttribute("href");

        // Links externos, âncoras ou mailto/tel não são interceptados
        if (!href || href.startsWith("http") || href.startsWith("#") ||
            href.startsWith("mailto:") || href.startsWith("tel:")) {
            return;
        }

        event.preventDefault();
        const rota = normalizarRota(href);
        renderizar(rota);
    });
}

/**
 * Trata navegação via botões voltar/avançar do navegador.
 */
function configurarHistorico() {
    window.addEventListener("popstate", function (event) {
        const rota = event.state?.rota || normalizarRota(window.location.pathname);
        renderizar(rota, { atualizarHistorico: false });
    });
}

/**
 * Inicialização da SPA.
 */
function iniciar() {
    configurarLinks();
    configurarHistorico();

    // Substitui o estado inicial sem criar nova entrada no histórico
    const rotaInicial = normalizarRota(window.location.pathname);
    renderizar(rotaInicial, { atualizarHistorico: false });
    history.replaceState({ rota: rotaInicial }, "", window.location.pathname);
}

// Aguarda o DOM estar pronto
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
} else {
    iniciar();
}