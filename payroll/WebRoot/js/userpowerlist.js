layui.define(['laypage', 'layer', 'form', 'pagesize'], function (exports) {
    var $ = layui.jquery,
        layer = layui.layer,
        form = layui.form(),
        laypage = layui.laypage;
    var laypageId = 'pageNav';
    
    //自定义验证
    form.verify({
    	auth: function (value) {
    		 if (value == "") {
                 return "权限不能为空！"
             } else{
            	 if (value != "管理员" && value != "店长" && value != "员工") {
                     return "权限不能为"+ value +"！"
                 }
             }
        },
    });
    
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
    		url: "see_user_power.form",	//提交的路径
    		dataType: "json", //返回数据的类型
    		async: false, //设置同步请求
    		success: function(result){ //成功之后的回调函数
    			for(var i in result){//遍历json数组时，这么写i为索引，0,1
    				 data.push({number:result[i].number, name:result[i].name,authority:result[i].authority});
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
            html += '<colgroup><col ><col><col ><col ></colgroup>';
            html += '<thead><tr><th>用户编号</th><th>用户姓名</th><th>权限</th><th colspan="1">操作</th></tr></thead>';
            html += '<tbody>';
            //遍历文章集合
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                html += "<tr>";
                html += "<td>" + item.number + "</td>";
                html += "<td>" + item.name + "</td>";
                html += "<td>" + item.authority + "</td>";
                html += '<td><button class="layui-btn layui-btn-small layui-btn-normal" onclick="layui.userpowerlist.editData(\'' + item.number + '\')"><i class="layui-icon">&#xe642;</i></button></td>';
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

    //监听登陆提交
    form.on('submit(login2)', function (data) {

         setTimeout(function () {
             //模拟登陆

             $.ajax({
         		type: "POST",	//提交方式
         		url: "updata_auth.form",	//提交的路径
         		data: {number:data.field.number, authority:data.field.authority},
         		dataType: "text", //返回数据的类型
         		async: false, //设置同步请求
         		success: function(result){ //成功之后的回调函数
         			if (result == "1") {
        				 layer.msg('修改成功！', { icon: 6 });
        				  layer.closeAll('page');
        	             setTimeout(function () {
            	             window.location.href=window.location.href;
            	         }, 500);
 					}else {
 						 layer.msg('权限不足！', { icon: 5 });
 					}
         		}
         	});
         }, 400);
         return false;
    });
    
    //输出接口，主要是两个函数，一个删除一个编辑
    var userpowerlist = {
        editData: function (number) {
            var loginHtml = ''; //静态页面只能拼接，这里可以用iFrame或者Ajax请求分部视图。html文件夹下有login.html
              
            loginHtml += '<form class="layui-form" id="updataForm" method="POST" action="" style="margin:40px;margin-left:60px;">';
            loginHtml += '<div class="layui-form-item">';
            loginHtml += '<label class="layui-form-label">员工编号</label>';
            loginHtml += '<div class="layui-input-inline pm-login-input">';
            loginHtml += '<input type="text" name="number" readonly="readonly" value='+ number +' lay-verify="" placeholder="" autocomplete="off" class="layui-input">';
            loginHtml += '</div>';
            loginHtml += '</div>';
            loginHtml += '<div class="layui-form-item">';
            loginHtml += '<label class="layui-form-label">新权限</label>';
            loginHtml += '<div class="layui-input-inline pm-login-input">';
            loginHtml += '<input type="text" name="authority" lay-verify="auth" placeholder="管理员、店长、员工" autocomplete="off" class="layui-input">';
            loginHtml += '</div>';
            loginHtml += '</div>';
            loginHtml += '<div class="layui-form-item" style="margin-top:25px;margin-bottom:0;">';
            loginHtml += '<div class="layui-input-block">';
            loginHtml += ' <button id="updataAuth" class="layui-btn" style="width:230px;margin-left:-40px;" lay-submit="" lay-filter="login2">立即修改</button>';
            loginHtml += ' </div>';
            loginHtml += ' </div>';
            loginHtml += '</form>';

            layer.open({
                id: 'layer-login',
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

    exports('userpowerlist', userpowerlist);
});