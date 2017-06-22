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
    		url: "see_price.form",	//提交的路径
    		dataType: "json", //返回数据的类型
    		async: false, //设置同步请求
    		success: function(result){ //成功之后的回调函数
    				for(var i in result){//遍历json数组时，这么写i为索引，0,1
       				 data.push({ prizeId: result[i].prizeId, prizeType: result[i].prizeType, prizes: result[i].prizes, Time: result[i].prizeTime});
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
            html += '<colgroup><col><col><col><col><col></colgroup>';
            html += '<thead><tr><th>序号</th><th>奖金类型</th><th>奖金金额</th><th>时间</th><th colspan="2">操作</th></tr></thead>';
            html += '<tbody>';
            //遍历文章集合
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                html += "<tr>";
                html += "<td>" + (i+1) + "</td>";
                html += "<td>" + item.prizeType + "</td>";
                html += "<td>" + item.prizes + "</td>";
                html += "<td>" + item.Time + "</td>";
                html += '<td><button class="layui-btn layui-btn-small layui-btn-normal" onclick="layui.prizelist.editData(\'' + item.prizeType + '\')"><i class="layui-icon">&#xe642;</i></button></td>';
                html += '<td><button class="layui-btn layui-btn-small layui-btn-danger" onclick="layui.prizelist.deleteData(\'' + item.prizeId + '\')"><i class="layui-icon">&#xe640;</i></button></td>';
                html += "</tr>";
            }
            html += '</tbody>';
            html += '</table>';
            html += '<div id="' + laypageId + '"></div>';

            $('#dataContent').html(html);

            form.render('checkbox');  //重新渲染CheckBox，编辑和添加的时候
            $('#dataConsole,#prizeList').attr('style', 'display:block'); //显示FiledBox

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
    	
  //添加数据
    $('#addPrize').click(function () {
        var index = layer.load(1);
        setTimeout(function () {
            layer.close(index);
            var loginHtml = ''; //静态页面只能拼接，这里可以用iFrame或者Ajax请求分部视图。html文件夹下有login.html
            
            loginHtml += '<form class="layui-form" id="addprizeForm" method="POST" action="" style="margin:40px;margin-left:60px;">';
            loginHtml += '<div class="layui-form-item">';
            loginHtml += '<label class="layui-form-label">奖金类型</label>';
            loginHtml += '<div class="layui-input-inline pm-login-input">';
            loginHtml += '<input type="text" name="prize_type" lay-verify="prize_v" placeholder="奖金类型" autocomplete="off" class="layui-input">';
            loginHtml += '</div>';
            loginHtml += '</div>';
            loginHtml += '<div class="layui-form-item">';
            loginHtml += '<label class="layui-form-label">金额</label>';
            loginHtml += '<div class="layui-input-inline pm-login-input">';
            loginHtml += '<input type="text" name="prizes" lay-verify="prizes_v" placeholder="￥" autocomplete="off" class="layui-input">';
            loginHtml += '</div>';
            loginHtml += '</div>';
            loginHtml += '<div class="layui-form-item" style="margin-top:25px;margin-bottom:0;">';
            loginHtml += '<div class="layui-input-block">';
            loginHtml += ' <button id="addprize" class="layui-btn" style="width:230px;margin-left:-40px;" lay-submit="" lay-filter="add_prize">立即添加</button>';
            loginHtml += ' </div>';
            loginHtml += ' </div>';
            loginHtml += '</form>';

            layer.open({
                id: 'layer-login',
                type: 1,
                title: "添加奖金项",
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
    form.on('submit(add_prize)', function (data) {
        setTimeout(function () {
            //模拟登陆
             $.ajax({
         		type: "POST",	//提交方式
         		url: "add_prize.form",	//提交的路径
         		data: {prize_type:data.field.prize_type, prizes:data.field.prizes},
         		dataType: "text", //返回数据的类型
         		async: false, //设置同步请求
         		success: function(result){ //成功之后的回调函数
         			if (result == "1") {
        				 layer.msg('添加成功！', { icon: 6 });
        	             layer.closeAll('page');
        	             setTimeout(function () {
        	             window.location.href=window.location.href;
        	             }, 500);
 					}else{
 						 layer.msg('权限不足！', { icon: 5 });
 					}
         		},
         		error: function(){
         			layer.msg('已有奖金项,勿重复添加！', { icon: 5 });layer.closeAll('page');
         		}
         	});
    }, 200);
        return false;
    });

    //监听修改提交
    form.on('submit(updataPrizes)', function (data) {
             $.ajax({
         		type: "POST",	//提交方式
         		url: "updata_prizes.form",	//提交的路径
         		data: {prize_Type:data.field.prizeType, prizes:data.field.prizes},
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
 						 layer.msg('修改失败！', { icon: 5 });
 					}
         		}
         	});
    });
    
    //输出接口，主要是两个函数，一个删除一个编辑delete_prize
    var prizelist = {
        deleteData: function (prizeId) {
            layer.confirm('确定删除？', {
                btn: ['确定', '取消'] //按钮
            }, function () {
                $.ajax({
             		type: "POST",	//提交方式
             		url: "delete_prize.form",	//提交的路径
             		data: {prize_id:prizeId},
             		dataType: "text", //返回数据的类型
             		async: false, //设置同步请求
             		success: function(result){ //成功之后的回调函数
             			if (result == "1") {
            				 layer.msg('删除成功！', { icon: 6 });
            	             layer.closeAll('page');
            	             setTimeout(function () {
                	             window.location.href=window.location.href;
                	             }, 500);
     					}else {
     						 layer.msg('删除失败！', { icon: 5 });
     					}
             		}
             	});
            }, function () {
            	 layer.msg('取消删除！');
            });
        },
        editData: function (prizeType) {
        	var loginHtml = ''; //静态页面只能拼接，这里可以用iFrame或者Ajax请求分部视图。html文件夹下有login.html
            
            loginHtml += '<form class="layui-form" id="updataForm" method="POST" action="" style="margin:40px;margin-left:60px;">';
            loginHtml += '<div class="layui-form-item">';
            loginHtml += '<label class="layui-form-label">奖金类型</label>';
            loginHtml += '<div class="layui-input-inline pm-login-input">';
            loginHtml += '<input type="text" name="prizeType" readonly="readonly" value='+ prizeType +' lay-verify="" placeholder="" autocomplete="off" class="layui-input">';
            loginHtml += '</div>';
            loginHtml += '</div>';
            loginHtml += '<div class="layui-form-item">';
            loginHtml += '<label class="layui-form-label">奖金金额</label>';
            loginHtml += '<div class="layui-input-inline pm-login-input">';
            loginHtml += '<input type="text" name="prizes" lay-verify="prizes_v" placeholder="￥" autocomplete="off" class="layui-input">';
            loginHtml += '</div>';
            loginHtml += '</div>';
            loginHtml += '<div class="layui-form-item" style="margin-top:25px;margin-bottom:0;">';
            loginHtml += '<div class="layui-input-block">';
            loginHtml += ' <button id="updataPrizes" class="layui-btn" style="width:230px;margin-left:-40px;" lay-submit="" lay-filter="updataPrizes">立即修改</button>';
            loginHtml += ' </div>';
            loginHtml += ' </div>';
            loginHtml += '</form>';

            layer.open({
                id: 'layer-login1',
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
    
    exports('prizelist', prizelist);
});