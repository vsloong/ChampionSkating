var app = getApp()
var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    gradeIndex: 0,
    figureIndex: 0,
    scrollHeight: 0,
    figure: {
      name: "",
      videoUrl: "",
      vid: "", //需要设置一个默认的vid否则组件报错，但是不影响运行
      can: false,
      version: 100,
      skill: [],
      attention: [],
      skillTemp: ["程序员小哥哥跟轮滑小姐姐正在加紧配合完善中，请耐心等待"],
      attentionTemp: ["程序员小姐姐跟轮滑小哥哥正在加紧配合完善中，请耐心等待"]
    }
  },

  onLoad: function(options) {
    var gradeIndex = options.grade;
    var figureIndex = options.figure;
    var self = this

    var scrollHeight
    if (gradeIndex == 0) {
      scrollHeight = 100 - 10
    } else {
      scrollHeight = 100 - 35 - 10
    }

    //这些数据必须立刻执行，否则请求网络信息的时候gradeIndex和figureIndex可能还未赋值
    this.setData({
      gradeIndex: gradeIndex,
      figureIndex: figureIndex,
      scrollHeight: scrollHeight,
    })

    //从本地加载数据
    wx.getStorage({
      key: 'grades',
      success: function(res) {
        var grades = res.data
        var figure = grades[gradeIndex].figures[figureIndex]
        console.log("本地缓存figure基础内容：" + JSON.stringify(figure))

        wx.setNavigationBarTitle({
          title: figure.name
        })
        self.setData({
          "figure.name": figure.name,
          "figure.videoUrl": figure.videoUrl,
          "figure.vid": figure.vid ? figure.vid : self.data.figure.vid,
          "figure.can": figure.can ? figure.can : self.data.figure.can,
        })
      },
    })

    wx.getStorage({
      key: 'grade' + this.data.gradeIndex,
      success: function(res) {
        var grade = res.data
        var figure = grade.figures[figureIndex]
        console.log("本地缓存figure技能内容：" + JSON.stringify(figure))

        self.setData({
          "figure.version": figure.version ? figure.version : self.data.figure.version,
          "figure.skill": figure.skill ? figure.skill : self.data.figure.skillTemp,
          "figure.attention": figure.attention ? figure.attention : self.data.figure.attentionTemp
        })
      },
      fail: function() {
        self.setData({
          "figure.skill": self.data.figure.skillTemp,
          "figure.attention": self.data.figure.attentionTemp
        })
      }
    })

    //联网获取动作信息
    this.getFigureInfo()
  },

  //按钮点击执行
  updateProgress: function() {
    util.updateProgress(this.data.gradeIndex, this.data.figureIndex, true)
    this.setData({
      //只将figuer对象的can属性刷新
      "figure.can": true
      //下面这种写法会将figure对象的所有属性刷新，造成其他未赋值的属性值丢失
      // figure: {
      //   can: true
      // }
    })
    wx.showToast({
      title: '继续加油吧！',
    })
  },

  //加载完成后自动执行获取最新动作信息
  getFigureInfo: function() {
    var self = this
    var url = 'https://easy-mock.com/mock/5b1649566b9c525d07ae12f7/skating/figure?gradeIndex=' + self.data.gradeIndex + "&figureIndex=" + self.data.figureIndex

    console.log("请求的url：" + url)
    wx.request({
      url: url,
      success: function(res) {
        console.log("网络获取figure内容：" + JSON.stringify(res.data))
        var figure = res.data.data;
        //version为100表示当前动作信息等还未编辑
        if (figure.version != 100 && figure.version != self.data.figure.version) {
          console.log("动作信息版本有更新")
          //局部属性刷新
          self.setData({
            "figure.version": figure.version,
            "figure.skill": figure.skill,
            "figure.attention": figure.attention
          })

          //并保存到本地存储中去
          util.updateFigureInfo(self.data.gradeIndex, self.data.figureIndex, figure)
        }
      },
      fail: function() {
        console.log("动作详情获取失败")
      }
    })
  }
})