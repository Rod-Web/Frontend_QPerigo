import { btnEsperto } from "./components/global/rolagem-topo.js";

import { carregarDados } from "./functions/api.js";
import { configuracaoFiltro } from "./functions/filtros.js";
import { atualizarPagina } from "./functions/render.js";

document.addEventListener("DOMContentLoaded", async ()=> {
    await carregarDados()
    configuracaoFiltro(atualizarPagina)
    atualizarPagina()
    btnEsperto();
})
