package com.mstf.action;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mstf.entity.Shop;
import com.mstf.service.ShopService;
//店铺控制器，店铺页的增、删、改、查
@Controller
public class ShopController {
	@Autowired
	private ShopService shopService;
	
	//增加 店铺
	@RequestMapping(value = "/add_shop")
	public @ResponseBody String add_shop(@RequestParam("shop_name")String shop_name, @RequestParam("address")String address){
		Shop shop = new Shop();
		shop.setAddress(address);
		shop.setShopName(shop_name);
		int re = shopService.Add_Shop(shop);
		if (re == 0) {
			return "0";
		}else{
		return "1";
		}
	}
	//删除 店铺
	@RequestMapping(value = "/delete_shop", method = RequestMethod.GET)
	public @ResponseBody String Delete_Shop_Id(@RequestParam("shop_id")int shop_id){
		int re = shopService.Delete_Shop_Id(shop_id);
		if (re == 1) {
			return "1";
		}else{
			return "0";
		}
	}
	//修改 店铺
	@RequestMapping(value = "/updata_shop", method = RequestMethod.POST)
	public @ResponseBody String Updata_Shop_ByShopName(@RequestParam("shopName")String shopName, 
			@RequestParam("address")String address){
		int re = shopService.Updata_Shop_ByShopName(shopName, address);
		if (re == 1) {
			return "1";
		}else{
			return "0";
		}
	}
	//查询 店铺
	@RequestMapping(value = "/see_shop", method = RequestMethod.GET)
	public @ResponseBody List<Shop> see_shop(){
		List<Shop> shopList = shopService.See_Shop();
		return shopList;
	}
}
