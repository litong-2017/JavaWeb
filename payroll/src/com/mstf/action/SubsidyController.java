package com.mstf.action;

import java.io.UnsupportedEncodingException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mstf.entity.Subsidy;
import com.mstf.service.SubsidyService;
//补贴项控制器，补贴项页的增、删、改、查
@Controller
public class SubsidyController {
	@Autowired
	private SubsidyService subsidyService;
	
	@ResponseBody
	@RequestMapping(value = "/add_subsidy")
	public String Add_Subsidy(@RequestParam("number")String number,
			@RequestParam("subsidyType")String subsidyType, 
			@RequestParam("subsidys")int subsidys){
		Subsidy subsidy = new Subsidy();
		subsidy.setSubsidyId(null);
		subsidy.setNumber(number);
		subsidy.setSubsidyType(subsidyType);
		subsidy.setSubsidys(subsidys);
		subsidy.setSubsidyTime(new SimpleDateFormat("yyyy/MM/dd").format(new Date()));
		int re = subsidyService.Add_Subsidy(subsidy);
		if (re == 0) {
			return "0";
		}else{
		return "1";
		}
	}
	
	@ResponseBody
	@RequestMapping(value = "/see_subsidy", method = RequestMethod.GET)
	public List<Subsidy> See_subsidy() {
		List<Subsidy> subsidyList = subsidyService.See_Subsidy();
		return subsidyList;
	}
	
	@ResponseBody
	@RequestMapping(value = "/search_subsidy_byname", method = RequestMethod.POST)
	public List<Subsidy> Search_Subsidy_ByName(@RequestParam("name")String name) throws UnsupportedEncodingException {
		if (name.equals("")) {
			name = null;
		}
		List<Subsidy> subsidyList = subsidyService.Search_Subsidy_ByName(name);
		return subsidyList;
	}
	
	@RequestMapping(value = "/updata_subsidy", method = RequestMethod.POST)
	public @ResponseBody String Updata_Subsidy_BySubsidy_Id(@RequestParam("subsidy_type")String subsidy_type, 
			@RequestParam("subsidys")int subsidys, @RequestParam("subsidy_id")int subsidy_id){
		String time = new SimpleDateFormat("yyyy/MM/dd").format(new Date());
		int re = subsidyService.Updata_Subsidy_BySubsidy_Id(subsidy_type, subsidys, time, subsidy_id);
		if (re == 1) {
			return "1";
		}else{
			return "0";
		}
	}
	
	@RequestMapping(value = "/delete_subsidy", method = RequestMethod.POST)
	public @ResponseBody String Delete_Subsidy_Id(@RequestParam("subsidy_id")int subsidy_id){
		int re = subsidyService.Delete_Subsidy_Id(subsidy_id);
		if (re == 1) {
			return "1";
		}else{
			return "0";
		}
	}
	
}
