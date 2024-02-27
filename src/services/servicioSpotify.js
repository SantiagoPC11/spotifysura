//consumiendo API's con JS

//1. Hacia dónde vas? (Almaceno en una variable la URI del servicio)

let URI = "https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC/top-tracks?market=US"


//2. Qué vas a hacer ?? (Metodo HTTP)
let metodo = "GET"

// 3. Tenés permisos? (Configurar peticiones)
let token = "Bearer BQDV7XSv-VDoJ25x5xPsff_k_uPuFvCZ48ELK030wj5sU9b48Yv5uazZjdjD96uMAOqhCNaafZnf0G5lwqEnIXUl5gajmkAlqvuqEm5Ooe-PevUyOUY"

let peticion ={
    method: metodo
    headers:{
        "Authorization": token
    }
}

// 4. Vaya pues ( Promesa)




