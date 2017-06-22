package com.mstf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mstf.dao.SubsidyMapper;
import com.mstf.entity.Subsidy;

@Service
public class SubsidyService {
	@Autowired
	private SubsidyMapper subsidyMapper;

	public List<Subsidy> See_Subsidy(){
		return subsidyMapper.See_Subsidy();
	}
	
	public int Add_Subsidy(Subsidy subsidy){
		return subsidyMapper.insert(subsidy);
	}

	public int Updata_Subsidy_BySubsidy_Id(String subsidy_type, int subsidys, String time, int subsidy_id){
		return subsidyMapper.Updata_Subsidy_BySubsidy_Id(subsidy_type, subsidys, time, subsidy_id);
	}
	
	public int Delete_Subsidy_Id(int prize_id){
		return subsidyMapper.deleteByPrimaryKey(prize_id);
	}
	
	public List<Subsidy> Search_Subsidy_ByName(String name){
		return subsidyMapper.Search_Subsidy_ByName(name);
	}
}
