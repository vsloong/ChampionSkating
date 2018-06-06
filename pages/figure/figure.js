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
    can: false,
    figureName: "",
    scrollHeight: 0,
    skill: ["加载中..."],
    attention: ["加载中..."]
  },

  onLoad: function (options) {
    var gradeIndex = options.grade;
    var figureIndex = options.figure;
    var figure = app.grades[gradeIndex].figures[figureIndex]

    console.log("figure内容" + JSON.stringify(figure))
    var title = figure.name

    wx.setNavigationBarTitle({ title: title })

    // if (gradeIndex == 0) {
    //   wx.showModal({
    //     title: '温馨提醒',
    //     content: '基础动作当前暂无视频教程',
    //     showCancel: false
    //   })
    // }

    var scrollHeight
    if (gradeIndex == 0) {
      scrollHeight = 100 - 10
    } else {
      scrollHeight = 100 - 35 - 10
    }

    var can = util.getProgress(gradeIndex, figureIndex)

    this.setData({
      gradeIndex: gradeIndex,
      figureIndex: figureIndex,
      videoUrl: figure.videoUrl,
      can: can,
      figureName: figure.name,
      scrollHeight: scrollHeight,
      // skill: figure.skill ? figure.skill : ["内容正在编辑中，敬请期待"],
      // attention: figure.attention ? figure.attention : ["内容正在编辑中，敬请期待"],
    })

    //联网获取动作信息
    this.getFigureInfo()
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
  },

  getFigureInfo: function () {
    var self = this
    wx.request({
      url: 'https://easy-mock.com/mock/5b1649566b9c525d07ae12f7/skating/figure?gradeIndex=' + self.data.gradeIndex + "&figureIndex=" + self.data.figureIndex,
      success: function (res) {
        console.log("动作详情：" + JSON.stringify(res.data))

        
        //更新当前页面数据
        self.setData({
          attention: res.data.data.attention,
          skill: res.data.data.skill,
        })
      },
      fail: function () {
        console.log("动作详情获取失败")
      }
    })
  }
})