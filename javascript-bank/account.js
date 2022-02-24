/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Math.sign(amount) === 1 && Number.isInteger(amount) === true) {
    var deposit = new Transaction('deposit', amount);
    this.transactions.push(deposit);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (Math.sign(amount) === 1 && Number.isInteger(amount) === true) {
    var withdraw = new Transaction('withdrawal', amount);
    this.transactions.push(withdraw);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var funds = 0;
  var withdrawals = 0;
  var deposits = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'withdrawal') {
      withdrawals += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'deposit') {
      deposits += this.transactions[i].amount;
    }
  }
  funds = deposits - withdrawals;
  if (funds === 0) {
    return 0;
  }
  return funds;
};
