//app.js
App({
  data: {
    //本地存储的键
    key_grades: "grades",
    key_grade: "grade",
    key_user: "user",
    key_openid: "openid",
    key_address: "address",
    key_contact: "contact",
  },

  onLaunch: function () {
    // wx.clearStorageSync()
  },

  /**
   * 动作等级表
   * 
   * 该等级表中每个动作包含如下属性：
   * 【以下三个属性存在于grades表中，方便统计进度信息】
   * name：动作名称
   * videoUrl：动作视频地址
   * can：是否学会该动作
   * 
   * 【以下三个属性存在于gradex表中（x表示等级0-5），减小每一次更改信息时的性能开销】
   * version：该动作更新版本
   * skill：该动作的技能
   * attention：该动作的注意事项
   */
  grades: [
    //0、基础
    {
      name: "基础",
      figures: [
        {
          name: "V字站立",
          videoUrl: "",
        },
        {
          name: "平行站立",
          videoUrl: "",
        },
        {
          name: "A字站立",
          videoUrl: "",
        },
        {
          name: "扶膝抬脚",
          videoUrl: "",
        },
        {
          name: "提膝抬脚",
          videoUrl: "",
        },
        {
          name: "横向侧行",
          videoUrl: "",
        },
        {
          name: "扶膝踏步前行",
          videoUrl: "",
        },
        {
          name: "背手踏步前行",
          videoUrl: "",
        },
        {
          name: "原地蹬收脚",
          videoUrl: "",
        },
        {
          name: "扶膝单侧蹬收脚滑行",
          videoUrl: "",
        },
        {
          name: "背手蹬收脚滑行",
          videoUrl: "",
        },
        {
          name: "摆臂蹬收脚滑行",
          videoUrl: "",
        },
        {
          name: "画葫芦向前",
          videoUrl: "",
        },
        {
          name: "画葫芦向后",
          videoUrl: "",
        },
        {
          name: "A形刹车",
          videoUrl: "",
        },
        {
          name: "T形刹车",
          videoUrl: "",
        },
        {
          name: "后铲刹车",
          videoUrl: "",
        },
      ]
    },
    //1、入门
    {
      name: "入门",
      figures: [
        {
          name: "鱼形向前",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating01%E3%80%81%E9%B1%BC%E5%BD%A2%E5%90%91%E5%89%8D%EF%BC%88fish%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "鱼形向后",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating08%E3%80%81%E9%B1%BC%E5%BD%A2%E5%90%91%E5%90%8E%EF%BC%88back%20fish%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "交叉向前",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating02%E3%80%81%E4%BA%A4%E5%8F%89%E5%90%91%E5%89%8D%EF%BC%88cross%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "交叉向后",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating03%E3%80%81%E4%BA%A4%E5%8F%89%E5%90%91%E5%90%8E%EF%BC%88back%20cross%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "攀藤",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating04%E3%80%81%E6%94%80%E8%97%A4%EF%BC%88mabrouk%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "蛇形向前",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating06%E3%80%81%E8%9B%87%E5%BD%A2%E5%90%91%E5%89%8D%EF%BC%88snake%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "蛇形向后",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating07%E3%80%81%E8%9B%87%E5%BD%A2%E5%90%91%E5%90%8E%EF%BC%88back%20snake%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "尼尔森向前",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating09%E3%80%81%E5%B0%BC%E5%B0%94%E6%A3%AE%E5%90%91%E5%89%8D%EF%BC%88nelson%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "尼尔森向后",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating10%E3%80%81%E5%B0%BC%E5%B0%94%E6%A3%AE%E5%90%91%E5%90%8E%EF%BC%88back%20nelson%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "单脚向前",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating11%E3%80%81%E5%8D%95%E8%84%9A%E5%90%91%E5%89%8D%EF%BC%88one%20foot%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "单脚向后",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating12%E3%80%81%E5%8D%95%E8%84%9A%E5%90%91%E5%90%8E%EF%BC%88one%20foot%20backward%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "脚跟Sun",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating05%E3%80%81%E5%A4%AA%E9%98%B3%E8%8A%B1%EF%BC%88sun%EF%BC%89%2000_00_07-.mp4",
        },
        // {
        //   name: "脚尖Sun",
        //   videoUrl: "",
        // },
      ]
    },

    //2、初级
    {
      name: "初级",
      figures: [
        {
          name: "疯狂绕单桩",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating13%E3%80%81Crazy%E7%BB%95%E5%8D%95%E6%A1%A9%EF%BC%88one%20cone%20crazy%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "疯狂",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating14%E3%80%81%E7%96%AF%E7%8B%82%EF%BC%88crazy%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "伏特",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating15%E3%80%81%E4%BC%8F%E7%89%B9%EF%BC%88volt%E5%9C%86%E8%A7%84%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "Fan伏特",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating22%E3%80%81Fan%20volt%EF%BC%88%E5%8F%8D%E5%9C%86%E8%A7%84%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "漫步向后",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating16%E3%80%81%E6%BC%AB%E6%AD%A5%E5%90%91%E5%90%8E%EF%BC%88back%20double%20stroll%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "漫步向前",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating17%E3%80%81%E5%8F%8C%E6%BC%AB%E6%AD%A5%EF%BC%88double%20stroll%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "Q转",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating23%E3%80%81J-turn%EF%BC%88Q%E8%BD%AC%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "反Q转",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating24%E3%80%81%E5%8F%8DQ%E8%BD%AC%EF%BC%88back%20j-turn%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "Crazy Sun",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating18%E3%80%81Crazy%20sun%2000_00_07-.mp4",
        },
        {
          name: "墨西哥人",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating19%E3%80%81%E5%A2%A8%E8%A5%BF%E5%93%A5%E4%BA%BA%EF%BC%88mexican%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "意大利人",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating20%E3%80%81%E6%84%8F%E5%A4%A7%E5%88%A9%E4%BA%BA%EF%BC%88italian%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "双脚连续转向",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating21%E3%80%81%E5%8F%8C%E8%84%9A%E8%BF%9E%E7%BB%AD%E8%BD%AC%E5%90%91%EF%BC%88total%20cross%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "反尼尔森向后",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating25%E3%80%81%E5%8F%8D%E5%B0%BC%E5%B0%94%E6%A3%AE%E5%90%91%E5%90%8E%EF%BC%88back%20nelson%20reverse%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "恰恰",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating27%E3%80%81%E6%81%B0%E6%81%B0%EF%BC%88chap%20chap%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "蟹绕桩跳",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating28%E3%80%81%E8%9F%B9%E7%BB%95%E6%A1%A9%E8%B7%B3%EF%BC%88crab%20%E4%B8%87%E9%A9%AC%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "蟹交叉跳",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating29%E3%80%81%E8%9F%B9%E4%BA%A4%E5%8F%89%E8%B7%B3%EF%BC%88crab%20cross%20%E4%B8%87%E9%A9%AC%E5%89%AA%EF%BC%89%2000_00_07-.mp4",
        },
      ]
    },

    //3、中级
    {
      name: "中级",
      figures: [
        {
          name: "刷子",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating26%E3%80%81%E5%88%B7%E5%AD%90%EF%BC%88brush%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "X步",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating30%E3%80%81X%E6%AD%A5%EF%BC%88X%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "X跳",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating31%E3%80%81X%E8%B7%B3%EF%BC%88x-jump%EF%BC%89%2000_00_07-.mp4",
        },
        // {
        //   name: "玛丽向前",
        //
        //
        //   videoUrl: "",
        // },
        {
          name: "玛丽向后",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating32%E3%80%81%E7%8E%9B%E4%B8%BD%E5%90%91%E5%90%8E%EF%BC%88heel%20toe%20backward%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "玛丽Speci",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating33%E3%80%81%E7%8E%9B%E4%B8%BDSpecial%2000_00_07-.mp4",
        },
        {
          name: "脚尖X",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating34%E3%80%81%E8%84%9A%E5%B0%96X%EF%BC%88special%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "画8",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating35%E3%80%81%E7%94%BB8%2000_00_07-.mp4",
        },
        {
          name: "反向画8",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating36%E3%80%81%E7%94%BB8%E5%8F%8D%E5%90%91%EF%BC%88back8%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "太空步",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating37%E3%80%81%E5%A4%AA%E7%A9%BA%E6%AD%A5%EF%BC%88crazy%20leg%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "蟹步",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating38%E3%80%81%E8%9F%B9%E6%AD%A5%EF%BC%88Eagle%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "蟹剪",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating39%E3%80%81%E8%9F%B9%E5%89%AA%EF%BC%88Cross%20Eagle%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "Z蟹",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating40%E3%80%81Z%E8%9F%B9%EF%BC%88Z%20Eagle%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "内蟹",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating41%E3%80%81%E5%85%A7%E8%9F%B9%EF%BC%88Reverse%20Eagle%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "双轮蟹",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating42%E3%80%81%E5%8F%8C%E8%BD%AE%E8%9F%B9%EF%BC%88Heel%20Heel%20Eagle%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "双轮内蟹",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating43%E3%80%81%E5%8F%8C%E8%BD%AE%E5%85%A7%E8%9F%B9%EF%BC%88Toe%20Reverse%20Eagle%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "交叉玛丽向前",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating44%E3%80%81%E4%BA%A4%E5%8F%89%E7%8E%9B%E4%B8%BD%E5%90%91%E5%89%8D%EF%BC%88Cobra%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "交叉玛丽向后",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating45%E3%80%81%E4%BA%A4%E5%8F%89%E7%8E%9B%E4%B8%BD%E5%90%91%E5%90%8E%EF%BC%88Back%20Cobra%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "天鹅蟹",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating46%E3%80%81%E5%A4%A9%E9%B9%85%E8%9F%B9%EF%BC%88Butterfly%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "蹲坐鱼形向前",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating47%E3%80%81%E8%B9%B2%E5%9D%90%E9%B1%BC%E5%BD%A2%E5%90%91%E5%89%8D%EF%BC%88Sitting%20Fish%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "小汽车",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating48%E3%80%81%E5%B0%8F%E6%B1%BD%E8%BD%A6%EF%BC%88Small%20Car%EF%BC%89%2000_00_07-.mp4",
        },
      ]
    },

    //4、高级
    {
      name: "高级",
      figures: [
        {
          name: "茶壶向前",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating49%E3%80%81%E8%8C%B6%E5%A3%B6%E5%90%91%E5%89%8D%EF%BC%88Footgun%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "茶壶向后",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating50%E3%80%81%E8%8C%B6%E5%A3%B6%E5%90%91%E5%90%8E%EF%BC%88Back%20Footgun%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "茶壶跳向前",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating51%E3%80%81%E8%8C%B6%E5%A3%B6%E8%B7%B3%E5%90%91%E5%89%8D%EF%BC%88Kasakchok%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "茶壶跳向后",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating52%E3%80%81%E8%8C%B6%E5%A3%B6%E8%B7%B3%E5%90%91%E5%90%8E%EF%BC%88Kasakchok%20Backward%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "蹲坐玛丽向后",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating53%E3%80%81%E8%B9%B2%E5%9D%90%E7%8E%9B%E4%B8%BD%E5%90%91%E5%90%8E%EF%BC%88Back%20Sitting%20Heel%20Teo%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "天国向前",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating54%E3%80%81%E5%A4%A9%E5%9B%BD%E5%90%91%E5%89%8D%EF%BC%88Christie%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "天国向后",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating55%E3%80%81%E5%A4%A9%E5%9B%BD%E5%90%91%E5%90%8E%EF%BC%88Back%20Christie%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "单轮茶壶向前",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating56%E3%80%81%E5%8D%95%E8%BD%AE%E8%8C%B6%E5%A3%B6%E5%90%91%E5%89%8D%EF%BC%88Toe%20Footgun%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "单轮茶壶向后",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating57%E3%80%81%E5%8D%95%E8%BD%AE%E8%8C%B6%E5%A3%B6%E5%90%91%E5%90%8E%EF%BC%88Back%20Toe%20Footgun%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "蹲坐交叉玛丽向前",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating58%E3%80%81%E8%B9%B2%E5%9D%90%E4%BA%A4%E5%8F%89%E7%8E%9B%E4%B8%BD%E5%90%91%E5%89%8D%EF%BC%88Sitting%20Cobra%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "单轮天国向前",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating59%E3%80%81%E5%8D%95%E8%BD%AE%E5%A4%A9%E5%9B%BD%E5%90%91%E5%89%8D%EF%BC%88Toe%20Christie%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "单轮天国向后",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating60%E3%80%81%E5%8D%95%E8%BD%AE%E5%A4%A9%E5%9B%BD%E5%90%91%E5%90%8E%EF%BC%88Back%20Toe%20Christie%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "单脚横跳",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating61%E3%80%81%E5%8D%95%E8%84%9A%E6%A8%AA%E8%B7%B3%EF%BC%88Wiper%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "单脚连续转向跳",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating62%E3%80%81%E5%8D%95%E8%84%9A%E8%BF%9E%E7%BB%AD%E8%BD%AC%E5%90%91%E8%B7%B3%EF%BC%88Footspin%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "单脚连续正转向",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating63%E3%80%81%E5%8D%95%E8%84%9A%E8%BF%9E%E7%BB%AD%E6%AD%A3%E8%BD%AC%E5%90%91%EF%BC%88Flat%20Shift%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "单脚连续反转向",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating64%E3%80%81%E5%8D%95%E8%84%9A%E8%BF%9E%E7%BB%AD%E5%8F%8D%E8%BD%AC%E5%90%91%EF%BC%88Fake%20Flat%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "双脚转",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating65%E3%80%81%E5%8F%8C%E8%84%9A%E8%BD%AC%EF%BC%88Feet%20Spining%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "双轮转",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating66%E3%80%81%E5%8F%8C%E8%BD%AE%E8%BD%AC%EF%BC%88Toe%20Toe%20Spining%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "天鹅过桩转",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating67%E3%80%81%E5%A4%A9%E9%B9%85%E8%BF%87%E6%A1%A9%E8%BD%AC%EF%BC%88Korean%20Volt%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "黑天鹅单桩转",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating68%E3%80%81%E9%BB%91%E5%A4%A9%E9%B9%85%E5%8D%95%E6%A1%A9%E8%BD%AC%EF%BC%88Back%20Korean%20Volt%20one%20cone%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "黑天鹅过桩转",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating69%E3%80%81%E9%BB%91%E5%A4%A9%E9%B9%85%E8%BF%87%E6%A1%A9%E8%BD%AC%EF%BC%88Back%20Korean%20Volt%EF%BC%89%2000_00_07-.mp4",
        },
      ]
    },

    //5、专业级
    {
      name: "专业级",
      figures: [
        {
          name: "单轮向前",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating70%E3%80%81%E5%8D%95%E8%BD%AE%E5%90%91%E5%89%8D%EF%BC%88Wheeling%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "单轮前转后",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating71%E3%80%81%E5%8D%95%E8%BD%AE%E5%89%8D%E8%BD%AC%E5%90%8E%EF%BC%88Wheeling%20F%20To%20B%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "单轮后转前",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating72%E3%80%81%E5%8D%95%E8%BD%AE%E5%90%8E%E8%BD%AC%E5%89%8D%EF%BC%88Wheeling%20B%20To%20F%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "单轮捅捅",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating73%E3%80%81%E5%8D%95%E8%BD%AE%E6%8D%85%E6%8D%85%EF%BC%88Sewing%20Machine%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "单轮Special",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating74%E3%80%81%E5%8D%95%E8%BD%AESpecial%EF%BC%88One%20Toe%20Special%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "脚尖X跳",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating75%E3%80%81%E8%84%9A%E5%B0%96X%E8%B7%B3%EF%BC%88Toe%20X%20Jump%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "单轮Wiper",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating76%E3%80%81%E5%8D%95%E8%BD%AEWiper%EF%BC%88Toe%20Wiper%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "单轮摆摆",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating77%E3%80%81%E5%8D%95%E8%BD%AE%E6%91%86%E6%91%86%EF%BC%88Shift%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "单轮反向摆摆",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating78%E3%80%81%E5%8D%95%E8%BD%AE%E5%8F%8D%E5%90%91%E6%91%86%E6%91%86%EF%BC%88Fake%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "单轮连续转向",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating79%E3%80%81%E5%8D%95%E8%BD%AE%E8%BF%9E%E7%BB%AD%E8%BD%AC%E5%90%91%EF%BC%88Flipping%20Shift%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "单轮前內刃单桩转",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating80%E3%80%81%E5%8D%95%E8%BD%AE%E5%89%8D%E5%86%85%E5%88%83%E5%8D%95%E6%A1%A9%E8%BD%AC%EF%BC%88Toe%207%20One%20Cone%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "单轮前內刃过桩转",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating81%E3%80%81%E5%8D%95%E8%BD%AE%E5%89%8D%E5%86%85%E5%88%83%E8%BF%87%E6%A1%A9%E8%BD%AC%EF%BC%88Inside%20Forward%207%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "单轮前外刃单桩转",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating82%E3%80%81%E5%8D%95%E8%BD%AE%E5%89%8D%E5%A4%96%E5%88%83%E5%8D%95%E6%A1%A9%E8%BD%AC%EF%BC%88One%20Cone%20Outside%20Forward%207%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "单轮前外刃过桩转",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating83%E3%80%81%E5%8D%95%E8%BD%AE%E5%89%8D%E5%A4%96%E5%88%83%E8%BF%87%E6%A1%A9%E8%BD%AC%EF%BC%88Outside%20Forward%207%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "单轮后外刃单桩转",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating84%E3%80%81%E5%8D%95%E8%BD%AE%E5%90%8E%E5%A4%96%E5%88%83%E5%8D%95%E6%A1%A9%E8%BD%AC%EF%BC%88One%20Cone%20Outside%20Backward%207%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "单轮后内刃过桩转",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating85%E3%80%81%E5%8D%95%E8%BD%AE%E5%90%8E%E5%86%85%E5%88%83%E8%BF%87%E6%A1%A9%E8%BD%AC%EF%BC%88Inside%20Backward%207%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "单轮后外刃过桩转",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating86%E3%80%81%E5%8D%95%E8%BD%AE%E5%90%8E%E5%A4%96%E5%88%83%E8%BF%87%E6%A1%A9%E8%BD%AC%EF%BC%88Outside%20Backward%207%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "单脚前外刃单桩转",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating87%E3%80%81%E5%8D%95%E8%84%9A%E5%89%8D%E5%A4%96%E5%88%83%E5%8D%95%E6%A1%A9%E8%BD%AC%EF%BC%88One%20Cone%20One%20Footspins%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "单脚后内刃单桩转",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating88%E3%80%81%E5%8D%95%E8%84%9A%E5%90%8E%E5%86%85%E5%88%83%E5%8D%95%E6%A1%A9%E8%BD%AC%EF%BC%88Back%20One%20Foot%20Spin%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "单脚后外刃单桩转",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating89%E3%80%81%E5%8D%95%E8%84%9A%E5%90%8E%E5%A4%96%E5%88%83%E5%8D%95%E6%A1%A9%E8%BD%AC%EF%BC%88One%20Cone%20One%20Footspins-O.B.%EF%BC%89%2000_00_07-.mp4",
        },
        {
          name: "单轮半蹲转",
          videoUrl: "http://p8wmn2ucc.bkt.clouddn.com/video/skating90%E3%80%81%E5%8D%95%E8%BD%AE%E5%8D%8A%E8%B9%B2%E8%BD%AC%EF%BC%88Sitting%207%EF%BC%89%2000_00_07-.mp4",
        },
      ]
    }]
})