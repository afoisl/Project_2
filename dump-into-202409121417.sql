-- MariaDB dump 10.19  Distrib 10.11.7-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: into
-- ------------------------------------------------------
-- Server version	10.11.7-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Sequence structure for `stream_lecture_seq`
--

DROP SEQUENCE IF EXISTS `stream_lecture_seq`;
CREATE SEQUENCE `stream_lecture_seq` start with 1 minvalue 1 maxvalue 9223372036854775806 increment by 50 nocache nocycle ENGINE=InnoDB;
SELECT SETVAL(`stream_lecture_seq`, 1, 0);

--
-- Table structure for table `authority`
--

DROP TABLE IF EXISTS `authority`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `authority` (
  `authority_name` varchar(50) NOT NULL,
  PRIMARY KEY (`authority_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authority`
--

LOCK TABLES `authority` WRITE;
/*!40000 ALTER TABLE `authority` DISABLE KEYS */;
INSERT INTO `authority` VALUES
('ROLE_ADMIN'),
('ROLE_TEACHER'),
('ROLE_USER');
/*!40000 ALTER TABLE `authority` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `board_reply`
--

DROP TABLE IF EXISTS `board_reply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `board_reply` (
  `board_reply_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `reply_text` varchar(255) DEFAULT NULL,
  `write_date` date DEFAULT NULL,
  `study_board_study_board_id` int(11) DEFAULT NULL,
  `user_user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`board_reply_id`),
  KEY `FK1s8cix4728m08to6316rsgjy7` (`study_board_study_board_id`),
  KEY `FKaijx1ym59jiwfoj0trpcu923h` (`user_user_id`),
  CONSTRAINT `FK1s8cix4728m08to6316rsgjy7` FOREIGN KEY (`study_board_study_board_id`) REFERENCES `study_board` (`study_board_id`),
  CONSTRAINT `FKaijx1ym59jiwfoj0trpcu923h` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board_reply`
--

LOCK TABLES `board_reply` WRITE;
/*!40000 ALTER TABLE `board_reply` DISABLE KEYS */;
/*!40000 ALTER TABLE `board_reply` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `book` (
  `store_item_id` int(11) NOT NULL,
  `book_name` varchar(255) DEFAULT NULL,
  `book_price` int(11) DEFAULT NULL,
  `book_img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`store_item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES
(2,'67패턴',15000,'./assets/img/67패턴.png');
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chat_messages`
--

DROP TABLE IF EXISTS `chat_messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chat_messages` (
  `chat_message_id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL,
  `sender` varchar(255) DEFAULT NULL,
  `sent_at` datetime(6) DEFAULT NULL,
  `type` tinyint(4) DEFAULT NULL CHECK (`type` between 0 and 2),
  `study_room_st_room_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`chat_message_id`),
  KEY `FKsvpfxlnnc0mgspda51859ihhg` (`study_room_st_room_id`),
  CONSTRAINT `FKsvpfxlnnc0mgspda51859ihhg` FOREIGN KEY (`study_room_st_room_id`) REFERENCES `study_room` (`st_room_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chat_messages`
--

LOCK TABLES `chat_messages` WRITE;
/*!40000 ALTER TABLE `chat_messages` DISABLE KEYS */;
/*!40000 ALTER TABLE `chat_messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chat_user`
--

DROP TABLE IF EXISTS `chat_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chat_user` (
  `chat_user_id` int(11) NOT NULL AUTO_INCREMENT,
  `study_room_st_room_id` int(11) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`chat_user_id`),
  KEY `FK70ba1xt76um51wh39et1c7nij` (`study_room_st_room_id`),
  KEY `FK3my5637ob80l32xwbdgrtvms` (`user_id`),
  CONSTRAINT `FK3my5637ob80l32xwbdgrtvms` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FK70ba1xt76um51wh39et1c7nij` FOREIGN KEY (`study_room_st_room_id`) REFERENCES `study_room` (`st_room_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chat_user`
--

LOCK TABLES `chat_user` WRITE;
/*!40000 ALTER TABLE `chat_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `chat_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coupon`
--

DROP TABLE IF EXISTS `coupon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `coupon` (
  `coupon_id` int(11) NOT NULL AUTO_INCREMENT,
  `detail_coupon_id` int(11) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`coupon_id`),
  KEY `FKagxm4i2x469lk6lhx5qx52ce1` (`detail_coupon_id`),
  KEY `FKmfuic7ht7p0xvyoxhq9oydhal` (`user_id`),
  CONSTRAINT `FKagxm4i2x469lk6lhx5qx52ce1` FOREIGN KEY (`detail_coupon_id`) REFERENCES `coupon_detail` (`detail_coupon_id`),
  CONSTRAINT `FKmfuic7ht7p0xvyoxhq9oydhal` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coupon`
--

LOCK TABLES `coupon` WRITE;
/*!40000 ALTER TABLE `coupon` DISABLE KEYS */;
/*!40000 ALTER TABLE `coupon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coupon_detail`
--

DROP TABLE IF EXISTS `coupon_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `coupon_detail` (
  `detail_coupon_id` int(11) NOT NULL AUTO_INCREMENT,
  `coupon_image` varchar(255) DEFAULT NULL,
  `coupon_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`detail_coupon_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coupon_detail`
--

LOCK TABLES `coupon_detail` WRITE;
/*!40000 ALTER TABLE `coupon_detail` DISABLE KEYS */;
/*!40000 ALTER TABLE `coupon_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `delivery`
--

DROP TABLE IF EXISTS `delivery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `delivery` (
  `delivery_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `purchase_purchase_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`delivery_id`),
  UNIQUE KEY `UKf12uo33484toy7md92tdbs4dj` (`purchase_purchase_id`),
  CONSTRAINT `FK14xakv3q8x1ydunikgnq384hr` FOREIGN KEY (`purchase_purchase_id`) REFERENCES `purchase` (`purchase_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery`
--

LOCK TABLES `delivery` WRITE;
/*!40000 ALTER TABLE `delivery` DISABLE KEYS */;
/*!40000 ALTER TABLE `delivery` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `edu_tech`
--

DROP TABLE IF EXISTS `edu_tech`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `edu_tech` (
  `edu_tech_id` int(11) NOT NULL AUTO_INCREMENT,
  `att_status` bit(1) DEFAULT NULL,
  `progress` int(11) DEFAULT NULL,
  `lecture_store_item_id` int(11) DEFAULT NULL,
  `user_user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`edu_tech_id`),
  KEY `FK8u2c0ur45xfuua1yymeh4loou` (`lecture_store_item_id`),
  KEY `FKalh7ubpcfe01e3gua4l2lkt5y` (`user_user_id`),
  CONSTRAINT `FK8u2c0ur45xfuua1yymeh4loou` FOREIGN KEY (`lecture_store_item_id`) REFERENCES `lecture` (`store_item_id`),
  CONSTRAINT `FKalh7ubpcfe01e3gua4l2lkt5y` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `edu_tech`
--

LOCK TABLES `edu_tech` WRITE;
/*!40000 ALTER TABLE `edu_tech` DISABLE KEYS */;
/*!40000 ALTER TABLE `edu_tech` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game`
--

DROP TABLE IF EXISTS `game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `game` (
  `game_id` int(11) NOT NULL AUTO_INCREMENT,
  `game_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`game_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game`
--

LOCK TABLES `game` WRITE;
/*!40000 ALTER TABLE `game` DISABLE KEYS */;
/*!40000 ALTER TABLE `game` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game_attendance`
--

DROP TABLE IF EXISTS `game_attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `game_attendance` (
  `game_att_id` int(11) NOT NULL AUTO_INCREMENT,
  `att_date` date DEFAULT NULL,
  `user_user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`game_att_id`),
  KEY `FK49xnf5darjq9jd1m7x7fd1spk` (`user_user_id`),
  CONSTRAINT `FK49xnf5darjq9jd1m7x7fd1spk` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game_attendance`
--

LOCK TABLES `game_attendance` WRITE;
/*!40000 ALTER TABLE `game_attendance` DISABLE KEYS */;
/*!40000 ALTER TABLE `game_attendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game_cart`
--

DROP TABLE IF EXISTS `game_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `game_cart` (
  `game_cart_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`game_cart_id`),
  KEY `FK6ask4qefr3nf5onoyc4u0q2yr` (`user_user_id`),
  CONSTRAINT `FK6ask4qefr3nf5onoyc4u0q2yr` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game_cart`
--

LOCK TABLES `game_cart` WRITE;
/*!40000 ALTER TABLE `game_cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `game_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game_grade`
--

DROP TABLE IF EXISTS `game_grade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `game_grade` (
  `game_grade_name` varchar(255) NOT NULL,
  `high_limit` int(11) DEFAULT NULL,
  `low_limit` int(11) DEFAULT NULL,
  PRIMARY KEY (`game_grade_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game_grade`
--

LOCK TABLES `game_grade` WRITE;
/*!40000 ALTER TABLE `game_grade` DISABLE KEYS */;
/*!40000 ALTER TABLE `game_grade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game_item`
--

DROP TABLE IF EXISTS `game_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `game_item` (
  `game_item_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `game_item_name` varchar(255) DEFAULT NULL,
  `game_item_price` int(11) DEFAULT NULL,
  `game_cart_game_cart_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`game_item_id`),
  KEY `FKiebs9vws1e2wo4thg4cfwpmah` (`game_cart_game_cart_id`),
  CONSTRAINT `FKiebs9vws1e2wo4thg4cfwpmah` FOREIGN KEY (`game_cart_game_cart_id`) REFERENCES `game_cart` (`game_cart_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game_item`
--

LOCK TABLES `game_item` WRITE;
/*!40000 ALTER TABLE `game_item` DISABLE KEYS */;
/*!40000 ALTER TABLE `game_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game_point`
--

DROP TABLE IF EXISTS `game_point`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `game_point` (
  `game_point_id` int(11) NOT NULL AUTO_INCREMENT,
  `point` int(11) DEFAULT NULL,
  `point_date` date DEFAULT NULL,
  `game_game_id` int(11) DEFAULT NULL,
  `user_user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`game_point_id`),
  KEY `FKq74cg9bk8a6op9xwmhhn1fb5t` (`game_game_id`),
  KEY `FKb0jdvtbo8w16sxg9on5q4o7j5` (`user_user_id`),
  CONSTRAINT `FKb0jdvtbo8w16sxg9on5q4o7j5` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKq74cg9bk8a6op9xwmhhn1fb5t` FOREIGN KEY (`game_game_id`) REFERENCES `game` (`game_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game_point`
--

LOCK TABLES `game_point` WRITE;
/*!40000 ALTER TABLE `game_point` DISABLE KEYS */;
/*!40000 ALTER TABLE `game_point` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lec_content`
--

DROP TABLE IF EXISTS `lec_content`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lec_content` (
  `content_id` int(11) NOT NULL AUTO_INCREMENT,
  `content_name` varchar(255) DEFAULT NULL,
  `play_time` int(11) DEFAULT NULL,
  `video_path` varchar(255) DEFAULT NULL,
  `lecture_store_item_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`content_id`),
  KEY `FKq3mbcuk5vhfnwxst44uwynmir` (`lecture_store_item_id`),
  CONSTRAINT `FKq3mbcuk5vhfnwxst44uwynmir` FOREIGN KEY (`lecture_store_item_id`) REFERENCES `lecture` (`store_item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lec_content`
--

LOCK TABLES `lec_content` WRITE;
/*!40000 ALTER TABLE `lec_content` DISABLE KEYS */;
/*!40000 ALTER TABLE `lec_content` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lecture`
--

DROP TABLE IF EXISTS `lecture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lecture` (
  `store_item_id` int(11) NOT NULL AUTO_INCREMENT,
  `lec_price` int(11) DEFAULT NULL,
  `lec_content` text DEFAULT NULL,
  `lecture_class` varchar(255) DEFAULT NULL,
  `lecture_image` varchar(255) DEFAULT NULL,
  `lecture_name` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `teacher_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`store_item_id`),
  KEY `FK2ea1ueblrv09ngwf3i0lf0h2o` (`teacher_id`),
  CONSTRAINT `FK2ea1ueblrv09ngwf3i0lf0h2o` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`teacher_id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lecture`
--

LOCK TABLES `lecture` WRITE;
/*!40000 ALTER TABLE `lecture` DISABLE KEYS */;
INSERT INTO `lecture` VALUES
(3,323000,'Paul선생님이 책임지는 입문반 수업','입문반','PART1입문반','한번에 끝내는 PART1','LC',1),
(4,323000,'Paul선생님이 책임지는 입문반 수업','입문반','PART2입문반','한번에 끝내는 PART2','LC',1),
(5,323000,'Paul선생님이 책임지는 입문반 수업','입문반','PART3입문반','한번에 끝내는 PART3','LC',1),
(6,323000,'Paul선생님이 책임지는 입문반 수업','입문반','PART4입문반','한번에 끝내는 PART4','LC',1),
(7,323000,'Paul선생님이 책임지는 입문반 수업','입문반','PART5입문반','한번에 끝내는 PART5','RC',1),
(8,323000,'Paul선생님이 책임지는 입문반 수업','입문반','PART6입문반','한번에 끝내는 PART6','RC',1),
(9,323000,'Paul선생님이 책임지는 입문반 수업','입문반','PART7입문반','한번에 끝내는 PART7','RC',1),
(11,323000,'한번만 들어도 영어가 재밌어지는 왕기초반 수업','왕기초반','PART1왕기초반','한번에 끝내는 PART1','LC',1),
(12,323000,'한번만 들어도 영어가 재밌어지는 왕기초반 수업','왕기초반','PART2왕기초반','한번에 끝내는 PART2','LC',1),
(13,323000,'한번만 들어도 영어가 재밌어지는 왕기초반 수업','왕기초반','PART3왕기초반','한번에 끝내는 PART3','LC',1),
(14,323000,'한번만 들어도 영어가 재밌어지는 왕기초반 수업','왕기초반','PART4왕기초반','한번에 끝내는 PART4','LC',1),
(15,323000,'한번만 들어도 영어가 재밌어지는 왕기초반 수업','왕기초반','PART5왕기초반','한번에 끝내는 PART5','RC',1),
(16,323000,'한번만 들어도 영어가 재밌어지는 왕기초반 수업','왕기초반','PART6왕기초반','한번에 끝내는 PART6','RC',1),
(17,323000,'한번만 들어도 영어가 재밌어지는 왕기초반 수업','왕기초반','PART7왕기초반','한번에 끝내는 PART7','RC',1),
(18,323000,'Jane쌤이 멱살잡고 점수 올려주는 중급반 LC 수업','중급반','PART1중급반','한번에 끝내는 PART1','LC',2),
(19,323000,'Jane쌤이 멱살잡고 점수 올려주는 중급반 LC 수업','중급반','PART2중급반','한번에 끝내는 PART2','LC',2),
(20,323000,'Jane쌤이 멱살잡고 점수 올려주는 중급반 LC 수업','중급반','PART3중급반','한번에 끝내는 PART3','LC',2),
(21,323000,'Jane쌤이 멱살잡고 점수 올려주는 중급반 LC 수업','중급반','PART4중급반','한번에 끝내는 PART4','LC',2),
(22,323000,'Lay쌤의 피땀눈물이 섞인 중급반 RC 수업','중급반','PART5중급반','한번에 끝내는 PART5','RC',3),
(23,323000,'Lay쌤의 피땀눈물이 섞인 중급반 RC 수업','중급반','PART6중급반','한번에 끝내는 PART6','RC',3),
(24,323000,'Lay쌤의 피땀눈물이 섞인 중급반 RC 수업','중급반','PART7중급반','한번에 끝내는 PART7','RC',3),
(25,323000,'Yobel쌤이 시원하게 알려주는 고급반 수업','고급반','PART1고급반','한번에 끝내는 PART1','LC',4),
(26,323000,'Yobel쌤이 시원하게 알려주는 고급반 수업','고급반','PART2고급반','한번에 끝내는 PART2','LC',4),
(27,323000,'Yobel쌤이 시원하게 알려주는 고급반 수업','고급반','PART3고급반','한번에 끝내는 PART3','LC',4),
(28,323000,'Yobel쌤이 시원하게 알려주는 고급반 수업','고급반','PART4고급반','한번에 끝내는 PART4','LC',4),
(29,323000,'Yobel쌤이 시원하게 알려주는 고급반 수업','고급반','PART5고급반','한번에 끝내는 PART5','RC',4),
(30,323000,'Yobel쌤이 시원하게 알려주는 고급반 수업','고급반','PART6고급반','한번에 끝내는 PART6','RC',4),
(31,323000,'Yobel쌤이 시원하게 알려주는 고급반 수업','고급반','PART7고급반','한번에 끝내는 PART7','RC',4);
/*!40000 ALTER TABLE `lecture` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mock`
--

DROP TABLE IF EXISTS `mock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mock` (
  `mock_id` int(11) NOT NULL AUTO_INCREMENT,
  `mock_img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`mock_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mock`
--

LOCK TABLES `mock` WRITE;
/*!40000 ALTER TABLE `mock` DISABLE KEYS */;
INSERT INTO `mock` VALUES
(1,NULL);
/*!40000 ALTER TABLE `mock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mock_grade`
--

DROP TABLE IF EXISTS `mock_grade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mock_grade` (
  `mock_grade_name` varchar(255) NOT NULL,
  `high_limit` int(11) DEFAULT NULL,
  `low_limit` int(11) DEFAULT NULL,
  `mock_id` int(11) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`mock_grade_name`),
  KEY `FKed72570kiu4xv8thd3ggjr6w1` (`mock_id`),
  KEY `FKkaownrxwrtbsf992mwcae0t08` (`user_id`),
  CONSTRAINT `FKed72570kiu4xv8thd3ggjr6w1` FOREIGN KEY (`mock_id`) REFERENCES `mock` (`mock_id`),
  CONSTRAINT `FKkaownrxwrtbsf992mwcae0t08` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mock_grade`
--

LOCK TABLES `mock_grade` WRITE;
/*!40000 ALTER TABLE `mock_grade` DISABLE KEYS */;
INSERT INTO `mock_grade` VALUES
('고급1',800,701,NULL,NULL),
('고급2',900,801,NULL,NULL),
('랭커',985,901,NULL,NULL),
('만점',990,986,NULL,NULL),
('오픈채팅',-1,-1,NULL,NULL),
('왕초보1',100,0,1,'sua07'),
('왕초보2',200,101,NULL,NULL),
('왕초보3',300,201,NULL,NULL),
('중급1',600,501,NULL,NULL),
('중급2',700,601,NULL,NULL),
('초급1',400,301,NULL,NULL),
('초급2',450,401,1,'sua07'),
('초급3',500,451,NULL,NULL);
/*!40000 ALTER TABLE `mock_grade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mock_question`
--

DROP TABLE IF EXISTS `mock_question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mock_question` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL,
  `correct_answer` varchar(255) DEFAULT NULL,
  `mock_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKtg2di1sf15svrrqlulloguu0s` (`mock_id`),
  CONSTRAINT `FKtg2di1sf15svrrqlulloguu0s` FOREIGN KEY (`mock_id`) REFERENCES `mock` (`mock_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mock_question`
--

LOCK TABLES `mock_question` WRITE;
/*!40000 ALTER TABLE `mock_question` DISABLE KEYS */;
INSERT INTO `mock_question` VALUES
(1,'{\n  \"question\":  \"1. Customer reviews indicate that many modern mobile devices are often unnecessarily _______.\",\n  \"choices\": [\n    \"(A) complication\",\n    \"(B) complicates\",\n    \"(C) complicate\",\n    \"(D) complicated\"\n  ]\n}','(D) complicated',1),
(2,'{\"question\": \"2. Among _____ recognized at the company awards ceremony were senior business analyst natalie Obi and sales associate Peter Comeau.\", \"choices\": [ \"(A) who\", \"(B) whose\", \"(C)  those\", \"(D) they\"]}','(C)  those',1),
(3,'{\"question\": \"3. All Clothing sold in Develyn\'s Boutique is made from natural materials and contains no _____ dyes.\", \"choices\": [ \"(A) immediate\", \"(B) synthetic\", \"(C) reasonable\", \"(D) assumed\"]}','(B) synthetic',1),
(4,'{\"question\": \"4. The company’s new policy is designed to enhance employee _______ by offering more flexible working hours.\",\"choices\": [\"(A) productivity\", \"(B) prejudice\",\"(C) association\", \"(D) frequency\"]}','(A) productivity',1),
(5,'{ \"question\": \"5. The director\'s decision to implement the new marketing strategy was based on the latest _______ trends.\",\"choices\": [\"(A) economical\",\"(B) technological\",\"(C) psychological\",\"(D) historical\"]}','(B) technological',1),
(6,'{\"question\": \"6. The book provides a thorough _______ of the factors that contributed to the financial crisis.\",\"choices\": [\"(A)  decoration\", \"(B) comment\", \"(C) analysis\",\"(D) apology\"]}','(C) analysis',1),
(7,'{\"question\": \"7. Employees are required to submit their reports by the end of the day to ensure _______ of the project.\",\"choices\": [\"(A) completion\",\"(B) circulation\",\"(C) objection\",\"(D) distinction\"]}','(A) completion',1),
(8,'{\"question\": \"8. The new software will _______ the process of data entry and significantly reduce errors.\",\"choices\": [\"(A) neglect\",\"(B) complicate\",\"(C) investigate\",\"(D) facilitate\"]}','(D) facilitate',1),
(9,'{ \"question\": \"9. The team was praised for their _______ in solving the complex issue within a tight deadline.\",\"choices\": [\"(A) efficiency\", \"(B) delay\",\"(C) complaint\",\"(D) ignorance\"]}','(A) efficiency',1),
(10,'{ \"question\": \"10. The company plans to _______ its product line to include more eco-friendly options.\",\"choices\": [\"(A) expand\",\"(B) reduce\",\"(C) eliminate\",\"(D) maintain\"]}','(B) reduce',1);
/*!40000 ALTER TABLE `mock_question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mock_result`
--

DROP TABLE IF EXISTS `mock_result`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mock_result` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_answers` varchar(255) DEFAULT NULL,
  `mock_id` int(11) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKpkg2nr3vmr0dy8lu3jegcg3et` (`mock_id`),
  KEY `FKphffshjrt5v3adttwljh9hdf8` (`user_id`),
  CONSTRAINT `FKphffshjrt5v3adttwljh9hdf8` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKpkg2nr3vmr0dy8lu3jegcg3et` FOREIGN KEY (`mock_id`) REFERENCES `mock` (`mock_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mock_result`
--

LOCK TABLES `mock_result` WRITE;
/*!40000 ALTER TABLE `mock_result` DISABLE KEYS */;
INSERT INTO `mock_result` VALUES
(3,'{\"1\":\"(D) complicated\",\"2\":\"(C)  those\",\"3\":\"(B) synthetic\",\"4\":\"(A) productivity\",\"5\":\"(B) technological\",\"6\":\"(A)  decoration\",\"7\":\"(B) circulation\",\"8\":\"(C) investigate\",\"9\":\"(D) ignorance\",\"10\":null}',1,'sua07');
/*!40000 ALTER TABLE `mock_result` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mock_score`
--

DROP TABLE IF EXISTS `mock_score`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mock_score` (
  `score_id` int(11) NOT NULL AUTO_INCREMENT,
  `mock_mock_id` int(11) DEFAULT NULL,
  `user_user_id` varchar(255) DEFAULT NULL,
  `score` int(11) NOT NULL,
  `mock_id` int(11) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`score_id`),
  UNIQUE KEY `UK9r4pinge6ua8qv2v5chsj4dau` (`user_user_id`),
  KEY `FK1bkg6rd02xt90tq5lb8l99xj8` (`mock_mock_id`),
  KEY `FKoatbi44td5ldq4q08glnlkl95` (`mock_id`),
  KEY `FKi3voqfdu5behlsl7yntg8oi9c` (`user_id`),
  CONSTRAINT `FK1bkg6rd02xt90tq5lb8l99xj8` FOREIGN KEY (`mock_mock_id`) REFERENCES `mock` (`mock_id`),
  CONSTRAINT `FK771g5oq8muvfgrwj586hdw7o4` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKi3voqfdu5behlsl7yntg8oi9c` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKoatbi44td5ldq4q08glnlkl95` FOREIGN KEY (`mock_id`) REFERENCES `mock` (`mock_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mock_score`
--

LOCK TABLES `mock_score` WRITE;
/*!40000 ALTER TABLE `mock_score` DISABLE KEYS */;
/*!40000 ALTER TABLE `mock_score` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mock_ticket`
--

DROP TABLE IF EXISTS `mock_ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mock_ticket` (
  `store_item_id` int(11) NOT NULL,
  `mock_ticket_name` varchar(255) DEFAULT NULL,
  `ticket_price` int(11) DEFAULT NULL,
  `is_used` bit(1) NOT NULL,
  `mock_id` int(11) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`store_item_id`),
  KEY `FKlj5lw81017jkymt3vw7lk2ene` (`mock_id`),
  KEY `FKa2nprx56ygoau4g52mqn9gv97` (`user_id`),
  CONSTRAINT `FKa2nprx56ygoau4g52mqn9gv97` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKlj5lw81017jkymt3vw7lk2ene` FOREIGN KEY (`mock_id`) REFERENCES `mock` (`mock_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mock_ticket`
--

LOCK TABLES `mock_ticket` WRITE;
/*!40000 ALTER TABLE `mock_ticket` DISABLE KEYS */;
INSERT INTO `mock_ticket` VALUES
(1,'모의고사 응모권',10000,'\0',NULL,NULL);
/*!40000 ALTER TABLE `mock_ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notice`
--

DROP TABLE IF EXISTS `notice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notice` (
  `notice_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `content` text DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `write_date` date DEFAULT NULL,
  `user_user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`notice_id`),
  KEY `FK57eikd0o4epokx39cof1lbwho` (`user_user_id`),
  CONSTRAINT `FK57eikd0o4epokx39cof1lbwho` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notice`
--

LOCK TABLES `notice` WRITE;
/*!40000 ALTER TABLE `notice` DISABLE KEYS */;
INSERT INTO `notice` VALUES
(1,'인투어학원에서 토익공부하면 졸업하고 갈 데가 많아진다~!','졸업하고 갈 데가 많아지는 인투어학원','2024-03-05','jane12'),
(2,'3-4월 시간표','[인투어학원 3-4월 시간표]','2024-03-12','jane12'),
(3,'안녕하세요! 인투어학원 시설 안내드립니다🤗','[인투어학원 시설 안내]','2024-03-12','jane12'),
(4,'충남대학교 정문에서 3-5분 거리에 있습니다.','[인투어학원 찾아오시는 길]','2024-03-12','jane12'),
(5,'안녕하세요~!토익 이상의 것을 얻는 인투어학원에서 오늘은 2024년 토익시험에 대한 내용을 알아보도록 하겠습니다.','토익일정 과 토익접수 에서 토익시험 까지 토익점수 도 받는 인투어학원','2024-03-31','jane12'),
(6,'한 달만에 토익의 기초를 ','인투어학원 입문반 4월 수업 오픈','2024-04-01','jane12'),
(7,'5-6월 시간표','[인투어학원 5-6월 시간표]','2024-04-22','jane12'),
(8,'2024년 여름이 여러분의 평생에 어떻게 기억되기 원하시나요?','인투어학원의 선물 : 최고의 여름','2024-04-24','jane12'),
(9,'안녕하세요, 대전에서 최고의 토익 성적을 자랑하는 인투어학원입니다! ','[매달 입문반 개강] 대전 최고의 토익학원, 인투어학원 6월 3일 입문반 개강! 지금 등록하세요!','2024-05-25','jane12'),
(10,'안녕하세요, 여름방학을 뜻깊게 보낼 계획으로 대전 토익 학원을 찾고 계신 여러분!','대전 토익학원 점수 상승 1위! 인투어학원 : 2024년 7~8월 시간표 공개','2024-06-11','jane12'),
(11,'토익을 공부하는 여러분, 걱정하지 마세요! 인투어학원이 여러분의 토익 점수를 확실히 올려줄 다양한 방법들을 소개합니다.','토익커들아 걱정 말아라. 인투어학원이 있다!','2024-06-15','jane12'),
(12,'실전 토익 점수가 오르지 않아서 실망하셨다면, 이는 누구나 겪을 수 있는 일이며, 올바른 전략과 꾸준한 노력을 통해 충분히 극복할 수 있습니다. 토익 출제 경향과 효과적인 공부 방법에 대해 알려드리겠습니다. 다시 힘을 내서 목표 점수를 달성할 수 있도록 인투어학원이 도와드리겠습니다.','실전토익 후 멘탈이 흔들린다면 걱정마 : 다시 잡자 멘탈 !','2024-06-16','jane12'),
(13,'토요일에 인투어학원에서는 매주 모의 토익도 있지만 수업도 진행합니다.','7-8월도 하얗게 불태워줄 토요일 시간표','2024-06-23','jane12'),
(14,'먼저, 인투어학원을 믿고 함께 해주시는 여러분께 깊은 감사의 인사를 드립니다. 저희는 언제나 학생들의 성공과 성장을 최우선으로 생각하며, 최고의 교육을 제공하기 위해 최선을 다하고 있습니다.','2024년 9월 학원비 인상 공지','2024-08-19','jane12');
/*!40000 ALTER TABLE `notice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `point`
--

DROP TABLE IF EXISTS `point`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `point` (
  `point_id` int(11) NOT NULL AUTO_INCREMENT,
  `point_date` date DEFAULT NULL,
  `point_update` int(11) DEFAULT NULL,
  `user_user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`point_id`),
  KEY `FKooqq9pyp7fmmhfw0cwmdjnho7` (`user_user_id`),
  CONSTRAINT `FKooqq9pyp7fmmhfw0cwmdjnho7` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `point`
--

LOCK TABLES `point` WRITE;
/*!40000 ALTER TABLE `point` DISABLE KEYS */;
/*!40000 ALTER TABLE `point` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase`
--

DROP TABLE IF EXISTS `purchase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `purchase` (
  `purchase_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `purchase_time` datetime(6) DEFAULT NULL,
  `store_item_store_item_id` int(11) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`purchase_id`),
  KEY `FKq0vimck60wjj2viilkkdgpfq9` (`store_item_store_item_id`),
  KEY `FK86i0stm7cqsglqptdvjij1k3m` (`user_id`),
  CONSTRAINT `FK86i0stm7cqsglqptdvjij1k3m` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKq0vimck60wjj2viilkkdgpfq9` FOREIGN KEY (`store_item_store_item_id`) REFERENCES `store_item` (`store_item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase`
--

LOCK TABLES `purchase` WRITE;
/*!40000 ALTER TABLE `purchase` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchase` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchased_mock_ticket`
--

DROP TABLE IF EXISTS `purchased_mock_ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `purchased_mock_ticket` (
  `ticket_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ticket_id`),
  KEY `FKeculx7k0f0i0xact00sa91kvw` (`user_id`),
  CONSTRAINT `FKeculx7k0f0i0xact00sa91kvw` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchased_mock_ticket`
--

LOCK TABLES `purchased_mock_ticket` WRITE;
/*!40000 ALTER TABLE `purchased_mock_ticket` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchased_mock_ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qna`
--

DROP TABLE IF EXISTS `qna`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `qna` (
  `qnaid` bigint(20) NOT NULL AUTO_INCREMENT,
  `text` text DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `write_date` date DEFAULT NULL,
  `user_user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`qnaid`),
  KEY `FKb7e7o3jjncttn6c0sjf25sw9y` (`user_user_id`),
  CONSTRAINT `FKb7e7o3jjncttn6c0sjf25sw9y` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qna`
--

LOCK TABLES `qna` WRITE;
/*!40000 ALTER TABLE `qna` DISABLE KEYS */;
INSERT INTO `qna` VALUES
(1,'학원비용 외에 또 따로 들어가는 비용이 있나요?','비용에대해서','2024-03-14','adoyleh'),
(2,'1.아직 자리 여유분이 있나요? 2.상담하러 갈 때 부모님이 일 때문에 바쁘셔서 같이 못가시면 혼자 가도 되나요?','문의드립니다.','2024-03-21','amccutcheon3'),
(3,'급식 하시면 급식비도 학원비에 포함되는건지 아니면 별도인지 궁금합니다','학원에서 급식하나요?','2024-04-05','amerrall0'),
(4,'규모가 어느정도인지 여쭤봐도 될까요?? 반은 몇개정도 있나요...?? ','규모가 어느정도 인가요??','2024-04-08','atrutert'),
(5,'일요일에도 학원에서 자습이 가능한가요 :) ','일요자습문의','2024-04-23','bobae'),
(6,'질의응답선생님은 총 몇분계신가요? 항상계시는건가요? 주말에도계시나요','질의응답선생님','2024-05-14','cfisto'),
(7,'학원에서는 식사 해결은 어떻게 할 수 있나요??','식사','2024-05-30','chanmi'),
(8,'집이 학원 코앞인데 식사시간에 집에 갔다와도 되겠죠?','식사시간 관련','2024-06-02','ctedderm'),
(9,'하루일정표가 시간별로 어떻게 되나요? 그리고 폐원시간이 어떻게되나요?','하루일정표','2024-06-13','cwaindc'),
(13,'개인 사물함도 있나요??! 제가 짐이 좀 많은데...','학원내에','2024-06-25','edavydochj'),
(14,'일일테스트를 본다고 하던데 영어단어 같은 거는 공통을 사야되는 단어장이 있나요? ','교재문의!','2024-07-09','eunchong'),
(15,'상담예약은 각 지점에 전화걸어서 하는 건가요? 자세히 설명 부탁드립니다. 등록은 어떻게 진행되는지도 궁금합니다.','상담예약과 등록절차','2024-07-11','gduggony'),
(16,'담배냄새와 소음에 민감한 편인데 혹시 이런것도 관리가 되어있는지 궁금합니다','문의','2024-07-24','gfarod'),
(17,'주말에도 학원에 나와서 자습하려고 하는데 가능한가요?','주말에도자습하나요?','2024-07-28','glory'),
(18,'인투어학원 모의고사 외부생 응시 가능 여부를 알고 싶습니다. 가능하다면 신청 방법 또한 알고 싶습니다.','외부생 모의고사 응시 가능 여부','2024-08-03','jaehak'),
(19,'9월부터 수강하고 싶은데 ','자리 남아있나요?','2024-08-18','jslaney7'),
(20,'아들이 지금 타 학원에서 공부중인데....사람이 많아서 어수선한 분위기도 그렇고...강의도 좀 맘에 안드나봐요... 소규모 학원 위주로 알아보던 중에...애가 어제 인투어학원 얘기를 하길래...같이 얘기를 해보긴 했는데.... 아이와 함께 주말에 상담 가능한가요...~~','문의 드립니다..~~','2024-08-21','kferencen'),
(21,'블로그 보고 문의드립니다. 9월반 아직 자리 남아 있을까요?','등록 문의입니다','2024-08-22','kmazilliusk');
/*!40000 ALTER TABLE `qna` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reply`
--

DROP TABLE IF EXISTS `reply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reply` (
  `reply_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `reply_text` text DEFAULT NULL,
  `reply_time` date DEFAULT NULL,
  `qna_id` bigint(20) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`reply_id`),
  KEY `FK9wfndwkwwp6sy159csd8y4wkx` (`qna_id`),
  KEY `FKapyyxlgntertu5okpkr685ir9` (`user_id`),
  CONSTRAINT `FK9wfndwkwwp6sy159csd8y4wkx` FOREIGN KEY (`qna_id`) REFERENCES `qna` (`qnaid`),
  CONSTRAINT `FKapyyxlgntertu5okpkr685ir9` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reply`
--

LOCK TABLES `reply` WRITE;
/*!40000 ALTER TABLE `reply` DISABLE KEYS */;
INSERT INTO `reply` VALUES
(1,'안녕하세요. 인투어학원입니다.\n\n현재 9월 잔여석이 남아있지 않은 것으로 확인됩니다.\n괜찮으시다면 10월반으로 가장 먼저 등록 도와드릴 수 있습니다~!\n학원으로 전화주시면 자세히 상담 도와드리겠습니다.','2024-09-10',21,'kyembi');
/*!40000 ALTER TABLE `reply` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `store_item`
--

DROP TABLE IF EXISTS `store_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `store_item` (
  `store_item_id` int(11) NOT NULL AUTO_INCREMENT,
  `create_at` date DEFAULT NULL,
  `item_price` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`store_item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `store_item`
--

LOCK TABLES `store_item` WRITE;
/*!40000 ALTER TABLE `store_item` DISABLE KEYS */;
INSERT INTO `store_item` VALUES
(1,NULL,10000),
(2,NULL,15000),
(3,NULL,323000),
(4,NULL,323000),
(5,NULL,323000),
(6,NULL,323000),
(7,NULL,323000),
(8,NULL,323000),
(9,NULL,323000),
(10,NULL,323000),
(11,NULL,323000),
(12,NULL,323000),
(13,NULL,323000),
(14,NULL,323000),
(15,NULL,323000),
(16,NULL,323000),
(17,NULL,323000),
(18,NULL,323000),
(19,NULL,323000),
(20,NULL,323000),
(21,NULL,323000),
(22,NULL,323000),
(23,NULL,323000),
(24,NULL,323000),
(25,NULL,323000),
(26,NULL,323000),
(27,NULL,323000),
(28,NULL,323000),
(29,NULL,323000),
(30,NULL,323000),
(31,NULL,323000);
/*!40000 ALTER TABLE `store_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stream_lecture`
--

DROP TABLE IF EXISTS `stream_lecture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stream_lecture` (
  `stream_id` int(11) NOT NULL,
  `end_time` datetime(6) DEFAULT NULL,
  `start_time` datetime(6) DEFAULT NULL,
  `stream_title` varchar(255) DEFAULT NULL,
  `video_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`stream_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stream_lecture`
--

LOCK TABLES `stream_lecture` WRITE;
/*!40000 ALTER TABLE `stream_lecture` DISABLE KEYS */;
/*!40000 ALTER TABLE `stream_lecture` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `study_board`
--

DROP TABLE IF EXISTS `study_board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `study_board` (
  `study_board_id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `write_date` date DEFAULT NULL,
  `user_user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`study_board_id`),
  KEY `FKeotdno0ffikhlcybh8264skty` (`user_user_id`),
  CONSTRAINT `FKeotdno0ffikhlcybh8264skty` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `study_board`
--

LOCK TABLES `study_board` WRITE;
/*!40000 ALTER TABLE `study_board` DISABLE KEYS */;
/*!40000 ALTER TABLE `study_board` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `study_room`
--

DROP TABLE IF EXISTS `study_room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `study_room` (
  `st_room_id` int(11) NOT NULL AUTO_INCREMENT,
  `mock_grade_mock_grade_name` varchar(255) DEFAULT NULL,
  `study_board_study_board_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`st_room_id`),
  UNIQUE KEY `UKd3gu7arehlsxxh3672qodlu0h` (`study_board_study_board_id`),
  KEY `FKla9x6pm7hu0weo3fj8itl8epk` (`mock_grade_mock_grade_name`),
  CONSTRAINT `FKla9x6pm7hu0weo3fj8itl8epk` FOREIGN KEY (`mock_grade_mock_grade_name`) REFERENCES `mock_grade` (`mock_grade_name`),
  CONSTRAINT `FKrkene2966a619g7b8oomsdug8` FOREIGN KEY (`study_board_study_board_id`) REFERENCES `study_board` (`study_board_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `study_room`
--

LOCK TABLES `study_room` WRITE;
/*!40000 ALTER TABLE `study_room` DISABLE KEYS */;
INSERT INTO `study_room` VALUES
(1,'오픈채팅',NULL),
(2,'왕초보1',NULL),
(3,'왕초보2',NULL),
(4,'왕초보3',NULL),
(5,'초급1',NULL),
(6,'초급2',NULL),
(7,'초급3',NULL),
(8,'중급1',NULL),
(9,'중급2',NULL),
(10,'고급1',NULL),
(11,'고급2',NULL),
(12,'랭커',NULL),
(13,'만점',NULL);
/*!40000 ALTER TABLE `study_room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teacher`
--

DROP TABLE IF EXISTS `teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `teacher` (
  `teacher_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `teacher_img_path` varchar(255) DEFAULT NULL,
  `teacher_name` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`teacher_id`),
  KEY `FKpb6g6pahj1mr2ijg92r7m1xlh` (`user_id`),
  CONSTRAINT `FKpb6g6pahj1mr2ijg92r7m1xlh` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacher`
--

LOCK TABLES `teacher` WRITE;
/*!40000 ALTER TABLE `teacher` DISABLE KEYS */;
INSERT INTO `teacher` VALUES
(1,NULL,'Paul','paul'),
(2,NULL,'Jane','jane12'),
(3,NULL,'Lay','lay'),
(4,NULL,'Yobel','yobel');
/*!40000 ALTER TABLE `teacher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `user_id` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `birth_date` date NOT NULL,
  `email` varchar(255) NOT NULL,
  `game_grade` varchar(255) DEFAULT NULL,
  `gender` varchar(255) NOT NULL,
  `grade` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `point` int(11) DEFAULT NULL,
  `authority_authority_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  KEY `FKk4cqun9txoj8i1umqbfw8v1ct` (`authority_authority_name`),
  CONSTRAINT `FKk4cqun9txoj8i1umqbfw8v1ct` FOREIGN KEY (`authority_authority_name`) REFERENCES `authority` (`authority_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES
('adoyleh','대전 중구','2000-01-01','adoyleh@gmail.com','','남자','','강예준','adoyleh','$2a$10$nnCvQLMujG5q7Y47vPXy8OnoA4h972a8n2trEBClziqCxbZG5CQmu','010-1234-5678',0,'ROLE_USER'),
('amccutcheon3','대전 중구','2000-01-01','amccutcheon3@gmail.com','','여자','','이지민','amccutcheon3','$2a$10$V8HlpD8gPNY0gqASWtH8NuBo66ndeLgd6xiei1JYnxS/hk0N6sQxy','010-1234-5678',0,'ROLE_USER'),
('amerrall0','대전 중구','2000-01-01','amerrall@gmail.com','','남자','','김서준','amerrall','$2a$10$um8BRUc2S9IV9h7gl4Ehnuu/YCtDFhSeAm0tmZwwUwjkiR2VgcoCq','010-1234-5678',0,'ROLE_USER'),
('atrutert','대전 중구','2000-01-01','atrutert@gmail.com','','여자','','한소민','atrutert','$2a$10$Win68BpCT6upssZ/fnqiNOh3pMjyPeyJ8rBpB3YZOWk9H.M2WQ9NO','010-1234-5678',0,'ROLE_USER'),
('bobae','대전 중구','2007-01-01','bobae1234@gmail.com','','여자','','전보배','bobae','$2a$10$ya5OnaZ1WC4LP6gDJ6oKNekv6QVhWnMzP4QSB9GtkqBij7o3EWeSe','010-1234-5678',0,'ROLE_USER'),
('cfisto','대전 중구','2000-01-01','cfisto@gmail.com','','여자','','한예서','cfisto','$2a$10$eKvNj30NohFjMHdov6QDvOWGHBI4wKbBaFZWzozKvTwDqoPVZI0.O','010-1234-5678',0,'ROLE_USER'),
('chanmi','경기도 포천시','2003-09-01','chanmi@gmail.com','','여자','','박찬미','chanmi','$2a$10$ICnzjnWrnrMyU8tQ8hDYB.1Qd48Hsuxke9Qtqjgl5FsW/EC6kGVKO','010-1234-5678',0,'ROLE_USER'),
('ctedderm','대전 중구','2000-01-01','ctedderm@gmail.com','','남자','','박태윤','ctedderm','$2a$10$bGGIcoPQYd8A6CG2AiS5n.HRF3GHENLBNZd3INJgNRoMOiDqcThNW','010-1234-5678',0,'ROLE_USER'),
('cwaindc','대전 중구','2000-01-01','cwaindc@gmail.com','','여자','','장서연','cwaindc','$2a$10$n1ong7RrRc9vRXAP1CnLse5kJ4bY8Z.pWdaE0r9nJrmYvUEFdQ7aC','010-1234-5678',0,'ROLE_USER'),
('edavydochj','대전 중구','2000-01-01','edavydochj@gmail.com','','여자','','김지유','edavydochj','$2a$10$9oSv9eR5zE61hIMSTEmGV.lUoXpeBvHfcq8Qq9oK30mNzTI.hUpCK','010-1234-5678',0,'ROLE_USER'),
('eunchong','대전 중구','2006-10-12','eunchong@gmail.com','','남자','','정은총','eunchong','$2a$10$jOcANhefg5A5Za2NwBt0OeYFIz31Kz9hJ5yIAi7ER37UmJCF4ymX6','010-1234-5678',0,'ROLE_USER'),
('garam','대전 서구 문예로','1986-09-01','garam@gmail.com','','여자','','양가람','garam','$2a$10$VU3qOcBVEtCQbARdmqB2mOpflbI0QtSNtAXgt/xsKlfEMvqnQGEum','010-1234-5678',0,'ROLE_USER'),
('gduggony','대전 중구','2000-01-01','gduggony@gmail.com','','남자','','정도하','gduggony','$2a$10$SKv9LWPDtXFTuJv22pAmZOvh2GPC/RpsfcVQh07pbhicXO1NmevRG','010-1234-5678',0,'ROLE_USER'),
('geonho','대전 중구','2006-01-01','geonho1234@gmail.com','','남자','','조건호','john','$2a$10$4yPeHUQnoFelUqG7vS1kCeeZHmzdItRXF2IwmBAN.kDAw1ed5zyRm','010-1234-5678',0,'ROLE_USER'),
('gfarod','대전 중구','2000-01-01','gfarod@gmail.com','','여자','','임은지','gfarod','$2a$10$mVmLo4.aQUnsMK4AFESXZ.yZ5U16FY27T7yxN1.6Q/Dcpc9FxwymC','010-1234-5678',0,'ROLE_USER'),
('glory','대전 중구','2008-01-01','glory1234@gmail.com','','남자','','하영광','glory','$2a$10$HkXdDJFmQukT/p2UCAn4KOXw1AN87huBRNNVHqLh3ih1s0p8KiyvS','010-1234-5678',0,'ROLE_USER'),
('jaehak','대전 중구','2006-10-12','jaehak@gmail.com','','남자','','유재학','jaehak','$2a$10$k7GuXdIV.mGilzfZuV5nm.cvqL4Ue.ODTuyHi0ieaM.VmdmnQdJsC','010-1234-5678',0,'ROLE_USER'),
('jane12','대전 중구 대종로','1994-01-01','jane12@gmail.com','','여자','','이아현','angeljane','$2a$10$d0cwViPrUvuNrQJVrq4K2eL3geK9YNUUxyOWpLCzU3.nw39ThUzOe','010-1234-1234',0,'ROLE_TEACHER'),
('jslaney7','대전 중구','2000-01-01','jslaney7@gmail.com','','남자','','윤민재','jslaney7','$2a$10$o50adlp1Eqx8Vo1paYJKGOx6sZSg.YIiwc01BmQB8uFv68Tl6W.B.','010-1234-5678',0,'ROLE_USER'),
('kferencen','대전 중구','2000-01-01','kferencen@gmail.com','','남자','','윤승우','kferencen','$2a$10$b.kR2W84g6K2L4Q1kSEpMuiYNHnsojUsXmSXJc86HueFdNfE2kbAe','010-1234-5678',0,'ROLE_USER'),
('kmazilliusk','대전 중구','2000-01-01','kmazilliusk@gmail.com','','남자','','송현우','kmazilliusk','$2a$10$frua3kDnJpz8j5WjSv0zVOAWUqyumde0/cb2nuubR/FU2rIdIo2pK','010-1234-5678',0,'ROLE_USER'),
('kyembi','대전 중구 대종로','2000-08-10','ruaql0810@gmail.com','','여자','','오겸비','kyembi','$2a$10$PO6P.Pk12QL8VIojmtleyuxbPbmemqRPU/j623oUyAFD1X5V8zKS6','010-7921-9722',0,'ROLE_ADMIN'),
('lay','충남 논산시','2003-01-01','lay1234@gmail.com','','남자','','김상우','laymond','$2a$10$NMuTgB5ud.qWmwef2PtpkuiCKHAR0NlF0kdC8fd8W5I6RE5fzzRsK','010-1234-5678',0,'ROLE_TEACHER'),
('mkemelli','대전 중구','2000-01-01','mkemelli@gmail.com','','여자','','백다윤','mkemelli','$2a$10$H19JCKeuaq4VnOEmKlj15ubuCzmYB6xxOouUQ8h9wK565P4vfJX/e','010-1234-5678',0,'ROLE_USER'),
('mrudloffw','대전 중구','2000-01-01','mrudloffw@gmail.com','','여자','','강지원','mrudloffw','$2a$10$eHdPDTNYgyXJGDkt3flAoOYbqbS1tvzl6f5PuwCu.IFVgTr0YZgoe','010-1234-5678',0,'ROLE_USER'),
('mwolseyb','대전 중구','2000-01-01','mwolseyb@gmail.com','','남자','','오시우','mwolseyb','$2a$10$YILf51.WWGlM6MV/F/awEOGrP/ilfdRLVqv3Mz1WyGFJpZE8Q2Qie','010-1234-5678',0,'ROLE_USER'),
('nzanazzix','대전 중구','2000-01-01','nzanazzix@gmail.com','','여자','','오태림','nzanazzix','$2a$10$L76QCpp2x344w1LCtnKN8eIjfIts0wAXXSVmVg5159kf/S/ylSl5i','010-1234-5678',0,'ROLE_USER'),
('paul','충남 논산시','1990-01-01','paul1234@gmail.com','','남자','','최종권','paul','$2a$10$kNLshFm87OiYy/QYfC1qQeKCu09VfEJYWZkYoMP4gbaT0JkQ1kcYS','010-1234-5678',0,'ROLE_TEACHER'),
('peniel','대전 동구 용전동','1992-10-12','peniel@gmail.com','','여자','','조브니엘','peniel','$2a$10$/YILj/.XoSgEgkL542RlPez2bsrWQ4EWXNkjo8VO7rC/bzXW6J2pu','010-1234-5678',0,'ROLE_USER'),
('qkrchandud','대전 중구','2008-01-01','chan1234@gmail.com','','남자','','박찬영','qkrchandud','$2a$10$b0/5QV3jzq2nzT5BweGHoe3NHw3AHK4j4U4JQ4cQq7.g6BdwzsfFy','010-1234-5678',0,'ROLE_USER'),
('sbedell1y','대전 중구','2000-01-01','sbedell1y@gmail.com','','여자','','강수빈','sbedell1y','$2a$10$pfvsxX5TosRGUdSepAvzouuvIzR.v7fx5PIodetF.ynDYZkcT7.6C','010-1234-5678',0,'ROLE_USER'),
('shenbury1','대전 중구','2000-01-01','shenbury1@gmail.com','','여자','','박민서','shenbury1','$2a$10$0ULaFzzF8Q3qUDl1mZatQu0gOrvTcuk2S6u8d9yKwVJ.WdS9xviWy','010-1234-5678',0,'ROLE_USER'),
('sickov2','대전 중구','2000-01-01','sickov2@gmail.com','','남자','','최도윤','sickov2','$2a$10$IgdEc8vnokx5Eyt1Y4j9Y.Hrx4/MHBxTyMY213MRFQXxgGuxysoKW','010-1234-5678',0,'ROLE_USER'),
('sua','대전 중구 대종로','2007-01-01','sua1234@gmail.com','','여자','','조수아','sua','$2a$10$GplsVFZLmxfc3XPJRVsCH.lZSbr3CgFv5tmlK/61jbUM.U4uJOwmW','010-1234-5678',0,'ROLE_USER'),
('sua07','대전 중구 충무로','2007-08-21','imdnasuecho@gmail.com',NULL,'female','초급2','조수아','sua07','$2a$10$2QOo7z2E0taXO6zJu9iGA.wQ8ZABM9Dl4iXUm.rMDS.rtJho9p48C','01054852414',0,'ROLE_USER'),
('vklemz6','대전 중구','2000-01-01','vklemz6@gmail.com','','여자','','한하린','vklemz6','$2a$10$0scKxga.ucX4T9yrtgva4ev0JwubOc3Xzie9vRSdSLfFsWGUacVRG','010-1234-5678',0,'ROLE_USER'),
('yobel','충남 논산시','1990-01-01','yobel1234@gmail.com','','여자','','요벨','yobel','$2a$10$msTqC10OsuBr4Abj3RpPHuUvLZCpdcRjKd5pJH.t2p4Xzf4dieWuC','010-1234-5678',0,'ROLE_TEACHER'),
('zsimonian4','대전 중구','2000-01-01','zsimonian4@gmail.com','','여자','','정유진','zsimonian4','$2a$10$O1aBuMrBvve2ZimLMGmCk.QJgBSpNtehN89HI6bZVASv3L5nQphs6','010-1234-5678',0,'ROLE_USER');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'into'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-12 14:17:51
