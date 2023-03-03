function handleSignup() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cpassword = document.getElementById('cpassword').value;
    let passw = /^(?=.*[0-4])(?=.*[!@#$*])[a-zA-Z0-4!@#$*]{8,17}$/;
    var teacherData = new Array();
    var check = false;
    if(name.length>2 && name.length<15){
        check = true;
    }
    else{
        document.getElementById('iname').innerText='Plese Enter Valid Name';
    }
    if(email.includes("@") && email.includes(".") && email.indexOf("@") > 0 && !email.startsWith(" ") && email.lastIndexOf(".") < email.length - 2){
        check=true;
    }
    else{
        document.getElementById('iemail').innerText='Plese Enter Valid Email';
    }
    if(password.match(passw)){
        check=true;
    }
    else{
        document.getElementById('ipassword').innerText='Plese Enter Valid Password';
    }
    if(password === cpassword){
        check=true;
    }
    else{
        document.getElementById('icpassword').innerText='Plese Enter Valid Confirm Password';
    }
    if(check){
        teacherData=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
        if(teacherData.some((v)=>{return v.email==email})){
            alert('This mail id alredy Registered')
        }
        else{
            teacherData.push(
            {
                "name":name,
                "email":email,
                "password":password
            }
        )
        localStorage.setItem("users",JSON.stringify(teacherData));
        alert('Signup Succesfully, Plese Login...')
        window.location.replace("http://127.0.0.1:5500/loginPage/login.html");
        }
        
    }
    else{
        alert('Plese fill Correct Details')
    }
}