// pages/personal/personal.js
var util = require("../../utils/util.js")
var config = require("../../utils/config.js")

Page({

  data: {
    showRegister: false,
    showAddress: false, //是否展示地址
    address: "",
    showContact: false,
    showInput: false, //展示输入框
    showText: false, //展示文本
    contact: "",
    tempContact: ""
  },

  goRegister: function(event) {
    wx.navigateTo({
      url: '../register/register',
    })
  },

  onShow: function() {
    //如果本地没有存储openid那么就展示认证按钮
    var showRegister = util.isStorageSetted(getApp().data.key_openid)
    this.setData({
      showRegister: !showRegister
    })

    var addressInfo = util.getAddressInfo()
    var openid = util.getOpenId()
    console.log("地址信息：" + JSON.stringify(addressInfo))
    console.log("openid" + JSON.stringify(openid))

    //当获取地址失败或者没有存储地址信息（即获取的地址信息为""）时都不会展示
    if (addressInfo) {
      this.setData({
        showAddress: true,
        address: addressInfo.address + "--" + addressInfo.name
      })
    }

    var contactInfo = util.getContactInfo()
    if (contactInfo) {
      this.setData({
        showContact: true,
        showText: true,
        contact: contactInfo
      })
    }
  },

  locationSwitchChange: function(e) {
    console.log("开关事件：" + e.detail.value)
    var self = this
    if (e.detail.value) {
      wx.chooseLocation({
        success: function(res) {
          console.log("获取地址信息成功：" + JSON.stringify(res))
          //上传更新地址的信息
          self.updateAddress(true, res)
        },
        fail: function(res) {
          console.log("获取地址信息失败：" + JSON.stringify(res))
          self.updateAddressFail(true, '请点击下方“权限管理”按钮进入设置页面并允许“使用我的地理位置”')
        },
        cancel: function() {
          console.log("取消了")
          self.updateAddressFail(true, "您取消了位置选择")
        }
      })
    }
    //如果关闭展示位置
    else {
      self.updateAddress(false, "")
    }
  },

  /**
   * 选择位置
   */
  chooseLocation: function() {
    var self = this
    wx.chooseLocation({
      success: function(res) {
        console.log("获取地址信息成功：" + JSON.stringify(res))
        //上传更新地址的信息
        self.updateAddress(true, res)
      }
    })
  },

  /**
   * 选择展示联系方式
   */
  contactSwitchChange: function(e) {
    console.log("开关事件：" + e.detail.value)
    var self = this
    if (e.detail.value) {
      this.setData({
        showInput: true,
        showText: false,
      })
    } else {
      //如果本来是展示状态，那么现在需要联网去关闭
      if (this.data.showContact) {
        console.log("之前是展示状态，现在需要联网关闭")
        this.updateContact(false)
      }
      //否则直接关闭即可
      else {
        console.log("之前是不展示状态，现在直接关闭了")
        this.setData({
          showContact: false,
          showInput: false,
          showText: false
        })
      }

    }
    // this.setData({
    //   showContact: e.detail.value
    // })
  },

  isShowInput: function(e) {
    console.log("按钮点击事件：" + JSON.stringify(e.target.id))
    var self = this
    switch (e.target.id) {
      case "image-edit-show":
        //如果已经是展示输入框的状态，那么点击无效果
        break
      case "image-edit-hidden":
        this.setData({
          showInput: true,
          showText: false,
          tempContact: ""
        })
        break
      case "image-edit-cancel":
        //如果原来是展示状态，那么直接关闭输入框
        if (this.data.showContact) {
          console.log("之前是展示状态，直接关闭输入框，展示文本框")
          this.setData({
            showContact: true,
            showInput: false,
            showText: true
          })
        } else {
          //如果原来是不展示状态，那么全部关闭
          this.setData({
            showContact: false,
            showInput: false,
            showText: false
          })
        }

        break
      case "image-edit-confirm":
        if (this.data.tempContact.length > 0 && this.data.tempContact.length < 30) {
          //确认开启或者修改联系信息，联网请求
          this.updateContact(true)
        } else {
          wx.showModal({
            title: '温馨提示',
            content: '字符串限制为0-30个，请您规范输入',
            showCancel: false,
            confirmText: "我知道了"
          })
        }

        break
      default:
        break
    }
  },

  /**
   * 输入监听
   */
  bindContactInput: function(e) {
    var temp = e.detail.value
    console.log(temp.length)
    this.setData({
      tempContact: temp
    })
  },

  updateContact: function(show) {
    var self = this
    wx.request({
      method: "POST",
      url: config.contactUrl,
      data: {
        openId: util.getOpenId(),
        showContact: show,
        contactData: self.data.tempContact
      },
      header: {
        'content-type': 'application/json ' // 会对数据进行 JSON 序列化
      },
      fail: function() {
        self.updateContactFail(show, "更新联系方式失败，请检查网络连接后重试")
      },
      success: function(res) {
        console.log("服务器返回：" + JSON.stringify(res.data))
        if (res.data.code == 200) {
          if (show) {
            self.setData({
              contact: self.data.tempContact,
              showContact: true,
              showInput: false,
              showText: true
            })
          } else {
            self.setData({
              contact: "",
              showContact: false,
              showInput: false,
              showText: false
            })
          }

          //别忘了修改本地文件
          if (show) {
            util.setContactInfo(self.data.tempContact)
          } else {
            util.removeContactInfo()
          }
        } else {
          self.updateContactFail(show, "更新联系方式失败")
        }
      }

    })
  },

  updateAddress: function(show, address) {
    console.log("位置信息修改：" + show + "；" + JSON.stringify(address))
    var self = this
    wx.request({
      method: "POST",
      url: config.addressUrl,
      data: {
        openId: util.getOpenId(),
        showAddress: show,
        addressData: address
      },
      header: {
        // 'content-type': 'application/x-www-form-urlencoded' // 会将数据转换成 query string
        'content-type': 'application/json ' // 会对数据进行 JSON 序列化
      },
      success: function(res) {
        console.log("服务器返回：" + JSON.stringify(res.data))
        if (res.data.code == 200) {
          self.setData({
            showAddress: show,
            address: show ? (address.address + "--" + address.name) : ""
          })

          //别忘了修改本地文件
          if (show) {
            util.setAddressInfo(address)
          } else {
            util.removeAddressInfo()
          }
        } else {
          self.updateAddressFail(show, "更新位置信息失败")
        }
      },
      fail: function() {
        self.updateAddressFail(show, "更新位置信息失败，请检查网络连接后重试")
      }
    })
  },

  updateAddressFail: function(show, msg) {
    console.log("更新位置失败执行这里")
    this.setData({
      showAddress: !show
    })
    util.showDialog(msg)
  },

  updateContactFail: function(show, msg) {
    console.log("更新位置失败执行这里")
    this.setData({
      showContact: !show
    })
    util.showDialog(msg)
  },

  clearCache: function() {
    // wx.clearStorage()
    var self = this
    wx.showModal({
      title: '温馨提示',
      content: '将清除当前本地的认证信息，请谨慎操作',
      cancelText: "算了",
      confirmText: "继续",
      success: function(res) {
        if (res.confirm) {
          try {
            wx.removeStorageSync("address")
            wx.removeStorageSync("contact")
          } catch (e) {}

          wx.removeStorage({
            key: 'openid',
            success: function(res) {
              wx.showToast({
                title: '认证信息已清除，请重新认证',
              })

              self.onShow()
            },
          })
        }
      }
    })

  }
})