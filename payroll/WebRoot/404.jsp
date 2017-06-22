<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- layui.css -->
    <link href="plugin/layui/css/layui.css" rel="stylesheet" />
    <!-- 本页样式 -->
    <link href="css/index.css" rel="stylesheet" />
    <title>404 页面</title>
    <style type="text/css">
    *{margin:0;padding:0;}
    html{height: 100%}
    body {
    font-family: "open sans","Helvetica Neue",Helvetica,Arial,sans-serif;font-size: 13px;color: #676a6c;overflow-x: hidden;height: 100%;background: #eee;}
    .page-404{max-width: 400px;z-index: 100;margin: 0 auto;padding-top: 40px;text-align: center;}
    .page-404 h1{font-size: 170px;margin:0; font-weight: 100;}
    .page-404 h3{font-size: 16px;margin-top: 5px;margin-bottom: 10px;font-weight: 600;}
    .page-404 .error-desc{color: #676a6c;line-height: 32px;font-size: 0;}
    .page-404 .error-desc span{font-size: 13px;}
    .page-404 .error-desc .form-control{height: 38px;line-height: 38px;padding-left: 10px;border: 1px solid #e6e6e6;border-radius: 2px;margin-right: 5px;width: 200px;outline: none;}
    .page-404 .error-desc .btn-primary{height: 38px;line-height: 38px;padding: 0 18px;background-color: #009688;color: #fff;white-space: nowrap;text-align: center;
    border: none;border-radius: 2px;cursor: pointer;opacity: .9;}
    </style>
</head>
<body class="gray-bg">
    <div class="page-404">
        <h1>404</h1>
        <h3 class="font-bold">权限不足！</h3>
        <div class="error-desc">
            <span>或登录时间过长，密令已过期，请尝试重新登录！</span>
            <div class="my-btn-box">
        <a class="layui-btn layui-btn-small" href="index">返回首页</a>
        <a class="layui-btn layui-btn-danger layui-btn-small " href="javascript:history.back()">返回上页</a>
    </div>
        </div>
    </div>
</body>
</html>

