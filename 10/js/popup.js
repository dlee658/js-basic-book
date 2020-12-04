function openPop(){
    var newWin = open("popup.html","","width=200,height=200");
    if(newWin == null){
        alert("blocked");

    }
}
onload = openPop;