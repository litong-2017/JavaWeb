layui.define(['layer', 'form', 'laydate'], function (exports) {
    var $ = layui.jquery,
        layer = layui.layer,
        form = layui.form(),
        laydate = layui.laydate;

    var data = new Array();
    var data1 = new Array();
    var data2 = new Array();
    var data3 = new Array();
    var data4 = new Array();
    var id_updata = $("#id_updata").val();
    initilData();
    
    //自定义验证
    form.verify({
    	number: [/[\u4e00-\u9fa5_a-zA-Z0-9_]{4,20}/, '大于4位、不能为空且不能有特殊字符'],
    	name: [/[\u4e00-\u9fa5_a-zA-Z0-9_]{4,20}/, '大于4位、不能为空且不能有特殊字符'],
    });
    
    $('#back').click(function () {
    	window.location.href="user.form";
    });
    
    function initilData() {
        var index = layer.load(1);
        
        //模拟数据
        $.ajax({
    		type: "GET",	//提交方式
    		url: "see_user_id.form?id=" + id_updata,	//提交的路径
    		dataType: "json", //返回数据的类型
    		async: false, //设置同步请求
    		success: function(result){ //成功之后的回调函数
    			for(var i in result){//遍历json数组时，这么写i为索引，0,1
    				 data4.push({ id:result[i].id, number:result[i].number, name:result[i].name, level:result[i].level, sex:result[i].sex, authority:result[i].authority, status:result[i].status, deptName:result[i].deptName, shopName:result[i].shopName, phone:result[i].phone, email:result[i].email});
    			}
    		}
    	});
        
        //模拟数据
        $.ajax({
    		type: "GET",	//提交方式
    		url: "see_dept.form",	//提交的路径
    		dataType: "json", //返回数据的类型
    		async: false, //设置同步请求
    		success: function(result){ //成功之后的回调函数
    			for(var i in result){//遍历json数组时，这么写i为索引，0,1
    				 data.push({deptName: result[i].deptName});
                }
    		}
    	});
        
        //模拟数据
        $.ajax({
    		type: "GET",	//提交方式
    		url: "see_shop.form",	//提交的路径
    		dataType: "json", //返回数据的类型
    		async: false, //设置同步请求
    		success: function(result){ //成功之后的回调函数
    				for(var i in result){//遍历json数组时，这么写i为索引，0,1
       				 data1.push({shopName: result[i].shopName});
    				}
    		}
    	});
        
        //模拟数据
        $.ajax({
    		type: "GET",	//提交方式
    		url: "see_salary.form",	//提交的路径
    		dataType: "json", //返回数据的类型
    		async: false, //设置同步请求
    		success: function(result){ //成功之后的回调函数
    			for(var i in result){//遍历json数组时，这么写i为索引，0,1
    				 data2.push({level: result[i].level});
                }
    		}
    	});
        
        //模拟数据
        $.ajax({
    		type: "GET",	//提交方式
    		url: "see_auth.form",	//提交的路径
    		dataType: "json", //返回数据的类型
    		async: false, //设置同步请求
    		success: function(result){ //成功之后的回调函数
    			for(var i in result){//遍历json数组时，这么写i为索引，0,1
    				 data3.push({authority: result[i].authority});
                }
    		}
    	});

        //模拟数据加载
        setTimeout(function () {
            layer.close(index);
            var html = '';  //由于静态页面，所以只能作字符串拼接，实际使用一般是ajax请求服务器数据
            
            for (var i = 0; i < data4.length; i++) {
                var item4 = data4[i];
            
            html += '<div class="layui-form-item"><label class="layui-form-label">员工编号</label><div class="layui-input-block">';
            html += '<input type="text" name="number" required lay-verify="number" placeholder="'+item4.number+'" autocomplete="off" class="layui-input">';
         	html += '</div></div>';

            html += '<div class="layui-form-item"><label class="layui-form-label">姓名</label><div class="layui-input-block">';
           	html += '<input type="text" name="name" required lay-verify="name" placeholder="'+item4.name+'" autocomplete="off" class="layui-input">';
            html += '</div></div>';
    		
            html += '<div class="layui-form-item"><label class="layui-form-label">性别</label><div class="layui-input-block">';
            if (item4.sex == "男") {
            	html += '<input type="radio" name="sex" value="男" title="男" checked>';
                html += '<input type="radio" name="sex" value="女" title="女">';
			}else {
				html += '<input type="radio" name="sex" value="男" title="男">';
	            html += '<input type="radio" name="sex" value="女" title="女" checked>';
			};
            html += '</div></div>';

            html += '<div class="layui-form-item"><label class="layui-form-label">在职-离职</label><div class="layui-input-block">';
            if (item4.status == "在职") {
            	html += '<input type="checkbox" checked="" name="status" lay-skin="switch">';
			}else {
				html += '<input type="checkbox" name="status" lay-skin="switch">';
			};
            html += '</div></div>';
            
            
            html += '<div class="layui-form-item"><label class="layui-form-label">员工等级</label><div class="layui-input-block"><select name="level" lay-verify="required">';
            html += '<option value="">员工等级</option>';
            html += '<option selected="selected" value="'+ item4.level +'">'+ item4.level +'</option>';
	       	 //遍历文章集合
	            for (var i = 0; i < data2.length; i++) {
	                var item2 = data2[i];
	                html += "<option value='" + item2.level + "'>" + item2.level + "</option>";
	            }
    		html += '</select></div></div>';
    		
    		html += '<div class="layui-form-item"><label class="layui-form-label">角色权限</label><div class="layui-input-block" id="shop_sel"><select name="authority" lay-verify="required">';
    		html += '<option value="">角色权限</option>';
    		html += '<option selected="selected" value="'+ item4.authority +'">'+ item4.authority +'</option>';
	    		 //遍历文章集合
	            for (var i = 0; i < data3.length; i++) {
	                var item3 = data3[i];
	                html += "<option value='" + item3.authority + "'>" + item3.authority + "</option>";
	            }
    		html += '</select></div></div>';
    		
    		html += '<div class="layui-form-item"><label class="layui-form-label">所在部门</label><div class="layui-input-block" id="shop_sel"><select name="deptName" lay-verify="required">';
    		html += '<option value="">所在部门</option>';
    		html += '<option selected="selected" value="'+ item4.deptName +'">'+ item4.deptName +'</option>';
	    		 //遍历文章集合
	            for (var i = 0; i < data.length; i++) {
	                var item = data[i];
	                html += "<option value='" + item.deptName + "'>" + item.deptName + "</option>";
	            }
    		html += '</select></div></div>';
    		
    		html += '<div class="layui-form-item"><label class="layui-form-label">所在店铺</label><div class="layui-input-block" id="shop_sel"><select name="shopName" lay-verify="required">';
    		html += '<option value="">所在店铺</option>';
    		html += '<option selected="selected" value="'+ item4.shopName +'">'+ item4.shopName +'</option>';
	    		  //遍历文章集合
	            for (var i = 0; i < data1.length; i++) {
	                var item1 = data1[i];
	                html += "<option value='" + item1.shopName + "'>" + item1.shopName + "</option>";
	            }
    		html += '</select></div></div>';
    		
    		html += '<div class="layui-form-item"><label class="layui-form-label">验证手机</label><div class="layui-input-block">';
    		html += '<input type="tel" name="phone" lay-verify="phone" placeholder="'+item4.phone+'" autocomplete="off" class="layui-input" required>';
    		html += '</div></div>';

    		html += '<div class="layui-form-item"><label class="layui-form-label">验证邮箱</label><div class="layui-input-block">';
    		html += '<input type="text" name="email" placeholder="'+item4.email+'" lay-verify="email" autocomplete="off" class="layui-input" >';
    		html += '</div></div>';

            }
    		
    		$('#dataContent').html(html);
    		form.render(); //更新全部
        }, 100);
    }
    
    //监听提交
      form.on('submit(formDemo)', function(data){
    	  var index = layer.load(1);
    	  if (data.field.status == "on") {
    		 data.field.status = "在职";
		}else if (data.field.status == "off") {
			data.field.status = "离职";
		}
     	 setTimeout(function () {
             //模拟登陆
             layer.close(index);
              $.ajax({
          		type: "POST",	//提交方式
          		url: "updatauser_all.form",	//提交的路径
          		data: {id: id_updata, number:data.field.number, name:data.field.name, sex:data.field.sex
          			, status:data.field.status, level:data.field.level, authority:data.field.authority
          			, deptName:data.field.deptName, shopName:data.field.shopName, phone:data.field.phone
          			, email:data.field.email},
          		dataType: "text", //返回数据的类型
          		async: false, //设置同步请求
          		success: function(result){ //成功之后的回调函数
          			if (result == "1") {
         				layer.msg('修改成功！请点击返回按钮查看', { icon: 6 });
  					}else {
  						layer.msg('权限不足！', { icon: 5 });
  					}
          		},
          		error : function() {
          			 layer.msg('已有员工编号,勿重复添加！', { icon: 5 });layer.closeAll('page');
         		}    
          	});
     	  }, 200);
     	    return false;
      });

    exports('formlist_add', formlist_add);
});