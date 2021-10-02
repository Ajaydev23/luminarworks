//add offer 5rs for all product whose stock >50
var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10]
]
var offer=products.filter(item=>item[3]>50).map(item=>[item[1],item[2]-5]);
console.log(offer);