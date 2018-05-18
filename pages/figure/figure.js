var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoUrl: ""
  },

  onLoad: function (options) {
    var gradeIndex = options.grade;
    var figureIndex = options.figure;
    var figure = app.grades[gradeIndex].figures[figureIndex]
    var title = figure.name

    wx.setNavigationBarTitle({ title: title })

    this.setData({
      videoUrl: figure.videoUrl
    })
  }
})