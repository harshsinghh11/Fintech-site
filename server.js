const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let accounts = {};

app.post('/createAccount', (req, res) => {
  const { userId } = req.body;
  if (!accounts[userId]) {
    accounts[userId] = { balance: 0 };
    res.status(201).send({ message: 'Account created', balance: accounts[userId].balance });
  } else {
    res.status(400).send({ message: 'Account already exists' });
  }
});

app.post('/deposit', (req, res) => {
  const { userId, amount } = req.body;
  if (accounts[userId]) {
    accounts[userId].balance += amount;
    res.send({ message: 'Deposit successful', balance: accounts[userId].balance });
  } else {
    res.status(404).send({ message: 'Account not found' });
  }
});

app.post('/withdraw', (req, res) => {
  const { userId, amount } = req.body;
  if (accounts[userId]) {
    if (accounts[userId].balance >= amount) {
      accounts[userId].balance -= amount;
      res.send({ message: 'Withdrawal successful', balance: accounts[userId].balance });
    } else {
      res.status(400).send({ message: 'Insufficient balance' });
    }
  } else {
    res.status(404).send({ message: 'Account not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
