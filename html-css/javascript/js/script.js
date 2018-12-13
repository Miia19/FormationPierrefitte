//commentaire sur une ligne 
/**
 * un
 * commentaire
 * sur
 * plusieur 
 * lignes
 */

/**
 * les variables 
 * une variables est un container servant à stocker temporairement une information ( ou donnée).en javascript on déclare une variable avec le mot-clé: "var" suivi du nom de la variable chaque variable doit avoir un nom inuque ( également appeler en anglais "identifier").
 * le nom d'une variable doit abserver quelques régles à savoir:
 * le nom d'une variable doitcommencer par une lettre;
 * le nom d'une variable doit ne peut contenir que des lettres (non eccentuée), des chiffre ou les signes "-"et "$";
 * le nom d'une variable est sensible à a la casse c'est à dire que "a"et different "A";
 * le javascript posséde des mot "réservés" qu'on ne peut utilisée pour créé une variable (ex: var, alert,....).
 */

// on declare une variable et on lui affecte immediatement une valeur 
var x = 25;
var x = 100;// celle-ci esr différente de  la var "x".
// on déclare plusieur variables d'un coup 
var nom = "Nejjari",
    prenom = "Miia",
    date = "19/04/1992";
// on déclare une variable sans lui affecter de valeur , puis on lui en affecte une valeur  ensuite ( non recommandé).
var age;
age = 26;

// on déclare une variable vide a la quelle on affecte une valeur par la suire (recommandé)
var ville = "";
ville = "pierrefitte";
ville = "paris"
/**
 * en javascript le signe égal (=) n'est pas un opérateur dégalité mais un opérateur d'affectation càd qu'il sert à affecter ( ou assigner) une valeur à une variable et noon que la variable est égal à sa valeur . Ainsi on va pouvoir affecter différentes valeur à une meme variable dans le temps.
 */
console.log("nos variables sont:" + x + '/n' + x + '/n' + nom + prénom + date + '/n' + age + '/n' + ville)
/**
 * les types de (valeur de ) variables
 * les types de valeurs vont avoire une influence sur notre code, puisqu'on ne stockera pas de la même facon un chiffre ou une  chaine de caractéres (un texte) par exemple dans la variable.
 * nous ne pourrons pas non effectuer les même opération sur les variables selon le type de valeurs quelles stockent.
 * 
 * le type number
 * il va représenter tout nombre ou chiffre qu'il soit positif ou negatif,  entier ou à virgule. pour affecter une valeur de type number  on utilise ni quillemet  ni apostrophe .
 * /!\ attention : en programmation on utilise des notations anglo-saxonne, ce qui signifie qu'il faut remplacer nos virgule par des points pour les nombres décimaux
 */

var number = 25;
var number2 = -15;
var number3 = 1.09;

/**
 * le type string
 * il va représenter les chaines de caractéres c'est à dire les textes.
 * pouraffecter une chaîne de caractére à une variables il faut l'entourer avec guillement ou apostrophe.
 */
var
    texte = "lorem ipsum";
var desc = 'lorem ipsilum';

/**
 * cependant si la valeur stocker contient elle même des apostrophes ou des guillemets il faudra les échzpper au moyen d'un antislash(\)
*/
var dept = "Je suis du \"9.2\"";// Je suis dans des guillemets dons j'echappe l'guillemets

var dept = 'Je suis du "9.2"'

document.write(dept + "<br>");

var dept2 = 'J\'habite dans le 9.2';// Je suis dans des apostrophes dons j'echappe l'apostrophe

var dept2 = "J'habite dans le 9.2";

document.write(dept2);

/**
 * le type boolean (booleen)
 * un boolean  en algébre c'est une valeur binaire (soit 0 ou 1), en programmation un booléen va étre soit la valeur true ( vrai ou 1)soit la false (faux ou 0)pour affecter un boolean à une variable on utilise ni guillemet , ni apostrophe .
*/
var vrai = true;
var faux = false;

/**
 * les autres typers 
 * parmi les autre valeur possible on peut citer la valeurs "null", qui correspond à la non connaissance à priori de la valeur."undefined", qui correpand au fait de ne pas avoir défini de valeur pour notre variable. " nan" qui signifie "not anumber " soit n'est pas un nombre 
 */
var n = null,
    u = undefined,
    nn = nan;
// /!\ noter  qu'il est possible de changer le type de valeur d'une variable, la nouvelle écrasera tot simplement l'ancienne 
var tt = 25;//type number
tt = true;//type boolean
tt = null;// type null
tt = "tt";// type string

/**
 * pour tester le type de la valeur; on utilise généralemnt la methode "typeof()"
 */
alert(typeof (tt))

//déclarer une variable de maniére explicite ou implicite
var mavariable = "toto";// "mavariable" est ce qu'on  appelle une ecriture  camel case.
ma_variable = "toto";// "mavariable" est ce qu'on  appelle une ecriture  snacke case.
// afficher une boite  de dialogue 
alert("je sert à afficher des données dans une boite de dialogue")
//afficher dans la consol
console.log("je sert à afficher des données dans la consol")
//afficher dans le navigateur  (page web)
document.write("je sert à afficher des données dans la page web")
//demander à lutilisateur d'entrer une valeur 
prompt("je sert à afficher des données dans une boite de dialogue qui va me demmander à lutilisateur de rentrer des données")
//méthode (ou fonction) parseint (), la methode parseint() renvoie un nombre ou chiffre entier à partir d'une chîne de caractére ( string)
var unchiffre = "12";

document.write(unChiffre + '/n');// 12
document.write(typeof (unChiffre) + '/n');//string
unchiffre = parseint(unChiffre);
Document.write(unChiffre + '/n');//12
Document.write(typeof (unChiffre);//number
//méthode (ou fonction ) parsefloat()

var nb_en_lettre = "12.22";

document.write(nb_en_lettre + '/n');// 12
document.write(typeof nb_en_lettre) + '/n');//string
unchiffre = parseint(nb_en_lettre);
Document.write(unChiffre + '/n');//12
Document.write(typeof (nb_en_lettre);//number

//methode tostring(), qui sert a convertir en chaîne de caractére
var nb_en_lettre = "258";

document.write(nb_en_lettre + '/n');// 12
document.write(typeof nb_en_lettre) + '/n');//string
unchiffre = parseint(nb_en_lettre.tostring();
Document.write(unChiffre + '/n');//12
Document.write(typeof (nb_en_lettre);//number

alert("hello, je me lance depuit le fichier script.js !!");