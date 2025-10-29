const url = "https://backend-qperigo.onrender.com/postagens";
export let postagens = [];
const versaoAtual = "1.0.2";

export async function carregarDados() {
    const localData = localStorage.getItem("postagens");
    const versaoGet = localStorage.getItem("versao")
    if(localData && versaoAtual == versaoGet){
        postagens = JSON.parse(localData);
        console.log("Dados carregados do localStorage.");
    } else {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Erro na API: ${response.status}`);
            const data = await response.json();
            postagens = data.map((postagem) => ({
              id_postagem: postagem.id_postagem,
              nome_produto: postagem.nome_produto,
              banner: postagem.imagem,

              introducao: postagem.introducao,
              como_age: postagem.como_age,
              composicao: postagem.composicao,
              combinacoes_perigosas: postagem.combinacoes_perigosas,
              manipulacao: postagem.manipulacao,
              armazenamento: postagem.armazenamento,

              data_publicacao:
                postagem.data_publicacao ||
                new Date().toISOString().split("T")[0],
              
              comodo_associado: postagem.comodo_associado,
              periculosidade: postagem.periculosidade,
            }));
            localStorage.setItem("versao", versaoAtual)
            localStorage.setItem("postagens", JSON.stringify(postagens));            
        } catch (error) {
            console.error("Erro ao carregar dados:", error);
            alert("Erro ao carregar dados da API.");
        }
    }
}