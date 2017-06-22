package com.mstf.action;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mstf.entity.Prize;
import com.mstf.service.PrizeService;
//工资项控制器，工资项页的增、删、改、查
@Controller
public class PrizeController {
	@Autowired
	private PrizeService prizeService;
	
	@ResponseBody
	@RequestMapping(value = "/see_price", method = RequestMethod.GET)
	public List<Prize> see_prize() throws ParseException{
			List<Prize> prizeList = prizeService.See_Prize();
			return prizeList;
	}
	@ResponseBody
	@RequestMapping(value = "/add_prize")
	public String add_prize(@RequestParam("prize_type")String prize_type, 
			@RequestParam("prizes")int prizes){
		Prize prize = new Prize();
		prize.setPrizes(prizes);
		prize.setPrizeType(prize_type);
		prize.setPrizeTime(new SimpleDateFormat("yyyy/MM/dd").format(new Date()));
			int re = prizeService.Add_Prize(prize);
			if (re == 0) {
				return "0";
			} else {
				System.out.println("======添加成功======");
				return "1";
			}
	}
	
	@RequestMapping(value = "/updata_prizes", method = RequestMethod.POST)
	public @ResponseBody String Updata_Prizes_ByPrize_Type(@RequestParam("prize_Type")String prize_Type, 
			@RequestParam("prizes")int prizes){
		String time = new SimpleDateFormat("yyyy/MM/dd").format(new Date());
		int re = prizeService.Updata_Prizes_ByPrize_Type(prize_Type, prizes, time);
		if (re == 1) {
			return "1";
		}else{
			return "0";
		}
	}
	
	@RequestMapping(value = "/delete_prize", method = RequestMethod.POST)
	public @ResponseBody String Delete_Prize_Id(@RequestParam("prize_id")int prize_id){
		int re = prizeService.Delete_Prize_Id(prize_id);
		if (re == 1) {
			return "1";
		}else{
			return "0";
		}
	}
	
}