var userId = document.querySelector("#userId");
userId.onchange = checkId;

var pw1 = document.querySelector("#userPw1");
var pw2 = document.querySelector("#userPw2");
pw1.onchange = checkPw;
pw2.onchange = checkPw2;

function checkId(){
    if (userId.value.length < 4 || userId.value.length >15){
        alert("no");
        document.querySelector("#userId").value = ""
        userId.focus();
    }
}

function checkPw(){
    if (pw1.value.length < 8){
        alert("longer")
        pw1.value = "";
        pw1.focus();
    }
}
function checkPw2(){
    if (pw1.value != pw2.value){
        alert("nomatch")
        pw2.value = "";
        pw2.focus();
    }
}
