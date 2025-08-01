*Estrutura de arquivos e pastas*

frontend/

├── assets/                     # Arquivos estáticos (imagens, fonts, etc.)

│   ├── images/                 # Todas as imagens do projeto
│   │   ├── banners/            # banners do carrossel do home
│   │   │   ├── banner-1.png
│   │   │   ├── banner-2.png
│   │   │   ├── banner-3.png
│   │   └── logo_q_perigo.png
│   └── favicon.ico             # Ícone da página

├── css/                        # Folhas de estilo

│   ├── components/             # Estilos específicos de componentes
│   │   ├── banner-home.css                                                                             --- Estudar IA
│   │   ├── header.css
│   │   └── ...

│   ├── pages/                  # Estilos específicos de páginas 
│   │   ├── conteudo.css
│   │   ├── desenvolvedores.css
│   │   └── home.css

│   ├── global.css              # Estilos globais
│   └── reset.css               # Reset/Normalize CSS

├── js/

│   ├── global.js               # Scripts globais (menu, footer, etc.)

│   ├── components/             # Funções utilitárias (reutilizáveis)
│   │   └── carrossel-home-banner.js                                                                    ---- Estudar IA

│   ├── modules/
│   │   ├── conteudo.js         # Scripts específicos da página dos conteúdos dos cards
│   │   ├── desenvolvedores.js  # Scripts específicos da página dos desenvolvedores
│   │   └── home.js             # Scripts específicos da página home

│   ├── utils/                  # Funções utilitárias (reutilizáveis)
│   │   └── helpers.js

|   └──main.js                  # Script central do home

├── conteudo.html               # Página dos conteúdos dos cards
├── desenvolvedores.html        # Página sobre os desenvolvedores
├── index.html                  # Página principal

└── README.md                   # Documentação do projeto