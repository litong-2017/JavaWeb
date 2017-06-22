package com.mstf.action;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mstf.entity.Winning;
import com.mstf.service.WinningService;
//获奖记录控制器，获奖记录页的增、删、改、查
@Controller
public class WinningController {
	@Autowired
	private WinningService winningService;

	//增加 奖金记录
	@ResponseBody
	@RequestMapping(value = "/add_winning")
	public String add_winning(@RequestParam("number")String number, @RequestParam("prizeType")String prize_type) {
		Winning winning = new Winning();
		winning.setNumber(number);
		winning.setPrizeType(prize_type);
		int re = winningService.Add_Winning(winning);
		if (re == 0) {
			return "0";
		}else{
		return "1";
		}
	}
	//删除 奖金记录
	@ResponseBody
	@RequestMapping(value = "/delete_winning")
	public String delete_winning(@RequestParam("winning_id")int winning_id) {
		int re = winningService.deleteByPrimaryKey(winning_id);
		if (re == 0) {
			return "0";
		}else{
		return "1";
		}
	}
	//修改 店铺
	@ResponseBody
	@RequestMapping(value = "/updata_winning", method = RequestMethod.POST)
	public String Updata_Winning_ByWinningId(@RequestParam("winning_id")int winning_id, 
			@RequestParam("number")String number, @RequestParam("prizeType")String prize_type){
		int re = winningService.Updata_Winning_ByWinningId(winning_id, number, prize_type);
		if (re == 1) {
			return "1";
		}else{
			return "0";
		}
	}
	//查询 奖金记录
	@ResponseBody
	@RequestMapping(value = "/see_call_winning", method = RequestMethod.GET)
	public List<Winning> See_Call_Winning(){
		List<Winning> winninglist=winningService.See_Call_Winning();
		return winninglist;
	}
	
}
