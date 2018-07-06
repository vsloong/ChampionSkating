//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js')

Page({
  data: {
    //等级这里直接调用app.js中的变量
    grades: app.grades,
    grades1: [], //第一排平花等级
    grades2: [], //第二排平花等级
    total: 0,
    progress: 0,
    days: 1,
    userTitle: "普通用户"
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
    var self = this
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#16ba63',
    })

    //动态生成平花等级数据
    var grades1 = []
    var grades2 = []
    for (var i = 0; i < this.data.grades.length; i++) {
      if (i < 4) {
        grades1[i] = this.data.grades[i]
      } else {
        grades2[i - 4] = this.data.grades[i]
      }
    }

    this.setData({
      grades1: grades1,
      grades2: grades2
    })

    //获取用户头衔，目前只用
    if (util.isStorageSetted(app.data.key_openid)) {
      this.setData({
        userTitle: "轮滑爱好者"
      })
    }

    //获取并更新连续练习天数
    var today = new Date()
    console.log("测试日期：" + JSON.stringify(today))
    var curDate = {
      date: new Date(),
      days: 1
    }
    console.log("当前打开小程序时间：" + JSON.stringify(curDate))

    wx.getStorage({
      key: app.data.key_days,
      success: function(res) {
        var lastDate = res.data
        console.log("上一次打开小程序时间：" + JSON.stringify(lastDate))
        var last = new Date(lastDate.date)
        //表示今天已经打开过了
        if (last.toLocaleDateString() == today.toLocaleDateString()) {
          console.log("今天打开过了")
        } else {
          //上一次打开时间+1天，如果等于今天那么就是连续登录
          var temp = new Date((new Date(lastDate.date) / 1000 + 24 * 60 * 60) * 1000)
          //表示连续登录
          if (temp.toLocaleDateString() == today.toLocaleDateString()) {
            lastDate.date = new Date()
            lastDate.days++
              console.log("连续登录成功：" + JSON.stringify(lastDate))
            wx.setStorage({
              key: app.data.key_days,
              data: lastDate,
            })

            self.setData({
              days: lastDate.days
            })
          }
          //表示连续登录中断
          else {
            console.log("连续登录中断")
            wx.setStorage({
              key: app.data.key_days,
              data: curDate,
            })
          }
        }
      },
      fail: function() {
        wx.setStorage({
          key: app.data.key_days,
          data: curDate,
        })
      }
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