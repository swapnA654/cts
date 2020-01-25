class StaticMethod
{
static int num;
int c;
void setStatic(int a)
{
num=a;
System.out.println(num);
}
public static void main(String ar[])
{
StaticMethod e=new StaticMethod();
e.setStatic(10);
}
}