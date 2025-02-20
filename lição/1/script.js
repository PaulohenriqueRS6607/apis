fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                const list = document.getElementById('usersList');
                users.forEach(user => {
                    const li = document.createElement('li');
                    li.textContent = `${user.name} - ${user.email}`;
                    list.appendChild(li);
                });
            })
            .catch(error => console.error('Erro ao carregar usuários:', error));