document.getElementById('haku-nappi').onclick = () => {
  const haku = document.getElementById('haku').value;
  fetch(`https://api.chucknorris.io/jokes/search?query=${haku}`)
    .then(Response => Response.json())
    .then(data => {
      document.getElementById('Joke').textContent = data.result[1].value;
    });
};
