class BankAccount {
    constructor(name, gender, dob, email, mobile, address, initialBalance, adharNo, panNo) {
      this.name = name;
      this.gender = gender;
      this.dob = dob;
      this.email = email;
      this.mobile = mobile;
      this.address = address;
      this.balance = initialBalance;
      this.adharNo = adharNo;
      this.panNo = panNo;
      this.isOpened = true;
      this.ledger = [];
    }
  
    openAccount(name, gender, dob, email, mobile, address, initialBalance, adharNo, panNo) {
      if (!this.isOpened) {
        console.log("Account is closed. Cannot perform transactions.");
        return;
      }
  
      this.name = name;
      this.gender = gender;
      this.dob = dob;
      this.email = email;
      this.mobile = mobile;
      this.address = address;
      this.balance = initialBalance;
      this.adharNo = adharNo;
      this.panNo = panNo;
  
      console.log("Account opened successfully!");
    }
  
    updateKYC(name, dob, email, mobile, adharNo, panNo) {
      if (!this.isOpened) {
        console.log("Account is closed. Cannot perform transactions.");
        return;
      }
  
      this.name = name;
      this.dob = dob;
      this.email = email;
      this.mobile = mobile;
      this.adharNo = adharNo;
      this.panNo = panNo;
  
      console.log("KYC updated successfully!");
    }
  
    depositMoney(amount) {
      if (!this.isOpened) {
        console.log("Account is closed. Cannot perform transactions.");
        return;
      }
  
      if (amount <= 0) {
        console.log("Invalid amount.");
        return;
      }
  
      this.balance += amount;
      this.ledger.push({
        type: "DEPOSIT",
        amount: amount,
        date: new Date().toLocaleString()
      });
  
      console.log(`${amount} deposited successfully!`);
    }
  
    withdrawMoney(amount) {
      if (!this.isOpened) {
        console.log("Account is closed. Cannot perform transactions.");
        return;
      }
  
      if (amount <= 0) {
        console.log("Invalid amount.");
        return;
      }
  
      if (this.balance < amount) {
        console.log("Insufficient balance.");
        return;
      }
  
      this.balance -= amount;
      this.ledger.push({
        type: "WITHDRAW",
        amount: amount,
        date: new Date().toLocaleString()
      });
  
      console.log(`${amount} withdrawn successfully!`);
    }
  
    transferMoney(toName, amount) {
      if (!this.isOpened) {
        console.log("Account is closed. Cannot perform transactions.");
        return;
      }
  
      if (amount <= 0) {
        console.log("Invalid amount.");
        return;
      }
  
      if (this.balance < amount) {
        console.log("Insufficient balance.");
        return;
      }
  
      this.balance -= amount;
      this.ledger.push({
        type: "TRANSFER",
        amount: amount,
        to: toName,
        date: new Date().toLocaleString()
      });
  
      console.log(`${amount} transferred to ${toName} successfully!`);
    }
  
    receiveMoney(fromName, amount) {
      if (!this.isOpened) {
        console.log("Account is closed. Cannot perform transactions.");
        return;
      }
  
      if (amount <= 0) {
        console.log("Invalid amount.");
        return;
      }
  
      this.balance += amount;
      this.ledger.push({
        type: "RECEIVE",
        amount: amount,
        from: fromName,
        date: new Date().toLocaleString()
      });
  
      console.log(`${amount} received from ${fromName} successfully!`);
    }
  
    printStatement() {
      if (!this.isOpened) {
        console.log("Account is closed. Cannot perform transactions.");
        return;
      }
  
      console.log(`
        Account Details:
        Name: ${this.name}
        Gender: ${this.gender}
        DOB: ${this.dob}
        Email: ${this.email}
        Mobile: ${this.mobile}
        Address: ${this.address}
        Aadhaar No.: ${this.adharNo}
        PAN No.: ${this.panNo}
        Balance: ${this.balance}
        Transactions:
      `);
  
      if (this.ledger.length === 0) {
        console.log("No transactions found.");
        return;
      }
  
      this.ledger.forEach((transaction) => {
        console.log(`
          Type: ${transaction.type}
          Amount: ${transaction.amount}
          ${transaction.type === "TRANSFER" ? `To: ${transaction.to}` : ""}
          ${transaction.type === "RECEIVE" ? `From: ${transaction.from}` : ""}
          Date: ${transaction.date}
        `);
      });
    }
  
    closeAccount() {
      if (!this.isOpened) {
        console.log("Account is already closed.");
        return;
      }
  
      this.isOpened = false;
      console.log("Account closed successfully.");
    }
  }
  const account = new BankAccount();
account.openAccount(
  "John Doe",
  "Male",
  "01/01/1990",
  "johndoe@gmail.com",
  "9876543210",
  "123 Main St, Anytown USA",
  5000,
  "1234 5678 9012",
  "ABCDE1234F"
);

account.depositMoney(1000);
account.withdrawMoney(2000);
account.transferMoney("Jane Doe", 1500);
account.receiveMoney("Bob Smith", 500);
account.printStatement();
account.updateKYC(
  "John Doe",
  "01/01/1990",
  "johndoe@gmail.com",
  "9876543210",
  "1234 5678 9012",
  "ABCDE1234F"
);
account.printStatement();
account.closeAccount();
account.depositMoney(1000); // Should display error message since account is closed

     
  