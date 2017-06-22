package com.mstf.action;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mstf.entity.Check_job;
import com.mstf.service.Check_jobService;
//考勤控制器，考勤页的增、删、改、查
@Controller
public class Check_jobController {
	@Autowired
	private Check_jobService check_jobService;
	
	@ResponseBody
	@RequestMapping(value = "/see_check_job")
	public List<Check_job> see_check_job() {
		List<Check_job> ck = check_jobService.See_Check_job();
		return ck;
	}
	
	@ResponseBody
	@RequestMapping(value = "/see_check_job_all")
	public List<Check_job> See_Check_job_All() {
		List<Check_job> ck = check_jobService.See_Check_job_All();
		return ck;
	}

	@ResponseBody
	@RequestMapping(value = "/add_check_job")
	public String add_check_job(@RequestParam("number") String number,
			@RequestParam("check_type") String check_type,
			@RequestParam("checks") int checks, @RequestParam("count") int count) {
		Check_job check_job = new Check_job();
		check_job.setCheckType(check_type);
		check_job.setNumber(number);
		check_job.setChecks(checks);
		check_job.setCount(count);
		check_job.setTime(new SimpleDateFormat("yyyy/MM/dd").format(new Date()));
		int re = check_jobService.Add_Check_job(check_job);
		if (re == 0) {
			return "0";
		}else{
			return "1";
		}
	}
	
		@RequestMapping(value = "/updata_check_job", method = RequestMethod.POST)
		public @ResponseBody String Updata_Check_job_ByCheck_Id(@RequestParam("check_id")int check_id, 
				@RequestParam("check_type")String check_type, @RequestParam("count")int count,
				@RequestParam("checks")int checks){
			String time = new SimpleDateFormat("yyyy/MM/dd").format(new Date());
			int re = check_jobService.Updata_Check_job_ByCheck_Id(check_id, check_type, count, checks, time);
			if (re == 1) {
				return "1";
			}else{
				return "0";
			}
		}
		
		@RequestMapping(value = "/delete_check_job", method = RequestMethod.POST)
		public @ResponseBody String Delete_Check_job_ByCheck_Id(@RequestParam("check_id")int check_id){
			int re = check_jobService.Delete_Check_job_ByCheck_Id(check_id);
			if (re == 1) {
				return "1";
			}else{
				return "0";
			}
		}
		
}
