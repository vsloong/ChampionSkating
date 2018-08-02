Page({

  data: {
    time: 0,
    type: "", //job或者是activity
    hireType: "",
    location: {
      name: "",
      address: "",
      latitude: 0,
      longitude: 0
    },
    startTime: "00:00",
    endTime: "00:00",
    activityContentInputLength: 0,
    jobRequestsInputLength: 0
  },

  onLoad: function(options) {
    var title //发布活动信息
    var type = options.type
    this.setData({
      type: type
    })

    switch (type) {
      case "job":
        title = "发布招聘信息"
        break
      default:
        title = "发布活动信息"
        break
    }
    wx.setNavigationBarTitle({
      title: title,
    })
  },

  chooseType: function() {
    var self = this
    var itemList = ['教练', '销售', '主管']
    wx.showActionSheet({
      itemList: itemList,
      success: function(res) {
        console.log("成功结果：" + JSON.stringify(res))
        self.setData({
          hireType: itemList[res.tapIndex]
        })
      },
      fail: function(res) {
        console.log("失败结果：" + JSON.stringify(res))
      }
    })
  },

  //选择薪水
  chooseSalary: function() {

  },

  // 选择工作开始时间  
  bindStartTimeChange: function(e) {
    console.log("开始时间选择完毕：" + e.detail.value)
    this.setData({
      startTime: e.detail.value
    })
  },

  // 选择工作结束时间  
  bindEndTimeChange: function(e) {
    console.log("结束时间选择完毕：" + e.detail.value)
    this.setData({
      endTime: e.detail.value
    })
  },

  //选择地点
  chooseLocation: function() {
    var self = this
    wx.chooseLocation({
      success: function(res) {
        console.log("位置信息：" + JSON.stringify(res))
        self.setData({
          location: res
        })
      },
      fail: function() {
        wx.showModal({
          title: '温馨提示',
          content: '请前往个人中心->权限管理，允许使用我的地理位置',
          showCancel: false,
          confirmText: "我知道了"
        })
      }
    })
  },

  onActivityContentInput: function(e) {
    this.setData({
      activityContentInputLength: e.detail.cursor
    })
  },
  onJobRequestsInput: function(e) {
    this.setData({
      jobRequestsInputLength: e.detail.cursor
    })
  }
})