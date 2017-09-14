/*
Navicat MySQL Data Transfer

Source Server         : 张志业
Source Server Version : 50711
Source Host           : localhost:3306
Source Database       : lovepetsite

Target Server Type    : MYSQL
Target Server Version : 50711
File Encoding         : 65001

Date: 2017-05-10 21:02:15
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `an`
-- ----------------------------
DROP TABLE IF EXISTS `an`;
CREATE TABLE `an` (
  `name` varchar(10) DEFAULT NULL,
  `story` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of an
-- ----------------------------
INSERT INTO `an` VALUES ('刘某', '这个定位项圈果然好用，不到一个小时就找到了我的宝贝');
INSERT INTO `an` VALUES ('明某', '我绝望的在一片林地里找它。我偶然遇到了几个猎人，他们说自己经常在打猎时狗常常会走丢，用了定位项圈。总能用下面的方法找回来。');
INSERT INTO `an` VALUES ('钱某', '当狗狗走失后，我们最担心不是狗狗找不到回家的路，而是狗狗在回家的过程中，');
INSERT INTO `an` VALUES ('随遇而安', '刚开始还不信这个定位项圈，不过关键时刻还是派上了用场');
INSERT INTO `an` VALUES ('中国联不通', '丢狗丢怕了,这一次我终于把它找了回来,感谢定位项圈');
INSERT INTO `an` VALUES ('心盗', '果然这次用了定位项圈狗狗跑到哪我都不怕了');
INSERT INTO `an` VALUES ('萌我一脸血', '有了定位项圈狗狗也不用被我锁在家里了,它想去哪去哪');
INSERT INTO `an` VALUES ('清早相遇', '今早邻居抱着我家猫过来说:\"这是不你家猫,脖子上还有项圈,哈哈,再也不怕它丢了\"');

-- ----------------------------
-- Table structure for `comment`
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '评论的id',
  `shangpinid` int(11) NOT NULL COMMENT '评论商品的id',
  `userid` int(11) NOT NULL COMMENT '用户的id',
  `class` varchar(20) NOT NULL COMMENT '评论类型：好中差',
  `pinfen` float NOT NULL COMMENT '评分',
  `neirong` varchar(50) NOT NULL COMMENT '评论内容',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES ('1', '1', '1', '好评', '4.5', '好好好好好');

-- ----------------------------
-- Table structure for `dingdan`
-- ----------------------------
DROP TABLE IF EXISTS `dingdan`;
CREATE TABLE `dingdan` (
  `dingdanid` int(11) NOT NULL AUTO_INCREMENT COMMENT '订单id',
  `userid` int(11) NOT NULL COMMENT '用户id',
  `shangpinid` int(11) NOT NULL COMMENT '商品id',
  `shuliang` int(11) NOT NULL COMMENT '商品数量',
  `danjia` float NOT NULL COMMENT '商品单价',
  PRIMARY KEY (`dingdanid`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dingdan
-- ----------------------------
INSERT INTO `dingdan` VALUES ('8', '2', '2', '3', '114');
INSERT INTO `dingdan` VALUES ('9', '2', '3', '6', '170');
INSERT INTO `dingdan` VALUES ('10', '3', '2', '1', '114');
INSERT INTO `dingdan` VALUES ('11', '6', '2', '2', '114');
INSERT INTO `dingdan` VALUES ('13', '25', '3', '2', '170');
INSERT INTO `dingdan` VALUES ('20', '27', '23', '6', '33.9');

-- ----------------------------
-- Table structure for `forum`
-- ----------------------------
DROP TABLE IF EXISTS `forum`;
CREATE TABLE `forum` (
  `forum_ID` int(11) NOT NULL AUTO_INCREMENT,
  `forum_content` varchar(1000) DEFAULT NULL,
  `forum_time` varchar(12) DEFAULT NULL,
  `user_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`forum_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of forum
-- ----------------------------
INSERT INTO `forum` VALUES ('1', '【爸妈养狗后 都怀疑自己是不是亲生的】晚上麻麻让我出去遛狗，我拿起手机就准备出门了。老娘丢给我五块钱，说等会遛累了给它买根冰棍吃吃..', '2/4/10:23', '1');
INSERT INTO `forum` VALUES ('2', '【土狗推残疾主人去摆摊，自己找吃的天冷给主人暖脚】老马虽然身患残疾，但自己摆了个修鞋摊。他的大黄狗是只最普通的母土狗，没有名字，随时随地跟着老马，老马“哎”一声，它就跑来了。大黄狗的妈妈也是一条大黄狗，老马养了...', '2/16/1:23', '1');
INSERT INTO `forum` VALUES ('3', '猫科动物除了我们熟知的家猫、老虎、豹子等，其实还有很多哦,你们还知道些什么？一起来说说吧', '3/24/12:6', '2');
INSERT INTO `forum` VALUES ('4', '都来说说大家给自家主子起了什么名字', '4/4/14:54', '4');
INSERT INTO `forum` VALUES ('24', '【关于宠物的冷门知识】狗狗和主人真的会出现“夫妻相”。在英国巴斯泉大学进行的一项研究中，人们把小狗照片和狗主人的照片进行配对，在三选一的选择中，人们有超过50%的几率能够正确选出“血缘”关系。来说说你们知道的吧！！', '4/19/14:7', '6');
INSERT INTO `forum` VALUES ('25', '大家', '4/19/19:21', '1');
INSERT INTO `forum` VALUES ('26', '狗狗早上流口水', '4/20/20:40', '6');
INSERT INTO `forum` VALUES ('27', '大家好', '4/20/21:28', '25');
INSERT INTO `forum` VALUES ('28', '旭俊是猴子的好儿子', '4/21/14:42', '27');
INSERT INTO `forum` VALUES ('29', '你的狗好漂亮', '4/21/16:10', '28');
INSERT INTO `forum` VALUES ('30', '好用', '4/21/16:16', '28');

-- ----------------------------
-- Table structure for `forum_reply`
-- ----------------------------
DROP TABLE IF EXISTS `forum_reply`;
CREATE TABLE `forum_reply` (
  `forum_ID` int(11) DEFAULT NULL,
  `user_ID` int(11) DEFAULT NULL,
  `reply_conyent` varchar(1000) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of forum_reply
-- ----------------------------
INSERT INTO `forum_reply` VALUES ('1', '1', '楼主父母太逗了');
INSERT INTO `forum_reply` VALUES ('1', '2', '我家也这样，大惊小怪的');
INSERT INTO `forum_reply` VALUES ('2', '1', '真的是太感人了，我家狗要这么听话就好了');
INSERT INTO `forum_reply` VALUES ('2', '5', '故事挺好的，顶一下');
INSERT INTO `forum_reply` VALUES ('3', '2', '狮子');
INSERT INTO `forum_reply` VALUES ('3', '1', '美洲豹');
INSERT INTO `forum_reply` VALUES ('3', '6', '皮堡斯是吧我最喜欢了');
INSERT INTO `forum_reply` VALUES ('4', '5', '哈利，哈利波特的哈利');
INSERT INTO `forum_reply` VALUES ('4', '6', '花花');
INSERT INTO `forum_reply` VALUES ('4', '6', '小谁');
INSERT INTO `forum_reply` VALUES ('24', '7', '狗狗排泄时,会调整身体以和地球磁场一致(南北方向),是不是很神奇');
INSERT INTO `forum_reply` VALUES ('1', '6', '我一定好好好对待我们家宝贝');
INSERT INTO `forum_reply` VALUES ('24', '6', '大家一起来说说哈');
INSERT INTO `forum_reply` VALUES ('2', '24', '这故事编的吧，无聊');
INSERT INTO `forum_reply` VALUES ('3', '24', '猫*_*');
INSERT INTO `forum_reply` VALUES ('24', '24', '九条命的猫还挺可爱的，但是这是别人家的猫，你们家的猫肯定不是这样的！');
INSERT INTO `forum_reply` VALUES ('24', '1', '楼主好棒');
INSERT INTO `forum_reply` VALUES ('0', '1', '啊');
INSERT INTO `forum_reply` VALUES ('25', '24', '大家什么大家，真是的');
INSERT INTO `forum_reply` VALUES ('4', '24', '我家猫叫殿下');
INSERT INTO `forum_reply` VALUES ('26', '6', '说的好');
INSERT INTO `forum_reply` VALUES ('26', '1', '我家的狗也这样，可能是饿了');
INSERT INTO `forum_reply` VALUES ('26', '25', '说的棒');
INSERT INTO `forum_reply` VALUES ('28', '1', '猴子别闹');
INSERT INTO `forum_reply` VALUES ('28', '1', '听你旭俊的话');
INSERT INTO `forum_reply` VALUES ('29', '1', '你说对');

-- ----------------------------
-- Table structure for `market`
-- ----------------------------
DROP TABLE IF EXISTS `market`;
CREATE TABLE `market` (
  `id` int(11) DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `eatimate` varchar(50) DEFAULT NULL,
  `major` float DEFAULT NULL,
  `environment` float DEFAULT NULL,
  `attitude` float DEFAULT NULL,
  `location` varchar(50) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `time` varchar(30) DEFAULT NULL,
  `park` varchar(30) DEFAULT NULL,
  `internet` varchar(30) DEFAULT NULL,
  `picture_1` varchar(30) DEFAULT NULL,
  `picture_2` varchar(30) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of market
-- ----------------------------
INSERT INTO `market` VALUES ('1', '乐晶宠物', '4099条评价', '5', '4.9', '5', '大兴区旧宫镇亲亲我家底商18号亦庄北岸正门对面（近旧头路）', '13552848488', '09:00-20:00', '免费停车位', '免费wifi', 'img/shop_1.jpg', 'img/face_11.jpg');
INSERT INTO `market` VALUES ('2', '派多格宠物（马赛公馆店）', '240条评价', '4.9', '4.7', '4.9', '浦东新区康沈路1794号（近东方晶华园）', '13524229139', '10:00-20:00', '停车场（年家浜路335号）', '免费wifi', 'img/shop_2.jpg', 'img/face_12.jpg');
INSERT INTO `market` VALUES ('3', '派多格宠物（场中路店）', '0条评价', '0', '0', '0', '虹口区场中路860号（近广粤路）', '13918531140', '09:00-20:30', '有停车位', '免费wifi', 'img/shop_3.jpg', 'img/face_13.jpg');
INSERT INTO `market` VALUES ('4', '它の家宠物馆', '0条评价', '0', '0', '0', '浦东新区康沈路742号（近沪南公路）', '15000578194', '10:00-20:00', '有车位（收费）', '免费WiFi', 'img/shop_4.jpg', 'img/face_14.jpg');

-- ----------------------------
-- Table structure for `shop`
-- ----------------------------
DROP TABLE IF EXISTS `shop`;
CREATE TABLE `shop` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品id',
  `typeid` int(11) NOT NULL COMMENT '商品类型id',
  `name` varchar(70) NOT NULL COMMENT '商品名字',
  `price` float NOT NULL COMMENT '价钱',
  `sale` int(11) NOT NULL COMMENT '已售数量',
  `keyword` varchar(50) NOT NULL COMMENT '关键字',
  `jieshao` varchar(50) NOT NULL COMMENT '介绍',
  `zhidaojia` float NOT NULL COMMENT '指导价',
  `pinpai` varchar(50) NOT NULL COMMENT '品牌',
  `guige` varchar(50) NOT NULL COMMENT '规格',
  `zhongliang` varchar(50) NOT NULL COMMENT '重量',
  `img1` varchar(50) NOT NULL COMMENT '外面的小图片',
  `img2` varchar(50) DEFAULT NULL COMMENT '详细页面的大图片',
  `img3` varchar(50) DEFAULT NULL COMMENT '详细页面的商品介绍图片',
  `img4` varchar(50) DEFAULT NULL,
  `img5` varchar(50) DEFAULT NULL,
  `img6` varchar(50) DEFAULT NULL,
  `img7` varchar(50) DEFAULT NULL,
  `img8` varchar(50) DEFAULT NULL,
  `img9` varchar(50) DEFAULT NULL,
  `img10` varchar(50) DEFAULT NULL,
  `img11` varchar(50) DEFAULT NULL,
  `img12` varchar(50) DEFAULT NULL,
  `img13` varchar(50) DEFAULT NULL,
  `img14` varchar(50) DEFAULT NULL,
  `img15` varchar(50) DEFAULT NULL,
  `img16` varchar(50) DEFAULT NULL,
  `img17` varchar(50) DEFAULT NULL,
  `img18` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shop
-- ----------------------------
INSERT INTO `shop` VALUES ('1', '28', '魔金 除虱驱螨香波500ml 12周龄以上 狗狗沐浴露', '24', '1730', '狗狗沐浴露\r\n狗狗沐浴露\r\n狗狗沐浴露', '拉啦啦啦', '31.2', '魔金', '500ml', '0.57kg', 'img/shopgoumuyulu1.jpg', 'img/shoppicpath11397543976.jpg', 'img/shopimgFile1469609991.jpg', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `shop` VALUES ('2', '11', '比瑞吉 博美成犬粮天然狗粮2kg', '114', '1731', '比瑞吉 博美成犬粮天然狗粮2kg', '哈哈哈', '130.8', '比瑞吉', '2kg', '2kg', 'img/shopbomeiquanliang1.jpg', 'img/shopbomeiquanliang12.jpg', 'img/shopbomeiquanliang13.jpg', 'img/shopbomeiquanliang14.jpg', 'img/shopbomeiquanliang15.jpg', 'img/shopbomeiquanliang16.jpg', 'img/shopbomeiquanliang17.jpg', 'img/shopbomeiquanliang18.jpg', 'img/shopbomeiquanliang19.jpg', 'img/shopbomeiquanliang110.jpg', 'img/shopbomeiquanliang111.jpg', null, null, null, null, null, null, null);
INSERT INTO `shop` VALUES ('3', '11', '法国皇家ROYAL CANIN 小型狗粮怀孕哺乳离乳奶糕 3kg MIS30', '170', '98405', '法国皇家ROYAL CANIN 小型犬粮怀孕哺乳离乳奶糕 3kg MIS30', '咔咔咔咔咔', '204', '皇家', '3kg', '3kg', 'img/shopbomeiquanliang2.jpg', 'img/shopbomeiquanliang22.jpg', 'img/shopbomeiquanliang23.jpg', 'img/shopbomeiquanliang24.jpg', 'img/shopbomeiquanliang25.jpg', 'img/shopbomeiquanliang26.jpg', 'img/shopbomeiquanliang27.jpg', 'img/shopbomeiquanliang28.jpg', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `shop` VALUES ('4', '11', 'BOTH N3小型犬成狗粮鸭肉三文鱼天然无谷配方狗粮(4lb)1.8kg D52', '61', '13311', 'BOTH N3小型犬成犬粮鸭肉三文鱼天然无谷配方狗粮(4lb)1.8kg D52', '乌拉乌拉', '133.2', 'BOTH', '1.8kg', '1.8kg', 'img/shopbomeiquanliang3.jpg', 'img/shopbomeiquanliang32.jpg', 'img/shopbomeiquanliang33.jpg', 'img/shopbomeiquanliang34.jpg', 'img/shopbomeiquanliang35.jpg', 'img/shopbomeiquanliang36.jpg', 'img/shopbomeiquanliang37.jpg', 'img/shopbomeiquanliang38.jpg', 'img/shopbomeiquanliang39.jpg', 'img/shopbomeiquanliang310.jpg', 'img/shopbomeiquanliang311.jpg', 'img/shopbomeiquanliang312.jpg', 'img/shopbomeiquanliang313.jpg', 'img/shopbomeiquanliang314.jpg', 'img/shopbomeiquanliang315.jpg', 'img/shopbomeiquanliang316.jpg', null, null);
INSERT INTO `shop` VALUES ('5', '11', '优基 能量果小型犬幼狗粮鹿肉蛋黄狗粮1.5kg', '105', '613', '优基 能量果小型犬幼犬粮鹿肉蛋黄狗粮1.5kg', '啦啦啦啦', '126', '优基', '1.5kg', '1.5kg', 'img/shopbomeiquanliang4.jpg', 'img/shopbomeiquanliang42.jpg', 'img/shopbomeiquanliang43.jpg', 'img/shopbomeiquanliang44.jpg', 'img/shopbomeiquanliang45.jpg', 'img/shopbomeiquanliang46.jpg', 'img/shopbomeiquanliang47.jpg', 'img/shopbomeiquanliang48.jpg', 'img/shopbomeiquanliang49.jpg', 'img/shopbomeiquanliang410.jpg', 'img/shopbomeiquanliang411.jpg', 'img/shopbomeiquanliang412.jpg', 'img/shopbomeiquanliang413.jpg', 'img/shopbomeiquanliang414.jpg', 'img/shopbomeiquanliang415.jpg', null, '', null);
INSERT INTO `shop` VALUES ('6', '11', '佩玛思特 小型犬成犬粮金枪鱼燕麦狗粮1kg', '60', '360', '佩玛思特 小型犬成犬粮金枪鱼燕麦狗粮1kg', '乌拉乌拉', '72', '佩玛思特', '1kg', '1kg', 'img/shopbomeiquanliang5.jpg', 'img/shopbomeiquanliang52.jpg', 'img/shopbomeiquanliang53.jpg', 'img/shopbomeiquanliang54.jpg', 'img/shopbomeiquanliang55.jpg', 'img/shopbomeiquanliang56.jpg', 'img/shopbomeiquanliang57.jpg', 'img/shopbomeiquanliang58.jpg', 'img/shopbomeiquanliang59.jpg', 'img/shopbomeiquanliang510.jpg', null, null, null, null, null, null, null, null);
INSERT INTO `shop` VALUES ('7', '11', '海洋之星 小型犬粮天然无谷抗敏感三文鱼狗粮1.5kg', '140', '707', '海洋之星 小型犬粮天然无谷抗敏感三文鱼狗粮1.5kg', 'aaaaaa', '168', '海洋之星', '1.5kg', '1.5kg', 'img/shopbomeiquanliang6.jpg', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `shop` VALUES ('8', '11', '巴西淘淘 力派系列小型犬幼犬粮10.1kg 进口狗粮', '575', '100', '巴西淘淘 力派系列小型犬幼犬粮10.1kg 进口狗粮', 'asassss', '621', '巴西淘淘', '10.1kg', '10.1kg', 'img/shopbomeiquanliang7.jpg', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `shop` VALUES ('9', '11', '信元发育宝 博美成犬粮U系列活力营养配方犬粮1kg', '83', '9', '信元发育宝 博美成犬粮U系列活力营养配方犬粮1kg', 'fgggggg', '107.9', '信元发育宝', '1kg', '1kg', 'img/shopbomeiquanliang8.jpg', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `shop` VALUES ('10', '11', '冠能PRO PLAN 幼犬粮成长配方狗粮(原鸡肉米饭)3kg', '105', '5267', '冠能PRO PLAN 幼犬粮成长配方狗粮(原鸡肉米饭)3kg', '大大大大大大', '198', '冠能', '3kg', '3kg', 'img/shopbomeiquanliang9.jpg', 'img/shopbomeiquanliang92.jpg', 'img/shopbomeiquanliang93.jpg', 'img/shopbomeiquanliang94.jpg', 'img/shopbomeiquanliang95.jpg', 'img/shopbomeiquanliang96.jpg', 'img/shopbomeiquanliang97.jpg', 'img/shopbomeiquanliang98.jpg', 'img/shopbomeiquanliang99.jpg', 'img/shopbomeiquanliang910.jpg', 'img/shopbomeiquanliang911.jpg', 'img/shopbomeiquanliang912.jpg', 'img/shopbomeiquanliang913.jpg', 'img/shopbomeiquanliang914.jpg', 'img/shopbomeiquanliang915.jpg', 'img/shopbomeiquanliang916.jpg', null, null);
INSERT INTO `shop` VALUES ('11', '11', '冠能PRO PLAN 小型犬成犬挑食及美毛配方全价狗粮2.4kg(800g*3)', '155', '3021', '冠能PRO PLAN 小型犬成犬挑食及美毛配方全价狗粮2.4kg(800g*3)', 'ssssss', '195', '冠能', '2.4kg', '2.4kg', 'img/shopbomeiquanliang10.jpg', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `shop` VALUES ('12', '11', '冠能PRO PLAN 幼犬粮成长配方狗粮(原鸡肉米饭)1.5kg', '65', '2639', '冠能PRO PLAN 幼犬粮成长配方狗粮(原鸡肉米饭)1.5kg', 'fgfhffh', '118.8', '冠能', '1.5kg', '1.5kg', 'img/shopbomeiquanliang11.jpg', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `shop` VALUES ('13', '30', 'Orijen渴望 六种鲜鱼海藻配方全猫粮2.27kg 【保质日期至2018-5-5】', '320', '1923', 'Orijen渴望 六种鲜鱼海藻配方全猫粮2.27kg 【保质日期至2018-5-5】', 'dddddd', '372', '渴望', '2.27kg', '2.27kg', 'img/shopjinkoumaoliang1.jpg', 'img/shopjinkoumaoliang12.jpg', 'img/shopjinkoumaoliang13.jpg', 'img/shopjinkoumaoliang14.jpg', 'img/shopjinkoumaoliang15.jpg', 'img/shopjinkoumaoliang16.jpg', 'img/shopjinkoumaoliang17.jpg', 'img/shopjinkoumaoliang18.jpg', 'img/shopjinkoumaoliang19.jpg', 'img/shopjinkoumaoliang110.jpg', 'img/shopjinkoumaoliang111.jpg', 'img/shopjinkoumaoliang112.jpg', 'img/shopjinkoumaoliang113.jpg', 'img/shopjinkoumaoliang114.jpg', 'img/shopjinkoumaoliang115.jpg', 'img/shopjinkoumaoliang116.jpg', 'img/shopjinkoumaoliang117.jpg', 'img/shopjinkoumaoliang118.jpg');
INSERT INTO `shop` VALUES ('14', '22', '曼昆K2宠物定位器金毛贵宾犬猎犬gps定位追踪器狗狗防丢智能项圈', '306', '1703', '曼昆K2宠物定位器金毛贵宾犬猎犬gps定位追踪器狗狗防丢智能项圈', 'dddddd', '386', '曼昆', '80g', '80g', 'img/shopgouqianyinshebei1.jpg', 'img/shopgouqianyinshebei12.jpg', 'img/shopgouqianyinshebei13.jpg', 'img/shopgouqianyinshebei14.jpg', 'img/shopgouqianyinshebei15.jpg', 'img/shopgouqianyinshebei16.jpg', 'img/shopgouqianyinshebei17.jpg', 'img/shopgouqianyinshebei18.gif', 'img/shopgouqianyinshebei19.jpg', 'img/shopgouqianyinshebei110.jpg', 'img/shopgouqianyinshebei111.jpg', 'img/shopgouqianyinshebei112.jpg', 'img/shopgouqianyinshebei113.jpg', 'img/shopgouqianyinshebei114.jpg', 'img/shopgouqianyinshebei115.jpg', 'img/shopgouqianyinshebei116.jpg', 'img/shopgouqianyinshebei117.jpg', null);
INSERT INTO `shop` VALUES ('16', '12', '怡亲 比熊贵宾专用成犬粮2.5kg', '58.7', '1594', '怡亲 比熊贵宾专用成犬粮2.5kg', 'sdddd', '75.9', '怡亲', '2.5kg', '2.5kg', 'img/shopguibinbixiongquanliang2.jpg', 'img/shopguibinbixiongquanliang22.jpg', 'img/shopguibinbixiongquanliang23.jpg', 'img/shopguibinbixiongquanliang24.jpg', 'img/shopguibinbixiongquanliang25.jpg', 'img/shopguibinbixiongquanliang26.jpg', 'img/shopguibinbixiongquanliang27.jpg', 'img/shopguibinbixiongquanliang28.jpg', 'img/shopguibinbixiongquanliang29.jpg', 'img/shopguibinbixiongquanliang210.jpg', 'img/shopguibinbixiongquanliang211.jpg', 'img/shopguibinbixiongquanliang212.jpg', 'img/shopguibinbixiongquanliang213.jpg', 'img/shopguibinbixiongquanliang214.jpg', 'img/shopguibinbixiongquanliang215.jpg', 'img/shopguibinbixiongquanliang216.jpg', null, null);
INSERT INTO `shop` VALUES ('15', '12', '比瑞吉 比熊成犬粮天然狗粮2kg', '89', '1615', '比瑞吉 比熊成犬粮天然狗粮2kg', 'dddd', '130.8', '比瑞吉', '2kg', '2kg', 'img/shopguibinbixiongquanliang1.jpg', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `shop` VALUES ('17', '12', '派迪乐 比熊成犬粮天然配方狗粮1.5kg', '49', '428', '派迪乐 比熊成犬粮天然配方狗粮1.5kg', 'fffff', '58.8', '派迪乐', '1.5kg', '1.5kg', 'img/shopguibinbixiongquanliang3.jpg', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `shop` VALUES ('18', '12', '法国皇家ROYAL CANIN 泰迪贵宾成犬粮专用狗粮3kg PD30', '190', '376403', '法国皇家ROYAL CANIN 泰迪贵宾成犬粮专用狗粮3kg PD30', 'dddd', '228', '皇家', '3kg', '3kg', 'img/shopguibinbixiongquanliang4.jpg', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `shop` VALUES ('19', '12', '法国皇家ROYAL CANIN 贵宾幼犬粮专用狗粮3kg APD33', '212', '64570', '法国皇家ROYAL CANIN 贵宾幼犬粮专用狗粮3kg APD33', 'gggg', '254.4', '皇家', '3kg', '3kg', 'img/shopguibinbixiongquanliang5.jpg', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `shop` VALUES ('20', '12', '比瑞吉 泰迪贵宾成犬粮天然狗粮2kg', '89', '1427', '比瑞吉 泰迪贵宾成犬粮天然狗粮2kg', 'dddd', '118.8', '比瑞吉', '2kg', '2kg', 'img/shopguibinbixiongquanliang6.jpg', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `shop` VALUES ('21', '12', '醇粹 泰迪贵宾成犬粮天然狗粮3kg 泰迪狗粮', '82', '29543', '醇粹 泰迪贵宾成犬粮天然狗粮3kg 泰迪狗粮', 'fffff', '130.8', '醇粹', '3kg', '3kg', 'img/shopguibinbixiongquanliang7.jpg', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `shop` VALUES ('22', '12', '法国皇家ROYAL CANIN 比熊成犬粮3kg BF29', '190', '9804', '法国皇家ROYAL CANIN 比熊成犬粮3kg BF29', 'hhhh', '228', '皇家', '3kg', '3kg', 'img/shopguibinbixiongquanliang8.jpg', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `shop` VALUES ('23', '30', '伟嘉 幼猫粮海洋鱼味猫粮1.2kg', '33.9', '290038', '伟嘉 幼猫粮海洋鱼味猫粮1.2kg', 'dfggg', '42.1', '伟嘉', '1.2kg', '1.2kg', 'img/shopjinkoumaoliang2.jpg', 'img/shopjinkoumaoliang22.jpg', 'img/shopjinkoumaoliang23.jpg', 'img/shopjinkoumaoliang24.jpg', 'img/shopjinkoumaoliang25.jpg', 'img/shopjinkoumaoliang26.jpg', 'img/shopjinkoumaoliang27.jpg', 'img/shopjinkoumaoliang28.jpg', 'img/shopjinkoumaoliang29.jpg', 'img/shopjinkoumaoliang210.jpg', 'img/shopjinkoumaoliang211.jpg', 'img/shopjinkoumaoliang212.jpg', 'img/shopjinkoumaoliang213.jpg', 'img/shopjinkoumaoliang214.jpg', 'img/shopjinkoumaoliang215.jpg', 'img/shopjinkoumaoliang216.jpg', '', null);
INSERT INTO `shop` VALUES ('24', '14', '宝路 大型犬成犬粮牛肉鸡肉蔬菜及谷物配方狗粮1.8kg', '42', '14325', '宝路 大型犬成犬粮牛肉鸡肉蔬菜及谷物配方狗粮1.8kg', 'gdhsdh', '53.5', '宝路', '1.8kg', '1.8kg', 'img/shopjinmaoquanliang1.jpg', 'img/shopjinmaoquanliang12.jpg', 'img/shopjinmaoquanliang13.jpg', 'img/shopjinmaoquanliang14.jpg', 'img/shopjinmaoquanliang15.jpg', 'img/shopjinmaoquanliang16.jpg', 'img/shopjinmaoquanliang17.jpg', 'img/shopjinmaoquanliang18.jpg', 'img/shopjinmaoquanliang19.jpg', 'img/shopjinmaoquanliang110.jpg', 'img/shopjinmaoquanliang111.jpg', 'img/shopjinmaoquanliang112.jpg', 'img/shopjinmaoquanliang113.jpg', null, null, null, null, null);
INSERT INTO `shop` VALUES ('25', '13', '维嘉', '2112', '2121', '', 'fdffdfd', '2332', 'ffdfd', 'dffdfd', 'dfdff', 'img/shopshamoquanlian1.jpg', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for `shoptype`
-- ----------------------------
DROP TABLE IF EXISTS `shoptype`;
CREATE TABLE `shoptype` (
  `id` int(11) NOT NULL,
  `TypeName` varchar(10) NOT NULL,
  `Type` int(11) NOT NULL,
  `ParentId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shoptype
-- ----------------------------
INSERT INTO `shoptype` VALUES ('1', '狗狗', '1', null);
INSERT INTO `shoptype` VALUES ('2', '猫猫', '1', null);
INSERT INTO `shoptype` VALUES ('3', '粮食专区', '2', '1');
INSERT INTO `shoptype` VALUES ('4', '医疗保健', '2', '1');
INSERT INTO `shoptype` VALUES ('5', '生活品质', '2', '1');
INSERT INTO `shoptype` VALUES ('6', '清洁卫生', '2', '1');
INSERT INTO `shoptype` VALUES ('7', '粮食专区', '2', '2');
INSERT INTO `shoptype` VALUES ('8', '医疗保健', '2', '2');
INSERT INTO `shoptype` VALUES ('9', '生活品质', '2', '2');
INSERT INTO `shoptype` VALUES ('10', '清洁卫生', '2', '2');
INSERT INTO `shoptype` VALUES ('11', '博美犬粮', '3', '3');
INSERT INTO `shoptype` VALUES ('12', '贵宾比熊犬粮', '3', '3');
INSERT INTO `shoptype` VALUES ('13', '萨摩犬粮', '3', '3');
INSERT INTO `shoptype` VALUES ('14', '金毛犬粮', '3', '3');
INSERT INTO `shoptype` VALUES ('15', '全犬犬粮', '3', '3');
INSERT INTO `shoptype` VALUES ('16', '跳骚蛔虫', '3', '4');
INSERT INTO `shoptype` VALUES ('17', '泪痕口臭', '3', '4');
INSERT INTO `shoptype` VALUES ('18', '真菌螨虫', '3', '4');
INSERT INTO `shoptype` VALUES ('19', '感冒腹泻', '3', '4');
INSERT INTO `shoptype` VALUES ('20', '缺钙脱毛', '3', '4');
INSERT INTO `shoptype` VALUES ('21', '窝笼服饰', '3', '5');
INSERT INTO `shoptype` VALUES ('22', '牵引装备', '3', '5');
INSERT INTO `shoptype` VALUES ('23', '喂食器具', '3', '5');
INSERT INTO `shoptype` VALUES ('24', '美容造型', '3', '5');
INSERT INTO `shoptype` VALUES ('25', '玩具乐园', '3', '5');
INSERT INTO `shoptype` VALUES ('26', '排便用品', '3', '6');
INSERT INTO `shoptype` VALUES ('27', '电推剪/吹风机', '3', '6');
INSERT INTO `shoptype` VALUES ('28', '香波/沐浴露', '3', '6');
INSERT INTO `shoptype` VALUES ('29', '消毒除臭', '3', '6');
INSERT INTO `shoptype` VALUES ('30', '进口猫粮', '3', '7');
INSERT INTO `shoptype` VALUES ('31', '国产猫粮', '3', '7');
INSERT INTO `shoptype` VALUES ('32', '功能性猫粮', '3', '7');
INSERT INTO `shoptype` VALUES ('33', '猫罐头/妙鲜包', '3', '7');
INSERT INTO `shoptype` VALUES ('34', '猫猫零食', '3', '7');
INSERT INTO `shoptype` VALUES ('35', '跳骚蛔虫', '3', '8');
INSERT INTO `shoptype` VALUES ('36', '泪痕口臭', '3', '8');
INSERT INTO `shoptype` VALUES ('37', '真菌螨虫', '3', '8');
INSERT INTO `shoptype` VALUES ('38', '感冒腹泻', '3', '8');
INSERT INTO `shoptype` VALUES ('39', '缺钙脱毛', '3', '8');
INSERT INTO `shoptype` VALUES ('40', '冬季窝笼', '3', '9');
INSERT INTO `shoptype` VALUES ('41', '喂食器具', '3', '9');
INSERT INTO `shoptype` VALUES ('42', '美容造型', '3', '9');
INSERT INTO `shoptype` VALUES ('43', '猫咪玩具', '3', '9');
INSERT INTO `shoptype` VALUES ('44', '猫砂', '3', '10');
INSERT INTO `shoptype` VALUES ('45', '猫砂盆', '3', '10');
INSERT INTO `shoptype` VALUES ('46', '沐浴香波', '3', '10');
INSERT INTO `shoptype` VALUES ('47', '消毒除臭', '3', '10');

-- ----------------------------
-- Table structure for `userinfo`
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `user_ID` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) DEFAULT NULL,
  `password` varchar(30) DEFAULT NULL,
  `userinfocol` varchar(45) DEFAULT NULL,
  `userinfocol1` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`user_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userinfo
-- ----------------------------
INSERT INTO `userinfo` VALUES ('1', '武子微', 'zhuanshen', null, null);
INSERT INTO `userinfo` VALUES ('2', '张志业', '123456789', null, null);
INSERT INTO `userinfo` VALUES ('3', '张帅帅', '1234567890', null, null);
INSERT INTO `userinfo` VALUES ('4', '李旭俊', '923098328', null, null);
INSERT INTO `userinfo` VALUES ('5', '从你的全世界路过', 'zhuanshen', null, null);
INSERT INTO `userinfo` VALUES ('6', '我知道再见', 'zhuanshen', null, null);
INSERT INTO `userinfo` VALUES ('22', '我依然明了V', 'zhuanshen', null, null);
INSERT INTO `userinfo` VALUES ('7', '爱宠达人', 'zhuanshen', null, null);
INSERT INTO `userinfo` VALUES ('23', '我已然明了V', 'zhuanshen', null, null);
INSERT INTO `userinfo` VALUES ('24', '曾经蜡笔没有小新', 'zhuanshen', null, null);
INSERT INTO `userinfo` VALUES ('25', '爱宠爱宠爱宠', 'zhuanshen', null, null);
INSERT INTO `userinfo` VALUES ('26', '春风不及你美', 'zhuanshen', null, null);
INSERT INTO `userinfo` VALUES ('27', '旭俊爸爸孙纾荣', 'sun342424', null, null);
INSERT INTO `userinfo` VALUES ('28', '春风十里不如你', 'zhuanshen', null, null);
