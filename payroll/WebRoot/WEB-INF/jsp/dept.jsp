<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <meta charset="utf-8" />
    <title>部门列表页面</title>
    <!-- layui.css -->
    <link href="plugin/layui/css/layui.css" rel="stylesheet" />
    <style>
        .layui-btn-small {
            padding: 0 15px;
        }

        .layui-form-checkbox {
            margin: 0;
        }

        tr td:not(:nth-child(0)),
        tr th:not(:nth-child(0)) {
            text-align: center;
        }

        #dataConsole {
            text-align: center;
        }
        /*分页页容量样式*/
        /*可选*/
        .layui-laypage {
            display: block;
        }

            /*可选*/
            .layui-laypage > * {
                float: left;
            }
            /*可选*/
            .layui-laypage .laypage-extend-pagesize {
                float: right;
            }
            /*可选*/
            .layui-laypage:after {
                content: ".";
                display: block;
                height: 0;
                clear: both;
                visibility: hidden;
            }

            /*必须*/
            .layui-laypage .laypage-extend-pagesize {
                height: 30px;
                line-height: 30px;
                margin: 0px;
                border: none;
                font-weight: 400;
            }
        /*分页页容量样式END*/
    </style>
</head>
<body style="margin-right: 2px;">
    <a id="addDept" style="margin-left:1070px;" class="layui-btn layui-btn-normal">新增</a>
    <fieldset id="dataList" class="layui-elem-field layui-field-title sys-list-field" style="display:none;">
        <div class="layui-field-box">
            <div id="dataContent" class="">
                <!--内容区域 ajax获取-->
                <table style="" class="layui-table" lay-even="">
                    <colgroup>
						<col>
                        <col>
						<col>
						<col>
                    </colgroup>
                    <thead>
                        <tr>
                            <th>序号</th>
                            <th>标题</th>
                            <th>作者</th>
                            <th>时间</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2017-03-22</td>
                            <td>板源码分享</td>
                            <td>tely</td>
                            <td>Web前端</td>                               
                        </tr>
                    </tbody>
                </table>
                <div id="pageNav"></div>
            </div>
        </div>
    </fieldset>
    <!-- layui.js -->
    <script src="plugin/layui/layui.js"></script>
    <!-- layui规范化用法 -->
    <script type="text/javascript">
        layui.config({
            base: 'js/'
        }).use('deptlist');
    </script>
</body>
</html>
