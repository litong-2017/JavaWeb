package com.mstf.dao;

import com.mstf.entity.Shop;
import com.mstf.entity.ShopExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
@Repository
public interface ShopMapper {
	List<Shop> See_Shop();
	
    int countByExample(ShopExample example);

    int deleteByExample(ShopExample example);
    
    int Updata_Shop_ByShopName(@Param("shopName")String shopName, @Param("address") String address);
    
    int deleteByPrimaryKey(Integer shopId);

    int insert(Shop record);

    int insertSelective(Shop record);

    List<Shop> selectByExample(ShopExample example);

    Shop selectByPrimaryKey(Integer shopId);

    int updateByExampleSelective(@Param("record") Shop record, @Param("example") ShopExample example);

    int updateByExample(@Param("record") Shop record, @Param("example") ShopExample example);

    int updateByPrimaryKeySelective(Shop record);

    int updateByPrimaryKey(Shop record);
}