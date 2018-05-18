Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onLoad: function (options) {
    var grade = options.grade;
    var figure = options.figure;

    console.log("获取到的等级：" + grade + "；动作id：" + figure)
  }
})