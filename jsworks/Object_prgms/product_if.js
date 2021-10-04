//check for batch code is present
//if not add batch_code=est_2k21_09
var products={p_code:100,name:"oreo",price:50,aval_qty:50}
if(!("batch_code" in products))
{
    products.batch_code="est_2k21_09"
}
console.log(products);