let ehdokkaat_määrä = Number(prompt("Ehdokas määrä:"));
let ehdokkas = [];

for (let i = 1; i <= ehdokkaat_määrä; i++) {
    let Nimi = prompt("Anna ehdokkaan nimi " + i);
    ehdokkas.push({ Nimi: Nimi, äänet: 0 });
}

let äänestäjä_määrä = Number(prompt("äänestäjä määrä"));

for (let i = 1; i <= äänestäjä_määrä; i++) {
    let ääni = prompt("Ketä haluut äänestää " + i);
    
    for (let j of ehdokkas) {
        if (j.Nimi === ääni) {
            j.äänet++;
        }
    }
}
ehdokkas.sort((a, b) => b.äänet - a.äänet);

console.log(ehdokkas);

console.log(`voitaja on ${ehdokkas[0].Nimi} tulokset ${ehdokkas[0].äänet} äänet.`);

for (let j of ehdokkas) {
    console.log(`${j.Nimi}: ${j.äänet} äänet`);
}