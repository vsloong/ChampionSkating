// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: "",
    gender: 0,
    avatarUrl: "",
    address: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("资料页面：" + options.user)
    var user = JSON.parse(options.user)
    this.setData({
      avatarUrl: user.avatarUrl,
      gender: user.gender,
      nickName: user.nickName,
      address: user.address + "--" + user.addressName
    })
  },
})