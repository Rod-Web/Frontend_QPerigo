const teamMembers = {
    "info": {
        "2024": [
            {
                "name": "Fernando Ramirez Gutierrez",
                "role": "Desenvolvedor Front-end",
                "image": "assets/images/team/",
                "social": {
                    "github": "#",
                    "linkedin": "#"
                }
            },
            {
                "name": "Gabriel Carvalho Feltrin",
                "role": "Desenvolvedor Front-end",
                "image": "assets/images/team/",
                "social": {
                    "github": "#",
                    "linkedin": "#"
                }
            },
            {
                "name": "Luiz Fernando dos Santos Vieira",
                "role": "Desenvolvedor Back-end",
                "image": "assets/images/team/",
                "social": {
                    "github": "#",
                    "linkedin": "#"
                }
            },
            {
                "name": "Geovanne de Souza Silva",
                "role": "Desenvolvedor Back-end",
                "image": "assets/images/team/",
                "social": {
                    "github": "#",
                    "linkedin": "#"
                }
            }
        ],
        "2025": [
            {
                "name": "Rodrigo Valentim de Araujo",
                "role": "Desenvolvedor FullStack",
                "image": "assets/images/team/",
                "social": {
                    "github": "https://github.com/Rod-Web",
                    "linkedin": "#"
                }
            },
            {
                "name": "Mirela Santos de Amarante",
                "role": "Desenvolvedora FullStack",
                "image": "assets/images/team/",
                "social": {
                    "github": "https://github.com/Miih-Santos",
                    "linkedin": "#"
                }
            },
            {
                "name": "Vinícius Martins de Paiva",
                "role": "Desenvolvedor Back-end",
                "image": "assets/images/teams/informatica/2025/vinicius.jpg",
                "social": {
                    "github": "https://github.com/Martins-Vini",
                    "linkedin": ""
                }
            },
            {
                "name": "Nicollas Trindade",
                "role": "Desenvolvedor Front-end",
                "image": "assets/images/teams/informatica/2025/trindade.jpg",
                "social": {
                    "github": "https://github.com/nicollastrindade",
                    "linkedin": "#"
                }
            }
        ]
    },
    "quimica": {
        "2024": [
            {
                "name": "Guilherme Pereira Bispo dos Santos",
                "role": "Pesquisador",
                "image": "assets/images/teams/quimica/2024/Guilherme-Pereira-Bispo-dos-Santos.jpg"
            },
            {
                "name": "Jéssica Ferreira da Silva Santos",
                "role": "Pesquisadora",
                "image": "assets/images/teams/quimica/2024/Jessica-Ferreira-da-Silva Santos.jpg"
            },
            {
                "name": "Kaique Lira dos Santos",
                "role": "Pesquisador",
                "image": "assets/images/teams/quimica/2024/Kaique-Lira-dos-Santos.jpeg"
            },
            {
                "name": "Mariana Alvarenga Barreto",
                "role": "Pesquisadora",
                "image": "assets/images/teams/quimica/2024/Mariana-Alvarenga-Barreto.jpg"
            },
            {
                "name": "Otávio Alves Paulino",
                "role": "Pesquisador",
                "image": "assets/images/teams/quimica/2024/Otavio-Alves-Paulino.jpg"
            },
            {
                "name": "Paulo Henrique da Silva Veloso",
                "role": "Pesquisador",
                "image": "assets/images/teams/quimica/2024/Paulo-Henrique-da-Silva-Veloso.jpg"
            },
            {
                "name": "Thais Luiza Alves da Silva Borges",
                "role": "Pesquisadora",
                "image": "assets/images/teams/quimica/2024/Thais-Luiza-Alves-da-Silva-Borges.jpg"
            }
        ],
        "2025": [
            {
                "name": "Ana Júlia",
                "role": "Pesquisadora",
                "image": "assets/images/team/"
            },
            {
                "name": "Camila Borges",
                "role": "Técnica de laboratório",
                "image": "assets/images/team/"
            },
            {
                "name": "João Vitor",
                "role": "Estagiário",
                "image": "assets/images/team/"
            },
            {
                "name": "Pedro Henrique",
                "role": "Analista",
                "image": "assets/images/team/"
                
            }
        ]
    }
};

// Função para carregar os membros da equipe
function loadTeamMembers() {
    // Carregar equipe de informática
    const teamInfoSelect = document.getElementById('team-info');
    const containerInfo = document.querySelector('.container-info');
    
    // Carregar equipe de química
    const teamQuimicaSelect = document.getElementById('team-quimica');
    const containerQuimica = document.querySelector('.container-quimica');
    
    // Função para verificar se é mobile
    function isMobile() {
        return window.innerWidth <= 768;
    }
    
    // Função para renderizar os cards (modo desktop)
    function renderCardsDesktop(container, team, year) {
        container.innerHTML = '';
        
        if (teamMembers[team] && teamMembers[team][year]) {
            teamMembers[team][year].forEach(member => {
                const card = document.createElement('div');
                card.className = 'card';
                
                const imageSrc = member.image || 'assets/images/teams/placeholder.jpg';
                
                let socialHTML = '';
                
                if (team === 'info') {
                    // Para informática: mostrar apenas GitHub e LinkedIn (Instagram removido)
                    socialHTML = `
                        <a href="${member.social.github}" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="${member.social.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
                    `;
                } else if (team === 'quimica') {
                    // Para química: não mostrar redes sociais
                    socialHTML = '';
                }
                
                card.innerHTML = `
                    <img src="${imageSrc}" alt="${member.name}" class="img-member" onerror="this.src='assets/images/teams/placeholder.jpg'">
                    <h4>${member.name}</h4>
                    <p>${member.role}</p>
                    <div class="member-social">
                        ${socialHTML}
                    </div>
                `;
                
                container.appendChild(card);
            });
        }
    }
    
    // Função para criar o carrossel (modo mobile)
    function createCarouselMobile(container, team, year) {
        container.innerHTML = '';
        
        if (teamMembers[team] && teamMembers[team][year]) {
            const members = teamMembers[team][year];
            
            const carouselWrapper = document.createElement('div');
            carouselWrapper.className = 'carousel-wrapper';
            
            const carouselContainer = document.createElement('div');
            carouselContainer.className = 'carousel-container';
            
            const prevButton = document.createElement('button');
            prevButton.className = 'carousel-btn carousel-prev';
            prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
            prevButton.setAttribute('aria-label', 'Membros anteriores');
            
            const nextButton = document.createElement('button');
            nextButton.className = 'carousel-btn carousel-next';
            nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
            nextButton.setAttribute('aria-label', 'Próximos membros');
            
            members.forEach(member => {
                const card = document.createElement('div');
                card.className = 'carousel-card';
                
                const imageSrc = member.image || 'assets/images/teams/placeholder.jpg';
                
                let socialHTML = '';
                
                if (team === 'info') {
                    // Para informática: mostrar apenas GitHub e LinkedIn (Instagram removido)
                    socialHTML = `
                        <a href="${member.social.github}" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="${member.social.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
                    `;
                } else if (team === 'quimica') {
                    // Para química: não mostrar redes sociais
                    socialHTML = '';
                }
                
                card.innerHTML = `
                    <img src="${imageSrc}" alt="${member.name}" class="carousel-img" onerror="this.src='assets/images/teams/placeholder.jpg'">
                    <h4>${member.name}</h4>
                    <p>${member.role}</p>
                    <div class="member-social">
                        ${socialHTML}
                    </div>
                `;
                
                carouselContainer.appendChild(card);
            });
            
            carouselWrapper.appendChild(prevButton);
            carouselWrapper.appendChild(carouselContainer);
            carouselWrapper.appendChild(nextButton);
            
            container.appendChild(carouselWrapper);
            
            initCarouselMobile(carouselContainer, prevButton, nextButton);
        }
    }
    
    // Função para inicializar o carrossel mobile
    function initCarouselMobile(container, prevBtn, nextBtn) {
        const cards = container.querySelectorAll('.carousel-card');
        if (cards.length === 0) return;
        
        const cardWidth = cards[0].offsetWidth + 25;
        let currentPosition = 0;
        const maxPosition = (cards.length - 1) * cardWidth;
        
        prevBtn.addEventListener('click', () => {
            if (currentPosition > 0) {
                currentPosition -= cardWidth;
                container.style.transform = `translateX(-${currentPosition}px)`;
            }
            updateButtons();
        });
        
        nextBtn.addEventListener('click', () => {
            if (currentPosition < maxPosition) {
                currentPosition += cardWidth;
                container.style.transform = `translateX(-${currentPosition}px)`;
            }
            updateButtons();
        });
        
        function updateButtons() {
            prevBtn.style.opacity = currentPosition > 0 ? '1' : '0.5';
            nextBtn.style.opacity = currentPosition < maxPosition ? '1' : '0.5';
        }
        
        updateButtons();
        
        // Touch events
        let startX = 0;
        let currentX = 0;
        
        container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        container.addEventListener('touchmove', (e) => {
            currentX = e.touches[0].clientX;
        });
        
        container.addEventListener('touchend', () => {
            const diff = startX - currentX;
            if (Math.abs(diff) > 50) {
                if (diff > 0 && currentPosition < maxPosition) {
                    currentPosition += cardWidth;
                } else if (diff < 0 && currentPosition > 0) {
                    currentPosition -= cardWidth;
                }
                container.style.transform = `translateX(-${currentPosition}px)`;
                updateButtons();
            }
        });
    }
    
    // Função principal para renderizar baseada no tamanho da tela
    function renderTeam(container, team, year) {
        if (isMobile()) {
            createCarouselMobile(container, team, year);
        } else {
            renderCardsDesktop(container, team, year);
        }
    }
    
    // Renderizar inicialmente com 2025 primeiro
    renderTeam(containerInfo, 'info', '2025');
    renderTeam(containerQuimica, 'quimica', '2025');
    
    // Adicionar event listeners para os selects
    teamInfoSelect.addEventListener('change', function() {
        const year = this.value;
        renderTeam(containerInfo, 'info', year);
    });
    
    teamQuimicaSelect.addEventListener('change', function() {
        const year = this.value;
        renderTeam(containerQuimica, 'quimica', year);
    });
    
    // Re-renderizar quando a janela for redimensionada
    window.addEventListener('resize', () => {
        renderTeam(containerInfo, 'info', teamInfoSelect.value);
        renderTeam(containerQuimica, 'quimica', teamQuimicaSelect.value);
    });
}