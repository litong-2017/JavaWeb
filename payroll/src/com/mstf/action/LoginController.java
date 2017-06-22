package com.mstf.action;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mstf.entity.User;
import com.mstf.service.Login_CheckService;
//定义登录权限，以及View的分发
@Controller
public class LoginController {
	@Autowired
	private Login_CheckService login_CheckService;
	
	//登录验证
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public @ResponseBody String Login(@RequestParam("name")String name, 
			@RequestParam("pwd")String pwd, 
			HttpServletRequest request) throws ServletException, IOException{
		if (login_CheckService.Login_Check(name, pwd) == 1) {
			User user = login_CheckService.Save_Login(name, pwd);
			String authority = user.getAuthority();
			String number = user.getNumber();
			request.getSession().setAttribute("number", number);
			request.getSession().setAttribute("name", name);
			request.getSession().setAttribute("authority", authority);
			System.out.println("=====================用户登录成功====================");
			return "1";
		}else{
			System.out.println("=====================用户登录失败====================");
			return "0";
		}
	}
	
	//退出登录
    @RequestMapping("/logout")
    public String logout(HttpSession session, HttpServletRequest request){
    	System.out.println("=====================用户登出====================");
    	session.invalidate();
    	return "redirect:/index.jsp";
    }
	//主页面
	@RequestMapping(value = "/success")
	public String Success() {
			return "main";
	}
	//首页
	@RequestMapping(value = "/center")
	public String Center() {
			return "center";
	}
	@RequestMapping(value = "/prize")
	public String Prize(HttpServletRequest request) {
		if (request.getSession().getAttribute("authority").equals("管理员")) {
			return "prize";
		}else{
			return "404";
		}
	}
	@RequestMapping(value = "/check")
	public String Check(HttpServletRequest request) {
		if (request.getSession().getAttribute("authority").equals("店长")) {
			return "check";
		}else{
			return "404";
		}
	}
	@RequestMapping(value = "/dept")
	public String Dept(HttpServletRequest request) {
		if (request.getSession().getAttribute("authority").equals("管理员")) {
			return "dept";
		}else{
			return "404";
		}
	}
	@RequestMapping(value = "/salary")
	public String Salary(HttpServletRequest request) {
		if (request.getSession().getAttribute("authority").equals("管理员")) {
			return "salary";
		}else{
			return "404";
		}
	}
	@RequestMapping(value = "/base_salary")
	public String Base_Salary(HttpServletRequest request) {
		if (request.getSession().getAttribute("authority").equals("管理员")) {
			return "base_salary";
		}else{
			return "404";
		}
	}
	@RequestMapping(value = "/shop")
	public String Shop(HttpServletRequest request) {
		if (request.getSession().getAttribute("authority").equals("管理员")) {
			return "shop";
		}else{
			return "404";
		}
	}
	@RequestMapping(value = "/subsidy")
	public String Subsidy(HttpServletRequest request) {
		if (request.getSession().getAttribute("authority").equals("管理员")) {
			return "subsidy";
		}else{
			return "404";
		}
	}
	@RequestMapping(value = "/selectsalary")
	public String selectSubsidy(HttpServletRequest request) {
			return "selectsalary";
	}
	@RequestMapping(value = "/user")
	public String User(HttpServletRequest request) {
		if (request.getSession().getAttribute("authority").equals("管理员")) {
			return "user";
		}else{
			return "404";
		}
	}
	@RequestMapping(value = "/form")
	public String UserInfo(HttpServletRequest request) {
		if (request.getSession().getAttribute("authority").equals("管理员")) {
			return "form";
		}else{
			return "404";
		}
	}
	@RequestMapping(value = "/form_add")
	public String UserInfo_add(@RequestParam("id") int id, HttpServletRequest request) {
		if (request.getSession().getAttribute("authority").equals("管理员")) {
			request.setAttribute("id", id);
			return "form_add";
		}else{
			return "404";
		}
	}
	@RequestMapping(value = "/winning")
	public String Winning(HttpServletRequest request) {
		if (request.getSession().getAttribute("authority").equals("管理员")) {
			return "winning";
		}else{
			return "404";
		}
	}
	@RequestMapping(value = "/userpower")
	public String userpower(HttpServletRequest request) {
		if (request.getSession().getAttribute("authority").equals("管理员")) {
			return "userpower";
		}else{
			return "404";
		}
	}
}
