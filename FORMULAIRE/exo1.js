function controler() {
    var x = document.forms["zoneSaisie"]["fname"].value;
    var y = document.forms["zoneSaisie"]["lname"].value;
    if (x + y == "") {
        alert("Il faut remplir le formulaire");
    return false;
  }
        else{
    alert("Le nom complet est  : " + x);
        }

}

// Cette fonction sert à récupérer l'élément dont l'id est zoneSaisie;
// Elle affiche ensuite une alerte avec la valeur de l'élément récupéré dans la variable zoneSaisie

