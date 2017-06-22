package com.mstf.dao;

import com.mstf.entity.Check_job;
import com.mstf.entity.Check_jobExample;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
@Repository
public interface Check_jobMapper {
	List<Check_job> See_Check_job();
	
	List<Check_job> See_Check_job_All();
	
	int Updata_Check_job_ByCheck_Id(@Param("check_id")int check_id, @Param("check_type")String check_type,
			@Param("count")int count,@Param("checks")int checks, @Param("time")String time);
	
    int countByExample(Check_jobExample example);

    int deleteByExample(Check_jobExample example);

    int deleteByPrimaryKey(Integer checkId);

    int insert(Check_job record);

    int insertSelective(Check_job record);

    List<Check_job> selectByExample(Check_jobExample example);

    Check_job selectByPrimaryKey(Integer checkId);

    int updateByExampleSelective(@Param("record") Check_job record, @Param("example") Check_jobExample example);

    int updateByExample(@Param("record") Check_job record, @Param("example") Check_jobExample example);

    int updateByPrimaryKeySelective(Check_job record);

    int updateByPrimaryKey(Check_job record);
}