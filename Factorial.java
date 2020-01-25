import java.util.*;
class Factorial
{
 static int f=1;
static void fact(int n)
{
for(int i=1;i<=n;i++)
{
     f=f*i;
}
System.out.println(f);
}


public static void main(String args[])
{

Scanner sc = new Scanner(System.in);
int n = sc.nextInt();
//Factorial a = new Factorial;
fact(n);

}
}


