var myUsers = [
  // Objets du tableau(key, value)
  {
      img: "https://data.whicdn.com/images/192175880/original.jpg",
      name: "leiloush",
      birthday: "13-02-1991"
  },
  {
      img: "https://i.pinimg.com/originals/b6/a4/24/b6a42450812d39715a6ce66aa936cdd2.jpg",
      name: "miia",
      birthday: "19-04-1992"
  },
  {
      img: "https://i.pinimg.com/originals/e6/07/d8/e607d8f356e451556d6d88e99267c49c.jpg",
      name: "kenoush",
      birthday: "20-06-1993"
  },
 
  {
      img: "https://i.pinimg.com/236x/92/42/16/924216764a4a566cf898050db5ccb4a0.jpg",
      name: "assou",
      birthday: "1997-05-22"
  }
];



function start() {
  // Vérifier que les champs sont remplis.
  if (document.getElementById('nom').value &&
      document.getElementById('naissance').value) {

      // Stock les valeurs des champs dans les variables.
      var contenu = document.getElementById('nom').value;
      var date = document.getElementById('naissance').value;
      // Ajoute l'élément dans le tableau en dernière position.     
      myUsers.push({ name: contenu, birthday: date });

      console.log(myUsers);

      // Appel de la fonction
      afficherUtilisateurs();


      $("#formghostusers").hide();

  }
  else {
      date.closest('.form-group').addClass('has-error');
      alert("Votre formulaire est mal rempli !!!!")
  }

}

function afficherUtilisateurs() {

  var listUsers = '<div class="row">';
  var defaultImage = "http://aws-cf.ados.fr/prod/photos/4/1/2/7950412/2954537/img-295453787e.jpg?v=5";
  for (i = 0; i < myUsers.length; i++) {
      // listUsers += '<div class= "col-md-3 mx-auto" style="width: 200px;">' + myUsers[i].name + '<br>' + myUsers[i].birthday + '</div>';

      listUsers += '<div class="card mt-2 ml-2" style="width: 16rem;">';
      listUsers += '<img src= "' + (myUsers[i].img || defaultImage) + '" class="card-img-top" height="200" alt="...">';
      listUsers += '<div class="card-body">';
      listUsers += '<h5 class="card-title">' + myUsers[i].name + '</h5>';
      listUsers += '<p class="card-text">' + myUsers[i].birthday + '</p>';
      listUsers += '<a href="#" class="btn btn-primary">Go somewhere</a>';
      listUsers += '</div>';
      listUsers += '</div>';

  }
  listUsers += "</div>";
  document.getElementById('list_users').innerHTML = listUsers;
}

afficherUtilisateurs(); // activé la touche entrer du clavier

// activé la touche entrer du clavier
document.addEventListener('keydown', function (event) {
  if (event.keyCode == 13) {
      // afficherUtilisateurs();
      event.preventDefault(); //évite d'envoyer le fomulaire non indiqué.
      start();
  }
});




/*************** JQUERY ********************/


$(document).ready(function () {
  $('#formghostusers').hide();
  $(".users").click(function () {
      $("#formghostusers").slideToggle();
  });
});


$(document).ready(function () {
  $("#myInput").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#list_users .card").filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
  });
});




$(document).ready(function(){
  $(function(){
    var div = $(".card");
    div.animate({left:'430px'}, "slow");
  });
});