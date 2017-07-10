<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  </head>
  <body>
	<s:form action="upload" enctype="multipart/form-data">
		<s:textfield name="title" label="文件标题"></s:textfield>
		<s:file name="upload" label="选择文件"></s:file>
		<s:submit value="上传"></s:submit>
	</s:form> 
  </body>
</html>
