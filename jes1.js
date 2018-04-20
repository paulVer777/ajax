
(function () {


    var button = document.querySelector('button');

    button.addEventListener("click", function () {

        fetchData();

    });


    function fetchData() {

        fetch('https://randomuser.me/api/')

            .then(function (response) {


                return response.json()

            }).then(function (data) {

            show(data.results[0]);


        })

    }


    function show(user) {

        var div = document.querySelector('div');


        var bigletter=user.name.first;

        bigletter=bigletter[0].toUpperCase();





        div.innerText = user.name.first + " " + user.name.last

    }







})();