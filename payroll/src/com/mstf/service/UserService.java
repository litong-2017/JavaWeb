package com.mstf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mstf.dao.UserMapper;
import com.mstf.entity.User;
@Service
public class UserService {
	@Autowired
	private UserMapper userMapper;

	public List<User> See_User(){
		return userMapper.See_User();
	}

	public List<User> See_User_Id(int id){
		return userMapper.See_User_Id(id);
	}
	
	public List<User> See_Auth(){
		return userMapper.See_Auth();
	}
	
	public List<User> See_User_ByExample(){
		return userMapper.See_User();
	}

	public int Add_User(User user){
		return userMapper.insert(user);
	}
	

	/*
	 * �޸�����
	 * ������Ӱ�������
	 * */
	public int UpdataPwd(String pwd, String numbre){
		return userMapper.UpdataPwdByNumber(pwd, numbre);
	}
	
	/*
	 * �޸�����
	 * ������Ӱ�������
	 * */
	public int Updata_Auth_ByNumber(String number, String authority){
		return userMapper.Updata_Auth_ByNumber(number, authority);
	}
	/*
	 * �޸� Ա��
	 * ������Ӱ�������
	 * */
	public int UpdataUser(User user){
		return userMapper.UpdataUser(user);
	}
	
	/*
	 * �޸� Ա��
	 * ������Ӱ�������
	 * */
	public int UpdataUser_All(User user){
		return userMapper.UpdataUser_All(user);
	}
	
	public List<User> Search_Salary_ByName(String name){
		return userMapper.Search_Salary_ByName(name);
	}
	
	/*
	 * ɾ�� ����
	 * ������Ӱ�������
	 * */
	public int Delete_User(int id){
		return userMapper.deleteByPrimaryKey(id);
	}
	
}
