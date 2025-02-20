fetch('https://jsonplaceholder.typicode.com/users/1    ')
            .then(response => response.json())
            .then(user => {
                const userDiv = document.getElementById('user');
                userDiv.innerHTML = `
                    <p><strong>Nome:</strong> ${user.name}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Telefone:</strong> ${user.phone}</p>
                    <p><strong>Endereço:</strong> ${user.address.street}, ${user.address.city}</p>
                `;
            })