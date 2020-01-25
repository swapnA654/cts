import java.util.*;
class Mul
{
	public static void main(String args[])
	{	
		//System.out.println("Enter size m*n:");
		Scanner sc = new Scanner(System.in);
		int m = sc.nextInt();
		int n = sc.nextInt();
		System.out.println("enter m values"+	m);
		System.out.println("enter n values"+n);
		int a[][] = new int[m][n];
		int b[][] = new int[m][n];
		for(int i=0;i<m;i++)
		{
			for(int j=0;j<n;j++)
			{
				 a[i][j] = sc.nextInt();
			}
		}
		for(int i=0;i<m;i++)
		{
			for(int j=0;j<n;j++)
			{
				System.out.print(" "+a[i][j]);
			}
		System.out.println("");
}
	}
}
