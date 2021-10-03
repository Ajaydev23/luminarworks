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
var srch_item=products.find(item=>item[1]=="treat")
//  var srch_item=products.filter(item=>item[2]=="20")
 console.log(srch_item);
//find return single object 
//filter return full details

// var is_avail=products.some(item=>item[2]<30);
// console.log(is_avail);


