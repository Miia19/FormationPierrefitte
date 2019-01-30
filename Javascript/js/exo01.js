var myUsers = [
    { Pseudonyme:"Miia", nom:"Nejjari", prenom: "Mounia", email: "miia@live.fr", naissance:"1992-04-19", address: "5 rue pasteur", code_postal: "93380", profession: "secrétaire" },
    { Pseudonyme:"Kenoush",  nom:"Khelafi", prenom: "Kenza", email: "kenoush@live.fr", naissance:"1993-06-20", address: "5 rue pasteur", code_postal: "93380", profession: "secrétaire" },
    { Pseudonyme:"Leiloush",  nom:"Taleb", prenom: "Leila", email: "leiloush@live.fr", naissance:"1991-02-13", address: "5 rue pasteur", code_postal: "93380", profession: "secrétaire" },
    { Pseudonyme:"Assoue",  nom:"Nejjari", prenom: "Asmae", email: "assoue@live.fr", naissance:"1997-05-22", address: "5 rue pasteur", code_postal: "93380", profession: "secrétaire" }
   ];
   
   // function envoie(){
   //    var userName = prompt("Quel est votre prénom ?");
   //    var userBirthday = prompt("Quand êtes vous né ? ( ATTENTION Format AAAA-MM-JJ )");
   
   //    myUsers.push({name: userName , birthday: userBirthday});
   // }
   
   console.log(myUsers);
   
   function send(){
      // var déclare une variable
      var pseudonyme = document.getElementById('pseudonyme').value;
      var nom = document.getElementById('nom').value;
      var prenom = document.getElementById('prenom').value;
      var naissance = document.getElementById('naissance').value;
      var email = document.getElementById('email').value;
      var adresse = document.getElementById('adresse').value;
      var code_postal= document.getElementById('codepostal').value;
      var profession = document.getElementById('profession').value;

      myUsers.push(
         {
            Pseudonyme: pseudonyme,
            nom: nom,
            prenom: prenom,
            email: email,
            naissance: naissance,
            address: adresse,
            code_postal: code_postal,
            profession: profession
         }
      );   
   }
var affichUtilisateurs = "nejjari";


for (i=0; i<myUsers.length; i++){
   affichUtilisateurs += myUsers[i].Pseudonyme +"<br>";
   };

document.getElementById('afficherutilisateurs').innerHTML = affichUtilisateurs;


