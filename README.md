# Dad-Jokes
In this project, I will be using the icanhazdadjoke.com api to fetch the jokes and display them in my site. #HTML #CSS #JavaScript


Index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project 10 - Dad Jokes</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <div class="container">
        <h3>Don't Laugh Challenge</h3>

        <div id="joke" class="joke">
            
        </div>

        <button id="jokeBtn" class="btn">More Jokes</button> 
    </div>

<script src="script.js"></script>
</body>
</html>

#javascript
script.js

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
