package com.mstf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mstf.dao.SalaryMapper;
import com.mstf.dao.UserMapper;
import com.mstf.entity.Prize;
import com.mstf.entity.Salary;
import com.mstf.entity.User;
@Service
public class SalaryService {
	@Autowired
	private SalaryMapper salaryMapper;
	@Autowired
	private UserMapper userMapper;
	
	public int Add_Salary(Salary salary){
		return salaryMapper.insert(salary);
	}
	
	public int Updata_BySalary_Id(int salary_id,String level, int base){
		return salaryMapper.Updata_BySalary_Id(salary_id, level, base);
	}
	
	public int Delete_Salary_Id(int salary_id){
		return salaryMapper.deleteByPrimaryKey(salary_id);
	}
	
	public List<Salary> See_Salary(){
		return salaryMapper.See_Salary();
	}
	
	public List<User> See_Salary_All(){
		return userMapper.See_Salary_All();
	}
}
