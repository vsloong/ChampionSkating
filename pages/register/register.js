// pages/register/register.js
Page({

  data: {
    avatar: "",
    nickname: "",
    grand: "",
    address: "",
    contact: ""
  },

  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "认证"
    })
  },

  chooseLocation: function () {
    var self = this
    if (this.data.address) {
      this.setData({
        address: ""
      })
    } else {
      wx.chooseLocation({
        success: function (res) {
          console.log("获取位置信息成功：" + JSON.stringify(res))
          self.setData({
            address: res.address
          })
        },
        fail: function (res) {
          console.log("获取位置信息失败：" + JSON.stringify(res))
        }
      })
    }

  },

  locationQuestion: function () {
    wx.showModal({
      title: '注册位置信息需知',
      content: '1、完成注册后可以在“附近玩轮滑的人”中查看到自己的定位信息；\r\n2、如果认证了教练的话那么周围的人有意愿学习轮滑就可以直接联系你啦',
      showCancel: false,
      confirmText: "我知道了"
    })
  },

  contactQuestion: function () {
    wx.showModal({
      title: '注册联系方式需知',
      content: '注册自己的联系方式信息后附近和你一起志同道合的小伙伴就可以很方便的联系你了',
      showCancel: false,
      confirmText: "我知道了"
    })
  }
})