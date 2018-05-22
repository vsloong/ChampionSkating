// pages/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 120.13026, //中心经度
    latitude: 30.291935,  //	中心纬度

    //标记点
    markers: [{
      iconPath: "/src/images/location.svg",
      id: 0,
      latitude: 120.12537,
      longitude: 30.25961,
      width: 36,
      height: 36
    }],
  },

  onLoad: function (options) {
    var self = this

    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var longitude = res.longitude

        var latitude = res.latitude

        console.log("经纬度：" + longitude + "-" + latitude)
        // self.setData({
        //   longitude: longitude,
        //   latitude: latitude
        // })
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    })
  }
})