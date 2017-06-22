package com.mstf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mstf.dao.ShopMapper;
import com.mstf.entity.Shop;

@Service
public class ShopService {
	@Autowired
	private ShopMapper shopMapper;

	public List<Shop> See_Shop(){
		return shopMapper.See_Shop();
	}

	public int Add_Shop(Shop shop){
		return shopMapper.insert(shop);
	}

	public int Delete_Shop_Id(int shop_id){
		return shopMapper.deleteByPrimaryKey(shop_id);
	}
	
	public int Updata_Shop_ByShopName(String shopName, String address){
		return shopMapper.Updata_Shop_ByShopName(shopName, address);
	}
	
}
