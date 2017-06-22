layui.define(['laypage', 'layer', 'form', 'pagesize'], function (exports) {
    var $ = layui.jquery,
        layer = layui.layer,
        form = layui.form(),
        laypage = layui.laypage;
    var laypageId = 'pageNav';
    var data1 = new Array();
    var data2 = new Array();
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
    		url: "see_call_winning.form",	//提交的路径
    		dataType: "json", //返回数据的类型
    		async: false, //设置同步请求
    		success: function(result){ //成功之后的回调函数
    			for(var i in result){//遍历json数组时，这么写i为索引，0,1
    				 data.push({ winning_id: result[i].winningId, winningnumber: result[i].number, winningprizeType: result[i].prizeType, prizes:result[i].prize.prizes, prizetime:result[i].prize.prizeTime,name:result[i].user.name });
    			}
    		}
    	});
        
        //模拟数据
        $.ajax({
    		type: "GET",	//提交方式
    		url: "see_user.form",	//提交的路径
    		dataType: "json", //返回数据的类型
    		async: false, //设置同步请求
    		success: function(result){ //成功之后的回调函数
    			for(var i in result){//遍历json数组时，这么写i为索引，0,1
    				 data1.push({number:result[i].number, name:result[i].name});
                }
    		}
    	});
        
        //模拟数据
        $.ajax({
    		type: "GET",	//提交方式
    		url: "see_price.form",	//提交的路径
    		dataType: "json", //返回数据的类型
    		async: false, //设置同步请求
    		success: function(result){ //成功之后的回调函数
    				for(var i in result){//遍历json数组时，这么写i为索引，0,1
       				 data2.push({prizeType: result[i].prizeType});
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
            html += '<colgroup><col ><col><col ><col ><col ><col ><col></colgroup>';
            html += '<thead><tr><th>序号</th><th>编号</th><th>姓名</th><th>奖金类型</th><th>奖金金额</th><th>奖金发布时间</th><th colspan="2">操作</th></tr></thead>';
            html += '<tbody>';
            //遍历文章集合
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                html += "<tr>";
                html += "<td>" + (i+1) + "</td>";
                html += "<td>" + item.winningnumber + "</td>";
                html += "<td>" + item.name + "</td>";
                html += "<td>" + item.winningprizeType + "</td>";
                html += "<td>" + item.prizes + "</td>";
                html += "<td>" + item.prizetime + "</td>";
                html += '<td><button class="layui-btn layui-btn-small layui-btn-normal" onclick="layui.winninglist.editData(\'' + item.winning_id + '\')"><i class="layui-icon">&#xe642;</i></button></td>';
                html += '<td><button class="layui-btn layui-btn-small layui-btn-danger" onclick="layui.winninglist.deleteData(\'' + item.winning_id + '\')"><i class="layui-icon">&#xe640;</i></button></td>';
                html += "</tr>";
            }
            html += '</tbody>';
            html += '</table>';
            html += '<div id="' + laypageId + '"></div>';

            $('#dataContent').html(html);

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
    $('#addWinning').click(function () {
    	var index = layer.load(1);
        setTimeout(function () {
            layer.close(index);
            var loginHtml = ''; //静态页面只能拼接，这里可以用iFrame或者Ajax请求分部视图。html文件夹下有login.html
            
            loginHtml += '<form class="layui-form" id="addwinningForm" action="" style="margin:30px;margin-left:-20px">';
            
            loginHtml += '<div class="layui-form-item"><label class="layui-form-label">员工姓名</label><div class="layui-input-inline"><select name="number" required lay-verify="required">';
            loginHtml += '<option value="">员工姓名</option>';
	       	 //遍历文章集合
	            for (var i = 0; i < data1.length; i++) {
	                var item1 = data1[i];
	                loginHtml += "<option value='" + item1.number + "'>" + item1.name + "</option>";
	            }
	            loginHtml += '</select></div></div>';
    		
	            loginHtml += '<div class="layui-form-item"><label class="layui-form-label">奖金类型</label><div class="layui-input-inline" id="shop_sel"><select name="prizeType" required lay-verify="required">';
	            loginHtml += '<option value="">奖金类型</option>';
	    		 //遍历文章集合
	            for (var i = 0; i < data2.length; i++) {
	                var item2 = data2[i];
	                loginHtml += "<option value='" + item2.prizeType + "'>" + item2.prizeType + "</option>";
	            }
	            loginHtml += '</select></div></div>';
	            loginHtml += '<div class="layui-form-item" style="margin-top:25px;margin-bottom:0;">';
	            loginHtml += '<div class="layui-input-block">';
	            loginHtml += ' <button id="addwinning" class="layui-btn" style="width:200px;margin-left:-20px;" lay-submit="" lay-filter="addwinning">立即添加</button>';
	            loginHtml += ' </div>';
	            loginHtml += ' </div>';
            loginHtml += '</form>';

            layer.open({
                id: 'layer-loginWinning',
                type: 1,
                title: "添加获奖记录",
                shade: 0.4,
                shadeClose: true,
                area: ['320px', '240px'],
                closeBtn: 0,
                anim: 1,
                skin: 'pm-layer-login',
                content: loginHtml
            });
            layui.form().render();
        }, 200);
    });
    
    //监听登陆提交
    form.on('submit(addwinning)', function (data) {
    	var index = layer.load(1);
    	 setTimeout(function () {
            //模拟登陆
            layer.close(index);
             $.ajax({
         		type: "POST",	//提交方式
         		url: "add_winning.form",	//提交的路径
         		data: {number:data.field.number, prizeType:data.field.prizeType},
         		dataType: "text", //返回数据的类型
         		async: false, //设置同步请求
         		success: function(result){ //成功之后的回调函数
         			if (result == "1") {
        				 layer.msg('添加成功！', { icon: 6 });
        	             layer.closeAll('page');
        	             setTimeout(function () {
        	             window.location.href=window.location.href;
        	             }, 300);
 					}else {
 						layer.msg('权限不足！', { icon: 5 });
 					}
         		}  
         	});
    	  }, 200);
    	    return false;
    });

    //输出接口，主要是两个函数，一个删除一个编辑
    var winninglist = {
        deleteData: function (winning_id) {
            layer.confirm('确定删除？', {
                btn: ['确定', '取消'] //按钮
            }, function () {
                
                $.ajax({
             		type: "POST",	//提交方式
             		url: "delete_winning.form",	//提交的路径
             		data: {winning_id:winning_id},
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

            });
        },
        editData: function (winning_id) {

        	var index = layer.load(1);
            setTimeout(function () {
                layer.close(index);
                var loginHtml = ''; //静态页面只能拼接，这里可以用iFrame或者Ajax请求分部视图。html文件夹下有login.html
                
                loginHtml += '<form class="layui-form" id="updatawinningForm" action="" style="margin:40px;margin-left:60px;">';
                loginHtml += '<div class="layui-form-item">';
                loginHtml += '<label class="layui-form-label">记录编号</label>';
                loginHtml += '<div class="layui-input-inline pm-login-input">';
                loginHtml += '<input type="text" name="winning_id" readonly="readonly" value='+ winning_id +' lay-verify="" placeholder="" autocomplete="off" class="layui-input">';
                loginHtml += '</div>';
                loginHtml += '</div>';
                
                loginHtml += '<div class="layui-form-item"><label class="layui-form-label">员工姓名</label><div class="layui-input-block"><select name="number" required lay-verify="required">';
                loginHtml += '<option value="">员工姓名</option>';
    	       	 //遍历文章集合
    	            for (var i = 0; i < data1.length; i++) {
    	                var item1 = data1[i];
    	                loginHtml += "<option value='" + item1.number + "'>" + item1.name + "</option>";
    	            }
    	            loginHtml += '</select></div></div>';
        		
    	            loginHtml += '<div class="layui-form-item"><label class="layui-form-label">奖金类型</label><div class="layui-input-block" id="shop_sel"><select name="prizeType" required lay-verify="required">';
    	            loginHtml += '<option value="">奖金类型</option>';
    	    		 //遍历文章集合
    	            for (var i = 0; i < data2.length; i++) {
    	                var item2 = data2[i];
    	                loginHtml += "<option value='" + item2.prizeType + "'>" + item2.prizeType + "</option>";
    	            }
    	            loginHtml += '</select></div></div>';
    	            loginHtml += '<div class="layui-form-item" style="margin-top:25px;margin-bottom:0;">';
    	            loginHtml += '<div class="layui-input-block">';
    	            loginHtml += ' <button id="updatawinning" class="layui-btn" style="width:230px;margin-left:-40px;" lay-submit="" lay-filter="updatawinning">立即修改</button>';
    	            loginHtml += ' </div>';
    	            loginHtml += ' </div>';
                loginHtml += '</form>';

                layer.open({
                    id: 'layer-loginWinningUpdata',
                    type: 1,
                    title: "修改获奖记录",
                    shade: 0.4,
                    shadeClose: true,
                    area: ['480px', '340px'],
                    closeBtn: 0,
                    anim: 1,
                    skin: 'pm-layer-login',
                    content: loginHtml
                });
                layui.form().render();
            }, 300);
        	
        }
    };

    //监听修改提交
    form.on('submit(updatawinning)', function (data) {
             $.ajax({
         		type: "POST",	//提交方式
         		url: "updata_winning.form",	//提交的路径
         		data: {winning_id:data.field.winning_id, number:data.field.number, prizeType:data.field.prizeType},
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

    exports('winninglist', winninglist);
});