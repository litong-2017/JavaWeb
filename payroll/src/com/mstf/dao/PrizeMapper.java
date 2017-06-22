package com.mstf.dao;

import com.mstf.entity.Prize;
import com.mstf.entity.PrizeExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
@Repository
public interface PrizeMapper {
	List<Prize> See_Prize();
	
    int Updata_Prizes_ByPrize_Type(@Param("prize_Type")String prize_Type,@Param("prizes") int prizes,@Param("time") String time);
	
    int countByExample(PrizeExample example);

    int deleteByExample(PrizeExample example);

    int deleteByPrimaryKey(Integer prizeId);
    
    int insert(Prize record);

    int insertSelective(Prize record);

    List<Prize> selectByExample(PrizeExample example);

    Prize selectByPrimaryKey(Integer prizeId);

    int updateByExampleSelective(@Param("record") Prize record, @Param("example") PrizeExample example);

    int updateByExample(@Param("record") Prize record, @Param("example") PrizeExample example);

    int updateByPrimaryKeySelective(Prize record);

    int updateByPrimaryKey(Prize record);
}