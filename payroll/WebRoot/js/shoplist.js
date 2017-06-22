layui.define(['laypage', 'layer', 'form', 'pagesize'], function (exports) {
    var $ = layui.jquery,
        layer = layui.layer,
        form = layui.form(),
        laypage = layui.laypage;
    var laypageId = 'pageNav';
    initilData(1, 8);
    //页数据初始化
    //currentIndex：当前也下标
    //pageSize：页容量（每页显示的条数）
    function initilData(currentIndex, pageSize) {
        var index = layer.load(1);
        var data = new Array();
        //模拟数据
        $.ajax({
    		type: "GET",	//提交方式
    		url: "see_shop.form",	//提交的路径
    		dataType: "json", //返回数据的类型
    		async: false, //设置同步请求
    		success: function(result){ //成功之后的回调函数
    				for(var i in result){//遍历json数组时，这么写i为索引，0,1
       				 data.push({ shopId: result[i].shopId, shopName: result[i].shopName, address: result[i].address});
    				}
    		}
    	});

        //模拟数据加载
        setTimeout(function () {
            layer.close(index);
            //计算总页数（一般由后台返回）
            pages = Math.ceil(data.length / pageSize);
            //模拟数据分页（实际上获取的数据已经经过分页）
            var skip = pageSize * (currentIndex - 1);
            var take = skip + Number(pageSize);
            data = data.slice(skip, take);
            var html = '';  //由于静态页面，所以只能作字符串拼接，实际使用一般是ajax请求服务器数据
            html += '<table style="" class="layui-table" lay-even>';
            html += '<colgroup><col><col><col></colgroup>';
            html += '<thead><tr><th>序号</th><th>店铺</th><th>地址</th><th colspan="2">操作</th></tr></thead>';
            html += '<tbody>';
            //遍历文章集合
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                html += "<tr>";
                html += "<td>" + (i+1) + "</td>";
                html += "<td>" + item.shopName + "</td>";
                html += "<td>" + item.address + "</td>";
                html += '<td><button class="layui-btn layui-btn-small layui-btn-normal" onclick="layui.shoplist.editData(\'' + item.shopName + '\')"><i class="layui-icon">&#xe642;</i></button></td>';
                html += '<td><button class="layui-btn layui-btn-small layui-btn-danger" onclick="layui.shoplist.deleteData(\'' + item.shopId + '\')"><i class="layui-icon">&#xe640;</i></button></td>';
                html += "</tr>";
            }
            html += '</tbody>';
            html += '</table>';
            html += '<div id="' + laypageId + '"></div>';

            $('#dataContent').html(html);

            form.render('checkbox');  //重新渲染CheckBox，编辑和添加的时候
            $('#dataConsole,#dataList').attr('style', 'display:block'); //显示FiledBox

            laypage({
                cont: laypageId,
                pages: pages,
                groups: 8,
                skip: true,
                curr: currentIndex,
                jump: function (obj, first) {
                    var currentIndex = obj.curr;
                    if (!first) {
                        initilData(currentIndex, pageSize);
                    }
                }
            });
            //该模块是我定义的拓展laypage，增加设置页容量功能
            //laypageId:laypage对象的id同laypage({})里面的cont属性
            //pagesize当前页容量，用于显示当前页容量
            //callback用于设置pagesize确定按钮点击时的回掉函数，返回新的页容量
            layui.pagesize(laypageId, pageSize).callback(function (newPageSize) {
                //这里不能传当前页，因为改变页容量后，当前页很可能没有数据
                initilData(1, newPageSize);
            });
        }, 500);
    }

    //添加数据
    $('#addShop').click(function () {
    	 var index = layer.load(1);
         setTimeout(function () {
             layer.close(index);
             var loginHtml = ''; //静态页面只能拼接，这里可以用iFrame或者Ajax请求分部视图。html文件夹下有login.html
             
             loginHtml += '<form class="layui-form" id="addprizeForm" method="POST" action="" style="margin:40px;margin-left:60px;">';
             loginHtml += '<div class="layui-form-item">';
             loginHtml += '<label class="layui-form-label">店铺名</label>';
             loginHtml += '<div class="layui-input-inline pm-login-input">';
             loginHtml += '<input type="text" name="shop_name" lay-verify="" placeholder="店铺名" autocomplete="off" class="layui-input">';
             loginHtml += '</div>';
             loginHtml += '</div>';
             loginHtml += '<div class="layui-form-item">';
             loginHtml += '<label class="layui-form-label">地址</label>';
             loginHtml += '<div class="layui-input-inline pm-login-input">';
             loginHtml += '<input type="text" name="address" lay-verify="" placeholder="地址" autocomplete="off" class="layui-input">';
             loginHtml += '</div>';
             loginHtml += '</div>';
             loginHtml += '<div class="layui-form-item" style="margin-top:25px;margin-bottom:0;">';
             loginHtml += '<div class="layui-input-block">';
             loginHtml += ' <button id="addshop" class="layui-btn" style="width:230px;margin-left:-40px;" lay-submit="" lay-filter="add_shop">立即添加</button>';
             loginHtml += ' </div>';
             loginHtml += ' </div>';
             loginHtml += '</form>';

             layer.open({
                 id: 'layer-loginshop',
                 type: 1,
                 title: "添加店铺",
                 shade: 0.4,
                 shadeClose: true,
                 area: ['480px', '280px'],
                 closeBtn: 0,
                 anim: 1,
                 skin: 'pm-layer-login',
                 content: loginHtml
             });
             layui.form().render('checkbox');
             
         }, 500);
    });
    
    //监听登陆提交
    form.on('submit(add_shop)', function (data) {
    	var index = layer.load(1);
            layer.close(index);
             $.ajax({
         		type: "POST",	//提交方式
         		url: "add_shop.form",	//提交的路径
         		data: {shop_name:data.field.shop_name, address:data.field.address},
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
        			 layer.msg('已有店铺,勿重复添加！', { icon: 5 });layer.closeAll('page');
       		} 
         	});
    });
    
  //监听修改提交
    form.on('submit(updatashop)', function (data) {
             $.ajax({
         		type: "POST",	//提交方式
         		url: "updata_shop.form",	//提交的路径
         		data: {shopName:data.field.shopName, address:data.field.address},
         		dataType: "text", //返回数据的类型
         		async: false, //设置同步请求
         		success: function(result){ //成功之后的回调函数
         			if (result == "1") {
        				 layer.msg('修改成功！', { icon: 6 });
        	             layer.closeAll('page');
        	             setTimeout(function () {
            	             window.location.href=window.location.href;
            	             }, 300);
 					}else {
 						 layer.msg('权限不足！', { icon: 5 });
 					}
         		}
         	});
    });
    
    //输出接口，主要是两个函数，一个删除一个编辑
    var shoplist = {
        deleteData: function (shopId) {
            layer.confirm('确定删除？', {
                btn: ['确定', '取消'] //按钮
            }, function () {
                $.ajax({
             		type: "GET",	//提交方式
             		url: "delete_shop.form",	//提交的路径
             		data: {shop_id:shopId},
             		dataType: "text", //返回数据的类型
             		async: false, //设置同步请求
             		success: function(result){ //成功之后的回调函数
             			if (result == "1") {
            				 layer.msg('删除成功！', { icon: 6 });
            	             layer.closeAll('page');
            	             setTimeout(function () {
            	             window.location.href=window.location.href;
             				 }, 300);
     					}else {
     						 layer.msg('权限不足！', { icon: 5 });
     					}
             		}
             	});
            }, function () {
            	 layer.msg('取消删除！', { icon: 5 });
            });
        },
        editData: function (shopName) {
            var loginHtml = ''; //静态页面只能拼接，这里可以用iFrame或者Ajax请求分部视图。html文件夹下有login.html
              
            loginHtml += '<form class="layui-form" id="updataForm" method="POST" action="" style="margin:40px;margin-left:60px;">';
            loginHtml += '<div class="layui-form-item">';
            loginHtml += '<label class="layui-form-label">店铺名</label>';
            loginHtml += '<div class="layui-input-inline pm-login-input">';
            loginHtml += '<input type="text" name="shopName" readonly="readonly" value='+ shopName +' lay-verify="" placeholder="" autocomplete="off" class="layui-input">';
            loginHtml += '</div>';
            loginHtml += '</div>';
            loginHtml += '<div class="layui-form-item">';
            loginHtml += '<label class="layui-form-label">地址</label>';
            loginHtml += '<div class="layui-input-inline pm-login-input">';
            loginHtml += '<input type="text" name="address" lay-verify="" placeholder="地址" autocomplete="off" class="layui-input">';
            loginHtml += '</div>';
            loginHtml += '</div>';
            loginHtml += '<div class="layui-form-item" style="margin-top:25px;margin-bottom:0;">';
            loginHtml += '<div class="layui-input-block">';
            loginHtml += ' <button id="updataShop" class="layui-btn" style="width:230px;margin-left:-40px;" lay-submit="" lay-filter="updatashop">立即修改</button>';
            loginHtml += ' </div>';
            loginHtml += ' </div>';
            loginHtml += '</form>';

            layer.open({
                id: 'layer-loginshopedit',
                type: 1,
                title: "修改权限",
                shade: 0.4,
                shadeClose: true,
                area: ['480px', '280px'],
                closeBtn: 0,
                anim: 1,
                skin: 'pm-layer-login',
                content: loginHtml
            });
            layui.form().render('checkbox');
        }
    };
    
    //自定义验证
    form.verify({
    	auth: [/[\u4e00-\u9fa5_a-zA-Z0-9_]{0,20}/, '不能为空且不能有特殊字符'],
    });
    
    exports('shoplist', shoplist);
});