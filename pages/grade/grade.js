var app = getApp()
var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    gradeIndex: 0,
    figures: {},
    progress: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取到当前的等级
    var gradeIndex = options.grade;
    wx.setNavigationBarTitle({ title: app.grades[gradeIndex].name })

    this.setData({
      grade: gradeIndex,
      figures: app.grades[gradeIndex],
      progress: util.getProgress(gradeIndex)
    })
  },

  /**
   * 每次新展示页面就刷新下进度
   */
  onShow: function () {
    var data = util.getProgress()
    this.setData({
      progress: data.progress
    })
  },

  goFigure(event) {
    var figureIndex = event.currentTarget.dataset.figure

    if (this.data.grade == 0) {
      wx.showModal({
        title: '温馨提醒',
        content: '基础动作当前暂无视频教程',
        showCancel: false
      })
    } else {
      wx.navigateTo({
        url: '../figure/figure?grade=' + this.data.gradeIndex + '&figure=' + figureIndex,
      })
    }

  }
})