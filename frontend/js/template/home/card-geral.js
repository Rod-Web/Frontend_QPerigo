export function cardGeral(data) {
    // Criar elemento card
    const card = document.createElement('div');
    card.className = 'card';
    
    // Criar badge de acessos
    const badge = document.createElement('span');
    badge.className = 'card-badge';
    badge.textContent = `${data.acessos} visualizações`;
    
    // Criar imagem do banner
    const img = document.createElement('img');
    img.className = 'card-image';
    img.src = data.banner;
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
    link.textContent = 'Saiba Mais';
    link.href = `/frontend/conteudo.html?id=${data.id_postagem}`;
    
    // Montar a estrutura do card
    card.appendChild(badge);
    card.appendChild(img);
    
    cardContent.appendChild(title);
    cardContent.appendChild(intro);
    cardContent.appendChild(link);
    
    card.appendChild(cardContent);
    
    return card;
}