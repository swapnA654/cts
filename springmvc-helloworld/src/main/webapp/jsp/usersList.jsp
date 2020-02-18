<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<table border="2px">
<tr><th>User Name</th>
<th>Password</th>
<th> First Name</th>
<th>Last Name</th>
<th>Email</th>
<th>Address</th>
<th>Phone</th>
<th>Age</th>
</tr>

<c:forEach items="${usersList}" var="user">
<tr>
<td>${user.username}</td>
<td>${user.password}</td>
<td>${user.firstname}</td>
<td>${user.lastname}</td>
<td>${user.email}</td>
<td>${user.address}</td>
<td>${user.phone}</td>
<c:choose>
<c:when test="${user.age<30}">
<td style="background-color: green">${user.age}</td>
</c:when>
<c:otherwise>
<td style="background-color: yellow">${user.age}</td>
</c:otherwise>
</c:choose>
</tr>
</c:forEach>
</table>
</body>
</html>