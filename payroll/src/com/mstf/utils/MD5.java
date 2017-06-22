package com.mstf.utils;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
//密码MD5加密（未用到-_-）
public class MD5 {
	public static String getInstance(String plainText) throws NoSuchAlgorithmException{
		MessageDigest md = MessageDigest.getInstance("MD5");
		md.update(plainText.getBytes());
		return new BigInteger(1, md.digest()).toString(16);
	}
}
