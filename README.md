# Weather App

This is a weather forecast application that allows users to search for weather information for any city or use their current location to get the data. The app supports dynamic translation based on the device's language.

## Features

- **City Search**: Enter a city name to get weather information.
- **Current Location**: Use geolocation to get weather data for your location.
- **3-Day Forecast**: Displays the weather forecast for the next 3 days, including graphical representation.
- **Automatic Translation**: The app automatically switches between Portuguese and English based on the device's language.
- **Air Quality (AQI)**: Displays air quality information.
- **Weather Alerts**: Shows weather alerts, if available.

## Technologies Used

- **HTML5** and **CSS3** for the user interface.
- **JavaScript** for the app logic.
- **WeatherAPI** to fetch weather data.
- **Geolocation** to determine the user's location.

## How Translation Works

The device's language is automatically detected using `navigator.language`. Based on the language, the texts displayed in the app are translated into Portuguese or English. This includes placeholders, buttons, and messages displayed in the interface.

### Example Translation

- **Portuguese**:
  - Placeholder: "Digite uma cidade"
  - Button: "Minha Localização"
  - Initial Message: "Quer saber como está o tempo aí? É só digitar o nome da cidade e clicar na lupa, ou tocar em 'Minha Localização'!"

- **English**:
  - Placeholder: "Enter a city"
  - Button: "My Location"
  - Initial Message: "Want to know the weather there? Just type the city name and click the magnifying glass, or tap 'My Location'!"

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/eleandro1302/app-weather.git
   ```
2. Open the `index.html` file in a browser.

## Project Structure

```
app-weather/
├── index.html
├── README.md
├── src/
│   ├── css/
│   │   ├── reset.css
│   │   ├── estilos.css
│   ├── imagens/
│   │   ├── lupa.png
│   │   ├── screenshot.gif
│   ├── js/
│       ├── index.js
│       ├── geolocalizacao.js
│       ├── idioma.js
```

## Future Improvements

- Add support for more languages.
- Improve the interface for mobile devices.
- Add pollen information.

## Author

This project was developed by **Eleandro Mangrich** as part of the **DevGuest course challenge**. Several features were added, such as geolocation, 3-day forecast, air quality, and weather alerts.

Connect with me on [LinkedIn](https://www.linkedin.com/in/eleandro-mangrich).

## Screenshot

![Screenshot](https://eleandro1302.github.io/app-weather/src/imagens/screenshot.gif)

## Contribution

Feel free to contribute with improvements or fixes. Fork the repository, create a branch for your changes, and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

# App Weather

Este é um aplicativo de previsão do tempo que permite ao usuário buscar informações climáticas para qualquer cidade ou usar sua localização atual para obter os dados. O aplicativo suporta tradução dinâmica com base no idioma do dispositivo.

## Funcionalidades

- **Busca por cidade**: Digite o nome de uma cidade para obter informações climáticas.
- **Localização atual**: Use a geolocalização para obter os dados climáticos da sua localização.
- **Previsão de 3 dias**: Exibe a previsão do tempo para os próximos 3 dias, incluindo representação gráfica.
- **Tradução automática**: O idioma do aplicativo muda automaticamente entre português e inglês com base no idioma do dispositivo.
- **Qualidade do ar (AQI)**: Mostra informações sobre a qualidade do ar.
- **Alertas climáticos**: Exibe alertas climáticos, se disponíveis.

## Tecnologias Utilizadas

- **HTML5** e **CSS3** para a interface do usuário.
- **JavaScript** para a lógica do aplicativo.
- **WeatherAPI** para obter os dados climáticos.
- **Geolocalização** para determinar a localização do usuário.

## Como Funciona a Tradução

O idioma do dispositivo é detectado automaticamente usando `navigator.language`. Com base no idioma, os textos exibidos no aplicativo são traduzidos para português ou inglês. Isso inclui placeholders, botões, e mensagens exibidas na interface.

### Exemplo de Tradução

- **Português**:
  - Placeholder: "Digite uma cidade"
  - Botão: "Minha Localização"
  - Mensagem inicial: "Quer saber como está o tempo aí? É só digitar o nome da cidade e clicar na lupa, ou tocar em 'Minha Localização'!"

- **Inglês**:
  - Placeholder: "Enter a city"
  - Botão: "My Location"
  - Mensagem inicial: "Want to know the weather there? Just type the city name and click the magnifying glass, or tap 'My Location'!"

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/eleandro1302/app-weather.git
   ```
2. Abra o arquivo `index.html` em um navegador.

## Estrutura do Projeto

```
app-weather/
├── index.html
├── README.md
├── src/
│   ├── css/
│   │   ├── reset.css
│   │   ├── estilos.css
│   ├── imagens/
│   │   ├── lupa.png
│   │   ├── screenshot.gif
│   ├── js/
│       ├── index.js
│       ├── geolocalizacao.js
│       ├── idioma.js
```

## Melhorias Futuras

- Adicionar suporte a mais idiomas.
- Melhorar a interface para dispositivos móveis.
- Adicionar informações sobre pólen.

## Autor

Este projeto foi desenvolvido por **Eleandro Mangrich** como parte do **desafio do curso DevGuest**. Foram adicionadas várias funcionalidades, como geolocalização, previsão de 3 dias, qualidade do ar e alertas climáticos.

Conecte-se comigo no [LinkedIn](https://www.linkedin.com/in/eleandro-mangrich).

## Screenshot

![Screenshot](https://eleandro1302.github.io/app-weather/src/imagens/screenshot.gif)

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Faça um fork do repositório, crie uma branch para suas alterações e envie um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

