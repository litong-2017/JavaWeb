<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <meta charset="utf-8" />
    <title>信息管理系统</title>
    <link rel="shortcut icon" href="images/Logo_40.png" type="image/x-icon">
    <!-- layui.css -->
    <link href="plugin/layui/css/layui.css" rel="stylesheet" />
    <!-- 本页样式 -->
    <link href="css/index.css" rel="stylesheet" />
</head>
<body>
    <div class="mask"></div>
    <div class="main">
        <h1><span style="font-size: 84px;">i</span><span style="font-size:60px;">n</span><span style="font-size:48px;">f</span><span style="font-size:60px;">o</span></h1>
        <p id="time"></p>
        <div class="enter">
            Please&nbsp;&nbsp;Click&nbsp;&nbsp;Enter
        </div>
    </div>
    <!-- layui.js -->
    <script src="plugin/layui/layui.js"></script>
    <!-- layui规范化用法 -->
    <script type="text/javascript">
        layui.config({
            base: 'js/'
        }).use('index');
    </script>
</body>
</html>