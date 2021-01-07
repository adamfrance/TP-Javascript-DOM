function changer_style_js(){
    var x = document.getElementById("parag1");
    console.log(x);
    x.style.color="white";
    x.style.border= "10px dotted black";
    x.style.padding = "5px";
    x.style.background="black";   
}

function changer_style_css(){
    document.getElementById("parag1").setAttribute("class","active");
}