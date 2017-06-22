package com.mstf.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mstf.dao.UserMapper;
import com.mstf.entity.User;

@Service
public class Login_CheckService {
	@Autowired
	private UserMapper userMapper;
	
	public int Login_Check(String name, String pwd){
		return userMapper.login_Check(name, pwd);
	}
	
	public User Save_Login(String name, String pwd){
		return userMapper.See_User_ByName(name, pwd);
	}
}
