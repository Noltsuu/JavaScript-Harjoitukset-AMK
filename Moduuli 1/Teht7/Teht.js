const lista = [];

const vastaus = prompt("Anna luku kuinka monta kertaa haluut heittää noppaa")

for (let i = 0; i < vastaus; i++) {
    const luvut = Math.floor(Math.random()* 6) + 1
    lista.push(luvut)
    console.log(luvut)
}

let sum = 0;

for (const numero of lista) {
    sum += numero;
}
console.log(sum);
document.querySelector("#vastaus").innerHTML = `Summa: ${sum}`;
