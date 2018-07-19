Page({

  data: {
    list: [],
    title: "兼职",
    club: "冠军轮滑培训机构",
    user: "武教练",
    content: "西湖区诚聘晚轮滑初中高级教练",
  },

  onLoad: function(options) {
    var title = "兼职"
    var type = options.type //有job和activity
    switch (type) {
      case "activity":
        title = "活动"
        break
      default:
        break
    }
    this.setData({
      title: title
    })
    wx.setNavigationBarTitle({
      title: title + "信息"
    })
  },


  goPublish: function() {
    wx.navigateTo({
      url: '../publish/publish',
    })
  }

})