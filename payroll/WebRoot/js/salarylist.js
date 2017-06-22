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
    		url: "see_salary_all.form",	//提交的路径
    		dataType: "json", //返回数据的类型
    		async: false, //设置同步请求
    		success: function(result){ //成功之后的回调函数
				for(var i in result){//遍历json数组时，这么写i为索引，0,1
					if (result[i].check_job.checks == null) {
						result[i].check_job.checks = 0;
					}if (result[i].subsidy.subsidys == null) {
						result[i].subsidy.subsidys = 0;
					}if (result[i].winning.prize == null) {
						prizes = 0;
					}else{
						prizes = result[i].winning.prize.prizes;
					}
   				 data.push({ id: result[i].id, number: result[i].number, name: result[i].name, deptName: result[i].deptName, level: result[i].level, salary: result[i].salary.base, subsidy: result[i].subsidy.subsidys, winning: prizes, check_job: result[i].check_job.checks});
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
            html += '<colgroup><col><col><col><col><col><col><col><col><col><col><col></colgroup>';
            html += '<thead><tr><th>序号</th><th>员工编号</th><th>姓名</th><th>所在店铺</th><th>等级</th><th>基本工资</th><th>月补贴</th><th>月奖金</th><th>考勤扣款</th><th>应发工资</th><th>实发工资</th></tr></thead>';
            html += '<tbody>';
          //遍历文章集合
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                html += "<tr>";
                html += "<td>" + item.id + "</td>";
                html += "<td>" + item.number + "</td>";
                html += "<td>" + item.name + "</td>";
                html += "<td>" + item.deptName + "</td>";
                html += "<td>" + item.level + "</td>";
                html += "<td>" + item.salary + "</td>";
                html += "<td>" + item.subsidy + "</td>";
                html += "<td>" + item.winning + "</td>";
                html += "<td>" + item.check_job + "</td>";
                html += "<td>" + (item.salary + item.winning + item.subsidy) + "</td>";
                html += "<td>" + (item.salary + item.winning + item.subsidy + item.check_job ) + "</td>";
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

    exports('salarylist', salarylist);
});