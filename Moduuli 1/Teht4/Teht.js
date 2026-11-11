const tuvat = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
const nimi = prompt('Kerro nimesi!! ');
const Päätös = tuvat[Math.floor(Math.random() * 4)];

document.querySelector("#vastaus").innerHTML = `Tupa on: ${Päätös}`;


 
