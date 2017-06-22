<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <meta charset="utf-8" />
    <title>信息管理系统</title>
    <link rel="shortcut icon" href="images/Logo_40.png" type="image/x-icon">
    <!-- layui.css -->
    <link href="plugin/layui/css/layui.css" rel="stylesheet" />
    <!-- font-awesome.css -->
    <link href="plugin/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
    <!-- animate.css -->
    <link href="css/animate.min.css" rel="stylesheet" />
    <!-- 本页样式 -->
    <link href="css/main.css" rel="stylesheet" />
    
</head>
<body>
    <div class="layui-layout layui-layout-admin">
        <!--顶部-->
        <div class="layui-header">
            <div class="ht-console">
                <div class="ht-user">
                    <img src="images/Logo_40.png" />
                    <a class="ht-user-name">${authority }</a>
                </div>
            </div>
            <span class="sys-title" style="margin-left: -180px;">信息管理系统</span>
            <ul class="ht-nav">
                <li class="ht-nav-item">
                    <a href="javascript:;" id="individuation"><i class="fa fa-tasks fa-fw" style="padding-right:5px;"></i>个性化</a>
                </li>
                <li class="ht-nav-item">
                    <a href="logout.form" onclick="return confirm('您确定要退出系统吗？');"><i class="fa fa-power-off fa-fw"></i>注销</a>
                </li>
            </ul>
        </div>
        <!--侧边导航-->
        <div class="layui-side" style="width: 180px;">
            <div class="layui-side-scroll">
                <ul class="layui-nav layui-nav-tree" lay-filter="leftnav">
                    <li class="layui-nav-item layui-this">
                        <a href="javascript:;" data-url="center.form"><i class="fa fa-home"></i>首页</a>
                    </li>
                    <li class="layui-nav-item">
                        <a href="javascript:;"><i class="fa fa-sliders"></i>参数管理</a>
                        <dl class="layui-nav-child">
                            <dd><a href="javascript:;" data-url="prize.form" data-id="1">&nbsp;&nbsp;&nbsp;奖金管理</a></dd>
                            <dd><a href="javascript:;" data-url="subsidy.form" data-id="2">&nbsp;&nbsp;&nbsp;津贴管理</a></dd>
                            <dd><a href="javascript:;" data-url="dept.form" data-id="3">&nbsp;&nbsp;&nbsp;部门管理</a></dd>
                            <dd><a href="javascript:;" data-url="base_salary.form" data-id="4">&nbsp;&nbsp;&nbsp;级别管理</a></dd>
                            <dd><a href="javascript:;" data-url="shop.form" data-id="5">&nbsp;&nbsp;&nbsp;店铺管理</a></dd>
                        </dl>
                    </li>
                    <li class="layui-nav-item">
                        <a href="javascript:;"><i class="fa fa-user"></i>员工管理</a>
                        <dl class="layui-nav-child">
                            <dd><a href="javascript:;" data-url="user.form" data-id="6">&nbsp;&nbsp;&nbsp;信息管理</a></dd>
                            <dd><a href="javascript:;" data-url="userpower.form" data-id="7">&nbsp;&nbsp;&nbsp;权限管理</a></dd>
                            <dd><a href="javascript:;" data-url="subsidy.form" data-id="8">&nbsp;&nbsp;&nbsp;补贴记录</a></dd>
                            <dd><a href="javascript:;" data-url="winning.form" data-id="9">&nbsp;&nbsp;&nbsp;奖项记录</a></dd>
                        </dl>
                    </li>
                    <li class="layui-nav-item">
                        <a href="javascript:;"><i class="fa fa-check-square-o"></i>考勤管理</a>
                        <dl class="layui-nav-child">
                            <dd><a href="javascript:;" data-url="check.form" data-id="10">&nbsp;&nbsp;&nbsp;考勤记录</a></dd>
                        </dl>
                    </li>
                    <li class="layui-nav-item">
                        <a href="javascript:;"><i class="fa fa-usd"></i>工资管理</a>
                        <dl class="layui-nav-child">
                            <dd><a href="javascript:;" data-url="salary.form" data-id="11">&nbsp;&nbsp;&nbsp;工资查询</a></dd>
                        </dl>
                        <dl class="layui-nav-child">
                            <dd><a href="javascript:;" data-url="selectsalary.form" data-id="12">&nbsp;&nbsp;&nbsp;查询工资</a></dd>
                        </dl>
                       
                    </li>
                </ul>
            </div>
        </div>
        <!--收起导航-->
        <div class="layui-side-hide layui-bg-cyan">
            <i class="fa fa-long-arrow-left fa-fw"></i>收起导航
        </div>
        <!--主体内容-->
        <div class="layui-body">
            <div style="margin:0;position:absolute;top:4px;bottom:0px;width:100%;" class="layui-tab layui-tab-brief" lay-filter="tab" lay-allowclose="true">
                <ul class="layui-tab-title">
                    <li lay-id="0" class="layui-this">首页</li>
                </ul>
                <div class="layui-tab-content">
                    <div class="layui-tab-item layui-show">
                        <iframe src="center.form" class="info" name="info" style="width:100%;height:100%;border:none;"></iframe>
                    </div>
                </div>
            </div>
        </div>
        <!--个性化设置-->
        <div class="individuation animated flipOutY layui-hide" style="height:426px;">
            <ul>
                <li><i class="fa fa-cog" style="padding-right:5px"></i>个性化</li>
            </ul>
            <div class="explain">
                <small>从这里进行系统设置和主题预览</small>
            </div>
            <div class="setting-title">设置</div>
            <div class="setting-item layui-form">
                <span>侧边导航</span>
                <input type="checkbox" lay-skin="switch" lay-filter="sidenav" lay-text="ON|OFF" checked>
            </div>
            <div class="setting-title">主题</div>
            <div class="setting-item skin skin-default" data-skin="skin-default">
                <span>低调优雅</span>
            </div>
            <div class="setting-item skin skin-deepblue" data-skin="skin-deepblue">
                <span>蓝色梦幻</span>
            </div>
            <div class="setting-item skin skin-pink" data-skin="skin-pink">
                <span>姹紫嫣红</span>
            </div>
            <div class="setting-item skin skin-green" data-skin="skin-green">
                <span>一碧千里</span>
            </div>
        </div>
    </div>
    <!-- layui.js -->
    <script src="plugin/layui/layui.js"></script>
    <!-- layui规范化用法 -->
    <script type="text/javascript">
        layui.config({
            base: 'js/'
        }).use('main');
    </script>
</body>
</html>
