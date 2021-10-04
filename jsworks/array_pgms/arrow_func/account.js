var accounts=[
    [1000,"ram","savings",50000,true],
    [1001,"ravi","current",40000,true],
    [1002,"nikil","savings",5000,false],
    [1003,"jain","current",34000,false],
    [1004,"ajesh","savings",55000,true]
]

// sort the users wrt balance
accounts.sort((bal1,bal2)=>bal1[3]-bal2[3]);
console.log(accounts);
// print details of acno=1004
accounts.filter(acc=>acc[0]==1004).forEach(acc=>console.log(acc));
// is there any person with balance < 2000
var balance=accounts.some(acc=>acc[3]<2000)
console.log(balance);

// print name of users with in_active account
accounts.filter(acc=>acc[4]==false).map(acc=>acc[1]).forEach(acc=>console.log(acc))

// print details of user with max balance
accounts.reduce((bal1,bal2)=>bal1[3]>bal2[3]?bal1:bal2)


// print details of users with acc_type as savings anad balance > 25000
accounts.filter(acc=>(acc[2]=="savings")&(acc[3]>25000)).forEach(acc=>console.log(acc));