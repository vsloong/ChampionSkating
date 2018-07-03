Page({

  data: {
    club: "冠军轮滑培训机构",
    user: "武教练",
    content: "西湖区诚聘晚轮滑初中高级教练"
  },

  onLoad: function(options) {

  },

  goNavigation: function() {
    wx.navigateTo({
      url: '../navigation/navigation',
    })
  }
})