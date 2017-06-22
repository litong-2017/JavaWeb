package com.mstf.action;

import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.mstf.entity.User;
import com.mstf.service.UserService;
//员工控制器，员工页的增、删、改、查
@Controller
public class UserController {
	@Autowired
	private UserService userService;

	@RequestMapping(value = "/see_user", method = RequestMethod.GET)
	public @ResponseBody List<User> See_User() throws ParseException{
		List<User> userList = userService.See_User();
		return userList;
	}
	
	@RequestMapping(value = "/see_user_id", method = RequestMethod.GET)
	public @ResponseBody List<User> See_User_id(@RequestParam("id") int id) throws ParseException{
		List<User> userList = userService.See_User_Id(id);
		return userList;
	}
	
	@RequestMapping(value = "/see_auth", method = RequestMethod.GET)
	public @ResponseBody List<User> See_Auth() throws ParseException{
		List<User> authList = userService.See_Auth();
		return authList;
	}
	
	@RequestMapping(value = "/see_user_power", method = RequestMethod.GET)
	public @ResponseBody List<User> See_User_power() throws ParseException{
		List<User> userList = userService.See_User();
		return userList;
		}
	
	@ResponseBody
	@RequestMapping(value = "/add_user")
	public String add_user(@ModelAttribute("user")User user) {
		int re = userService.Add_User(user);
		if (re == 0) {
			return "0";
		}else{
			return "1";
		}
	}
	
	@RequestMapping(value = "/updatapwd", method = RequestMethod.POST)
	public @ResponseBody String updatapwd(@RequestParam("pwd")String pwd, 
			@RequestParam("number")String number){
		int re = userService.UpdataPwd(pwd, number);
		if (re == 1) {
			return "1";
		}else{
			return "0";
		}
	}
	
	@RequestMapping(value = "/updata_auth", method = RequestMethod.POST)
	public @ResponseBody String Updata_Auth_ByNumber(@RequestParam("number")String number, 
			@RequestParam("authority")String authority){
		int re = userService.Updata_Auth_ByNumber(number, authority);
		if (re == 1) {
			return "1";
		}else{
			return "0";
		}
	}
	
	@RequestMapping(value = "/updatauser", method = RequestMethod.POST)
	public @ResponseBody String UpdataUserPWD(@ModelAttribute("user") User user){
		int re = userService.UpdataUser(user);
		if (re == 1) {
			return "1";
		}else{
			return "0";
		}
	}
	
	@RequestMapping(value = "/updatauser_all", method = RequestMethod.POST)
	public @ResponseBody String UpdataUser(@ModelAttribute("user") User user){
		int re = userService.UpdataUser_All(user);
		if (re == 1) {
			return "1";
		}else{
			return "0";
		}
	}
	
	@RequestMapping(value = "/delete_user", method = RequestMethod.GET)
	public @ResponseBody String Delete_User(@RequestParam("id")int id){
		int re = userService.Delete_User(id);
		if (re == 1) {
			return "1";
		}else{
			return "0";
		}
	}
	
}
