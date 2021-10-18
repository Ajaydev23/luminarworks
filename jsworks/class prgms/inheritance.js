class Mobile{
    phone(){
        console.log("have redmi k20 pro max");
    }
}
class smartphone extends Mobile{
    phone(){
        super.phone()//super keyword 
        console.log("google pixel 6");
    }
}

var Smartphone=new smartphone()
Smartphone.phone()