var i = 0;
function zmiana(btn) {
    if (i == 1) {
        btn.style.backgroundColor = "lightblue";
        i = 0;
    }
    else if (i == 2){
        btn.style.backgroundColor = "lightgreen";
        i = 1
    }
    else {
        btn.style.backgroundColor = "lightgrey";
        i = 2
    }
}
