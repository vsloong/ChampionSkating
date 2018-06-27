// pages/map.js

var config = require('../../utils/config.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 0, //中心经度
    latitude: 0, //	中心纬度
    loadLocation: false,
    //标记点
    markers: [],
    circles: [],
  },

  onLoad: function(options) {
    var self = this
    wx.setNavigationBarTitle({
      title: "附近的人"
    })

    //更新自身位置
    wx.getLocation({
      type: 'gcj02',
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy

        //更新自身的位置
        self.setData({
          longitude: longitude,
          latitude: latitude,
          loadLocation: true,
          circles: [{
            latitude: latitude,
            longitude: longitude,
            fillColor: "#418be211",
            //默认20km半径
            radius: 20000
          }]
        })

        //联网获取附近的人
        self.getNearbyUser(res)
      },
      //如果没有给获取地理位置权限，那么就退出地图功能
      fail: function() {
        wx.showModal({
          title: '温馨提示',
          content: '请进入个人中心点击“权限管理”进入设置页面并允许“使用我的地理位置”',
          showCancel: false,
          confirmText: "我知道了",
          complete: function() {
            wx.navigateBack()
          }
        })
      }
    })
  },

  chooseLocation: function() {
    var self = this
    wx.chooseLocation({
      success: function(res) {
        console.log("地理位置信息：" + JSON.stringify(res))
        self.getNearbyUser(res)
      },
    })
  },

  getNearbyUser: function(addressData) {
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
      success: function(res) {
        console.log("测试接口" + JSON.stringify(res.data))

        var users = res.data.data
        var markers = []
        for (var i = 0; i < users.length; i++) {
          var user = users[i]
          //markers的格式
          markers.push({
            id: i,
            longitude: user.longitude,
            latitude: user.latitude,
            iconPath: "/res/images/map-avatar.png",
            width: 45,
            height: 45,
            callout: {
              content: user.nickName,
              color: "#ffffff",
              fontSize: 14,
              borderRadius: 12,
              bgColor: "#000000",
              textAlign: "center",
              padding: 6
            },
            user: user
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

  clickMarker: function(res) {
    console.log("点击了标记点+" + JSON.stringify(res))
  },

  clickCallout: function(res) {
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