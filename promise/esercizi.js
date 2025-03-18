// Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}
function getPostTitle(id){
    return new Promise((resolve, reject)=>{
        
            fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(data => resolve(data.title))
            .catch(error => reject(error))

    })

}
getPostTitle(1)
.then(title => console.log(title))
.catch(error => console.log(error))


// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.

function lanciaDado(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           const numero = Math.floor(Math.random()*6)+1
           const probabilitaErrore = Math.random();
          if(probabilitaErrore< 0.2){
            reject("errore incastrato")
          }else{
            resolve(numero)
          }
        },3000)
    })
}
lanciaDado()
.then(numero=> console.log(numero))
.catch(errore=> console.log(errore))



