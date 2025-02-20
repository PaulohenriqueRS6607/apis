const apiKey = 'KEY'; 
        const city = 'São Paulo';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const weatherDiv = document.getElementById('weather');
                weatherDiv.innerHTML = `
                    <p><strong>Temperatura:</strong> ${data.main.temp} °C</p>
                    <p><strong>Descrição:</strong> ${data.weather[0].description}</p>
                    <p><strong>Vento:</strong> ${data.wind.speed} m/s</p>
                `;
            })
            .catch(error => console.error('Erro ao carregar a previsão do tempo:', error));