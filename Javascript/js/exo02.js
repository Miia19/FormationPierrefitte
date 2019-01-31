

   var myUsers = [
    // Objets du tableau(key, value)
    {
        img: "https://i.pinimg.com/originals/b6/a4/24/b6a42450812d39715a6ce66aa936cdd2.jpg", name: "Miia",
        birthday: "1992-04-92"
    },
    {
        img: "https://i.pinimg.com/originals/e6/07/d8/e607d8f356e451556d6d88e99267c49c.jpg",
        name: "kenoush",
        birthday: "1993-06-20"
    },
    {
        img: "https://data.whicdn.com/images/192175880/original.jpg",
        name: "leiloush",
        birthday: "1991-02-13"
    },
    {
        img: "https://i.pinimg.com/236x/92/42/16/924216764a4a566cf898050db5ccb4a0.jpg",
        name: "assou",
        birthday: "1997-05-22"
    }
 ];


 function envoi() {
    if (document.getElementById('prenom').value &&
        document.getElementById('date').value) {
        var contenu = document.getElementById('prenom').value;
        var date = document.getElementById('date').value;
        myUsers.push({ name: contenu, birthday: date });
        console.log(myUsers);
        afficherUtilisateurs();
    }
    else { alert("Votre formulaire est mal rempli !!!!") }
 }
 
 function afficherUtilisateurs() {
 
    var listUsers = '<div class="row">';
    var defaultImage = "https://demo.phpgang.com/crop-images/demo_files/pool.jpg"
 https://demo.phpgang.com/crop-images/demo_files/pool.jpg";
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
 
 afficherUtilisateurs();
 
 // activé la touche entrer du clavier
 document.addEventListener('keydown', function (event) {
    if (event.which == 13) {
        // afficherUtilisateurs();
        event.preventDefault();
        envoi();
    }
 });
 
 