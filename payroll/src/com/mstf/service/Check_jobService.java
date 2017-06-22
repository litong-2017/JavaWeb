package com.mstf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mstf.dao.Check_jobMapper;
import com.mstf.entity.Check_job;
@Service
public class Check_jobService {
	@Autowired
	private Check_jobMapper check_jobMapper;
	
	public List<Check_job> See_Check_job(){
		return check_jobMapper.See_Check_job();
	}
	
	public List<Check_job> See_Check_job_All(){
		return check_jobMapper.See_Check_job_All();
	}

	public int Add_Check_job(Check_job check_job){
		return check_jobMapper.insert(check_job);
	}
	
	public int Updata_Check_job_ByCheck_Id(int check_id, String check_type, int count, int checks, String time){
		return check_jobMapper.Updata_Check_job_ByCheck_Id(check_id, check_type, count, checks, time);
	}
	
	public int Delete_Check_job_ByCheck_Id(int check_id){
		return check_jobMapper.deleteByPrimaryKey(check_id);
	}
}
