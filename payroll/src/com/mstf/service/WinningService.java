package com.mstf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.mstf.dao.WinningMapper;
import com.mstf.entity.Winning;
@Service
public class WinningService {
	@Autowired
	private WinningMapper winningMapper;
	
	public List<Winning> See_Call_Winning() {
		return winningMapper.See_Call_Winning();
	}

	public List<Winning> See_Winning() {
		return winningMapper.See_Winning();
	}

	public List<Winning> See_Winning_All() {
		return winningMapper.See_Winning_All();
	}

	public int Add_Winning(Winning winning) {
		return winningMapper.insert(winning);
	}

	public int deleteByPrimaryKey(int winning_id) {
		return winningMapper.deleteByPrimaryKey(winning_id);
	}
	
	public int Updata_Winning_ByWinningId(int winning_id, String number, String prize_type){
		return winningMapper.Updata_Winning_ByWinningId(winning_id, number, prize_type);
	}
}
