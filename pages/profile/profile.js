Page({

  data: {
    user: {
      title: '',
      nickName: '',
      gender: 0,
      avatarUrl: '',
      address: '',
      contact: '',
    }
  },

  onLoad: function(options) {
    console.log("资料页面：" + options.user)
    var user = JSON.parse(options.user)
    //设置用户数据

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
      user: {
        avatarUrl: user.avatarUrl,
        gender: user.gender,
        nickName: user.nickName,
        address: user.address + "--" + user.addressName,
        contact: user.contact,
        title: title
      }
    })
  },

  goNavigation: function() {
    //设置终点的坐标
    getApp().routeInfo = {
      endLat: parseFloat(this.data.user.latitude), // 终点纬度 必传
      endLng: parseFloat(this.data.user.longitude), //终点经度 必传
      endName: this.data.user.address, //终点名称 必传
      mode: 'bus' //算路方式 选填car bus walk
    }

    console.log("终点坐标：" + JSON.stringify(getApp().routeInfo))

    wx.navigateTo({
      url: '../navigation/navigation',
    })
  }
})