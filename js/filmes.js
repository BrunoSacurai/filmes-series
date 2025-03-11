document.addEventListener("DOMContentLoaded", async function () {
    const token = localStorage.getItem('authToken')

    async function searchMovieList(){
        
        try {
            const response = await fetch("http://localhost:8001/api/filmes", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
            });
    
            const movies = await response.json()
        } catch (error) {
            window.alert(error.mensage)
        }
    }

    await searchMovieList()
}) 