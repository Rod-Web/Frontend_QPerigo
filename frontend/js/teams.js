const membros = [
    { nome: "Rodrigo", funcao: "...", foto: "", turma: "informática para internet", ano: "2025" },
    { nome: "Mirela", funcao: "...", foto: "", turma: "informática para internet", ano: "2025" },
    { nome: "Vinicius", funcao: "...", foto: "", turma: "informática para internet", ano: "2025" },
    { nome: "Nicolas", funcao: "...", foto: "", turma: "informática para internet", ano: "2025" },
    { nome: "Fernando Ramirez Gutierrez", funcao: "Desenvolvedor Front-end", foto: "", turma: "informática para internet", ano: "2024" },
    { nome: "Gabriel Carvalho Feltrin", funcao: "Desenvolvedor Front-end", foto: "", turma: "informática para internet", ano: "2024" },
    { nome: "Luiz Fernando dos Santos Vieira", funcao: "Desenvolvedor Back-end", foto: "", turma: "informática para internet", ano: "2024" },
    { nome: "Geovanne de Souza Silva", funcao: "Desenvolvedor Back-end", foto: "", turma: "informática para internet", ano: "2024" },



    // Química 2025
    { nome: "Ana Júlia", funcao: "Pesquisadora", foto: "", turma: "química", ano: "2025" },
    { nome: "Pedro Henrique", funcao: "Analista", foto: "", turma: "química", ano: "2025" },
    { nome: "Camila Borges", funcao: "Técnica de laboratório", foto: "", turma: "química", ano: "2025" },
    { nome: "João Vitor", funcao: "Estagiário", foto: "", turma: "química", ano: "2025" },

    // Química 2024
    { nome: "Letícia Souza", funcao: "Pesquisadora", foto: "", turma: "química", ano: "2024" },
    { nome: "Carlos Eduardo", funcao: "Analista", foto: "", turma: "química", ano: "2024" },
    { nome: "Isabela Martins", funcao: "Técnica de laboratório", foto: "", turma: "química", ano: "2024" },
    { nome: "Rafael Lima", funcao: "Estagiário", foto: "", turma: "química", ano: "2024" }

];

function configurarSeletores() {
    let seletores = document.querySelectorAll('select');
    seletores.forEach(seletor => {seletor.addEventListener('change', function() {let value = this.value; FiltrarTimePorAnoETurma(value)})})


}

function FiltrarTimePorAnoETurma(value) {
    const [ano, turma] = value.split('-');
    let time = membros.filter(membro => membro.ano === ano && membro.turma === (turma === "info" ? "informática para internet" : "química"))
    console.log(ano, turma, time);
    PreenchimentoHTML(time)
}
function PreenchimentoHTML(time) {
    // Determina qual container atualizar baseado na turma do primeiro membro (se existir)
    const turma = time[0]?.turma;
    let containerClass;
    
    if (turma === "informática para internet") {
        containerClass = "container-info";
    } else if (turma === "química") {
        containerClass = "container-quimica";
    } else {
        return;
    }

    const container = document.querySelector(`.${containerClass}`);
    
    container.innerHTML = '';

    time.forEach(membro => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <img src="${membro.foto || ''}" alt="${membro.nome}" class="img-member">
            <h4>${membro.nome}</h4>
            <p>${membro.funcao || '...'}</p>
        `;
        
        container.appendChild(card);
    });
}

configurarSeletores()