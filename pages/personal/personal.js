// pages/personal/personal.js
var util = require("../../utils/util.js")

Page({

  data: {
    showRegister: false
  },

  goRegister: function (event) {
    wx.navigateTo({
      url: '../register/register',
    })
  },

  onShow: function () {
    var isSetUserInfo = util.isSetUserInfo()

    this.setData({
      showRegister: !isSetUserInfo
    })
  }
})