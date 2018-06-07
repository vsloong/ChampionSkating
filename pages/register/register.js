// pages/register/register.js
var config = require('../../utils/config.js')
var util = require('../../utils/util.js')

Page({

  data: {
    showRegister: true,
    postUserInfo: {},
    code: ""
  },

  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "认证"
    })
  },

  getUserInfo: function () {
    var self = this
    wx.getUserInfo({
      withCredentials: true,//要求此前有调用过 wx.login 且登录态尚未过期
      success: function (res) {
        console.log("获取用户微信基本信息成功：" + JSON.stringify(res))
        self.setData({
          postUserInfo: res
        })

        //获取完微信信息后直接去注册
        self.request()
      },
      fail: function (res) {
        console.log("获取用户微信基本信息成功：" + JSON.stringify(res))
        self.showDialog("认证失败，请允许获取微信相关的信息")
      },
    })
  },

  register: function () {
    var self = this
    wx.login({
      success: function (res) {
        console.log("获取微信登录数据成功：" + JSON.stringify(res.code))
        self.setData({
          code: res.code
        })
        self.getUserInfo();
      }
    })
  },

  request: function () {
    var self = this
    wx.request({
      method: "POST",
      url: config.registerUrl,
      data: {
        code: self.data.code,
        userData: self.data.postUserInfo,
      },
      header: {
        // 'content-type': 'application/x-www-form-urlencoded' // 会将数据转换成 query string
        'content-type': 'application/json ' // 会对数据进行 JSON 序列化
      },
      success: function (res) {
        console.log("服务器返回：" + JSON.stringify(res.data))
        if (res.data.code == 201 || res.data.code == 200) {
          self.setData({
            showRegister: false
          })

          //保存用户信息，其实这里基本没用
          util.setUserInfo(self.data.postUserInfo)
          //保存用户的openid
          util.setOpenId(res.data.openid)
          //如果是已注册用户判断是否需要保存地址信息
          if (res.data.code == 201 && res.data.user.showAddress == 1) {
            //其实也就是需要一个地址跟地址名就好
            var address = new Object()
            address.name = res.data.user.addressName
            address.address = res.data.user.address
            util.setAddressInfo(address)
          }

          //展示相应的信息，确定后返回上一页面，
          wx.showModal({
            title: '温馨提醒',
            content: res.data.msg,
            showCancel: false,
            success: function (res) {
              //无论点击的哪里都要返回上一页面
              wx.navigateBack()
            }
          })
        } else {
          self.showDialog(res.data.msg)
        }
      },
      fail: function () {
        self.showDialog("网络请求异常，请检查网络连接后重新尝试")
      }
    })
  },

  showDialog: function (content) {
    wx.showModal({
      title: '温馨提醒',
      content: content,
      showCancel: false,
      confirmText: '我知道了'
    })
  }
})