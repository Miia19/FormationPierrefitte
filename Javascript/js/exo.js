// Créé une condition qui si pseudo équivaut à samba et son mail coressppond samba@mail.
// Ouvre une 2 boite de dialogue qui demande age et année
// si age est sup à 20 ou année de naissance est superieur à 2000
// Ouvre une boite de dialogue qui si équivaut à vrai renvoi ver le site de votre chooix
// Sinon fait recommencer depuis le début(reload)

// var Login = prompt("Entrer votre pseudo"),
// email = prompt("entrer votre mail");

// if((Login === "samba") && (email === "samba@mail.fr")){
//     var age = Number(prompt("quel est votre age ?")),
//     annee = Number(prompt("année de naissance"));

//     if((age > 20) || (annee > 2000)){
//         var vraifaux = confirm("vrai ou faux");

//         if(vraifaux){
//             document.location.href = "https://google.com";
//         }else {
//             location.reload();
//         }

//     }else {
//         location.reload();
//     }

// } else {
//     location.reload();
// }

// EXERCICE 0
// demander deux nombres à l'utilisateur (dans deux champs distincts)
// au clic sur un bouton, afficher le résultat de la multplication
// exemple avec 4 et 5: "4 multiplié par 5 vaut 20"

// var nb1 = Number(prompt("Entrer un chiffre ou un nombre")),
// nb2 = Number(prompt("Entrer un chiffre ou un nombre"));

// if(nb1 && nb2){
//     alert(nb1 * nb2);
// }

// EXERCICE 1
// créer un champ de texte
// au clic sur un bouton,
// changer la couleur de fond de la page avec la couleur donnée par l'utilisateur

// var couleur = prompt("Entrez une couleur");

// if (couleur == 'noir') {

//    document.body.style.backgroundColor = "#000";
//    location.reload();

// } else if (couleur == 'bleu') {

//    document.body.style.backgroundColor = "blue";
//    location.reload();

// }else if(couleur == 'rouge'){

//    document.body.style.backgroundColor = "red";
//    location.reload();

// }else if(couleur == 'vert'){

//    document.body.style.backgroundColor = "green";
//    location.reload();

// }else{

//    alert("couleur non défini !");
//    location.reload();
// }
// EXERCICE 2
// demander l'adresse d'une image à l'utilisateur via un champ de texte
// au clic sur un bouton, ajouter cette image à la page

// var imageUrl = prompt("entre l'urlde l'image");
// if(imageUrl){
//     document.getElementById("img").src = imageUrl;
// }

// EXERCICE 3
// demander un nombre à l'utilisateur
// calculer le modulo de ce nombre divisé par 5
// Afficher le reste dans une phrase
// exemple avec 21 : "Si l'on divise 21 par 5, le reste est de 1"

// var num = number(prompt("saisir un nombre"));
// aler ("si l'on divise" + num + "par 5, le reste est de " + num % 5);


// EXERCICE 4
// créer une fonction qui demande l'âge de l'utilisateur
// afficher le nombre de jours vécus que cela représente
// exemple avec 21 : "Vous avez vécu 7665 jours."


// EXERCICE 5
// demander l'âge actuel de l'utilisateur et un âge visé
// (vous aurez donc besoin de deux champs)
// afficher le nombre de jours vécus que cela représente et l'écart avec l'âge visé
// exemple avec 21 et 45 : "Vous avez vécu 7665 jours. Il y a encore 8760 jours avant vos 45 ans."
// complément : si l'âge visé est plus petit que l'âge actuel, signaler l'erreur (alert ou affichage dans la page)


// EXERCICE 6
// documentation : étudiez le fonctionnement de confirm() en javascript
// Créer un confirm() Javascript
// si l'utilisateur clique sur oui, afficher une image
// sinon, afficher une autre image

// var confirmation = confirm("challenge");

// if(confirmation){
//     document.body.style.backgroundImage= "Url('c:/wamp64/www/FormationPierrefitte/javascript/img/telechargement.jpg)";
//     document.body.style.backgroundColor= "#f3f3f3";
// {else}
// alert('false')
// }

// EXERCICE 7
// demander un nombre entre 0 et 5 à l'utilisateur
// si l'utilisateur n'entre pas un nombre entre 0 et 5, le signaler par une alert
// si le nombre est valide, l'afficher en toutes lettres (1 => "un")

