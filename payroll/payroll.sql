/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50149
Source Host           : localhost:3306
Source Database       : payroll

Target Server Type    : MYSQL
Target Server Version : 50149
File Encoding         : 65001

Date: 2017-06-17 05:23:24
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `check_job`
-- ----------------------------
DROP TABLE IF EXISTS `check_job`;
CREATE TABLE `check_job` (
  `check_id` int(11) NOT NULL AUTO_INCREMENT,
  `number` varchar(20) DEFAULT NULL,
  `check_type` varchar(255) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `checks` int(11) DEFAULT NULL,
  `time` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`check_id`),
  KEY `number` (`number`),
  CONSTRAINT `check_job_ibfk_1` FOREIGN KEY (`number`) REFERENCES `user` (`number`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of check_job
-- ----------------------------
INSERT INTO `check_job` VALUES ('3', '0120', '迟到', '2', '-200', '2017-05-23');
INSERT INTO `check_job` VALUES ('4', '0122', '早退', '2', '-100', '2017-05-25');
INSERT INTO `check_job` VALUES ('5', '0120', '早退', '1', '-50', '2017-05-17');

-- ----------------------------
-- Table structure for `dept`
-- ----------------------------
DROP TABLE IF EXISTS `dept`;
CREATE TABLE `dept` (
  `dept_id` int(11) NOT NULL AUTO_INCREMENT,
  `dept_name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`dept_id`),
  UNIQUE KEY `dept_name` (`dept_name`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dept
-- ----------------------------
INSERT INTO `dept` VALUES ('2', '事业发展部');
INSERT INTO `dept` VALUES ('5', '人事部');
INSERT INTO `dept` VALUES ('4', '行政部');
INSERT INTO `dept` VALUES ('3', '采购部');
INSERT INTO `dept` VALUES ('1', '门店部');

-- ----------------------------
-- Table structure for `prize`
-- ----------------------------
DROP TABLE IF EXISTS `prize`;
CREATE TABLE `prize` (
  `prize_id` int(11) NOT NULL AUTO_INCREMENT,
  `prize_type` varchar(20) DEFAULT NULL,
  `prizes` int(11) DEFAULT NULL,
  `prize_time` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`prize_id`),
  UNIQUE KEY `prize_type` (`prize_type`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of prize
-- ----------------------------
INSERT INTO `prize` VALUES ('1', '全勤奖', '500', '2017-05-10');
INSERT INTO `prize` VALUES ('2', '业务突出贡献奖', '1000', '2017-05-17');
INSERT INTO `prize` VALUES ('3', '业务能手奖', '800', '2017-05-17');

-- ----------------------------
-- Table structure for `salary`
-- ----------------------------
DROP TABLE IF EXISTS `salary`;
CREATE TABLE `salary` (
  `salary_id` int(11) NOT NULL AUTO_INCREMENT,
  `level` varchar(20) DEFAULT NULL,
  `base` int(11) DEFAULT NULL,
  PRIMARY KEY (`salary_id`),
  UNIQUE KEY `level` (`level`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of salary
-- ----------------------------
INSERT INTO `salary` VALUES ('1', '管理员', '6000');
INSERT INTO `salary` VALUES ('2', '店长', '12000');
INSERT INTO `salary` VALUES ('3', '门店-实习生', '3500');
INSERT INTO `salary` VALUES ('4', '门店-专一级', '4000');

-- ----------------------------
-- Table structure for `shop`
-- ----------------------------
DROP TABLE IF EXISTS `shop`;
CREATE TABLE `shop` (
  `shop_id` int(11) NOT NULL AUTO_INCREMENT,
  `shop_name` varchar(20) DEFAULT NULL,
  `address` varchar(20) DEFAULT NULL,
  `ower` varchar(20) DEFAULT NULL,
  `tip` varchar(225) DEFAULT NULL,
  PRIMARY KEY (`shop_id`),
  UNIQUE KEY `shop_name` (`shop_name`) USING BTREE,
  KEY `ower` (`ower`),
  CONSTRAINT `shop_ibfk_1` FOREIGN KEY (`ower`) REFERENCES `user` (`name`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shop
-- ----------------------------
INSERT INTO `shop` VALUES ('1', '天津路旗舰店', '天津路', null, null);
INSERT INTO `shop` VALUES ('2', '长虹路旗舰店', '长虹路', null, null);
INSERT INTO `shop` VALUES ('3', '武汉总公司', '武汉', null, null);

-- ----------------------------
-- Table structure for `subsidy`
-- ----------------------------
DROP TABLE IF EXISTS `subsidy`;
CREATE TABLE `subsidy` (
  `subsidy_id` int(11) NOT NULL AUTO_INCREMENT,
  `number` varchar(20) DEFAULT NULL,
  `subsidy_type` varchar(20) DEFAULT NULL,
  `subsidys` int(11) DEFAULT NULL,
  `subsidy_time` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`subsidy_id`),
  KEY `number` (`number`),
  CONSTRAINT `subsidy_ibfk_1` FOREIGN KEY (`number`) REFERENCES `user` (`number`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of subsidy
-- ----------------------------
INSERT INTO `subsidy` VALUES ('1', '0120', '吃饭', '500', '2017-05-11');
INSERT INTO `subsidy` VALUES ('2', '0122', '话费报销', '1200', '2017-05-17');
INSERT INTO `subsidy` VALUES ('3', '0010', '车费报销', '2000', '2017-05-23');
INSERT INTO `subsidy` VALUES ('4', '0120', '话费报销', '100', '2017-05-23');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` varchar(20) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `pwd` varchar(20) DEFAULT NULL,
  `sex` varchar(20) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `level` varchar(20) DEFAULT NULL,
  `authority` varchar(20) DEFAULT NULL,
  `dept_name` varchar(20) DEFAULT NULL,
  `shop_name` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `number_2` (`number`),
  KEY `dept_name` (`dept_name`),
  KEY `shop_name` (`shop_name`),
  KEY `name` (`name`),
  KEY `number` (`number`),
  KEY `level` (`level`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`dept_name`) REFERENCES `dept` (`dept_name`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `user_ibfk_2` FOREIGN KEY (`shop_name`) REFERENCES `shop` (`shop_name`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `user_ibfk_3` FOREIGN KEY (`level`) REFERENCES `salary` (`level`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '0000', 'admin', '123456', '男', '在职', '管理员', '管理员', '人事部', '天津路旗舰店', '11111', '1111@111');
INSERT INTO `user` VALUES ('2', '0010', '小王', '123456', '男', '在职', '店长', '店长', '行政部', '武汉总公司', '2222', '2222@222');
INSERT INTO `user` VALUES ('3', '0120', '小红', '123456', '女', '在职', '门店-实习生', '员工', '事业发展部', '长虹路旗舰店', '333', '333@333');
INSERT INTO `user` VALUES ('4', '0122', '小明', '123456', '男', '在职', '门店-实习生', '员工', '事业发展部', '天津路旗舰店', '444', '444@444');

-- ----------------------------
-- Table structure for `winning`
-- ----------------------------
DROP TABLE IF EXISTS `winning`;
CREATE TABLE `winning` (
  `winning_id` int(11) NOT NULL AUTO_INCREMENT,
  `number` varchar(20) DEFAULT NULL,
  `prize_type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`winning_id`),
  KEY `prize_type` (`prize_type`),
  KEY `winning_ibfk_1` (`number`),
  CONSTRAINT `winning_ibfk_1` FOREIGN KEY (`number`) REFERENCES `user` (`number`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `winning_ibfk_2` FOREIGN KEY (`prize_type`) REFERENCES `prize` (`prize_type`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of winning
-- ----------------------------
INSERT INTO `winning` VALUES ('1', '0120', '业务能手奖');
INSERT INTO `winning` VALUES ('2', '0122', '业务突出贡献奖');
INSERT INTO `winning` VALUES ('3', '0120', '业务突出贡献奖');
