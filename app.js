/**
 * Função para pesquisar e exibir os resultados em uma seção HTML.
 *
 * Essa função itera sobre um array de objetos (`dados`), onde cada objeto representa um resultado da pesquisa.
 * Para cada resultado, ela cria um elemento HTML `<div>` com as informações do resultado
 * (título, descrição e link) e o adiciona à seção com o ID "resultados-pesquisa".
 *
 * dados - Um array de objetos, onde cada objeto possui as propriedades:
 *   * `titulo`: Uma string contendo o título do resultado.
 *   * `descricao`: Uma string com a descrição do resultado.
 *   * `link`: Uma string com o link para mais informações sobre o resultado.
 */

function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  const section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value
  // se o campoPesquisa  for uma string vazio
  if (!campoPesquisa) {
    section.innerHTML = `<p class="paragrafo-nada-encontrado"> Nada foi encontrado </p>`
    return

  }
  campoPesquisa = campoPesquisa.toLowerCase()

 

  // Inicializa uma string vazia para armazenar o HTML dos resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada resultado e adiciona o HTML correspondente à string
  for (const dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    // se titulo includes campoPesquisa 
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // cria um novo elemento
      resultados += `
          <div class="item-resultado">
            <img src="${dado.img}"/>
            <div class="item-conteudo>
            <h2><a href="#">${dado.titulo}</a></h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">mais informações</a>
            </div>
          </div>
        `;
    }

  }
  // se o resultado  não foi  encontrado 
  if (!resultados) {

    section.innerHTML = `<p class="paragrafo-nada-encontrado"> Nada foi encontrado. precisa digitar nome da marcar de carro </p>`
    return

  }

  // Atualiza o conteúdo HTML da seção com os resultados construídos
  section.innerHTML = resultados;
}