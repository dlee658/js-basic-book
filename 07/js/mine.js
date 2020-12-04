var itemList =[];
var btn = document.querySelector(".addBtn").value;
btn.addEventListner("click",addL);
function addL(){
    var item = document.querySelector("#item").value;
    if (item != null){
        itemList.push(item);
    }

}