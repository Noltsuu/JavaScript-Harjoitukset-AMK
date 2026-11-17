let nimet = [];
const määrä = Number(prompt("Kuinka monta osallistujaa?"));

for (let i = 0; i < määrä; i++) {
  nimet.push(prompt("Anna nimi"));
}
nimet.sort();

html = `<ol><li>${nimet.join("</li><li>")}</li></ol>`

document.getElementById("vastaus").innerHTML = html