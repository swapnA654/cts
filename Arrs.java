import java.util.*;
class Arrs
{
public static void main(String args[])
{
int i,j,temp=0;
int a[]={21,12,3,244,5};
for(i=0;i<a.length;i++)
 {
for(j=i+1;j<a.length;j++)
{
if(a[i]<a[j])
 {

 }
else
 {
temp=a[i];
a[i]=a[j];
a[j]=temp;
}
}
System.out.println(a[i]);
}
for(i=0;i<a.length;i++)
{
if(i==0)
{
System.out.println("min is "+a[i]);
}
else if(i==a.length-1)
{
System.out.println("max is "+a[i]);
}
else
{
}
}
int sum=0;
for(i=0;i<a.length;i++)
{
sum=sum+a[i];
}
System.out.println("sum is "+sum);
int k;
k=sum/a.length;
System.out.println("avg is "+k);
}
}
