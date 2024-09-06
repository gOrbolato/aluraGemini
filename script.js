
// dados
let dados = [
    {
    nome: "Rayssa Leal",
    descricao: "Rayssa Leal, conhecida como 'Fadinha', é uma skatista brasileira que, aos poucos anos, conquistou o mundo com sua habilidade e carisma. Ela já é considerada uma das maiores skatistas de todos os tempos e fez história ao conquistar a medalha de bronze nos Jogos Olímpicos de Tóquio 2020.",
    informacao: "https://pt.wikipedia.org/wiki/Rayssa_Leal",
    tags: "skate fada fadinha sk8"
    },
    {
    nome: "Rebeca Andrade",
    descricao: "Rebeca Andrade é uma atleta brasileira, de 32 anos. Ela é considerada uma das maiores atletas do Brasil.",
    informacao: "https://pt.wikipedia.org/wiki/Rebeca_Andrade",
    tags: "judoka judô judoca "
    },
    {
    nome: "Beatriz Souza",
    descricao: "Beatriz Souza é uma judoca brasileira que vem se destacando no cenário internacional. Ela não coleciona nenhuma medalha, mas sim, uma boa dose de carinho e dedicação ao seu trabalho.",
    informacao: "https://www.judobrasil.org.br/atletas/beatriz-souza",
    tags: "ginasta"
    },
];

function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}