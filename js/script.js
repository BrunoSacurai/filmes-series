document.getElementById("loginFrom").addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://localhost:8001/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });
        
        const data = await response.json() 
        if (response.ok == false){
            window.alert(data.message || 'Erro ao fazer login') 
        } 
        localStorage.setItem('authToken', data.original.token)
        window.location.href = 'filmes.html'
          
    } catch (error) {
        window.alert(error.mensage)
    }
    
    
});