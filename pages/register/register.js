// pages/register/register.js
Page({

  data: {
    avatar: "",
    nickname: "",
    grand: ""
  },

  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "认证"
    })
  },

})