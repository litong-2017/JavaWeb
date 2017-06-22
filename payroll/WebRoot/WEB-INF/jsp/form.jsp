<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>表单</title>
     <!-- layui.css -->
    <link href="plugin/layui/css/layui.css" rel="stylesheet" />
    <link rel="stylesheet" href="plugin/layui/css/global.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body class="body">
<center>
<fieldset class="layui-elem-field layui-field-title" style="margin-top: 20px;">
    <legend>员工信息添加</legend>
</fieldset>
</center>
<form class="layui-form" action="">
		<div class="layui-form-item">
			<label class="layui-form-label">员工编号</label>
			<div class="layui-input-block">
				<input type="text" name="number" required lay-verify="number"
					placeholder="请输入编号" autocomplete="off" class="layui-input">
			</div>
		</div>

		<div class="layui-form-item">
			<label class="layui-form-label">姓名</label>
			<div class="layui-input-block">
				<input type="text" name="name" required lay-verify="name"
					placeholder="请输入姓名" autocomplete="off" class="layui-input">
			</div>
		</div>
		
		<div class="layui-form-item">
			<label class="layui-form-label">性别</label>
			<div class="layui-input-block">
				<input type="radio" name="sex" value="男" title="男" checked>
				<input type="radio" name="sex" value="女" title="女">
			</div>
		</div>

		<div class="layui-form-item">
			<label class="layui-form-label">在职-离职</label>
			<div class="layui-input-block">
				<input type="checkbox" checked="" name="status" lay-skin="switch">
			</div>
		</div>
		
		<div id="dataContent" class="">
		<!--内容区域 ajax获取-->
		<div class="layui-form-item">
			<label class="layui-form-label">员工等级</label>
			<div class="layui-input-block" id="level_sel">
				<select name="leave" lay-verify="" required>
					<option value=""></option>
					<option value="0">北京</option>
					<option value="1">上海</option>
					<option value="2">广州</option>
				</select>
			</div>
		</div>

		<div class="layui-form-item">
			<label class="layui-form-label">角色权限</label>
			<div class="layui-input-block" id="shop_sel">
				<select name="auth" lay-verify="" required>
					<option value=""></option>
					<option value="0">北京</option>
					<option value="1">上海</option>
					<option value="2">广州</option>
				</select>
			</div>
		</div>

		<div class="layui-form-item">
			<label class="layui-form-label">所在部门</label>
			<div class="layui-input-block" id="shop_sel">
				<select name="dept_name" lay-verify="" required>
					<option value=""></option>
					<option value="0">北京</option>
					<option value="1">上海</option>
					<option value="2">广州</option>
				</select>
			</div>
		</div>
		
		<div class="layui-form-item">
			<label class="layui-form-label">所在店铺</label>
			<div class="layui-input-block" id="shop_sel">
				<select name="shop_name" lay-verify="" required>
					<option value=""></option>
					<option value="0">北京</option>
					<option value="1">上海</option>
					<option value="2">广州</option>
				</select>
			</div>
	</div>
	</div>
			<div class="layui-form-item">
				<label class="layui-form-label">验证手机</label>
				<div class="layui-input-block">
					<input type="tel" name="phone" lay-verify="phone"
						autocomplete="off" class="layui-input" required>
				</div>
			</div>

			<div class="layui-form-item">
				<label class="layui-form-label">验证邮箱</label>
				<div class="layui-input-block">
					<input type="text" name="email" lay-verify="email"
						autocomplete="off" class="layui-input" >
				</div>
			</div>

			<div class="layui-form-item">
			<div class="layui-input-block">
				<button class="layui-btn" lay-submit lay-filter="formDemo">立即提交</button>
				<button type="reset" class="layui-btn layui-btn-primary">重置</button>
				<a id="back" class="layui-btn layui-btn-normal">返回</a>
			</div>
		</div>
		
	</form>
    <!-- layui.js -->
    <script src="plugin/layui/layui.js"></script>
    <!-- layui规范化用法 -->
    <script type="text/javascript">
        layui.config({
            base: 'js/'
        }).use('formlist');
    </script>
</body>
</html>
