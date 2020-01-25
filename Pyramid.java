import java.util.*;
class Pyramid
{
public static void main(String args[])
{
int i,j;
Scanner sc = new Scanner(System.in);
int n = sc.nextInt();
for(i=1;i<=n;i++)
{
j=1;
while(j<=i)
{
System.out.print(j );
j++;
}
System.out.println();
}
}
}