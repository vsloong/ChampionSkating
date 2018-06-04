// pages/map.js

var config = require('../../utils/config.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 0, //中心经度
    latitude: 0,  //	中心纬度
    loadLocation: false,
    //标记点
    markers: [],
  },

  onLoad: function (options) {
    var self = this
    wx.setNavigationBarTitle({
      title: "附近的人"
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
        })

        //联网获取附近的人
        self.getNearbyUser(res)

        console.log("1结果：" + self.data.load)
      }
    })
  },

  chooseLocation: function () {
    var self = this
    wx.chooseLocation({
      success: function (res) {
        console.log("地理位置信息：" + JSON.stringify(res))
        self.getNearbyUser(res)
      },
    })
  },

  getNearbyUser: function (addressData) {
    var self = this
    //获取附近的好友
    wx.request({
      method: "POST",
      url: config.nearbyUrl,
      data: {
        addressData: addressData
      },
      header: {
        'content-type': 'application/json ' // 会对数据进行 JSON 序列化
      },
      success: function (res) {
        console.log("测试接口" + JSON.stringify(res.data))

        var data = res.data.data
        var markers = []
        for (var i = 0; i < data.length; i++) {
          var temp = data[i]
          //markers的格式
          markers.push({
            id: i,
            longitude: temp.longitude,
            latitude: temp.latitude,
            iconPath: "/res/images/map-avatar.png",
            width: 48,
            height: 48,
            callout: {
              content: temp.nickName,
              color: "#ffffff",
              fontSize: 14,
              borderRadius: 12,
              bgColor: "#000000",
              textAlign: "center",
              padding: 6
            },
            user: {
              nickName: temp.nickName,
              gender: temp.gender,
              avatarUrl: temp.avatarUrl,
              address: temp.address,
              addressName: temp.addressName,
            }
            // label:{
            //   content:"不知道是什么",
            //   fontSize: 16,
            // }
          })
        }

        // console.log(JSON.stringify(markers))

        self.setData({
          markers: markers,
        })

        // console.log("2结果：" + self.data.load)
      }
    })
  },

  clickMarker: function (res) {
    console.log("点击了标记点+" + JSON.stringify(res))
  },

  clickCallout: function (res) {
    console.log("点击了气泡：" + JSON.stringify(res))
    var index = res.markerId
    var self = this
    var user = JSON.stringify(self.data.markers[index].user)
    console.log("地图传来的信息：" + user)
    wx.navigateTo({
      url: '/pages/profile/profile?user=' + user,
    })
  }
})