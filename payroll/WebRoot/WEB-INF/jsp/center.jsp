<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1, user-scalable=no">
<title>用户中心</title>
<link href="bootstrap-3.3.5-dist/css/bootstrap.min.css" title="" rel="stylesheet" />
<link href="css/templatecss.css" rel="stylesheet" title="" type="text/css" />
<script type="text/javascript" src="script/jquery-1.11.1.min.js"></script>
<body>
     <div class="container-fluid"">
        <div class="manage account-manage info-center">
          <dl class="account-basic clearfix">
            <dt class="pull-left">
            <p class="account-head">
              <img src="images/noavatar_middle.gif">
            </p>
            </dt>
            <dd class="pull-left margin-large-left margin-small-top">
            <p class="text-small">
             <table>
            	<tr style="wight: 120px;">
            		<td class="text-small"><span class="show pull-left base-name">用户名</span>:</td>
            		<td class="text-small"><span class="margin-left" style="wight: 120px;">${name} </span></td>
            	</tr>
            </table>
            </p>
            <p class="text-small">
            <table>
            	<tr style="wight: 120px;">
            		<td class="text-small"><span class="show pull-left base-name">权限</span>:</td>
            		<td class="text-small"><span class="margin-left"  style="wight: 120px;">${authority}</span></td>
            	</tr>
            </table>
            </p>
            <p class="text-small">
            <table>
            	<tr>
            		<td class="text-small"><span class="show pull-left base-name">状态</span>:</td>
            		<td class="text-small"><span class="margin-left" style="wight: 120px;">在职</span></td>
            	</tr>
            </table>
            <input class="number" type = "hidden" id = "number" value = ${number }>
            </p>
            </dd>
          </dl>
          <div class="account-basic clearfix">
            <span class="pull-left show text-small">您当前的账号安全程度</span>
            <div class="progress-bar pull-left margin-large-left margin-large-35">
              <div style="background: rgb(255, 153, 0) none repeat scroll 0% 0%; width: 180px;" data-width="100">
              </div>
            </div>
            <span class="pull-left show text-small">安全级别: <span style="color: rgb(255, 153, 0);" class="leval-safe">高</span></span>
          </div>
          <ul class="accound-bund">
            <li class="clearfix">
            <span class="bund-class">登录密码</span>
            <span class="w45">安全性高的密码可以使账号更安全，建议您定期更换密码，设置一个包含字母，符号或数字中至少两项且长度超过6位的密码。</span>
            <span class="pull-right margin-large-right">
            <i class="glyphicon glyphicon-ok-circle pull-left"></i>
            <em class="margin-right text-green-deep">已设置</em>
                            |
            <a href="#" id="update" class="button-word1 margin-left btn_ajax_open">修改</a>
            </span>
            </li>
            
            <li class="clearfix">
            <span class="bund-class">邮箱绑定</span>
            <span class="w45">绑定邮箱可以用于安全验证、找回密码等重要操作</span>
            <span class="pull-right margin-large-right">
            <i class="glyphicon glyphicon-ok-circle pull-left"></i>
            <em class="margin-right text-green-deep">已设置</em>
                                                  |
            <a href="#" data-panel="modify-email-revise" data-title="修改绑定邮箱-邮箱验证" data-btn="发送验证到邮箱,取消" data-callback="$(&quot;#modify_email&quot;).submit();" class="button-word2 margin-left btn_ajax_open">修改</a>
            <input data-panel="modify-email-revise2" data-title="修改绑定邮箱-修改成功" data-btn="完成" data-callback="layer.closeAll();" class="modif_email_setup2 btn_ajax_open" type="hidden">
            </span>
            </li>
          
            <li class="clearfix border-bottom-none">
            <span class="bund-class">邀请链接</span>
            <span class="w45" id="fe_text">http://www.mycodes.net</span>
            <span class="pull-right margin-large-right">
            <a class="button-word1 margin-left" id="copy_button" data-clipboard-target="fe_text" href="#">复制链接</a>
            </span>
            </li>
          </ul>
        </div>
    </div>
</body>
</html>
