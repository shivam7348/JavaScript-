let balance = 1000

function displayBalance() {
    const balanceDisplay = document.getElementById("balance")
    balanceDisplay.innerText = `$${balance}`;
    
}

function deposit( ) {

    const depositInput = document.getElementById('depositAmount').value;
    const depositAmount = parseFloat(depositInput)

}

if (depositAmount > 0 ) {
    balance += depositAmount;
    displayBalance();
} else {
    alert ("Please enter a valid deposit amount");

    document.getElementById('depositAmount').value = "";
}

function withdraw() {
    const withdrawInput = document.getElementById('withdrawAmount').value;
    const withdrawAmount = parseFloat(withdrawInput);
}

if( withdrawAmount <= 0) {
    if( wi) {

    }

}
