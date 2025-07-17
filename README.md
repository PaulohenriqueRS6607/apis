# Atividades de Consumo de APIs

## Descrição

Este repositório contém uma série de atividades práticas desenvolvidas para treinar o consumo de APIs utilizando JavaScript puro no navegador. Cada pasta representa uma lição diferente, abordando o uso de diferentes APIs públicas e técnicas de manipulação de dados e exibição dinâmica no HTML.

## Tecnologias Utilizadas

- HTML5
- CSS3 (em algumas lições)
- JavaScript (ES6+)
- APIs públicas REST

## Estrutura das Lições

| Lição     | API Utilizada | Descrição |
|-----------|---------------|-----------|
| 1         | [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) | Lista todos os usuários fictícios. |
| 2         | [JSONPlaceholder](https://jsonplaceholder.typicode.com/users/1) | Exibe detalhes de um usuário específico. |
| 3         | [ViaCEP](https://viacep.com.br/) | Consulta informações de endereço a partir de um CEP informado. |
| 4         | [OpenWeatherMap](https://openweathermap.org/) | Exibe a previsão do tempo de uma cidade fixa (São Paulo). |
| 5         | [OpenWeatherMap](https://openweathermap.org/) | Exibe a previsão do tempo de uma cidade informada pelo usuário. |
| 6         | [PokeAPI](https://pokeapi.co/) | Lista os 10 primeiros pokémons. |
| 7         | [PokeAPI](https://pokeapi.co/) | Lista uma quantidade de pokémons definida pelo usuário. |
| 8         | [Random User API](https://randomuser.me/) | Exibe uma lista de 10 usuários aleatórios. |
| 9         | [Random User API](https://randomuser.me/) | Exibe dados de um usuário aleatório. |

## Como Executar

1. Clone este repositório:
   ```bash
   git clone <url-do-repo>
   ```
2. Navegue até a pasta desejada (exemplo: `lição/3`).
3. Abra o arquivo `index.html` no seu navegador.
4. Siga as instruções na tela para interagir com a API proposta.

## Exemplo de Uso

**Lição 3 - Consulta de CEP:**
- Informe um CEP no campo indicado e clique em consultar.
- Os dados do endereço serão exibidos na tela.

**Lição 5 - Previsão do Tempo:**
- Digite o nome de uma cidade e clique em consultar.
- A previsão do tempo será exibida com temperatura, descrição e vento.

## Observações

- Todas as requisições são feitas utilizando `fetch` e manipuladas diretamente no JavaScript.
- O projeto é totalmente front-end, não requer instalação de dependências.
- Algumas APIs (como OpenWeatherMap) podem exigir chave de API gratuita. Substitua `"KEY"` pelo seu token pessoal nos arquivos `script.js` das lições correspondentes.
- O objetivo é educacional, para prática de consumo de APIs REST, manipulação de dados e atualização dinâmica da interface web.

---
