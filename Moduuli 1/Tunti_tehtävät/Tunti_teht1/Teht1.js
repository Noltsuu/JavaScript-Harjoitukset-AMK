let nimet = [];

for (let i = 0; i < 5; i++) {
    nimet.push(prompt("Anna nimi: "))
}

for (const nimi of nimet) {
    document.querySelector("#test").innerHTML += nimi + "<br>";
}
