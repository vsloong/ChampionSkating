// pages/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 0, //中心经度
    latitude: 0,  //	中心纬度
    loadLocation: false,
    loadMarkers: false,
    load: false,
    //标记点
    markers: [],
  },

  onLoad: function (options) {
    var self = this
    wx.setNavigationBarTitle({
      title: "地图找教练"
    })

    //更新自身位置
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
          loadLocation: true,
          load: true && self.data.loadMarkers
          //   markers: [{
          //     iconPath: "/res/images/map-avatar-boy.png",
          //     id: 0,
          //     longitude: 120.13026,
          //     latitude: 30.291935,
          //     width: 36,
          //     height: 36
          //   },
          //   {
          //     iconPath: "/res/images/map-avatar-girl.png",
          //     id: 1,
          //     longitude: 120.13126,
          //     latitude: 30.292935,
          //     width: 36,
          //     height: 36
          //   }],
        })

        console.log("1结果：" + self.data.load)
      }
    })

    //会打开选择位置的地图
    // wx.chooseLocation({
    //   success: function () {
    //     console.log(res)
    //   }
    // })

    //获取附近的好友
    wx.request({
      url: 'https://xdrqojro.qcloud.la/skating/location',
      success: function (res) {
        console.log("测试接口" + JSON.stringify(res.data))

        var data = res.data.datas
        var markers = []
        var marker = {}
        for (var i = 0; i < data.length; i++) {
          var temp = data[i]
          //markers的格式
          markers.push({
            id: i,
            title: "你好" + i,
            longitude: temp.longitude,
            latitude: temp.latitude,
            iconPath: i % 2 == 0 ? "/res/images/map-avatar-boy.png" : "/res/images/map-avatar-girl.png",
            width: 36,
            height: 36,
            callout: {
              content: "title"
            }
          })
        }

        console.log(JSON.stringify(markers))

        self.setData({
          markers: markers,
          loadMarkers: true,
          load: true && self.data.loadLocation
        })

        console.log("2结果：" + self.data.load)
      }
    })
  }
})