// pages/register/register.js
var config = require('../../utils/config.js')
var util = require('../../utils/util.js')

Page({

  data: {
    avatar: "",
    nickname: "",
    gender: 2,            //0：女；1：男；2性别
    address: "",
    contact: "",

    showContact: false,    //控制联系方式的隐藏
    showAddress: false,   //控制地址栏的隐藏
    showRegister: true,

    postUserInfo: {},
    postAddressInfo: {},
  },

  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "认证"
    })
  },

  chooseLocation: function () {
    var self = this
    if (this.data.showAddress) {
      this.setData({
        showAddress: false,
        address: ""
      })

      //删除存储的位置信息
      util.removeAddressInfo()
    } else {
      wx.chooseLocation({
        success: function (res) {
          console.log("获取位置信息成功：" + JSON.stringify(res))
          self.setData({
            address: res.address,
            showAddress: true,
            postAddressInfo: res
          })

          //存储位置信息
          util.setAddressInfo(res)
        },
        fail: function (res) {
          wx.getSetting({
            success: function (res) {
              var statu = res.authSetting;
              if (!statu['scope.userLocation']) {
                wx.showModal({
                  title: '是否授权当前位置',
                  content: '需要获取您的地理位置，请确认授权，否则地图功能将无法使用',
                  success: function (tip) {
                    if (tip.confirm) {
                      wx.openSetting({
                        success: function (data) {
                          if (data.authSetting["scope.userLocation"] === true) {
                            //授权成功之后，再调用chooseLocation选择地方
                            wx.chooseLocation({
                              success: function (res) {
                                console.log("获取位置信息成功：" + JSON.stringify(res))
                                self.setData({
                                  address: res.address,
                                  showAddress: true,
                                  postAddressInfo: res
                                })
                              },
                            })
                          } else {
                            wx.showToast({
                              title: '授权失败',
                              icon: 'success',
                              duration: 1000
                            })
                            console.log("获取位置信息失败：" + JSON.stringify(res))
                            self.setData({
                              showAddress: false
                            })
                          }
                        }
                      })
                    }
                  }
                })
              }
            },
            fail: function (res) {
              wx.showToast({
                title: '调用授权窗口失败',
                icon: 'success',
                duration: 1000
              })
              console.log("获取位置信息失败：" + JSON.stringify(res))
              self.setData({
                showAddress: false
              })
            }
          })

        }
      })
    }
  },

  showContactInput: function () {
    this.setData({
      showContact: !this.data.showContact
    })
  },

  getUserInfo: function () {
    var self = this
    wx.getUserInfo({
      withCredentials: true,
      lang: '',
      success: function (res) {

        console.log("获取微信数据成功：" + JSON.stringify(res))
        // console.log( JSON.stringify(res.userInfo))

        self.setData({
          avatar: res.userInfo.avatarUrl,
          nickname: res.userInfo.nickName,
          gender: res.userInfo.gender,
          postUserInfo: res
        })

        //获取完微信信息后直接去注册
        self.register()
      },
      fail: function (res) {
        console.log("获取微信数据失败：" + JSON.stringify(res))
        self.showDialog("认证失败，请允许获取微信相关的信息")
      },
    })
  },

  register: function () {
    var self = this
    wx.login({
      success: function (res) {
        //console.log("获取微信登录数据成功：" + JSON.stringify(res.code))
        wx.request({
          method: "POST",
          url: config.registerUrl,
          data: {
            code: res.code,
            userData: self.data.postUserInfo,
            showAddress: self.data.showAddress,
            addressData: self.data.postAddressInfo
          },
          header: {
            // 'content-type': 'application/x-www-form-urlencoded' // 会将数据转换成 query string
            'content-type': 'application/json ' // 会对数据进行 JSON 序列化
          },
          success: function (res) {
            console.log("服务器返回：" + JSON.stringify(res.data))
            self.showDialog(res.data.msg)

            if (res.data.code == 200) {
              self.setData({
                showRegister: false
              })

              //保存用户信息
              util.setUserInfo(self.data.postUserInfo)
            }
          },
          fail: function () {
            self.showDialog("注册遇到了异常，请联系开发者")
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