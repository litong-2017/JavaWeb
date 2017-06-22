<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
    <body>
        <h1>HTTP Status 403 - Access is denied</h1>

        <c:choose>
            <c:when test="${empty name}">
                <h2>You do not have permission to access this page!</h2>
            </c:when>
            <c:otherwise>
                <h2>Username : ${name} <br/>You do not have permission to access this page!</h2>
                </c:otherwise>
            </c:choose>

    </body>
</html>
