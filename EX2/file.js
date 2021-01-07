function getAttributes(){
   var x =  document.getElementById("w3r").href;
   var y =  document.getElementById("w3r").hreflang;
   var z =  document.getElementById("w3r").rel;
   var a =  document.getElementById("w3r").target;
   var b =  document.getElementById("w3r").type;

   document.getElementById("x").innerHTML = "Voici href:  " + x;
   document.getElementById("y").innerHTML = "Voici hreflang:  " + y;
   document.getElementById("z").innerHTML = "Voici rel:  " + z;
   document.getElementById("a").innerHTML = "Voici target:  " + a;
   document.getElementById("b").innerHTML = "Voici le type du lien spécifié:  " + b;
}