Page({

  data: {
    chooseSize: false,
    animationData: {}
  },

  onLoad: function(options) {

    var title = "发布招聘信息" //发布活动信息
    wx.setNavigationBarTitle({
      title: title,
    })
  },

  chooseType: function() {
    wx.showActionSheet({
      itemList: ['教练', '销售', '主管'],
      success: function(res) {
        console.log("成功结果：" + JSON.stringify(res))
      },
      fail: function(res) {
        console.log("失败结果：" + JSON.stringify(res))
      }
    })
  },
  chooseSezi: function(e) {
    // 用that取代this，防止不必要的情况发生
    var that = this;
    // 创建一个动画实例
    var animation = wx.createAnimation({
      // 动画持续时间
      duration: 200,
      // 定义动画效果，当前是匀速
      timingFunction: 'linear'
    })
    // 将该变量赋值给当前动画
    that.animation = animation
    // 先在y轴偏移，然后用step()完成一个动画
    animation.translateY(200).step()
    // 用setData改变当前动画
    that.setData({
      // 通过export()方法导出数据
      animationData: animation.export(),
      // 改变view里面的Wx：if
      chooseSize: true
    })
    // 设置setTimeout来改变y轴偏移量，实现有感觉的滑动
    setTimeout(function() {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export()
      })
    }, 200)
  },
  hideModal: function(e) {
    var that = this;
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'linear'
    })
    that.animation = animation
    animation.translateY(200).step()
    that.setData({
      animationData: animation.export()

    })
    setTimeout(function() {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export(),
        chooseSize: false
      })
    }, 200)
  }
})