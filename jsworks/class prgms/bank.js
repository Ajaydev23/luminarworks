//bank balance,deposit,withdraw
class bank{
    newAccount(depositer_name,acno,acc_type,min_balance)
    {
        this.name=depositer_name,
        this.acno=acno,
        this.acc_type=acc_type,
        this.balance=min_balance
    }
    deposit(amount)
    {
        this.balance+=amount;
        console.log(`${amount} has been credited.Current available balance is ${this.balance}`);
    }
    withdraw(amount)
    {
        if(this.balance<amount)
        {
            console.log("Transaction Failed");
        }
        else{
            this.balance-=amount;
            console.log(`${amount} has been debited.Current available balance is ${this.balance}`);

        }
    }
}
var obj=new bank()
obj.newAccount("Ajay",2323,"Savings",2000)
obj.withdraw(1000)
obj.deposit(4000)