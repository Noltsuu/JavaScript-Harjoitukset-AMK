const form = document.getElementById('lomake');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const hakusana = document.getElementById('haku').value;
    const url = `https://api.tvmaze.com/search/shows?q=${hakusana}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
});
