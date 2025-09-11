const membros = [
    { nome: "Rodrigo Valentim de Araujo", funcao: "Desenvolvedor FullStack", foto: "", turma: "informática para internet", ano: "2025" },
    { nome: "Mirela Santos de Amaral", funcao: "Desenvolvedor FullStack", foto: "", turma: "informática para internet", ano: "2025" },
    { nome: "Vinícius Martins de Paiva", funcao: "Desenvolvedor Back-end", foto: "/frontend/assets/images/teams/informatica/2025/vinicius.jpg", turma: "informática para internet", ano: "2025" },
    { nome: "Nicollas Trindade", funcao: "Desenvolvedor Front-end", foto: "", turma: "informática para internet", ano: "2025" },
    
    
    
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
    { nome: "Guilherme Pereira Bispo dos Santos", funcao: "Pesquisador", foto: "/frontend/assets/images/teams/quimica/2024/Guilherme-Pereira-Bispo-dos-Santos.jpg", turma: "química", ano: "2024" },
    { nome: "Jéssica Ferreira da Silva Santos", funcao: "Pesquisadora", foto: "/frontend/assets/images/teams/quimica/2024/Jessica-Ferreira-da-Silva Santos.jpg", turma: "química", ano: "2024" },
    { nome: "Kaique Lira dos Santos", funcao: "Pesquisador", foto: "/frontend/assets/images/teams/quimica/2024/Kaique-Lira-dos-Santos.jpeg", turma: "química", ano: "2024" },
    { nome: "Mariana Alvarenga Barreto", funcao: "Pesquisadora", foto: "/frontend/assets/images/teams/quimica/2024/Mariana-Alvarenga-Barreto.jpg", turma: "química", ano: "2024" },
    { nome: "Otávio Alves Paulino", funcao: "Pesquisador", foto: "/frontend/assets/images/teams/quimica/2024/Otavio-Alves-Paulino.jpg", turma: "química", ano: "2024" },
    { nome: "Paulo Henrique da Silva Veloso", funcao: "Pesquisador", foto: "/frontend/assets/images/teams/quimica/2024/Paulo-Henrique-da-Silva-Veloso.jpg", turma: "química", ano: "2024" },
    { nome: "Thais Luiza Alves da Silva Borges", funcao: "Pesquisadora", foto: "/frontend/assets/images/teams/quimica/2024/Thais-Luiza-Alves-da-Silva-Borges.jpg", turma: "química", ano: "2024" }

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