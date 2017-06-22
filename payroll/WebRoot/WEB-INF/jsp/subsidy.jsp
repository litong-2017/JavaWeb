<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <meta charset="utf-8" />
    <title>数据列表页面</title>
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
	<div class="layui-field-box" >
		<div id="articleIndexTop">
			<form class="layui-form layui-form-pane" action="">
				<div class="layui-form-item" style="margin:0;margin-top:15px;">
					<div class="layui-inline">
						<label class="layui-form-label" style="width: 220px;margin-left: 300px;">关键词(姓名)</label>
						<div class="layui-input-inline">
							<input type="text" name="keywords" lay-verify="account"
								autocomplete="off" class="layui-input">
						</div>
						<div class="layui-input-inline" style="width:auto">
							<button id="formSearch" class="layui-btn" lay-submit
								lay-filter="formSearch">搜索</button>
						</div>
					</div>
					<div class="layui-inline">
						<div class="layui-input-inline" style="width:auto">
							<a id="addSubsidy" class="layui-btn layui-btn-normal">新增</a>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>

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
                        <col>
                    </colgroup>
                    <thead>
                        <tr>
                        	<th>序号</th>
                            <th>姓名</th>
                            <th>补贴项（金额）</th>
                            <th>补贴时间</th>
                            <th colspan="2">操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        	<td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button class="layui-btn layui-btn-small layui-btn-normal"><i class="layui-icon">&#xe642;</i></button>
                            </td>
                            <td>
                                <button class="layui-btn layui-btn-small layui-btn-danger"><i class="layui-icon">&#xe640;</i></button>
                            </td>
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
        }).use('subsidylist');
    </script>
</body>
</html>