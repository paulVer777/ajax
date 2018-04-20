/*

(function () {
    fetch('https://randomuser.me/api/?results=10')
        .then(function (response) {
            return response.json() //tu mamy juz obiekt js dzieki json.Opakowana odp http w obiekt js.
        })
        .then(function (data) {

            console.log(data);
            render(data.results);


        }).catch(function () {


            alert("oops")

    });


    function render(users) {
        users.forEach(function (user) {
            document.body.appendChild(makeUserDiv(user)) // append child przyjmuje element html dlatego make user div musi zwracac diva.
        })
    }

    function makeUserDiv(user) {
        var name = user.name.first
        var imgUrl = user.picture.thumbnail
        var email = user.email

        var div = document.createElement('div')
        var img = document.createElement('img')
        var emailP = document.createElement('p')
        var nameP = document.createElement('p')

        div.style.border = '1px solid black'
        img.setAttribute('src', imgUrl)
        nameP.innerText = name
        emailP.innerText = email

        div.appendChild(img)
        div.appendChild(nameP)

        div.addEventListener("click", function () { // do kazdego stworzonego diva przypisz clicka ktory wstawi email p do kliknietego diva.

            div.appendChild(emailP)


        })

        return div
    }
})();


*/

/*
function render(users) {


    var user = users[0];
    var name = user.name.first;
    var lastname=user.name.last;
    var img = user.picture.thumbnail;


    console.log(name);
    console.log(lastname);
    console.log(img);


    var div=document.createElement('div');
    var img=document.createElement('img');




}


*/

var promise = new Promise(function (resolve) {

    fetch('https://randomuser.me/api/')

        .then(function (response) {

            return response.json()

        })
        .then(function (data) {


            resolve(data); //to my decydujemy kiedy rozwiaze sie promisa, kiedy bedzie resolved


        })


})

promise.then(console.log)