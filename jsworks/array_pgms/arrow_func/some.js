//purchase item before <10rs possible??
 //use some
var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10],
    [101,"gooday",20,70],
    [101,"parle",20,70]
]
// var pro=products.some(item=>item[2]<10)
// console.log(pro);
var pro=products.some(item=>item[2]<30)
console.log(pro);
