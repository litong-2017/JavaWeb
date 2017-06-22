layui.define(['layer', 'form', 'laydate'], function (exports) {
    var $ = layui.jquery,
        layer = layui.layer,
        form = layui.form(),
        laydate = layui.laydate;

    var data = new Array();
    var data1 = new Array();
    var data2 = new Array();
    var data3 = new Array();
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

            html += '<div class="layui-form-item"><label class="layui-form-label">员工等级</label><div class="layui-input-block"><select name="level" lay-verify="required">';
            html += '<option value="">员工等级</option>';
	       	 //遍历文章集合
	            for (var i = 0; i < data2.length; i++) {
	                var item2 = data2[i];
	                html += "<option value='" + item2.level + "'>" + item2.level + "</option>";
	            }
    		html += '</select></div></div>';
    		
    		html += '<div class="layui-form-item"><label class="layui-form-label">角色权限</label><div class="layui-input-block" id="shop_sel"><select name="authority" lay-verify="required">';
    		html += '<option value="">角色权限</option>';
	    		 //遍历文章集合
	            for (var i = 0; i < data3.length; i++) {
	                var item3 = data3[i];
	                html += "<option value='" + item3.authority + "'>" + item3.authority + "</option>";
	            }
    		html += '</select></div></div>';
    		
    		html += '<div class="layui-form-item"><label class="layui-form-label">所在部门</label><div class="layui-input-block" id="shop_sel"><select name="deptName" lay-verify="required">';
    		html += '<option value="">所在部门</option>';
	    		 //遍历文章集合
	            for (var i = 0; i < data.length; i++) {
	                var item = data[i];
	                html += "<option value='" + item.deptName + "'>" + item.deptName + "</option>";
	            }
    		html += '</select></div></div>';
    		
    		html += '<div class="layui-form-item"><label class="layui-form-label">所在店铺</label><div class="layui-input-block" id="shop_sel"><select name="shopName" lay-verify="required">';
    		html += '<option value="">所在店铺</option>';
	    		  //遍历文章集合
	            for (var i = 0; i < data1.length; i++) {
	                var item1 = data1[i];
	                html += "<option value='" + item1.shopName + "'>" + item1.shopName + "</option>";
	            }
    		html += '</select></div></div>';
    		
    		$('#dataContent').html(html);
    		form.render(); //更新全部
        }, 500);
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
          		url: "add_user.form",	//提交的路径
          		data: {number:data.field.number, name:data.field.name, sex:data.field.sex
          			, status:data.field.status, level:data.field.level, authority:data.field.authority
          			, deptName:data.field.deptName, shopName:data.field.shopName, phone:data.field.phone
          			, email:data.field.email},
          		dataType: "text", //返回数据的类型
          		async: false, //设置同步请求
          		success: function(result){ //成功之后的回调函数
          			if (result == "1") {
          				 layer.msg('添加成功！', { icon: 6 });
        	             layer.closeAll('page');
        	             setTimeout(function () {
        	             window.location.href=window.location.href;
        	             }, 500);
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

    exports('formlist', formlist);
});