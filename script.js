const joke = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

function generateJoke(){
    const config = {
        headers:{
            'Accept':'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com/', config )
    .then((response)=>response.json())
    .then((data) => {
        joke.innerHTML = data.joke
    })
}

generateJoke()

jokeBtn.addEventListener('click', generateJoke)