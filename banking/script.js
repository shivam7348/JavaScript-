// Initialize the balance variable
let balance = 1000;

// Function to update the displayed balance
function updateBalanceDisplay() {
    document.getElementById('balance').innerText = `$${balance}`;
}

// Deposit function
function deposit() {
    const depositAmount = parseFloat(document.getElementById('depositAmount').value);
    if (!isNaN(depositAmount) && depositAmount > 0) {
        balance += depositAmount;
        updateBalanceDisplay();
        document.getElementById('depositAmount').value = ''; // Clear the input
    } else {
        alert('Please enter a valid deposit amount.');
    }
}

// Withdraw function
function withdraw() {
    const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);
    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
        if (withdrawAmount <= balance) {
            balance -= withdrawAmount;
            updateBalanceDisplay();
            document.getElementById('withdrawAmount').value = ''; // Clear the input
        } else {
            alert('Insufficient funds for this withdrawal.');
        }
    } else {
        alert('Please enter a valid withdrawal amount.');
    }
}

// Event listeners for buttons
document.getElementById('depositButton').addEventListener('click', deposit);
document.getElementById('withdrawButton').addEventListener('click', withdraw);

// Initial display of balance
updateBalanceDisplay();
