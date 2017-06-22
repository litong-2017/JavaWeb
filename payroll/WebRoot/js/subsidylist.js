layui.define(['laypage', 'layer', 'form', 'pagesize'], function (exports) {
    var $ = layui.jquery,
        layer = layui.layer,
        form = layui.form(),
        laypage = layui.laypage;
    
  //自定义验证
    form.verify({
    	prize_v: [/[\u4e00-\u9fa5_a-zA-Z0-9_]{0,20}/, '不能为空且不能有特殊字符'],
    	prizes_v: function (value) {
   		 if (isNaN(value)) {
                return "只能为数字！"
            } else if(value <= 0){
            	 return "要>0！"
            }
       },
    });
    
    var laypageId = 'pageNav';
    var data1 = new Array();
    initilData(1, 8);
    
    //页数据初始化
    //currentIndex：当前也下标
    //pageSize：页容量（每页显示的条数）
    function initilData(currentIndex, pageSize) {
        var index = layer.load(1);
        var data = new Array();
        //模拟数据
        $.ajax({
            type: "GET",    //提交方式
            url: "see_subsidy.form",   //提交的路径
            dataType: "json", //返回数据的类型
            async: false, //设置同步请求
            success: function(result){ //成功之后的回调函数
                for(var i in result){//遍历json数组时，这么写i为索引，0,1
                    data.push({ subsidyId:result[i].subsidyId,number:result[i].number,name:result[i].user.name,subsidyType:result[i].subsidyType,subsidys:result[i].subsidys,subsidyTime:result[i].subsidyTime});
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

        //监听搜索的表单提交
        form.on('submit(formSearch)', function (data) {
            var index = layer.load(1);
            var data1 = new Array();
            setTimeout(function () {
                //模拟登陆
                layer.close(index);
                $.ajax({
            		type: "POST",	//提交方式
            		url: "search_subsidy_byname.form",	//提交的路径
            		data: {name:data.field.keywords},
            		dataType: "json", //返回数据的类型
            		async: false, //设置同步请求
            		success: function(result){ //成功之后的回调函数
            			for(var i in result){//遍历json数组时，这么写i为索引，0,1
                            data1.push({ subsidyId:result[i].subsidyId,number:result[i].number,name:result[i].user.name,subsidyType:result[i].subsidyType,subsidys:result[i].subsidys,subsidyTime:result[i].subsidyTime});
                        }
            		}
            	});
                
            }, 400);
            
            //模拟数据加载
            setTimeout(function () {
                layer.close(index);
                //计算总页数（一般由后台返回）
                pages = Math.ceil(data1.length / pageSize);
                //模拟数据分页（实际上获取的数据已经经过分页）
                var skip = pageSize * (currentIndex - 1);
                var take = skip + Number(pageSize);
                data1 = data1.slice(skip, take);
                var html = '';  //由于静态页面，所以只能作字符串拼接，实际使用一般是ajax请求服务器数据
                html += '<table style="" class="layui-table" lay-even>';
                html += '<colgroup><col><col><col><col><col><col></colgroup>';
                html += '<thead><tr><th>序号</th><th>姓名</th><th>补贴项</th><th>补贴金额</th><th>补贴时间</th><th colspan="2">操作</th></tr></thead>';;
                html += '<tbody>';
                //遍历文章集合
                for (var i = 0; i < data1.length; i++) {
                    var item = data1[i];
                    html += "<tr>";
                    html += "<td>" + (i+1) + "</td>";
                    html += "<td>" + item.name + "</td>";
                    html += "<td>" + item.subsidyType+ "</td>";
                    html += "<td>" + item.subsidys+ "</td>";
                    html += "<td>" + item.subsidyTime+ "</td>";
                    html += '<td><button class="layui-btn layui-btn-small layui-btn-normal" onclick="layui.subsidylist.editData(\'' + item.subsidyId + '\')"><i class="layui-icon">&#xe642;</i></button></td>';
                    html += '<td><button class="layui-btn layui-btn-small layui-btn-danger" onclick="layui.subsidylist.deleteData(\'' + item.subsidyId + '\')"><i class="layui-icon">&#xe640;</i></button></td>';
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
            return false;
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
            html += '<colgroup><col width="200"><col width="250"><col width="250"><col width="250"><col width="270"><col></colgroup>';
            html += '<thead><tr><th>序号</th><th>姓名</th><th>补贴项</th><th>补贴金额</th><th>补贴时间</th><th colspan="2">操作</th></tr></thead>';;
            html += '<tbody>';
            //遍历文章集合
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                html += "<tr>";
                html += "<td>" + (i+1) + "</td>";
                html += "<td>" + item.name + "</td>";
                html += "<td>" + item.subsidyType+ "</td>";
                html += "<td>" + item.subsidys+ "</td>";
                html += "<td>" + item.subsidyTime+ "</td>";
                html += '<td><button class="layui-btn layui-btn-small layui-btn-normal" onclick="layui.subsidylist.editData(\'' + item.subsidyId + '\')"><i class="layui-icon">&#xe642;</i></button></td>';
                html += '<td><button class="layui-btn layui-btn-small layui-btn-danger" onclick="layui.subsidylist.deleteData(\'' + item.subsidyId + '\')"><i class="layui-icon">&#xe640;</i></button></td>';
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
    $('#addSubsidy').click(function () {
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
	            loginHtml += '<div class="layui-form-item">';
	            loginHtml += '<label class="layui-form-label">补贴类型</label>';
	            loginHtml += '<div class="layui-input-inline pm-login-input">';
	            loginHtml += '<input type="text" name="subsidy_type" lay-verify="prize_v" placeholder="补贴类型" autocomplete="off" class="layui-input">';
	            loginHtml += '</div>';
	            loginHtml += '</div>';
	            loginHtml += '<div class="layui-form-item">';
	            loginHtml += '<label class="layui-form-label">补贴金额</label>';
	            loginHtml += '<div class="layui-input-inline pm-login-input">';
	            loginHtml += '<input type="text" name="subsidys" lay-verify="prizes_v" placeholder="￥" autocomplete="off" class="layui-input">';
	            loginHtml += '</div>';
	            loginHtml += '</div>';
	            loginHtml += '<div class="layui-form-item" style="margin-top:25px;margin-bottom:0;">';
	            loginHtml += '<div class="layui-input-block">';
	            loginHtml += ' <button id="addsubsidy" class="layui-btn" style="width:200px;margin-left:-20px;" lay-submit="" lay-filter="addsubsidy">立即添加</button>';
	            loginHtml += ' </div>';
	            loginHtml += ' </div>';
            loginHtml += '</form>';

            layer.open({
                id: 'layer-loginSubsidy',
                type: 1,
                title: "添加补贴记录",
                shade: 0.4,
                shadeClose: true,
                area: ['320px', '300px'],
                closeBtn: 0,
                anim: 1,
                skin: 'pm-layer-login',
                content: loginHtml
            });
            layui.form().render();
        }, 200);
    });

    //监听登陆提交
    form.on('submit(addsubsidy)', function (data) {
        setTimeout(function () {
            //模拟登陆
             $.ajax({
         		type: "POST",	//提交方式
         		url: "add_subsidy.form",	//提交的路径
         		data: {number:data.field.number, subsidyType:data.field.subsidy_type, subsidys:data.field.subsidys},
         		dataType: "text", //返回数据的类型
         		async: false, //设置同步请求
         		success: function(result){ //成功之后的回调函数
         			if (result == "1") {
        				 layer.msg('添加成功！', { icon: 6 });
        	             layer.closeAll('page');
        	             setTimeout(function () {
        	             window.location.href=window.location.href;
        	             }, 300);
 					}else if(result == "0"){
 						 layer.msg('权限不足！', { icon: 5 });
 					}else{
 						layer.msg('已有奖金项,勿重复添加！', { icon: 5 });
 					}
         		},
         		error: function(){
         			layer.msg('已有奖金项,勿重复添加！', { icon: 5 });layer.closeAll('page');
         		}
         	});
    }, 200);
        return false;
    });
    
    //输出接口，主要是两个函数，一个删除一个编辑
    var subsidylist = {
        deleteData: function (subsidyId) {
            layer.confirm('确定删除？', {
                btn: ['确定', '取消'] //按钮
            }, function () {
                $.ajax({
             		type: "POST",	//提交方式
             		url: "delete_subsidy.form",	//提交的路径
             		data: {subsidy_id:subsidyId},
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
     						 layer.msg('删除失败！', { icon: 5 });
     					}
             		}
             	});
            }, function () {

            });
        },
        editData: function (subsidy_id ) {
        	var loginHtml = ''; //静态页面只能拼接，这里可以用iFrame或者Ajax请求分部视图。html文件夹下有login.html
            
            loginHtml += '<form class="layui-form" id="updataForm" method="POST" action="" style="margin:40px;margin-left:60px;">';
            loginHtml += '<div class="layui-form-item">';
            loginHtml += '<label class="layui-form-label">津贴项编号</label>';
            loginHtml += '<div class="layui-input-inline pm-login-input">';
            loginHtml += '<input type="text" name="subsidy_id" readonly="readonly" value='+ subsidy_id +' lay-verify="" placeholder="" autocomplete="off" class="layui-input">';
            loginHtml += '</div>';
            loginHtml += '</div>';
            loginHtml += '<div class="layui-form-item">';
            loginHtml += '<label class="layui-form-label">津贴类型</label>';
            loginHtml += '<div class="layui-input-inline pm-login-input">';
            loginHtml += '<input type="text" name="subsidy_type" lay-verify="" placeholder="津贴类型" autocomplete="off" class="layui-input">';
            loginHtml += '</div>';
            loginHtml += '</div>';
            loginHtml += '<div class="layui-form-item">';
            loginHtml += '<label class="layui-form-label">金额</label>';
            loginHtml += '<div class="layui-input-inline pm-login-input">';
            loginHtml += '<input type="text" name="subsidys" lay-verify="" placeholder="￥" autocomplete="off" class="layui-input">';
            loginHtml += '</div>';
            loginHtml += '</div>';
            loginHtml += '<div class="layui-form-item" style="margin-top:25px;margin-bottom:0;">';
            loginHtml += '<div class="layui-input-block">';
            loginHtml += ' <button id="updataSubsidy" class="layui-btn" style="width:230px;margin-left:-40px;" lay-submit="" lay-filter="updataSubsidy">立即修改</button>';
            loginHtml += ' </div>';
            loginHtml += ' </div>';
            loginHtml += '</form>';

            layer.open({
                id: 'layer-login13',
                type: 1,
                title: "修改津贴",
                shade: 0.4,
                shadeClose: true,
                area: ['480px', '320px'],
                closeBtn: 0,
                anim: 1,
                skin: 'pm-layer-login',
                content: loginHtml
            });
            layui.form().render('checkbox');
        }
    };
    //监听修改提交
    form.on('submit(updataSubsidy)', function (data) {
             $.ajax({
         		type: "POST",	//提交方式
         		url: "updata_subsidy.form",	//提交的路径
         		data: {subsidy_type:data.field.subsidy_type, subsidys:data.field.subsidys, subsidy_id:data.field.subsidy_id},
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

    exports('subsidylist', subsidylist);
});