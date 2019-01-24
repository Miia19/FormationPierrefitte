//  console.log("Bienvenue dans notre site");

//  var b = Math.floor(Math.random() * 100) + 1;
//  console.log(b);

//  var i = Number(prompt("Saisir un nombre"));
//  if (i == b) {
//      alert("Gagné !!!")
//  } else {
//      alert("Perdu")
//  }


console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

TODO : complétez le programme

var nombre = Number(prompt("Entrez un nombre :"));
while (nombre !== solution) {
    if (nombre > solution) {
        console.log(nombre + " est trop grand");
        nombre = Number(prompt("Retente ta chance !"))
    }

    else if (nombre < solution) {
        console.log(nombre + " est trop petit");
        nombre = Number(prompt("Retente ta chance !"))
    }
}
if (nombre == solution)
    console.log("Bravo !! La solution est : " + solution);


var nombre = Number(prompt("Entrez un nombre :"));
var tentative = 0;

while ((nombre !== solution) && (tentative < 6)) {
    if (nombre > solution)
        console.log(nombre + " est trop grand");
    else (nombre < solution)
    console.log(nombre + " est trop petit");
    tentative++;
    var nombre = Number(prompt("Entrez un nombre:"));
}

if (nombre == solution)
    console.log("Bravo ! La solution est " + solution);
else
    console.log("Vous avez perdu!"); 