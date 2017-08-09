DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` varchar(32) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `age` int(3) DEFAULT NULL,
  `sex` int(1) DEFAULT NULL,
  `dept_name` varchar(32) DEFAULT NULL,
  `dept_id` varchar(32) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `create_id` varchar(32) DEFAULT NULL,
  `create_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;