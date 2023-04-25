//You have been asked to create a banking application

//The bank can keep track of how much money it has, and how much it has loaned.

//Customers have a saving account, checking account, and need to be able to transfer money between the two.

//Customers need to be able to deposit and withdraw money

//Customers can also take out loans from the bank, and need to be able to view them

//The interest rate starts at 2.5% and doubles for every additional loan a customer takes out (but the other loans stay the same: loan 1 2.5%, loan 2 is 5%, etc)

//Robbers can come in an rob a customer at random (empty their accounts)

//Robinhood can come in and relieve a customer of their loans at random

export class Bank {
  name: string;
  customers: Array<Bank>;
  treasury: number;
  loaned: number;

  constructor(name: string) {
    this.name = name;
    this.customers = [];
    this.treasury = 1000000;
    this.loaned = 0;
  }

  getTreasury() {
    return this.treasury;
  }

  getLoan() {
    return this.loaned;
  }

  subtractLoan(amount: number) {
    this.treasury -= amount;
    this.loaned += amount;
  }

  //   addCustomer(customer: string) {
  //     this.customers.push(customer);
  //   }
}

export class Customer {
  name: string;
  accounts: Array<Customer>;
  savings: number;
  checking: number;
  loans: number;
  interest: number;

  constructor(name: string) {
    this.name = name;
    // this.accounts = [];
    this.savings = 100;
    this.checking = 50;
    this.loans = 0;
    this.interest = 0;
  }

  getSavings() {
    return this.savings;
  }

  getChecking() {
    return this.checking;
  }

  transferFrom(account: string, amount: number) {
    account === "savings"
      ? ((this.savings -= amount), (this.checking += amount))
      : ((this.checking -= amount), (this.savings += amount));
  }

  deposit(account: string, amount: number) {
    account === "savings"
      ? (this.savings += amount)
      : (this.checking += amount);
  }

  withdraw(account: string, amount: number) {
    account === "savings"
      ? (this.savings -= amount)
      : (this.checking -= amount);
  }

  getLoan(amount: number, bank: Bank, customer: string) {
    bank.subtractLoan(amount);
    this.savings += amount;
    // bank.addCustomer(customer);
  }

  getInterest(rate: number, bank: Bank) {
    bank.loaned > 1 ? (this.interest = rate * 2) : (this.interest = rate);
    console.log(this.interest);
    return this.interest;
  }
}

export function robber(customer1: object, customer2 : object) {


  customerList.push(customer1, customer2);

}
  