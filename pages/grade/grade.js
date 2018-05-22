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
      gradeIndex: gradeIndex
    })
  },

  /**
   * 每次新展示页面就刷新下进度
   */
  onShow: function () {
    var data = util.getProgress(this.data.gradeIndex)
    // console.log("什么玩意" + JSON.stringify(data))
    this.setData({
      figures: data.grades[this.data.gradeIndex],
      progress: data.progress
    })
  },

  goFigure(event) {
    var figureIndex = event.currentTarget.dataset.figure
    wx.navigateTo({
      url: '../figure/figure?grade=' + this.data.gradeIndex + '&figure=' + figureIndex,
    })
  }
})