package com.mstf.action;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mstf.entity.Dept;
import com.mstf.service.DeptService;
//部门控制器，部门页的增、删、改、查
@Controller
public class DeptController {
	@Autowired
	private DeptService deptService;
	
	@ResponseBody
	@RequestMapping(value = "/see_dept", method = RequestMethod.GET)
	public List<Dept> see_dept() {
		List<Dept> dept = deptService.See_Dept();
		return dept;
	}
		
	@ResponseBody
	@RequestMapping(value = "/add_dept")
	public String add_dept(@RequestParam("dept_name")String dept_name) {
		Dept dept = new Dept();
		dept.setDeptName(dept_name);
		int re = deptService.Add_Dept(dept);
		if (re == 0) {
			return "0";
		}else{
			return "1";
		}
	}
	
	@RequestMapping(value = "/updata_dept", method = RequestMethod.POST)
	public @ResponseBody String Updata_Dept_ByNumber(@RequestParam("dept_id")int dept_id, 
			@RequestParam("dept_name")String dept_name){
		int re = deptService.Updata_Dept_ByDept_Id(dept_id, dept_name);
		if (re == 1) {
			return "1";
		}else{
			return "0";
		}
	}
	
	@RequestMapping(value = "/delete_dept", method = RequestMethod.POST)
	public @ResponseBody String Delete_Dept_ByDept_Id(@RequestParam("dept_id")int dept_id){
		int re = deptService.Delete_Dept_ByDept_Id(dept_id);
		if (re == 1) {
			return "1";
		}else{
			return "0";
		}
	}
	
}
