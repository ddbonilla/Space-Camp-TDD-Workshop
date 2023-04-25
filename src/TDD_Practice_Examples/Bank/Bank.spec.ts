import { Bank } from "./Bank";
import { Customer } from "./Bank";
import { robber } from "./Bank";

describe("Bank", () => {
  test("getTreasury() should return how much money a bank has", () => {
    let bank = new Bank("Test Bank");

    expect(bank.getTreasury()).toBe(1000000);
  });
  test("getloan() should return how much money a bank has loaned", () => {
    let bank = new Bank("Test Bank");

    expect(bank.getLoan()).toBe(0);
  });
  test("getSavings() should return how much money a customer has in savings", () => {
    let customer1 = new Customer("John");

    expect(customer1.getSavings()).toBe(100);
  });

  test("getChecking() should return how much money a bank has in checking", () => {
    let customer1 = new Customer("John");

    expect(customer1.getChecking()).toBe(50);
  });

  test("transfer() should allow a customer to transfer money between accounts", () => {
    let customer1 = new Customer("John");

    customer1.transferFrom("savings", 50);

    expect(customer1.getSavings()).toEqual(50);
    expect(customer1.getChecking()).toEqual(100);
  });

  test("deposit() should allow a customer to add funds", () => {
    let customer1 = new Customer("John");

    customer1.deposit("savings", 1000);

    expect(customer1.getSavings()).toEqual(1100);
  });

  test("withdraw() should allow a customer to withdraw funds", () => {
    let customer1 = new Customer("John");

    customer1.withdraw("checking", 50);

    expect(customer1.getChecking()).toEqual(0);
  });

  test("getLoan() should allow customers to take out loans from the bank and see them", () => {
    let bank = new Bank("Loan Bank");
    let customer1 = new Customer("John");

    customer1.getLoan(100, bank);

    expect(customer1.getSavings()).toEqual(200);
    expect(bank.getLoan()).toEqual(100);
    expect(bank.getTreasury()).toEqual(999900);
  });

  test("getInterest() should allow customers to see interest rate starts at 2.5% and doubles for every additional loan a customer takes out ", () => {
    let bank = new Bank("Loan Bank");
    let customer1 = new Customer("John");

    customer1.getLoan(100, bank, "John");

    expect(customer1.getInterest(2.5, bank)).toEqual(5);
  });

  test("robber() should rob randomly a customer all of their money", () => {
    let bank = new Bank("Loan Bank");
    let customer1 = new Customer("John");
    let customer2 = new Customer("Peter");
    customer1.getLoan(200, bank, "John");
    customer2.getLoan(200, bank, "Peter");

    robber(customer1, customer2);

    expect(customer1.getChecking() || customer2.getChecking()).toEqual(0);
    expect(customer1.getChecking() || customer2.getChecking()).toEqual(0);
  });
});
