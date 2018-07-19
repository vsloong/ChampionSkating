Page({

  data: {

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
  }
})