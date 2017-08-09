package com.ways.user.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.ways.user.entity.User;
import com.ways.user.service.UserService;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Controller
@RequestMapping("/userController")
public class UserController {
	@Autowired
	public UserService userService ;
	
	@RequestMapping("/insertUser") 
	public String test(ModelMap map){
		User user = new User() ;
		user.setName("admin");
		user.setSex("1");
		user.setCreateId("0");
		user.setCreateTime(new Date()) ; 
		user.setCreateName("admin");
		userService.insertUser(user);
		return "test" ;
	}
	
	@RequestMapping("/getUserList")
	@ResponseBody
	public List getUserList(ModelAndView model){
		Map param =new HashMap() ;
		List list = userService.getUserList(param) ;
		model.addObject("aaa", list) ;
		//model.setViewName("userList");
		return list ;
	}
	
	@RequestMapping("/getUserById")
	@ResponseBody
	public User getUserById(ModelAndView model){
		Map param =new HashMap() ;
		User user = userService.getUserById("402895075d788dae015d788dd82a0000") ;
		//model.setViewName("userList");
		return user ;
	}
	
	@RequestMapping("/getUserRoleResources")
	@ResponseBody
	public JSONArray getUserRoleResources(){
		String jsonArray =
		"[{\"id\":1,\"text\":\"Folder1\",\"iconCls\":\"icon-save\",\"children\":[{"+
			"\"text\":\"File1\",\"checked\":true,\"url\":\"page/test.html\"},{\"text\":\"Books\","+
			"\"state\":\"open\",\"attributes\":{\"url\":\"page/test.html\","+
			"\"price\":100},\"children\":[{\"text\":\"PhotoShop\",\"checked\":true"+
			"}]}]},{\"text\":\"Languages\",\"state\":\"closed\",\"children\":[{"+
			"\"text\":\"Java\"},{\"text\":\"C#\",\"url\":\"page/userRoleResource/userRoleResourceList.html\"}]}]" ;
		Map map = new HashMap() ;
		//JsonObject jsonObject = new JsonObject() ;
		JSONObject jsonObject = new JSONObject() ;
		JSONArray tree = JSONArray.fromObject(jsonArray) ;
		return tree ;
	}
}
