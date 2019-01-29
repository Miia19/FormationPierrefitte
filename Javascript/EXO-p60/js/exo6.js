// declaration avec affectation
// var i = 0; // number 
//  ou 
//  var i = "0"; // string
// var done = false; // boolean
//  // affectation à une variable déjâ initialisée 
//  i = []; // array
// i = {}; // object


var tabPrenoms =
["rosita", "bob", "gaston"]; // tableau var tabNom = []; // tableau



// prenom = tabPrenoms [0]; // case 1 ;
// prenom = tabPrenoms [1]; // case 2 ;
// prenom = tabPrenoms [2]; // case 3 ;


// tabnoms.push("MIIA"); // ajout fin tabNoms[tabNoms.length] = "MIIA"; // idem

// tabnoms.pop (); // supression dernier elt 
// delete tabnoms[1]; // supression elt 1 -> undefined


// simple quote ou double quote 

// var prenom = "miia";
// var nom = 'nejjari';

// // concaténation 

// var nomComplet = prenom + "" + nom;
// var i=3;
// nomComplet = prenom+i;
// nomComplet = prenom + tabPrenoms;


// var d = new date ();
// var y = d.degFullYear ();
// var m = d.getMonth ();
// var dStr = d.toLocaleDateString ();
// var time = d.toLocaleDateString ();


for (var i=0; i<3; i++){
    window.alert("i="+i);
}

var tabPrenoms = ["rosita", "bob", "gaston" , 'roberto'];
   for(var i=0 ; i<tabPrenoms.length; i++){
   alert(tabPrenoms[i]);
}
