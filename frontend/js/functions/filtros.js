import { postagens } from './api.js';

export let postagensFiltradas = [];
let valorFiltro = [];

export function configuracaoFiltro(atualizarPagina) {
    const botoes = document.querySelectorAll(".room");
    botoes.forEach((btn) => {
        btn.addEventListener("click", () => {
            const botaoId = parseInt(btn.id);
            const botaoAtiv = btn.classList.contains("active");
            const p = document.querySelector('.titulo-filtro')
            const text = btn.querySelector("h3").textContent
            
            botoes.forEach((b) => b.classList.remove("active"));
            valorFiltro = [];
            p.textContent = ""

            if (!botaoAtiv) {
                btn.classList.add("active");
                valorFiltro.push(botaoId);
                p.textContent = `Filtrando por: ${text}`
            }

            atualizarPagina();
        });
    });
}

export function aplicarFiltro() {
    if (valorFiltro.length === 0) {
        postagensFiltradas = [...postagens];
    } else {
        postagensFiltradas = postagens.filter((item) =>
            valorFiltro.includes(item.id_comodo)
        );
    }
}

