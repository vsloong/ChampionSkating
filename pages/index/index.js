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
    userTitle: "普通用户",
    ads: [{
      image: "/res/images/img-ad-join.png",
      title: "全民轮滑  等你加入",
      content: "直接联系客服说“我要加入！”"
    }, {
      image: "/res/images/img-ad-summer.png",
      title: "激情夏日  一起溜溜",
      content: "晚上约三俩好友一起刷街吧~"
    }]
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

  goJob: function(event) {
    wx.navigateTo({
      url: '../job/job?type=job',
    })
  },

  goActivity: function(event) {
    wx.navigateTo({
      url: '../job/job?type=activity',
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
        userTitle: "66爱好者"
      })
    }

    //获取并更新连续练习天数
    var today = new Date()
    console.log("测试日期：" + JSON.stringify(today))
    var curDate = {
      date: new Date(),
      days: 1
    }

    wx.getStorage({
      key: app.data.key_days,
      success: function(res) {
        var lastDate = res.data
        var last = new Date(lastDate.date)
        //表示今天已经打开过了
        if (last.toLocaleDateString() == today.toLocaleDateString()) {
          self.setData({
            days: lastDate.days
          })
        } else {
          //上一次打开时间+1天，如果等于今天那么就是连续登录
          var temp = new Date((new Date(lastDate.date) / 1000 + 24 * 60 * 60) * 1000)
          //表示连续登录
          if (temp.toLocaleDateString() == today.toLocaleDateString()) {
            lastDate.date = new Date()
            lastDate.days++
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