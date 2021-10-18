class Parent{
    m1(){
        console.log("m1");
    }
}
class child extends Parent{
    m2()
    {
        console.log("m2");
    }
}
class subchild extends child{
    m3()
    {
        console.log("m3");
    }
}
var sb=new subchild()
sb.m1()
sb.m2()
sb.m3()
var ch=new child()
ch.m1()
ch.m2()