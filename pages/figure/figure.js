var app = getApp()
var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoUrl: "",
    can: false
  },

  onLoad: function (options) {
    var gradeIndex = options.grade;
    var figureIndex = options.figure;
    var figure = app.grades[gradeIndex].figures[figureIndex]
    var title = figure.name

    wx.setNavigationBarTitle({ title: title })

    var can = util.getProgress(gradeIndex, figureIndex)
    console.log("到底会不会"+can)
    this.setData({
      videoUrl: figure.videoUrl,
      can: util.getProgress(gradeIndex, figureIndex)
    })

  }
})