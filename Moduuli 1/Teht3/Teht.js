const lista = []; 

for (let i = 0; i < 3; i++) {
  const luku = Number(prompt("Anna kokonaisluku: ")); 
  lista.push(luku); 
}
let sum = 0;
let ker = 1;

for (const numero of lista) {
    sum = sum + numero;
    ker = ker * numero;
    avg = sum / lista.length;
    console.log(sum);
}

document.querySelector("#vastaus").innerHTML = `Lukusum: ${sum} Yheteinen tulo on: ${ker} Keskiarvo: ${avg}`;
