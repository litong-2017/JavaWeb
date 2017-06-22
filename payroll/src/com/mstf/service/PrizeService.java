package com.mstf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mstf.dao.PrizeMapper;
import com.mstf.entity.Prize;

@Service
public class PrizeService {
	@Autowired
	private PrizeMapper prizeMapper;

	public List<Prize> See_Prize(){
		return prizeMapper.See_Prize();
	}

	public int Add_Prize(Prize prize){
		return prizeMapper.insert(prize);
	}

	public int Updata_Prizes_ByPrize_Type(String prize_Type, int prizes, String time){
		return prizeMapper.Updata_Prizes_ByPrize_Type(prize_Type, prizes, time);
	}
	
	public int Delete_Prize_Id(int prize_id){
		return prizeMapper.deleteByPrimaryKey(prize_id);
	}
}
