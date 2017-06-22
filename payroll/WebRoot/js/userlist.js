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
    		url: "see_user.form",	//提交的路径
    		dataType: "json", //返回数据的类型
    		async: false, //设置同步请求
    		success: function(result){ //成功之后的回调函数
    			for(var i in result){//遍历json数组时，这么写i为索引，0,1
    				 data.push({ id:result[i].id, number:result[i].number, name:result[i].name, level:result[i].level, authority:result[i].authority, dept_name:result[i].deptName, shop_name:result[i].shopName, phone:result[i].phone, email:result[i].email});
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
            html += '<colgroup><col><col><col><col><col><col><col><col><col><col></colgroup>';
            html += '<thead><tr><th>序号</th><th>员工编号</th><th>姓名</th><th>等级</th><th>角色</th><th>所属店铺</th><th>所属部门</th><th>联系电话</th><th>电子邮箱</th><th colspan="2">操作</th></tr></thead>';
            html += '<tbody>';
            //遍历文章集合
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                html += "<tr>";
                html += "<td>" + (i+1) + "</td>";
                html += "<td>" + item.number + "</td>";
                html += "<td>" + item.name + "</td>";
                html += "<td>" + item.level + "</td>";
                html += "<td>" + item.authority + "</td>";
                html += "<td>" + item.shop_name	+ "</td>";
                html += "<td>" + item.dept_name + "</td>";
                html += "<td>" + item.phone + "</td>";
                html += "<td>" + item.email + "</td>";
                html += '<td><button class="layui-btn layui-btn-small layui-btn-normal" onclick="layui.userlist.editData(\'' + item.id + '\')"><i class="layui-icon">&#xe642;</i></button></td>';
                html += '<td><button class="layui-btn layui-btn-small layui-btn-danger" onclick="layui.userlist.deleteData(\'' + item.id + '\')"><i class="layui-icon">&#xe640;</i></button></td>';
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
    $('#addArticle').click(function () {
        var index = layer.load(1);
        setTimeout(function () {
            layer.close(index);
            window.location.href='form.form';
        }, 500);
    });

    //输出接口，主要是两个函数，一个删除一个编辑
    var userlist = {
        deleteData: function (id) {
            layer.confirm('确定删除？', {
                btn: ['确定', '取消'] //按钮
            }, function () {
                $.ajax({
             		type: "GET",	//提交方式
             		url: "delete_user.form",	//提交的路径
             		data: {id:id},
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
        editData: function (id) {
            window.location.href="form_add.form?id=" + id;
        }
    };

    exports('userlist', userlist);
});