var app = getApp()
var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    gradeIndex: 0,
    figureIndex: 0,
    videoUrl: "",
    can: false
  },

  onLoad: function (options) {
    var gradeIndex = options.grade;
    var figureIndex = options.figure;
    var figure = app.grades[gradeIndex].figures[figureIndex]
    var title = figure.name

    wx.setNavigationBarTitle({ title: title })

    if (gradeIndex == 0) {
      wx.showModal({
        title: '温馨提醒',
        content: '基础动作当前暂无视频教程',
        showCancel: false
      })
    }

    var can = util.getProgress(gradeIndex, figureIndex)
    console.log("到底会不会" + can)
    this.setData({
      gradeIndex: gradeIndex,
      figureIndex: figureIndex,
      videoUrl: figure.videoUrl,
      can: can
    })
  },

  updateProgress: function () {
    if (!this.data.can) {
      console.log("索引值" + this.data.gradeIndex + this.data.figureIndex)
      util.updateProgress(this.data.gradeIndex, this.data.figureIndex, true)
      this.setData({
        can: true
      })
      wx.showToast({
        title: '继续加油吧！',
      })
    }
  }
})