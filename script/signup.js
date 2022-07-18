function validatefirstname(){
    var onename=document.getElementById("firstname");
    if(onename.value.length==0){
        onename.style.border="2px solid red";
        return false;
    }
    else{
        onename.style.border="2px solid green";
        return true;
    }
    
}
function validatelastname() {
    var twoname = document.getElementById("lastname");
    if (twoname.value.length == 0) {
        twoname.style.border = "2px solid red";
        return false;
    }
    else {
        twoname.style.border = "2px solid green";
        return true;
    }

}
function validateemail() {
    var twoname = document.getElementById("email");
    if (twoname.value.length == 0) {
        twoname.style.border = "2px solid red";
        return false;
    }
    else {
        twoname.style.border = "2px solid green";
        return true;
    }

}
function validatepassword() {
    var twoname = document.getElementById("password");
    if (twoname.value.length == 0) {
        twoname.style.border = "2px solid red";
        return false;
    }
    else {
        twoname.style.border = "2px solid green";
        return true;
    }

}
function validatepassword1() {
    var twoname = document.getElementById("password1");
    if (twoname.value.length == 0) {
        twoname.style.border = "2px solid red";
        return false;
    }
    else {
        twoname.style.border = "2px solid green";
        return true;
    }

}
function validateaddress() {
    var twoname = document.getElementById("address");
    if (twoname.value.length == 0) {
        twoname.style.border = "2px solid red";
        return false;
    }
    else {
        twoname.style.border = "2px solid green";
        return true;
    }

}