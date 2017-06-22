layui.define(['element', 'layer', 'util', 'pagesize', 'form'], function (exports) {
    var $ = layui.jquery;
    var element = layui.element();
    var layer = layui.layer;
    var util = layui.util;
    var form = layui.form();
    //form.render();
    //快捷菜单开关
    $('span.sys-title').click(function (e) {
        e.stopPropagation();    //阻止事件冒泡
        $('div.short-menu').slideToggle('fast');
    });
    $('div.short-menu').click(function (e) {
        e.stopPropagation();    //阻止事件冒泡
    });
    $(document).click(function () {
        $('div.short-menu').slideUp('fast');
        $('.individuation').removeClass('bounceInRight').addClass('flipOutY');
    });
    //个性化设置开关
    $('#individuation').click(function (e) {
        e.stopPropagation();    //阻止事件冒泡
        $('.individuation').removeClass('layui-hide').toggleClass('bounceInRight').toggleClass('flipOutY');
    });
    $('.individuation').click(function (e) {
        e.stopPropagation();    //阻止事件冒泡
    })
    $('.layui-body').click(function () {
        $('.individuation').removeClass('bounceInRight').addClass('flipOutY');
    });

    //监听左侧导航点击
    element.on('nav(leftnav)', function (elem) {
        var url = $(elem).children('a').attr('data-url');   //页面url
        var id = $(elem).children('a').attr('data-id');     //tab唯一Id
        var title = $(elem).children('a').text();           //菜单名称
        if (title == "首页") {
            element.tabChange('tab', 0);
            return;
        }
        if (url == undefined) return;

        var tabTitleDiv = $('.layui-tab[lay-filter=\'tab\']').children('.layui-tab-title');
        var exist = tabTitleDiv.find('li[lay-id=' + id + ']');
        if (exist.length > 0) {
            //切换到指定索引的卡片
            element.tabChange('tab', id);
        } else {
            var index = layer.load(1);
            //由于Ajax调用本地静态页面存在跨域问题，这里用iframe
            setTimeout(function () {
                //模拟菜单加载
                layer.close(index);
                element.tabAdd('tab', { title: title, content: '<iframe src="' + url + '" name="' + id + '" style="width:100%;height:100%;border:none;outline:none;"></iframe>', id: id });
                //切换到指定索引的卡片
                element.tabChange('tab', id);
            }, 500);
        }
    });

    //监听快捷菜单点击
    $('.short-menu .layui-field-box>div>div').click(function () {
        var elem = this;
        var url = $(elem).children('span').attr('data-url');
        var id = $(elem).children('span').attr('data-id');
        var title = $(elem).children('span').text();
        alert(url);
        if (url == undefined) return;

        var tabTitleDiv = $('.layui-tab[lay-filter=\'tab\']').children('.layui-tab-title');
        var exist = tabTitleDiv.find('li[lay-id=' + id + ']');
        if (exist.length > 0) {
            //切换到指定索引的卡片
            element.tabChange('tab', id);
        } else {
            var index = layer.load(1);
            //由于Ajax调用本地静态页面存在跨域问题，这里用iframe
            setTimeout(function () {
                //模拟菜单加载
                layer.close(index);
                element.tabAdd('tab', { title: title, content: '<iframe name="'+id+'" src="' + url + '" style="width:100%;height:100%;border:none;outline:none;"></iframe>', id: id });
                //切换到指定索引的卡片
                element.tabChange('tab', id);
            }, 500);
        }
        $('div.short-menu').slideUp('fast');
    });

    //监听侧边导航开关
    form.on('switch(sidenav)', function (data) {
        if (data.elem.checked) {
            showSideNav();
        } else {
            hideSideNav();
        }
    });

    //收起侧边导航点击事件
    $('.layui-side-hide').click(function () {
        hideSideNav();
        $('input[lay-filter=sidenav]').siblings('.layui-form-switch').removeClass('layui-form-onswitch');
        $('input[lay-filter=sidenav]').prop("checked", false);
    });
    
    
    //鼠标靠左展开侧边导航
    $(document).mousemove(function (e) {
        if (e.pageX == 0) {
            showSideNav();
            $('input[lay-filter=sidenav]').siblings('.layui-form-switch').addClass('layui-form-onswitch');
            $('input[lay-filter=sidenav]').prop("checked", true);
        }
    });

    //皮肤切换
    $('.skin').click(function () {
        var skin = $(this).attr("data-skin");
        $('body').removeClass();
        $('body').addClass(skin);
    });

    var ishide = false;
    //隐藏侧边导航
    function hideSideNav() {
        if (!ishide) {
            $('.layui-side').animate({ left: '-180px' });
            $('.layui-side-hide').animate({ left: '-180px' });
            $('.layui-body').animate({ left: '0px' });
            $('.layui-footer').animate({ left: '0px' });
            var tishi = layer.msg('鼠标靠左自动显示菜单', { time: 1500 });
            layer.style(tishi, {
                top: 'auto',
                bottom: '50px'
            });
            ishide = true;
        }
    }
    //显示侧边导航
    function showSideNav() {
        if (ishide) {
            $('.layui-side').animate({ left: '0px' });
            $('.layui-side-hide').animate({ left: '0px' });
            $('.layui-body').animate({ left: '180px' });
            $('.layui-footer').animate({ left: '180px' });
            ishide = false;
        }
    }
    var newpwd;
    //自定义验证
    form.verify({
        passWord: [/^[\S]{6,12}$/, '密码必须6到12位'],
        passWord: function (value) {
        	newpwd = value;
           if (newpwd == "") {
               return "密码不能为空！"
           }
        },
        passWord1: function (value) {
        	var pwd1 = value;
            if (newpwd == pwd1) {
               
            }else{
            	 return "密码不相同！"
            }
        },
    });
    
    var number = $(".info").contents().find("#number").val();
  //监听登陆提交
    form.on('submit(login1)', function (data) {
    	 var index = layer.load(1);
         setTimeout(function () {
             //模拟登陆
             layer.close(index);
             $.ajax({
         		type: "POST",	//提交方式
         		url: "updatapwd.form",	//提交的路径
         		data: {pwd:data.field.pwd, number:number},
         		dataType: "text", //返回数据的类型
         		async: false, //设置同步请求
         		success: function(result){ //成功之后的回调函数
         			if (result == "1") {
        				 layer.msg('修改成功！', { icon: 6 });
        				 setTimeout(function () {
        					 layer.closeAll('page');
            	         }, 200);
 					}else {
 						 layer.msg('修改失败！', { icon: 5 });
 					}
         		}
         	});
         }, 400);
         return false;
    });
      
    $(".info").contents().find("#update").on('click', login);
    function login() {
        var loginHtml = ''; //静态页面只能拼接，这里可以用iFrame或者Ajax请求分部视图。html文件夹下有login.html

        loginHtml += '<form class="layui-form" id="updataForm" method="POST" action="" style="margin:40px;margin-left:60px;">';
        loginHtml += '<div class="layui-form-item">';
        loginHtml += '<label class="layui-form-label">新密码</label>';
        loginHtml += '<div class="layui-input-inline pm-login-input">';
        loginHtml += '<input type="password" name="pwd" lay-verify="passWord" placeholder="请输入新密码" autocomplete="off" class="layui-input">';
        loginHtml += '</div>';
        loginHtml += '</div>';
        loginHtml += '<div class="layui-form-item">';
        loginHtml += '<label class="layui-form-label">重复密码</label>';
        loginHtml += '<div class="layui-input-inline pm-login-input">';
        loginHtml += '<input type="password" name="pwd1" lay-verify="passWord1" placeholder="请重复输入密码" autocomplete="off" class="layui-input">';
        loginHtml += '</div>';
        loginHtml += '</div>';
        loginHtml += '<div class="layui-form-item" style="margin-top:25px;margin-bottom:0;">';
        loginHtml += '<div class="layui-input-block">';
        loginHtml += ' <button id="updataBtn" class="layui-btn" style="width:230px;margin-left:-40px;" lay-submit="" lay-filter="login1">立即修改</button>';
        loginHtml += ' </div>';
        loginHtml += ' </div>';
        loginHtml += '</form>';

        layer.open({
            id: 'layer-login',
            type: 1,
            title: "修改密码",
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
    
    exports('main', {});
});
