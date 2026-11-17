let lista = [];

for (let i = 0; i < 5; i++) {
  lista.push(Number(prompt("Anna kokonaisluku: "))); 
}
lista.reverse()

document.querySelector("#vastaus").innerHTML = lista;