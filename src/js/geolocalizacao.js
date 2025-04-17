document.addEventListener("DOMContentLoaded", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      try {
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=./config.js&q=${latitude},${longitude}&alerts=yes&marine=yes`;
        const resposta = await fetch(apiUrl);

        if (!resposta.ok) {
          throw new Error(`HTTP error! status: ${resposta.status}`);
        }

        const dados = await resposta.json();
        const cidade = dados.location.name;
        const estado = dados.location.region;

        document.getElementById("input-busca").placeholder = `Exemplo: ${cidade}, ${estado}`;
      } catch (error) {
        console.error("Erro ao obter localização:", error);
      }
    });
  } else {
    console.error("Geolocalização não é suportada neste navegador.");
  }
});
