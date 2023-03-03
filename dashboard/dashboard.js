const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const key = urlParams.get('keys')
var name = JSON.parse(localStorage.getItem('users'))[key].name;
var email = JSON.parse(localStorage.getItem('users'))[key].email;
document.getElementById('name').innerText=`Welcome Back ${name}!`
document.getElementById('email').innerText=`Email: ${email}`
let passw = /^(?=.*[0-5])(?=.*[!@#$*])[a-zA-Z0-4!@#$*]{8,17}$/;
var check = false;
function handleChangePass(){
    const oldPass = document.getElementById('oldPass').value;
    const newPass = document.getElementById('newPass').value;
    const conPass = document.getElementById('conPass').value;
    if((JSON.parse(localStorage.getItem('users'))[key].password) == oldPass){
        if(newPass.match(passw)){
            check=true;
        }
        else{
            document.getElementById('inpassword').innerText='Plese Enter Valid Password';
        }
        if(newPass === conPass){
            check=true;
        }
        else{
            document.getElementById('icpassword').innerText='Plese Enter Valid Confirm Password';
        }
        if(check){
            alert('Password Change Successfully')
            JSON.parse(localStorage.setItem('users'))[key].password = 'newPass';
            
        }else{
            alert("Plese Enter Valid Password")
        }
        
    }
    else{
        document.getElementById('iopassword').innerText='Plese Enter Valid Old Password';
    }
}

function handleLogout(){
    window.location.replace("http://127.0.0.1:5500/loginPage/login.html");
    alert('Logout Succesfully.')
}