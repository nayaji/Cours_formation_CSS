const form = document.querySelector('form');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Il n’y a pas eu de rechargement de page");


    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const telephone = document.getElementById("telephone").value;
    const adresse = document.getElementById("adresse").value;
    alert("Non: " + nom);
    alert("Email: " + email);
    alert("telephone: " + telephone);
    alert("adresse: " + adresse);


});



form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Il n’y a pas eu de rechargement de page");


    const email = document.getElementById("email").value;
    alert("Email: " + email);


});


