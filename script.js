let jokebtn = document.getElementById("btn")
let jokeInput = document.getElementById("joke")


async function getjoke(){
      return new Promise((resolve, reject) => {
          fetch(`https://icanhazdadjoke.com/`,{
            headers: {
                'Accept': 'application/json'
            }
          })

          .then(response =>{
             if(!response.ok){
                throw new Error("failed to load api")
             } 
              
             return response.json();
            
            })
            .then(data => resolve(data))
            .catch(error => reject(error))

      })
}

jokebtn.addEventListener('click',async ()=>{
    try{
        jokeInput.classList.remove("fade")
        document.getElementById("joke").style.visibility =' visible'   
        let joke = await getjoke();
        jokeInput.innerHTML = joke.joke
        jokeInput.classList.add("fade")


    } catch(error){
         console.error(error)
    }
     
})


// async function getjoke(){
//     let gettings = await fetch(`https://icanhazdadjoke.com/`,{
//         headers: {
//             'Accept': 'application/json'
//         }

//     })
//     let joke = await gettings.json();
//     let data = joke.joke
//     jokeInput.innerHTML = data;
//     console.log(data);

    
          
// }


// jokebtn.addEventListener('click',getjoke);