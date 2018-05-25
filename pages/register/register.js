// pages/register/register.js
Page({

  data: {
    avatar: "",
    nickname: "",
    grand: "",
    address: "",
    contact: "",
    focus: false,

    showContact: false,    //控制联系方式的隐藏
    showAddress: false,   //控制地址栏的隐藏
    showRegister: false   //控制认证按钮的隐藏
  },

  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "认证"
    })
  },

  chooseLocation: function () {
    var self = this
    if (this.data.address) {
      this.setData({
        address: ""
      })
    } else {
      wx.chooseLocation({
        success: function (res) {
          console.log("获取位置信息成功：" + JSON.stringify(res))
          self.setData({
            address: res.address
          })
        },
        fail: function (res) {
          console.log("获取位置信息失败：" + JSON.stringify(res))
        }
      })
    }
  },

  showContact: function () {
    this.setData({
      focus: !this.data.focus
    })
  },

  getUserInfo: function () {
    wx.getUserInfo({
      withCredentials: true,
      lang: '',
      success: function (res) {
        console.log("获取微信数据成功：" + JSON.stringify(res))
        // console.log( JSON.stringify(res.userInfo))
      },
      fail: function (res) {
        console.log("获取微信数据失败：" + JSON.stringify(res))
      },
      complete: function (res) {
        // console.log("获取微信数据完成：" + JSON.stringify(res))
      },
    })
  },

  register: function () {
    if (this.data.showRegister)
      wx.login({
        success: function (res) {
          //console.log("获取微信登录数据成功：" + JSON.stringify(res.code))
          wx.request({
            method: "POST",
            url: 'https://xdrqojro.qcloud.la/weapp/skating/register', //仅为示例，并非真实的接口地址
            data: {
              code: res.code,
              y: '哇哈哈'
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success: function (res) {
              console.log(res.data)
            }
          })
        }
      })
  },

  locationQuestion: function () {
    wx.showModal({
      title: '展示位置信息需知',
      content: '1、完成注册后可以在“附近玩轮滑的人”中查看到自己的定位信息；\r\n2、如果认证了教练的话那么周围的人有意愿学习轮滑就可以直接联系你啦',
      showCancel: false,
      confirmText: "我知道了"
    })
  },

  contactQuestion: function () {
    wx.showModal({
      title: '展示联系方式需知',
      content: '展示自己的联系方式信息后附近和你一起志同道合的小伙伴就可以很方便的联系你了',
      showCancel: false,
      confirmText: "我知道了"
    })
  }
})