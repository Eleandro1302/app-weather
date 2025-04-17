const chaveDaApi = "f5634233a92746cd8d7123816250303";

const botaoDeBusca = document.querySelector(".btn-busca");


const idioma = navigator.language || navigator.userLanguage;
const lang = idioma.startsWith("pt") ? "pt" : "en"; 
botaoDeBusca.addEventListener("click", async () => {
  const cidade = document.getElementById("input-busca").value;

  if (!cidade) return;

  try {
    const dados = await buscarDadosDaCidade(cidade);
    if (dados) {
      preencherDadosNaTela(dados, cidade);

      
      const listaSugestoes = document.getElementById("lista-sugestoes");
      listaSugestoes.innerHTML = "";
      listaSugestoes.style.display = "none";
    }
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    alert("Não foi possível obter os dados da cidade.");
  }
});

const inputBusca = document.getElementById("input-busca");

inputBusca.addEventListener("input", async () => {
  const query = inputBusca.value.trim();

  if (query.length < 1) { 
    const listaSugestoes = document.getElementById("lista-sugestoes");
    listaSugestoes.innerHTML = ""; 
    listaSugestoes.style.display = "none"; 
    return;
  }

  try {
    const apiUrl = `https://api.weatherapi.com/v1/search.json?key=${chaveDaApi}&q=${query}&lang=${lang}`; 
    const resposta = await fetch(apiUrl);

    if (!resposta.ok) {
      throw new Error(`HTTP error! status: ${resposta.status}`);
    }

    const sugestoes = await resposta.json();
    mostrarSugestoes(sugestoes);
  } catch (error) {
    console.error("Erro ao buscar sugestões:", error);
  }
});

const botaoLocalizacao = document.getElementById("btn-localizacao");

botaoLocalizacao.addEventListener("click", async () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      try {
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chaveDaApi}&q=${latitude},${longitude}&aqi=yes&lang=${lang}`; 
        const resposta = await fetch(apiUrl);

        if (!resposta.ok) {
          throw new Error(`HTTP error! status: ${resposta.status}`);
        }

        const dados = await resposta.json();
        preencherDadosNaTela(dados, dados.location.name);

        
        const listaSugestoes = document.getElementById("lista-sugestoes");
        listaSugestoes.innerHTML = "";
        listaSugestoes.style.display = "none";
      } catch (error) {
        console.error("Erro ao buscar dados da localização:", error);
        alert(lang === "pt" ? "Não foi possível obter os dados da sua localização." : "Unable to fetch location data.");
      }
    }, () => {
      alert(lang === "pt" ? "Não foi possível acessar sua localização." : "Unable to access your location.");
    });
  } else {
    alert(lang === "pt" ? "Geolocalização não é suportada neste navegador." : "Geolocation is not supported in this browser.");
  }
});

async function buscarDadosDaCidade(cidade) {
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chaveDaApi}&q=${cidade}&aqi=yes&lang=${lang}`; 

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

function mostrarSugestoes(sugestoes) {
  const listaSugestoes = document.getElementById("lista-sugestoes");
  listaSugestoes.innerHTML = ""; 

  if (!sugestoes || sugestoes.length === 0) {
    listaSugestoes.style.display = "none"; 
    return;
  }

  listaSugestoes.style.display = "block"; 

  sugestoes.forEach((sugestao) => {
    const item = document.createElement("li");
    item.className = "sugestao-item";
    item.textContent = `${sugestao.name}, ${sugestao.region}`;
    item.addEventListener("click", () => {
      inputBusca.value = `${sugestao.name}, ${sugestao.region}`;
      listaSugestoes.innerHTML = ""; 
      listaSugestoes.style.display = "none"; 
    });
    listaSugestoes.appendChild(item);
  });

  
  document.addEventListener("click", (event) => {
    if (!listaSugestoes.contains(event.target) && event.target !== inputBusca) {
      listaSugestoes.style.display = "none";
    }
  });
}

function preencherDadosNaTela(dados, cidade) {
  const temperatura = dados.current.temp_c !== undefined ? Math.round(dados.current.temp_c) : "--";
  const condicao = dados.current.condition?.text || "--";
  const humidade = dados.current.humidity !== undefined ? `${dados.current.humidity}%` : "--";
  const velocidadeDoVento = dados.current.wind_kph !== undefined ? `${dados.current.wind_kph} km/h` : "--";
  const iconeCondicao = dados.current.condition?.icon || "";
  const sensacaoTermica = dados.current.feelslike_c !== undefined ? Math.round(dados.current.feelslike_c) : "--";
  const alertasClimaticos = dados.alerts?.alert?.length
    ? dados.alerts.alert.map((alerta) => alerta.headline).join(", ")
    : "Nenhum alerta";

  let qualidadeAr = "Dados indisponíveis";
  if (dados.current.air_quality) {
    const aqi = dados.current.air_quality["us-epa-index"];
    qualidadeAr = aqi === 1
      ? "Boa"
      : aqi === 2
      ? "Moderada"
      : aqi === 3
      ? "Ruim"
      : aqi === 4
      ? "Muito Ruim"
      : aqi === 5
      ? "Perigosa"
      : "Dados indisponíveis";
  }

  document.getElementById("cidade").textContent = cidade;
  document.getElementById("temperatura").textContent = `${temperatura} ºC`;
  document.getElementById("condicao").textContent = condicao;
  document.getElementById("humidade").textContent = humidade;
  document
    .getElementById("velocidade-do-vento")
    .textContent = velocidadeDoVento;
  if (iconeCondicao) {
    document
      .getElementById("icone-condicao")
      .setAttribute("src", `https:${iconeCondicao}`);
  }
  document.getElementById(
    "sensacao-termica"
  ).textContent = `Sensação Térmica: ${sensacaoTermica} ºC`;
  document.getElementById("alertas-climaticos").textContent = alertasClimaticos;
  document.getElementById("qualidade-ar").textContent = qualidadeAr;

}
