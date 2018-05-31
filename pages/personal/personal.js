// pages/personal/personal.js
var util = require("../../utils/util.js")

Page({

  data: {
    showRegister: false,
    showAddress: false,   //是否展示地址
    address: ""
  },

  goRegister: function (event) {
    wx.navigateTo({
      url: '../register/register',
    })
  },

  onShow: function () {
    var isSetUserInfo = util.isSetUserInfo()
    this.setData({
      showRegister: !isSetUserInfo
    })

    var addressInfo = util.getAddressInfo()
    var openid = util.getOpenId()
    console.log("地址信息：" + JSON.stringify(addressInfo))
    console.log("openid" + JSON.stringify(openid))
    if (addressInfo) {//判断数据不为空
      this.setData({
        showAddress: true,
        showRegister: !isSetUserInfo,
        address: addressInfo.address + "--" + addressInfo.name
      })
    }
  },

  locationSwitchChange: function (e) {
    console.log("开关事件：" + e.detail.value)
    var self = this
    if (e.detail.value) {
      wx.chooseLocation({
        success: function (res) {
          //上传更新地址的信息
          self.updateAddress(res)
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
                                //上传更新地址的信息
                                self.updateAddress(res)
                              },
                            })
                          } else {
                            wx.showModal({
                              title: '权限获取失败',
                              content: '您未给该程序授权获取地理位置信息，请授权后在进行尝试',
                              showCancel: false,
                              confirmText: "我知道了"
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
              wx.showModal({
                title: '权限获取失败',
                content: '当前微信版本过低，请升级微信后在进行尝试',
                showCancel: false,
                confirmText: "我知道了"
              })
            }
          })

        }
      })
    }
    //如果关闭展示位置
    else {
      this.setData({
        showAddress: false
      })
    }
  },

  updateAddress: function (address) {
    console.log("获取位置信息成功：" + JSON.stringify(address))
    this.setData({
      showAddress: true,
      address: address.address + "--" + address.name
    })

    // wx.request({
    //   method: "POST",
    //   url: config.registerUrl,
    //   data: {
    //     code: res.code,
    //     userData: self.data.postUserInfo,
    //     showAddress: self.data.showAddress,
    //     addressData: self.data.postAddressInfo
    //   },
    //   header: {
    //     // 'content-type': 'application/x-www-form-urlencoded' // 会将数据转换成 query string
    //     'content-type': 'application/json ' // 会对数据进行 JSON 序列化
    //   },
    //   success: function (res) {
    //     console.log("服务器返回：" + JSON.stringify(res.data))
    //     self.showDialog(res.data.msg)

    //     if (res.data.code == 200) {
    //       self.setData({
    //         showRegister: false
    //       })

    //       //保存用户信息
    //       util.setUserInfo(self.data.postUserInfo)

    //       //存储位置信息
    //       util.setAddressInfo(self.data.postAddressInfo)
    //     }
    //   },
    //   fail: function () {
    //     self.showDialog("注册遇到了异常，请联系开发者")
    //   }
    // })
  }
})