const Vuosi = Number(prompt("Anna kokonaisluku: ")); 

if ((Vuosi % 4 === 0 && Vuosi % 100 !== 0) || (Vuosi % 400 === 0)) {
    document.querySelector("#vastaus").innerHTML = `On karkaus vuosi`;
}else{
    document.querySelector("#vastaus").innerHTML = `Ei ole karkaus vuosi`;
}
