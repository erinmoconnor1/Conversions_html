function temperature(){
    //To convert celsius to fahrenheit
    //(CEL * 9/5) + 32
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32
    document.getElementById("fahrenheit").value = f
}   

function weight(){
    //To convert kilo to pounds
    //kgs * 2.2 = pounds
    var kg = document.getElementById("kilo").value;
    var p = kg * 2.2
    document.getElementById("pounds").value = p
}

function distance(){
    //To convert kilometers to miles
    //km * 0.62137 = miles
    var km = document.getElementById("km").value;
    var m = km * 0.62137
    document.getElementById("miles").value = m
}
