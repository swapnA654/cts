class Staticblock
{
static int a;
static
{
a=10;
System.out.println("static block called"+a);

}
 static void setA(int a)
{
a=56;
System.out.println("static method called"+a);
}
public static void main(String args[])
{
System.out.println("MAIN METHOD IS CALLING");
setA(10);
}
}