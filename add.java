import java.util.*;
class Calculator
{
static int a,b;
static void add(int a,int b)
{
int add = a+b;
System.out.println("add");
}

static void sub(int a, int b)
{
int sub = a-b;
System.out.println("sub");
}

static void mul(int a, int b)
{
 int mul = a*b;
System.out.println("mul");
}

static void div(int a, int b)
{
int div = a/b;
System.out.println("div");
}

public static void main(String args[])
{
Scanner sc = new Scanner(System.in);
int n = sc.nextInt();
a = sc.nextInt();
b = sc.nextInt();
switch(n)
{
case 1:add(a,b);
       break;
case 2:sub(a,b);
       break;
case 3:mul(a,b);
       break;
case 4:div(a,b);
       break;
}
}
}