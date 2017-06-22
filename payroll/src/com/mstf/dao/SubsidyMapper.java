package com.mstf.dao;

import com.mstf.entity.Subsidy;
import com.mstf.entity.SubsidyExample;

import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface SubsidyMapper {
	
	List<Subsidy> See_Subsidy();
	
	List<Subsidy> Search_Subsidy_ByName(@Param("name")String name);
	
	 int Updata_Subsidy_BySubsidy_Id(@Param("subsidy_type")String subsidy_type,@Param("subsidys") int subsidys,@Param("time") String time,@Param("subsidy_id") int subsidy_id);
	
    int countByExample(SubsidyExample example);

    int deleteByExample(SubsidyExample example);

    int deleteByPrimaryKey(Integer subsidyId);

    int insert(Subsidy record);

    int insertSelective(Subsidy record);

    List<Subsidy> selectByExample(SubsidyExample example);

    Subsidy selectByPrimaryKey(Integer subsidyId);

    int updateByExampleSelective(@Param("record") Subsidy record, @Param("example") SubsidyExample example);

    int updateByExample(@Param("record") Subsidy record, @Param("example") SubsidyExample example);

    int updateByPrimaryKeySelective(Subsidy record);

    int updateByPrimaryKey(Subsidy record);
}