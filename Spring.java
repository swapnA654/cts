package com;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Spring {
   public static void main(String[] args) {
      ApplicationContext context = new ClassPathXmlApplicationContext("spring.xml");
      HelloWorld obj = (HelloWorld) context.getBean("HelloWorld");
      obj.getMessage();
      Employee obj1=(Employee) context.getBean("Employee");
     obj1.getMessage();
   }
}