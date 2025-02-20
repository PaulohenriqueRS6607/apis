function consultarCep() {
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const cepDiv = document.getElementById('cepInfo');
            if (data.erro) {
                cepDiv.innerHTML = 'CEP não encontrado!';
            } else {
                cepDiv.innerHTML = `
                    <p><strong>Logradouro:</strong> ${data.logradouro}</p>
                    <p><strong>Bairro:</strong> ${data.bairro}</p>
                    <p><strong>Cidade:</strong> ${data.localidade}</p>
                    <p><strong>Estado:</strong> ${data.uf}</p>
                `;
            }
        })
        .catch(error => console.error('Erro ao consultar CEP:', error));
}