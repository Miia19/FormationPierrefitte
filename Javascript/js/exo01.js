var myUsers = [
    {name:"Miia",birthday:"1992-04-19"},
    {name:"kenza",birthday:"1993-06-20"},
    {name:"leila",birthday:"1991-02-13"},
    {name:"asmae",birthday:"1997-05-22"}
   ];
   
   function envoie(){
      var userName = prompt("Quel est votre prénom ?");
      var userBirthday = prompt("Quand êtes vous né ? ( ATTENTION Format AAAA-MM-JJ )");
   
      myUsers.push({name: userName , birthday: userBirthday});
   }
   
   console.log(myUsers);
   
   function send(){
   
      var formValid = document.getElementById('bouton_envoi');
      var prenom = document.getElementById('prenom').value;
      var naissance = document.getElementById('naissance').value;
   
      myUsers.push({name: prenom, birthday: naissance});
   
   
   }