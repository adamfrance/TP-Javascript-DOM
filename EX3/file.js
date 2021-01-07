var nom = document.getElementsById("form1").elements[0].value;

var prenom = document.getElementsById("form1").elements[1].value;


function getFormvalue(){​​
    document.getElementsById("result").innerHTML = nom + " " + prenom;
}​​