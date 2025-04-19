document.addEventListener("DOMContentLoaded", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      try {
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=f5634233a92746cd8d7123816250303&q=${latitude},${longitude}&alerts=yes&marine=yes`; 

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
    }, (error) => {
      console.error("Erro ao acessar geolocalização:", error.message);
    });
  } else {
    console.error("Geolocalização não é suportada neste navegador.");
  }
});
