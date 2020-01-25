import java.util.*;
class Box
{
static int l,b,h;
//Scanner o = new Scanner(System.in);
static void setBox(int le,int lb,int lh)
{
l=le;
b=lb;
h=lh;
}


 static void getBox()
{
System.out.println("l="+l+"b="+b+"h="+h);
}


 static void volume(int l,int b,int h)
{
int v = l*b*h;
System.out.println(v);
}


public static void main(String args[])
{

setBox(1,2,3);
volume(4,5,6);
getBox();
}
}
