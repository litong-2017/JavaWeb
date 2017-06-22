package com.mstf.action;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import poi.ExcelUtil;
import poi.IExcelExport;
import poi.impl.RecordExport;
import poi.impl.consumer.RecordComsumer;
import poi.model.Sala;

import com.mstf.entity.Salary;
import com.mstf.entity.User;
import com.mstf.service.SalaryService;
import com.mstf.service.UserService;
//工资控制器，工资页的增、删、改、查
@Controller
public class SalaryController {
	@Autowired
	private SalaryService salaryService;
	@Autowired
	private UserService userService;

	@ResponseBody
	@RequestMapping(value = "/add_salary")
	public String add_salary(@RequestParam("level") String level,
			@RequestParam("base") int base) {
		Salary salary = new Salary();
		salary.setSalaryId(null);
		salary.setLevel(level);
		salary.setBase(base);
		int re = salaryService.Add_Salary(salary);
		if (re == 0) {
			return "0";
		} else {
			System.out.println("======添加成功======");
			return "1";
		}
	}
	
	@ResponseBody
	@RequestMapping(value = "/updata_salary", method = RequestMethod.POST)
	public String Updata_Salary_BySalary_Id(@RequestParam("salary_id")int salary_id, 
			@RequestParam("level")String level, @RequestParam("base")int base){
		int re = salaryService.Updata_BySalary_Id(salary_id, level, base);
		if (re == 1) {
			return "1";
		}else{
			return "0";
		}
	}
	@ResponseBody
	@RequestMapping(value = "/delete_salary", method = RequestMethod.POST)
	public String Delete_Salary_Id(@RequestParam("salary_id")int salary_id){
		int re = salaryService.Delete_Salary_Id(salary_id);
		if (re == 1) {
			return "1";
		}else{
			return "0";
		}
	}
	
	//查询 工资级别
	@ResponseBody
	@RequestMapping(value = "/see_salary",method=RequestMethod.GET)
	public List<Salary> see_salary(){
		List<Salary> salarylist=salaryService.See_Salary();
		return salarylist;
	}
	
	@RequestMapping(value = "/see_salary_all",method=RequestMethod.GET)
	public @ResponseBody List<User> see_salary_all(){
		List<User> seesalarylist=salaryService.See_Salary_All();
		return seesalarylist;
	}
	@ResponseBody
	@RequestMapping(value = "/search_salary_byname", method = RequestMethod.POST)
	public List<User> Search_Salary_ByName(@RequestParam("name")String name){
		System.out.println(name);
		if (name.equals("")) {
			name = null;
		}
		List<User> salaryList = userService.Search_Salary_ByName(name);
		return salaryList;
	}
	
	//导出工资表的Excel的操作
	@ResponseBody
	@RequestMapping(value = "/excel", method = RequestMethod.GET)
	public void excel(HttpServletResponse response, HttpServletRequest request) throws UnsupportedEncodingException{
		//数据集
		List<User> seesalarylist=salaryService.See_Salary_All();
		//Excel对象
		IExcelExport excelExport = new RecordExport();
		//放入数据
        List<Sala> recordPoiList = new ArrayList<Sala>();
        	for (User u:seesalarylist) {
        		Sala recordPoi = new Sala();
                recordPoi.setId(u.getId());
                recordPoi.setNumber(u.getNumber());
                recordPoi.setName(u.getName());
                recordPoi.setDept_name(u.getDeptName());
                recordPoi.setLevel(u.getLevel());
                if (u.getSalary().getBase() == null) {
                	recordPoi.setBase(0);
				}else{
					recordPoi.setBase(u.getSalary().getBase());
				}
                if (u.getSubsidy().getSubsidys() == null) {
                	recordPoi.setSubsidys(0);
                }else{
                	recordPoi.setSubsidys(u.getSubsidy().getSubsidys());
                }
                if(u.getPrize() == null){
                	recordPoi.setPrizes(0);
                }else{
                	recordPoi.setPrizes(u.getPrize().getPrizes());
                }
                if(u.getCheck_job().getChecks() == null){
                	recordPoi.setChecks(0);
                }else{
                	recordPoi.setChecks(u.getCheck_job().getChecks());
                }
                //计算 工资
                recordPoi.setYfgz(recordPoi.getBase()+recordPoi.getPrizes()+recordPoi.getSubsidys());
                recordPoi.setSfgz(recordPoi.getBase()+recordPoi.getPrizes()+recordPoi.getSubsidys()+recordPoi.getChecks());
                //写入数据
                recordPoiList.add(recordPoi);
                
			}
        //写入数据  
        excelExport.setPoiList(recordPoiList);
        System.out.println("ExcelSize:" + excelExport.getPoiList().size() + "大小");
        String fileName = System.getProperty("java.io.tmpdir") + File.separator + excelExport.getTitle();
        System.out.println("=========" + excelExport.getTitle());
        request.setCharacterEncoding("utf-8");
        request.setAttribute("filename_excel", "工资表(" + new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()) + ").xls");
        File file = new File(fileName);
        System.out.println("生成Excel的路径:" + file.getAbsolutePath());
        OutputStream out = null;
        try {
            out = new FileOutputStream(file);
            ExcelUtil.export(excelExport, out);

            ExcelUtil.excelImport(file, fileName, new RecordComsumer());
            //输入对象
            System.out.println("==============完成 响应==============");
            FileInputStream fileInputStream = new FileInputStream(file);
            //设置Http响应头告诉浏览器下载这个附件
            response.setContentType("application/x-msdownload");
            
            String filename = "";
            String agent = request.getHeader("USER-AGENT");
            
            if (null!=agent&& -1 != agent.indexOf("Mozilla")) {//Mozilla
            	filename = new String(excelExport.getTitle().getBytes("UTF-8"),"iso-8859-1");
			}else{
				filename = java.net.URLDecoder.decode(excelExport.getTitle(), "UTF-8");
			}
            
            response.setHeader("Content-Disponsition", "attachment;filename=" + filename);
            out = response.getOutputStream();
            byte[] bytes = new byte[2048];
            int len = 0;
            while ((len = fileInputStream.read(bytes)) > 0) {
            	out.write(bytes, 0, len);
			}
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                out.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
		return ;
}
}