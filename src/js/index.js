const chaveDaApi = "f5634233a92746cd8d7123816250303";

const botaoDeBusca = document.querySelector(".btn-busca");

botaoDeBusca.addEventListener("click", async () => {
  const cidade = document.getElementById("input-busca").value;

  if (!cidade) return;

  try {
    const dados = await buscarDadosDaCidade(cidade);
    if (dados) {
      preencherDadosNaTela(dados, cidade);
    }
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    alert("Não foi possível obter os dados da cidade.");
  }
});

async function buscarDadosDaCidade(cidade) {
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chaveDaApi}&q=${cidade}&aqi=no&lang=pt`;

  try {
    const resposta = await fetch(apiUrl);

    if (!resposta.ok) {
      throw new Error(`HTTP error! status: ${resposta.status}`);
    }

    const dados = await resposta.json();
    return dados;
  } catch (error) {
    console.error("Erro na requisição:", error);
    return null;
  }
}

function preencherDadosNaTela(dados, cidade) {
  const temperatura = dados.current.temp_c;
  const condicao = dados.current.condition.text;
  const humidade = dados.current.humidity;
  const velocidadeDoVento = dados.current.wind_kph;
  const iconeCondicao = dados.current.condition.icon;
  const sensacaoTermica = dados.current.feelslike_c;

  document.getElementById("cidade").textContent = cidade;
  document.getElementById("temperatura").textContent = `${temperatura} ºC`;
  document.getElementById("condicao").textContent = condicao;
  document.getElementById("humidade").textContent = `${humidade}%`;
  document
    .getElementById("velocidade-do-vento")
    .textContent = `${velocidadeDoVento} km/h`;
  document
    .getElementById("icone-condicao")
    .setAttribute("src", `https:${iconeCondicao}`);
  document.getElementById(
    "sensacao-termica"
  ).textContent = `Sensação Térmica: ${sensacaoTermica} ºC`;
}
