class bank {
    session = {}
    accounts = {
        1001: {
            acno: 1001, password: "userone", balance: 5000,
            transactions: [
                { to: 1002, amount: 500 },
                { to: 1003, amount: 600 },
                { to: 1004, amount: 700 }
            ]
        },
        1002: {
            acno: 1002, password: "usertwo", balance: 7000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1003: {
            acno: 1003, password: "userthree", balance: 8000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1002, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1004: {
            acno: 1001, password: "userone", balance: 9000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        }
    }


    authenticateUser(accno, password) {
        if (accno in this.accounts) {
            var pwd = this.accounts[accno].password;
            //return pwd==password ? 1:0
            if (pwd == password) {
                this.session['user'] = accno
                return 1
            }
            else return 0
        }
        else {
            return -1;
        }

    }





    balanceEnquiry() {
        var balance = this.accounts[this.session.user].balance
        console.log(`\nYour Account balance is ${balance}`);
    }

    fundTransfer(to_accno, amount) {
        var user = this.accounts[this.session.user]
        if (to_accno in this.accounts) {
            if (amount < user.balance) {
                this.accounts[to_accno].balance += amount
                user.balance -= amount
                console.log(`\n${amount} rupees transfered to ${to_accno}`);
                this.accounts[user.acno].transactions.push({ to: to_accno, amount: amount })
            }
            else {
                console.log("insuficient balance");
            }
        }
        else {
            console.log('beneficiary not found');
        }
    }

    // paymentHistory(){
    //     var user = this.accounts[this.session['user']]
    //     var history = this.accounts[user.acno].transactions
    //     console.log(`\n\t\tPayment history of ${this.session.user}\n`);
    //    history.forEach(element => {
    //        console.log(`Rupees ${element.amount} to account number ${element.to}`);
    //    });
    // }
    getTransactions() {

    }



    creditTransactions() {
        var user = this.session.user
        console.log(`\n\n\t\tCredit Details of ${user}\n`);

        for (var acc in this.accounts) {
            if (acc != user) {

                var transactions = this.accounts[acc]['transactions']
                for (var data of transactions) {

                    if (data['to'] == user) {
                        console.log(`Rupees ${data.amount} from account number ${acc}`);
                    }
                }
            }
        }



    }
}    
var obj = new bank()
var user = obj.authenticate(1002, "usertwo")
obj.balanceEnquiry()
obj.fundTransfer(1004, 3000)
obj.balanceEnquiry(1002)
