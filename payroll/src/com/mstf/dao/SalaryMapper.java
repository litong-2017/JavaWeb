package com.mstf.dao;

import com.mstf.entity.Salary;
import com.mstf.entity.SalaryExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
@Repository
public interface SalaryMapper {
	
	List<Salary> See_Salary();
	
	int Updata_BySalary_Id(@Param("salary_id")int salary_id,@Param("level") String level,@Param("base") int base);
	
    int countByExample(SalaryExample example);

    int deleteByExample(SalaryExample example);

    int deleteByPrimaryKey(Integer salaryId);

    int insert(Salary record);

    int insertSelective(Salary record);

    List<Salary> selectByExample(SalaryExample example);

    Salary selectByPrimaryKey(Integer salaryId);

    int updateByExampleSelective(@Param("record") Salary record, @Param("example") SalaryExample example);

    int updateByExample(@Param("record") Salary record, @Param("example") SalaryExample example);

    int updateByPrimaryKeySelective(Salary record);

    int updateByPrimaryKey(Salary record);
}