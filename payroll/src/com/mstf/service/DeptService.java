package com.mstf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.mstf.dao.DeptMapper;
import com.mstf.entity.Dept;

@Service
public class DeptService {
	@Autowired
	private DeptMapper deptMapper;
	
	public List<Dept> See_Dept(){
		return deptMapper.See_Dept();
	}

	public int Add_Dept(Dept dept){
		return deptMapper.insert(dept);
	}
	
	public int Updata_Dept_ByDept_Id(int dept_id, String dept_name){
		return deptMapper.Updata_Dept_ByDept_Id(dept_id, dept_name);
	}
	
	public int Delete_Dept_ByDept_Id(int dept_id){
		return deptMapper.deleteByPrimaryKey(dept_id);
	}
	
}
