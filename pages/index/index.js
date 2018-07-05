//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js')

Page({
  data: {
    //等级这里直接调用app.js中的变量
    grades: app.grades,
    grades1: [],
    grades2: [],
    total: 0,
    progress: 0
  },

  goGrade: function(event) {
    var grade = event.currentTarget.dataset.grade
    var base = event.currentTarget.dataset.base
    console.log("grade：" + grade + "，base：" + base)
    wx.navigateTo({
      url: '../grade/grade?grade=' + grade,
    })
  },

  goMap: function(event) {
    wx.navigateTo({
      url: '../map/map',
    })
  },

  goPersonal: function(event) {
    wx.navigateTo({
      url: '../personal/personal',
    })
  },

  goActivity: function() {
    wx.showModal({
      title: '温馨提示',
      content: '该功能即将开放，敬请期待！',
      showCancel: false,
      confirmText: '我知道了'
    })
  },

  goJob: function(event) {
    wx.navigateTo({
      url: '../job/job',
    })
  },

  onLoad: function(options) {
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#16ba63',
    })

    var grades1 = []
    var grades2 = []
    for (var i = 0; i < this.data.grades.length; i++) {
      if (i < 4) {
        grades1[i] = this.data.grades[i]
      } else {
        console.log("cishu")
        grades2[i - 4] = this.data.grades[i]
      }
    }

    this.setData({
      grades1: grades1,
      grades2: grades2
    })
  },

  /**
   * 每次新展示页面就刷新下进度
   */
  onShow: function() {
    var data = util.getProgress()
    this.setData({
      total: data.total,
      progress: data.progress
    })
  },

  onShareAppMessage: function(options) {
    return {
      title: "轮滑平花进阶教学",
      path: "/pages/index/index"
    }
  }
})