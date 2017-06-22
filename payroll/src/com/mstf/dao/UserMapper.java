package com.mstf.dao;

import com.mstf.entity.User;
import com.mstf.entity.UserExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
@Repository
public interface UserMapper {
	int login_Check(@Param("name")String name, @Param("pwd")String pwd);
	
	int Updata_Auth_ByNumber(@Param("number")String number, @Param("authority")String authority);
	
	int UpdataUser(User user);
	
	int UpdataUser_All(User user);
	
	List<User> Search_Salary_ByName(@Param("name")String name);
	
	User See_User_ByName(@Param("name")String name, @Param("pwd")String pwd);
	
	List<User> See_User();
	
	List<User> See_User_Id(@Param("id")int id);
	
	List<User> See_Auth();
	
	List<User> See_Salary_All();
	
	int UpdataPwdByNumber(String pwd, String numbre);
	
    int countByExample(UserExample example);

    int deleteByExample(UserExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(User record);

    int insertSelective(User record);

    List<User> selectByExample(UserExample example);

    User selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") User record, @Param("example") UserExample example);

    int updateByExample(@Param("record") User record, @Param("example") UserExample example);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);
}