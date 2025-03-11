document.addEventListener("DOMContentLoaded", async function () {
    const token = localStorage.getItem('authToken')
    const list = document.getElementById('list')
    const createMovie = document.getElementById('create')

    async function searchMovieList(){
        
        try {
            const response = await fetch("http://localhost:8001/api/filmes", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
            });
    
            const movies = await response.json()

            movies.forEach(movie => renderMovie(movie))
        } catch (error) {
            window.alert(error.mensage)
        }
    }

    function renderMovie(movie) {
        const div = document.createElement('div');
        div.innerHTML = `
            <div>${movie.titulo} - ${movie.ano}</div>
            <div>
                <button onclick="viewMovie(${movie.id})">Ver</button>
                <button onclick="edit(${movie.id})">Editar</button>
                <button onclick="deleteMovie(${movie.id})">Excluir</button>
            </div>
        `;

        list.appendChild(div);
    }

    createMovie.addEventListener("click", () => {
        window.location.href = 'criar.html'
    })

    await searchMovieList()
}) 