class Student
{
int eid;
double efee;
String name,branch;
void setStudent(int i,double f,String eb,String en)
{
eid=i;
efee=f;
branch=eb;
name=en;
}
void getStudent()
{
System.out.println("id"+eid+" fee"+efee+" branch"+branch+" name"+name);
}
public static void main(String args[])
{
Student s = new Student();
s.setStudent(1,100.0,"cse","swap");
s.getStudent();
}
}

