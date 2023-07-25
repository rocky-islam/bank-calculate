console.log('connect deposit');

document.getElementById('btn-deposit').addEventListener('click', () =>{
    let depositInputField = document.getElementById('deposit-field');
    let depositInputValue = depositInputField.value;
    // console.log(depositInputValue);
    let deposit = parseInt(depositInputValue)

    // deposit field update
    let depositValue = document.getElementById('deposit-value');
    let totalDeposit = parseInt(depositValue.innerText) + deposit;
    depositValue.innerText = totalDeposit;
    


    // Main balance update
    let mainBalance = document.getElementById('balance');
    let mainBalanceValue = mainBalance.innerText;
    let balance = parseInt(mainBalanceValue);
    // console.log(mainBalance);
    let totalBalance = deposit + balance;
    mainBalance.innerText = totalBalance;
    // console.log(typeof(totalBalance));

    depositInputField.value ='';
});

// withdraw
document.getElementById('btn-withdraw').addEventListener('click', () =>{
    let withdrawInputField = document.getElementById('withdraw-field');
    let withdrawInputValue =parseInt(withdrawInputField.value);
    // console.log(withdrawInputValue);
    // add withdraw value in withdraw field

    
    // console.log(previousWithdrawValue);

    // main balance calculate
    let mainBalance = document.getElementById('balance');
    let mainBalanceValue = parseInt(mainBalance.innerText);
    // console.log(mainBalanceValue);
    if(mainBalanceValue >= withdrawInputValue){
        // add withdraw
        let previousWithdrawValue = document.getElementById('withdraw-value');
        previousWithdrawValue.innerText = parseInt(previousWithdrawValue.innerText) + withdrawInputValue;

        // main balance
        mainBalance.innerText = mainBalanceValue - withdrawInputValue;
        withdrawInputField.value = '';
    }
    else{
        alert('You have not sufficient balance')
    }

    
    
})

