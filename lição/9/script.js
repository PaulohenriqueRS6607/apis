fetch('https://randomuser.me/api/?results=1')
.then(response => response.json())
.then(data => {
    const user = data.results[0];
    const userDiv = document.getElementById('user');
    userDiv.innerHTML = `
        <p><strong>Nome:</strong> ${user.name.first} ${user.name.last}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Gênero:</strong> ${user.gender}</p>
        <p><strong>Endereço:</strong> ${user.location.street.name}, ${user.location.city}</p>
    `;
})
.catch(error => console.error('Erro ao carregar o usuário:', error));