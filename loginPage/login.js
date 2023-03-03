function handleLogin(){
    var loginEmail = document.getElementById('email').value;
    var loginPassword = document.getElementById('password').value;
    var keys;
    var confirmData = new Array();
    confirmData=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(confirmData.some((v)=>{return v.email == loginEmail && v.password==loginPassword})){
        for(var i in confirmData){
            if(JSON.parse(localStorage.getItem('users'))[i].email){
                keys=i;
            }
        }
        alert("Login...")
        window.location.replace(`http://127.0.0.1:5500/dashboard/dashboard.html?keys=${keys}`);
    }
    else{
        alert("login fail")
    }
}