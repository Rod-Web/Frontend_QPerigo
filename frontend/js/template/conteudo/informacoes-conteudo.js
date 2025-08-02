import { btnEsperto } from "../../components/global/rolagem-topo.js";
btnEsperto()

function receberDados() {
    const dados = localStorage.getItem("postagens");
    if(dados) {
        const postagens = JSON.parse(dados);
        console.log(postagens)
        return postagens
    } else {
        console.error("Erro: Dados não encontrados.");
        return [];
    }
}

function parametrosURl() {
    let params = new URLSearchParams(window.location.search);
    let id = params.get('id');
    if (id) {
        console.log(id)   
        return id
    } else {
        console.error("Erro: Parâmetro 'id' não encontrado.");
        return null;
    }
}

function funilDeDados(dados, id) {
    const post_atual = dados.find(dado => dado.id_postagem == id);
    console.log(post_atual)
        if (!post_atual) {
        console.error("Postagem não encontrada.");
    }
    return post_atual;
}

const pegarDados = receberDados();
const pegarId = parametrosURl();

if(pegarId) {
    const post_filtrado = funilDeDados(pegarDados, pegarId)
    if(post_filtrado) {
        atualizarHTML(post_filtrado)
    };
};

function atualizarHTML(post_filtrado) {
    document.title = post_filtrado.nome_produto;

    const bannerPost = document.querySelector('.img-produto');
    if(post_filtrado.id_postagem == 23){
        bannerPost.src = "/frontend/assets/images/skeletion/covers/acetona.png"
    }
    if(post_filtrado.id_postagem == 16){
        bannerPost.src = "/frontend/assets/images/skeletion/covers/acido.png"
    }
    if(post_filtrado.id_postagem == 9){
        bannerPost.src = "/frontend/assets/images/skeletion/covers/alcool.png"
    }
    
    // bannerPost.src = post_filtrado.banner

    atualizarElemento('.titulo-principal', post_filtrado.nome_produto);
    atualizarElemento('.introducao', post_filtrado.introducao);
    atualizarElemento('.composicao', post_filtrado.composicao);
    atualizarElemento('.combinacoes', post_filtrado.combinacoes_perigosas);
    atualizarElemento('.manipulacao', post_filtrado.manipulacao);
    atualizarElemento('.armazenamento', post_filtrado.armazenamento);
    
}

function atualizarElemento(seletor, valor) {
    const elementoClass = document.querySelector(seletor);
    if(elementoClass) {
        console.log(valor)
        elementoClass.innerHTML = valor;
    };
};


