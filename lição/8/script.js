fetch('https://randomuser.me/api/?results=10')
.then(response => response.json())
.then(data => {
    const list = document.getElementById('usersList');
    data.results.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `${user.name.first} ${user.name.last} - ${user.email}`;
        list.appendChild(li);
    });
})
.catch(error => console.error('Erro ao carregar usuários:', error));