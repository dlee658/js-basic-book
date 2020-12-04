var price = 24000;

var sideMenu = document.querySelectorAll(".checkbx");
var total = document.querySelector("#total");
total.value = price+"원";

for(i=0; i<sideMenu.length; i++) {
    sideMenu[i].onclick = function() {
      if(sideMenu[i].checked == true) {
        price += parseInt(sideMenu[i].value);
      }
      else {
         price -= parseInt(thsideMenu[i]is.value);        
      }
      total.value = price+"원";
    } 
}




