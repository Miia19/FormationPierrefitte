// /**
//  * LES BOOUCLES
//  */
// // -- La boucle FOR
// /**
//  * La Boucle for
//  * 1. On initialise un compteur que l'on stocke dans une variable
//  * 2. On défini la condition qui doit être vrai
//  * 3. On incrément ou on décrémente
//  */
// for (var i = 1; i <= 10; i++) {
//   document.write("Tour de boucle n°" + i + "<br>");
// }

// /**
//  * La boucle while
//  * Très utilisée quand on ne connaît pas le nombre de tours de
//  * boucles à l'avance
//  */
// var j = 1;

// while (j <= 10){
//   document.write("<hr><p>Tour de boucle while n°" + j + "</p>");
//   j++;
// }

// // EXERCICES
// /**
//  * Écrivez une boucle while qui se répète 10 fois. Il est vrai qu'une boucle for
//  * serait plus adaptée, mais le but est de vous familiariser avec while.
//  */


// /**
//  * Voici une boucle qui va de 0 à 9
//  * 1. Faire une boucle qui va de 7 à 77
//  * 2. Faire une boucle qui va de 0 à 100(0..10..20..)
//  */

 
// for (var i = 7; i <= 77; i++){
//   document.write("Tour de boucle n°" + i + "<br>");
// }
// 99

// var j = 0;

// while (j <= 100){
//   document.write("Tour de boucle while n°" + j + "<br>");
//   j+=10 ;
// }

// /**
//  * Ecrivez une boucle while qui se répète tant que l'utilisateur n'a pas entré une
//  * valeur correcte via prompt(). En d'autres mots, prompt() s'affiche à chaque
//  * exécution de la boucle. Si l'utilisateur entre quelque chose, la boucle
//  * s'arrête, et une alert() affiche la valeur entrée dans le prompt(). Si
//  * l'utilisateur clic sur Annuler ou ne rentre pas de texte, la boucle continue et
//  * réaffiche une nouvelle prompt().
//  */
// var unput = '';

// while(true){
//   input =  prompt('etrez le nom de code');
//   if (input === 'vrai'){
//     break
//   }
// }
// alert(input)
// /**
//  * 1- Tester les instructions document.write en affichant au
//  * minimum un nombre, une phrase, le contenu d'une variable, la valeur de π (pi)
//  * et, enfin, un entier choisi aléatoirement entre 0 et 100.
// */
// document.write("hello worl !!");
// /*
//  * 2- Moduler l'affichage en fonction d'un test. Par exemple, définir une variable
//  * contenant une température, puis comparer cette variable à une valeur seuil,
//  * afficher un message si la température est inférieure, un autre message si elle
//  * est supérieure.
//  */

// var température= 9;
// if(température <= 9; { 
//   document.write("il fait froid");
// }else{
//   document.write("il fait chaut");
// }

// /* 
//  * 3- Comparer les boucles while et for pour compter jusqu'à 100.
//  */

// for (var i = 0, i <= 100 ; i++){
//   console.log("je suis une boucle for"+ i);
// }

// /* 
//  * 4- Utiliser des boucles, puis des boucles imbriquées, pour dessiner des figures
//  * géométriques, pleine ou creuses : une ligne, un carré, un triangle.
//  */



// /*
//  * 5- Toujours en utilisant les boucles de JavaScript, produire une table de
//  * multiplication pour les entiers compris entre 0 et 9.
//  */

// document.write("<table>");

// for(i = 0; i <= 10; i++){

//   document.write("<tr>")
// }
// for (j = 0; j <= 10; j++){
//   document.write("<td>")
//   document.write("i * j")
//   document.write("</td>")
// }
// document.write("</td>")

// document.write("</table>");
//  /*
//  * 6- Reprendre les questions précédentes en agrémentant systématiquement le contenu produit de balises HTML (par exemple, les balises de tableau pour profiter des alignements dans les figures).
//  */
//  document.write('<table border="1">');
//  for (var j=1 ; j<=10 ; j=j+1) {
//      document.write('<tr>'); /* début de ligne */
//    for (var i=1 ; i<=10 ; i=i+1) {
//        document.write('<td>');
//      document.write('*');
//      document.write('</td>');
//    }
//    document.write('</tr>'); /* fin de ligne */
//  }
//  document.write('</table>');

// // j'ai 1000€ sur mon compte
// // chaque mois j'ajoute 50€
// // combien de temps me faut-il pour avoir 2000€ sur mon compte ?
// document.write('<table>');
//  for (var j=1 ; j<=10 ; j=j+1) {
//      document.write('<tr>'); /* début de ligne */
//    for (var i=1 ; i<=10 ; i=i+1) {
//        document.write('<td>');
//      document.write('<img src="images/chat.jpg" width="40" height="40">');
//      document.write('</td>');
//    }
//    document.write('</tr>'); /* fin de ligne */
//  }
//  document.write('</table>');
