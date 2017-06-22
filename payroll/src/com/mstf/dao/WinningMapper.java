package com.mstf.dao;

import com.mstf.entity.Winning;
import com.mstf.entity.WinningExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
@Repository
public interface WinningMapper {
	
	int Updata_Winning_ByWinningId(@Param("winning_id")int winning_id, @Param("number")String number, @Param("prize_type")String prize_type);
	
	List<Winning> See_Call_Winning();
	
	List<Winning> See_Winning_All();
	
	List<Winning> See_Winning();
	
    int countByExample(WinningExample example);

    int deleteByExample(WinningExample example);

    int deleteByPrimaryKey(Integer winningId);

    int insert(Winning record);

    int insertSelective(Winning record);

    List<Winning> selectByExample(WinningExample example);

    Winning selectByPrimaryKey(Integer winningId);

    int updateByExampleSelective(@Param("record") Winning record, @Param("example") WinningExample example);

    int updateByExample(@Param("record") Winning record, @Param("example") WinningExample example);

    int updateByPrimaryKeySelective(Winning record);

    int updateByPrimaryKey(Winning record);
}