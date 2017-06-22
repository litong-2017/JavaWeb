package com.mstf.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;
//定义登录拦截器
public class LoginInterceptor implements HandlerInterceptor{
	
	//未登录(无session)则不能进入主页
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response,
            Object handler) throws Exception {
        String url = request.getRequestURI();
        if(url.indexOf("login.form") >= 0){
            return true;
        }
        HttpSession session = request.getSession();
        String name = (String) session.getAttribute("name");
        if(name != null){
            return true;    
        }
        request.getRequestDispatcher("/WEB-INF/login.jsp").forward(request, response);
        return false;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response,
            Object handler, ModelAndView modelAndView) throws Exception {

    }
    @Override
    public void afterCompletion(HttpServletRequest request,
            HttpServletResponse response, Object handler, Exception ex)
            throws Exception {
    }
}