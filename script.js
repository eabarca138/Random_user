const boton = document.getElementById('boton');
boton.addEventListener('click', () =>{
    const imagen = document.getElementById('imagen');
    const info = document.getElementById('info');


    const url = 'https://randomuser.me/api/';

            fetch(url)
            .then(req => req.json())
            .then(req => req.results[0])
            .then(data =>{
                console.log(data);
                imagen.setAttribute('src', data.picture.medium);
                info.innerHTML = `
                <h5 class="card-title text-center">${data.login.username}</h5>
                <p class="card-text">Name: ${data.name.first} ${data.name.last}</p>
                <p class="card-text">Location: ${data.location.country}, ${data.location.city}</p>
                <p class="card-text">Email: ${data.email}</p>`
            })
});

