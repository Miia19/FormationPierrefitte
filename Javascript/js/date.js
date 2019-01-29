// //1-Faire une page qui affiche la date d'aujourd'hui.
var aujourdhui = new Date(); 
	var annee = aujourdhui.getFullYear(); // retourne le millésime
	var mois =aujourdhui.getMonth()+1; // date.getMonth retourne un entier entre 0 et 11 donc il faut ajouter 1
	var jour = aujourdhui.getDate(); // retourne le jour (1à 31)
	var joursemaine = aujourdhui.getDay() ; // retourne un entier compris entre 0 et 6 (0 pour dimanche)
	var tab_jour=new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
    document.write('Nous sommes le : ' +  tab_jour[joursemaine] + ' ' + jour + '/' + mois + '/' + annee) ; 
 
    
// 2-afficher bonne année si on est en janvier.
var date1 = new Date()
 document.write(date1.toLocaleDateString());


  if(date1.getMonth() === 0){
      alert("bonne annee")
  }



// 3-afficher bonne anniversaire laurent si on est le 03 janvier 
// et tout les anniversaire des wf3 
var
    mois_actuel= aujourdhui.getMonth() +1,
    jour_actuel= aujourdhui.getDate();
    
 
if (mois_actuel === 01 && jour_actuel === 28) {
}

alert ("Bon anniversaire laurent !!");



//4-afficher une image de fond de nuit si on est entre 20h et 7h

var imageHeure = document.getElementById("heure");
var imageHeureSrc = imageHeure.getAttribute("src");

if( aujourdhui.getHours()>07 && aujourdhui.getHours()<20 ) // true
    {
    imageHeureSrc = "../Javascript/img/heure.jpg";
    imageHeure.setAttribute("src", imageHeureSrc);
}
else
    {
    imageHeureSrc = "../Javascript/img/horloge-svg.png";
    imageHeure.setAttribute("src", imageHeureSrc);	 
}