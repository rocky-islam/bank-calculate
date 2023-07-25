console.log('connect');

document.getElementById('eye').addEventListener('click', function(){
    let password = document.getElementById('password');
    let eye = document.getElementById('eye');
    if(password.type == 'password'){
        password.type = 'text';
        eye.style.color = 'green'
    }
    else{
        password.type = 'password';
        eye.style.color = ''
    }
});

document.getElementById('submit').addEventListener('click', function(){
    let emailField = document.getElementById('email');
    let passwordField = document.getElementById('password')
    
    let email = emailField.value;
    let password = passwordField.value;
    // console.log(email, password);

    let match = '@';

    if(email.match(match)){
        // console.log('match text');
        // document.getElementById('error').style.display = 'none';
        window.location.href = 'bank.html';
    }
    else{
        document.getElementById('error').style.display = 'block';
    }
});



