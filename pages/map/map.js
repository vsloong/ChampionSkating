// pages/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 0, //中心经度
    latitude: 0,  //	中心纬度

    //标记点
    markers: [{
      iconPath: "/res/images/map-avatar-boy.png",
      id: 0,
      longitude: 120.13026,
      latitude: 30.291935,
      width: 36,
      height: 36
    }],
  },

  onLoad: function (options) {
    var self = this
    wx.setNavigationBarTitle({
      title: "地图找教练"
    })

    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy

        //更新自身的位置
        self.setData({
          longitude: longitude,
          latitude: latitude,
          markers: [{
            iconPath: "/res/images/map-avatar-boy.png",
            id: 0,
            longitude: 120.13026,
            latitude: 30.291935,
            width: 36,
            height: 36
          },
          {
            iconPath: "/res/images/map-avatar-girl.png",
            id: 1,
            longitude: 120.13126,
            latitude: 30.292935,
            width: 36,
            height: 36
          }],
        })
      }
    })
  }
})