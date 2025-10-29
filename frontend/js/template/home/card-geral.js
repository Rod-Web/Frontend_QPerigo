export function cardGeral(data) {
    // Criar elemento card
    const card = document.createElement('div');
    card.className = 'card';
    
    // Criar badge de periculosidade
    const divPericulosidade = document.createElement('div');
    const icon = document.createElement('img');
    const badge = document.createElement('span');

    divPericulosidade.className = 'box-badge';
    icon.className = 'icon-badge';
    badge.className = 'card-badge';
    
    const nivel = data.periculosidade.trim().toLowerCase();

    switch (nivel) {
        case "vermelho":
            icon.src = "/frontend/assets/images/icons/periculosidade/perigo.svg";
            divPericulosidade.style.backgroundColor = "red";
            badge.textContent = "Perigo";
        break;
        case "laranja":
            icon.src = "/frontend/assets/images/icons/periculosidade/perigo.svg";
            divPericulosidade.style.backgroundColor = "red";
            badge.textContent = "Perigo";
        break;

        case "amarelo":
            icon.src = "/frontend/assets/images/icons/periculosidade/atencao.svg";
            divPericulosidade.style.backgroundColor = "yellow";
            badge.style.color = "black";
            badge.textContent = "Atenção";
        break;

        case "azul":
            icon.src = "/frontend/assets/images/icons/periculosidade/seguro.svg";
            divPericulosidade.style.backgroundColor = "green";
            badge.textContent = "Seguro";
        break;
        case "verde":
            icon.src = "/frontend/assets/images/icons/periculosidade/seguro.svg";
            divPericulosidade.style.backgroundColor = "green";
            badge.textContent = "Seguro";
        break;

        default:
            console.log("Erro na separação de cor dos badges");
        break;
    }


    divPericulosidade.appendChild(icon)
    divPericulosidade.appendChild(badge)


    
    // Criar imagem do banner

    const img = document.createElement('img');
    img.className = 'card-image';
    img.src = data.banner || '/frontend/assets/images/skeletion/cover-temp.png';
    img.alt = data.nome_produto;
    
    // Criar conteúdo do card
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';
    
    // Criar título
    const title = document.createElement('h2');
    title.className = 'card-title';
    title.textContent = data.nome_produto;
    
    // Criar introdução (com limite de 200 caracteres)
    const intro = document.createElement('p');
    intro.className = 'card-intro';
    const maxLength = 200;
    intro.textContent = data.introducao.length > maxLength 
        ? `${data.introducao.substring(0, maxLength)}...` 
        : data.introducao;
    
    // Criar link "Saiba Mais"
    const link = document.createElement('a');
    link.className = 'card-link';
    link.textContent = 'Continuar lendo';
    link.href = `/frontend/conteudo.html?id=${data.id_postagem}`;
    
    // Montar a estrutura do card
    card.appendChild(divPericulosidade);
    card.appendChild(img);
    
    cardContent.appendChild(title);
    cardContent.appendChild(intro);
    cardContent.appendChild(link);
    
    card.appendChild(cardContent);
    
    return card;
}