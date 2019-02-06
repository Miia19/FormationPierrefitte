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
        birthday: "22-05-1997"
    },
    {
        img: "https://i.pinimg.com/236x/e2/cb/04/e2cb049cc9c210824d9ab20b5adc719d--anime-k%C4%B1zlar%C4%B1-anime-art.jpg",
        name: "mel",
        birthday: "01-10-1995"
    }, 
    {
        img: "https://data.whicdn.com/images/176385891/original.jpg",
        name: "fayzou",
        birthday: "23-12-1991"
    },

    {
        img: "https://i.pinimg.com/originals/b0/38/47/b03847bd7544ed556793df8aa758d7ca.jpg",
        name: "Maec",
        birthday: "01-11-1994"
    },
    {
        img: "https://i.pinimg.com/236x/d7/68/dc/d768dcd907de20148e8bfed4c23e9758--manga-boy-manga-anime.jpg",
        name: "tane",
        birthday: "20-04-1990"
    },
    {
        img: "https://i.pinimg.com/originals/98/fd/3a/98fd3a84d5b02c3a075264e326e4e8dd.jpg",
        name: "ando",
        birthday: "15-06-1996"
    },
    {
        img: "https://i.pinimg.com/236x/ed/ea/ef/edeaefbe14bbf65a02ab9ba88a033fb1.jpg",
        name: "lei",
        birthday: "25-07-1992"
    },
    {
        img: "http://img.over-blog-kiwi.com/1/20/66/54/obpiceISuKF.jpeg",
        name: "sia",
        birthday: "19-12-1990"
    },
    {
        img: "https://i.pinimg.com/originals/ec/d6/49/ecd649d2b66cc88fae45d26d73c4d4cd.jpg",
        name: "laine",
        birthday: "19-10-1993"
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
    var defaultImage = "https://florette.fr/idees-fraiches/wp-content/uploads/2018/04/H1bonjour.png";
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

