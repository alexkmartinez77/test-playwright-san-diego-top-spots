$(document).ready(function () {

    $.getJSON("data.json", function (data) {
        console.log("Entered getJSON function")
        let placeholder = document.querySelector("#output");
        let out = "";
        for (let spot of data) {
            out += `
             <tr>
                <td>${spot.name}</td>
                <td>${spot.description}</td>
                <td><a href="https://www.google.com/maps?q=${spot.location}"><img src="./images/open-in-google-maps.png"></a></td>
             </tr>
          `;
        }

        placeholder.innerHTML = out;
    });
});