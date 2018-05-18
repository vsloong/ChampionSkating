var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    grade: 0,
    figures: {},
    progress: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取到当前的等级
    var grade = options.grade;
    wx.setNavigationBarTitle({ title: app.grades[grade].name })

    var figures = app.grades[grade];
    var progress = 11;

    this.setData({
      grade: grade,
      figures: app.grades[grade],
      progress: progress
    })
  },

  goFigure(event) {
    var figure = event.currentTarget.dataset.figure

    if (this.data.grade == 0) {
      wx.showModal({
        title: '温馨提醒',
        content: '基础动作当前暂无视频教程',
        showCancel: false
      })
    } else {
      wx.navigateTo({
        url: '../figure/figure?grade=' + this.data.grade + '&figure=' + figure,
      })
    }

  }
})