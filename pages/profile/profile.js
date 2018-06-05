// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
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

    var title
    switch (parseInt(user.userType)) {
      case 1:
        title = "初级教练"
        break
      case 2:
        title = "中级教练"
        break
      case 3:
        title = "高级教练"
        break
      case 4:
        title = "国家级教练"
        break
      default:
        title = "66爱好者"
        break
    }
    this.setData({
      avatarUrl: user.avatarUrl,
      gender: user.gender,
      nickName: user.nickName,
      address: user.address + "--" + user.addressName,
      title: title
    })
  },
})