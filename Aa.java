class Aa
{
       int count=0;
           Aa()
           {
            count++;
            }
          public static void main(String args[])
             {
            Aa a=new Aa();
            //A a1=new A();
          System.out.println(a.count);
          }
}