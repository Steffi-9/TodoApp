function validateForm(callback){
    let x = document.forms["todoForm"]["username"].value;
    let y = document.forms["todoForm"]["pswd"].value;
    if(x == "admin" && y == "12345"){
       
        
        callback();
    }
    
   else{
       alert("Please enter valid username and password")
       
   }


}


function callback(){
    document.todoForm.action = "todo.html";
    
        // window.open("todo.html");
        // document.getElementsByTagName("form").setAttribute("action","./todo.html")
   

}

function validateusername(){
    
    var username = document.getElementById("username");
    var usererror = document.getElementById("usererror");
    usererror.innerHTML = "";
    usererror.style.color= "";
    if(username.value != "admin")
    {usererror.innerHTML = "Invalid username";
    usererror.style.color= "red";
     }   
}

function validatepassword(){
    
    var pwd = document.getElementById("pwd");
    var passworderror = document.getElementById("passworderror");
    passworderror.innerHTML = "";
    passworderror.style.color= "";
    if(pwd.value != 12345)
    {passworderror.innerHTML = "Invalid password";
    passworderror.style.color= "red";
     }   
}