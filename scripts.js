async function createAccount() {
    const userId = document.getElementById('userId').value;
    const response = await fetch('http://localhost:3000/createAccount', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId })
    });
    const result = await response.json();
    document.getElementById('accountDetails').innerText = JSON.stringify(result);
  }
  
  async function deposit() {
    const userId = document.getElementById('userId').value;
    const amount = prompt('Enter deposit amount:');
    const response = await fetch('http://localhost:3000/deposit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId, amount: parseFloat(amount) })
    });
    const result = await response.json();
    document.getElementById('accountDetails').innerText = JSON.stringify(result);
  }
  
  async function withdraw() {
    const userId = document.getElementById('userId').value;
    const amount = prompt('Enter withdrawal amount:');
    const response = await fetch('http://localhost:3000/withdraw', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId, amount: parseFloat(amount) })
    });
    const result = await response.json();
    document.getElementById('accountDetails').innerText = JSON.stringify(result);
  }
  