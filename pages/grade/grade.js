var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    grade: 0,
    figures: app.grades[0],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("获取到的等级:" + options.grade);
    var currentGrade = options.grade;
    wx.setNavigationBarTitle({ title: app.grades[currentGrade].grade })

    // this.setDate({
    //   figures: app.grades[options.grade]
    // })
  },
})