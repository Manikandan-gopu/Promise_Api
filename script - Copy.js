const jokeContainer = document.querySelector("#joke")
//console.log(jokeContainer)
const button = document.querySelector("#btn")
//console.log(button)

const jokeUrl = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const getMyjoke = ()=>{

    jokeContainer.classList.remove("fade")

    // fetch from API
    fetch(jokeUrl)
    .then(response=>response.json())
    .then(result=>{
        jokeContainer.textContent = `${result.joke}`;
        jokeContainer.classList.add("fade")
    })
    
    .catch(error=>{
        console.error(`Error fetching Joke`,error)
        jokeContainer.textContent = `failed to load a Joke. Please try again later`
    });
    
}

button.addEventListener("click",getMyjoke)