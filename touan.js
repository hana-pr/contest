function inputlength( str ) {
    document.getElementById("mojisuu").innerHTML = str.length + "文字";
    if (str.length > mojimax.value){
        document.getElementById("hantei").innerHTML = " [NG]";
    }else{
        document.getElementById("hantei").innerHTML = " [OK]";
    }
}
