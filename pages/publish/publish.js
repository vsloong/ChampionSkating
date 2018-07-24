Page({

  data: {
    showModal: true,
    dates: '2016-11-08',
    times: '00:00',
    objectArray: ['中国', '英国', '美国'],
    index: 0,
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

  chooseTime: function() {
    this.setData({
      showModal: false
    })
  },
  //  点击时间组件确定事件  
  bindTimeChange: function(e) {
    console.log("时间选择完毕：" + e.detail.value)
    this.setData({
      times: e.detail.value
    })
  },

})