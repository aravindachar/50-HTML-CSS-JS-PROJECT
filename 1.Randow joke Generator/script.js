const jokeContainer = document.querySelector("#Joke");
const btn = document.querySelector("#butn");
const url ="https://v2.jokeapi.dev/joke/Dark?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () =>{
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        jokeContainer.textContent = `${item.joke}`;
        // jokeContainer.classList.add("fade");
    });
}
btn.addEventListener("click", getJoke);
getJoke();