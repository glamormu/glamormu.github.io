function logIn(){
    var username = document.getElementById("inputUsername").value;
    var password = document.getElementById("inputPassword").value;
    if(username == "admin" && password == "123456") {
        return true;
    }
    else{
        alert("账号或密码错误！");
        return false;
    }

}
