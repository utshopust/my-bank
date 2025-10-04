document.getElementById("login-btn")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const accountNumber = document.getElementById('account-number').value;
        const pin = document.getElementById('pin').value;

        if(accountNumber.length===11){
            console.log('you are ready to go');
            if(parseInt(pin)===1234){
            window.location.href="./main.html"    
            }
            else{
                alert('Invalid Pin');
            }
        }
        else{
            alert('invalid Account Number');
        }
});






