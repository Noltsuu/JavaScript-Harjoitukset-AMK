const kysymys = confirm("Haluutko laskee neliö juuren");

if (kysymys == true){
        const numero = Number(prompt("Anna numero"));
        vastaus = Math.sqrt(numero);
        document.querySelector("#vastaus").innerHTML = `Neliö juuri on: ${vastaus}`;
}else alert("Neliö juurata ei laskettu")