const button = document.querySelector(".container button");
const jokeDiv = document.querySelector(".container .joke");


button.addEventListener("click", getJock);


async function getJock() {
const jokeData = await fetch("https://icanhazdadjoke.com/", {
headers: {
    Accept: "application/json"
}
});
const jokeObj = await jokeData.json();
jokeDiv.innerHTML = jokeObj.joke;
console.log(jokeData);
}















// <async function generateJoke() {
// const jokeData = {
// headers: {
// Accept: '',
// },
// }

// const res = await ('', config)

// const data = await res.json()

// jokeEl.innerHTML = data.joke
// }>