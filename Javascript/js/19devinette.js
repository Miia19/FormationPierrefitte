//  // mode Strict du JavaScript
//  'use strict';

//  var ordi, joueur, hasard;
 
//  //récupération du choix du joueur
//  joueur = prompt("que choisissez-vous: pierre, fFuille ou Ciseaux");
 
//  //Récupération d'un nombre aléatoire entre 0 et 1
//  hasard = Math.random();
 
//  // Test du random
//  console.log(hasard);
 
//  // condition du choix de l'ordi
//  if(hasard <= 0.33){
//      ordi = 'Pierre';
//  }else if (hasard <= 0.66){
//      ordi = 'Feuille';
//  }else {
//      ordi = 'Ciseaux';
//  }
 
//  // On affiche le choix de l'ordi
//  document.write("<p>Choix de l'ordinateur: " + ordi + "</p>");
 
//  // Condition du résultat & du choix de l'utilisateur
//  if(ordi == joueur){
//      document.write('<p>Vous avez le choisi la même chose: Egalité</p>');
//  }else{
//      switch(ordi){
//          case 'Ciseaux':
//              if(joueur == 'Pierre'){
//                  document.write('<p>Pierre écrase le ciseaux: Vous gagnez</p>');
//              }else{
//                  document.write('<p>la Feuille est découpé par les Ciseaux: Vous avez perdu</p>');
//              }
//          break;
//          case 'Feuille':
//              if(joueur == 'Pierre'){
//                  document.write('<p>Pierre est enveloppé par la feuille: vous avez perdu</p>');
//              }else{
//                  document.write('<p>le ciseau découpe la feuille: Vous avez gagnez</p>');
//              }
//          break;
//          case 'pierre':
//              if(joueur == 'Feuille'){
//                  document.write('<p>La feuille enveloppe la pierre: Vous avez gagnez</p>');
//              }else{
//                  document.write('<p>Les ciseaux sont écrasé par la pierre: vous avez perdu</p>');
//              }
//          break;
//          }