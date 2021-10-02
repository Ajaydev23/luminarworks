var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10]
]
//print number of items in shop 
console.log("number of items:"+products.length);
//print number of available items
var avail_stock=products.filter(item=>item[3]>0)
console.log(avail_stock);

// print all product names only 
 
var p_name=products.map(item=>item[1])  
console.log("products are ",p_name);
//print out of stock product name
var out_stock=products.filter(item=>item[3]==0).map(item=>item[1])
console.log(out_stock);