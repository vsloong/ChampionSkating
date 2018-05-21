//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //等级这里直接调用app.js中的变量
    grades: app.grades,
    total: 0,
    progress: 0
  },

  goGrade: function (event) {
    var grade = event.currentTarget.dataset.grade
    wx.navigateTo({
      url: '../grade/grade?grade=' + grade,
    })
  },

  onLoad: function (options) {
    var self = this
    getData()

    function updateProgress(grades) {
      var total = 0
      var progress = 0
      for (var i = 0; i < grades.length; i++) {
        var length = grades[i].figures.length
        total += length
        for (var j = 0; j < length; j++) {
          if (grades[i].figures[j].can)
            progress++
        }
      }

      progress += 66

      //这里其实就是更新数据
      self.setData({
        total: total,
        progress: progress
      })
    }

    function getData() {
      updateProgress(app.grades)
      
      // 暂时不做缓存
      // wx.getStorage({
      //   key: 'grades',
      //   success: function (res) {
      //     updateProgress(res.data)
      //   },
      //   fail: function () {
      //     wx.setStorage({
      //       key: 'grades',
      //       data: app.grades,
      //     })
      //     updateProgress(app.grades)
      //   }
      // })

    }
  },

  onShareAppMessage:function(options){
      return{
        title:"学习轮滑的实用小程序",
        path:"/pages/index/index"
      }
  }
})
