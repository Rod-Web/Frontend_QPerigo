import { criarSpanPericulosidade } from "../../components/conteudo/span.js";

import { btnEsperto } from "../../components/global/rolagem-topo.js";

btnEsperto()

function receberDados() {
    const dados = localStorage.getItem("postagens");
    if(dados) {
        const postagens = JSON.parse(dados);
        console.log("Dados recebidos do localStorage")
        return postagens
    } else {
        console.error("Erro: Dados não encontrados.");
        return [];
    }

}

function parametrosURl(){
    let params = new URLSearchParams(window.location.search);
    let id = params.get('id');
    
    if (id) {
        console.log("parametro id capturado da url")   
        return id
    } else {
        console.error("Erro: Parâmetro 'id' não encontrado.");
        return null;
    }
}

const pegarId = parametrosURl()
const pegarDados = receberDados()


function filtarPostAtual(dados, id) {
    const post_atual = dados.find(dado => dado.id_postagem == id);
    console.log("Postagem filtrada")
        if (!post_atual) {
        console.error("Postagem não encontrada.");
    }
    return post_atual;
}

if(pegarId && pegarDados) {
    const post_filtrado = filtarPostAtual(pegarDados, pegarId)
    if(post_filtrado) {
        PreencherHTML(post_filtrado)
    } else {
        console.error("Postagem não foi filtrada ou encontrada corretamente.");
    }
} else {
    console.error("Id da URL ou dados não foram capturados ou encontrados.");
}

function PreencherHTML(post) {
    document.title = post.nome_produto + " | QPerigo"
    
    document.querySelector(".artigo h1").textContent = post.nome_produto + " : Tudo que você precisa saber para uma limpeza segura.";
    document.querySelector(".autor_data .data").textContent = post.data_publicacao;

    document.querySelector(".img_produto").src = post.banner || "/frontend/assets/images/skeletion/cover-temp.png";

    const larguraTela = window.innerWidth;
    const divIndice = document.querySelector(".indice");
    if (larguraTela < 768) {
        // mover o indice para baixo da imagem mas antes do conteudo
        document.querySelector(".artigo").children[2].after(divIndice);
    }
    
    const campos_indice = [
      {
        titulo: "O que é o " + post.nome_produto + "?",
        id: "introducao",
      },
      {
        titulo: "Do que é feito o " + post.nome_produto + "?",
        id: "composicao",
      },
      {
        titulo: "Como funciona o " + post.nome_produto + "?",
        id: "como_age",
      },
      {
        titulo: "Como usar o " + post.nome_produto + "?",
        id: "manipulacao",
      },
      {
        titulo: "Pode misturar quais produtos com o  " + post.nome_produto + "?",
        id: "combinacoes_perigosas",
      },
      {
        titulo: "Como guardar o " + post.nome_produto + "?",
        id: "armazenamento",
      }
    ];

    criarSpanPericulosidade(post.periculosidade)
    criarIndice(post, campos_indice)
    criarArtigo(post, campos_indice)
}

function criarIndice(post, campos_indice) {
    const ul_indice = document.querySelector(".indice nav ul");
    campos_indice.forEach((campo) => {
        if (post[campo.id] != null && post[campo.id] !== undefined && post[campo.id] !== "") {
            const li = document.createElement("li");
            const a = document.createElement("a");
            li.appendChild(a);
            ul_indice.appendChild(li);
            a.href = `#${campo.id}`;
            a.textContent = campo.titulo;
        }
    });
}

function criarArtigo(post, campos_indice) {


    const artigo_div = document.querySelector(".conteudo");

    campos_indice.forEach((campo, index) => {
        if (campo.id == "composicao") {
          const secao = document.createElement("section");
          const h3 = document.createElement("h3");
          const p = document.createElement("p");
          secao.classList.add("art");

          secao.id = campo.id;
          h3.textContent = campo.titulo;
          p.innerHTML = post[campo.id].introducao || "";

          secao.appendChild(h3);
          secao.appendChild(p);
          artigo_div.appendChild(secao);

        
            const tabela = document.createElement("table");

            const thead = document.createElement("thead");
            const tbody = document.createElement("tbody");

            const trHead = document.createElement("tr");
            const thComponente = document.createElement("th");
            const thFuncao = document.createElement("th");

            thComponente.textContent = "Componente";
            thFuncao.textContent = "Função";

            trHead.appendChild(thComponente);
            trHead.appendChild(thFuncao);

            thead.appendChild(trHead);

            tabela.appendChild(thead);
            tabela.appendChild(tbody);
            secao.appendChild(tabela);

            const componentes = post[campo.id].componentes || [];
            const funcoes = post[campo.id].funcoes || [];
            for (let i = 0; i < componentes.length; i++) {
                const trBody = document.createElement("tr");
                const tdComponente = document.createElement("td");
                const tdFuncao = document.createElement("td");
                tdComponente.textContent = componentes[i] || "";
                tdFuncao.textContent = funcoes[i] || "";
                trBody.appendChild(tdComponente);
                trBody.appendChild(tdFuncao);
                tbody.appendChild(trBody);
            }






        } else if (post[campo.id] != null && post[campo.id] !== undefined && post[campo.id] !== "" && post[campo.id] !== "composicao") {
            const secao = document.createElement("section");
            const h3 = document.createElement("h3");
            const p = document.createElement("p");

            secao.classList.add("art")

            secao.id = campo.id;
            h3.textContent = campo.titulo;
            p.innerHTML = post[campo.id];

            secao.appendChild(h3);
            secao.appendChild(p);
            artigo_div.appendChild(secao);

        }
        
    });
}
