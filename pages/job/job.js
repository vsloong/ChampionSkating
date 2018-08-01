Page({

  data: {
    type: "",
    hidePermissionModal: true,
    permissionValue: "",
    list: [],
  },

  onLoad: function(options) {
    var title = "兼职"
    var type = options.type //有job和activity
    switch (type) {
      case "activity":
        title = "活动"
        break
      default:
        break
    }
    this.setData({
      type: type,
      title: title
    })
    wx.setNavigationBarTitle({
      title: title + "信息"
    })
  },


  goPublish: function() {
    //先验证是否有权限 1、是否认证；2是否获取到发布密钥
    var openid = wx.getStorageSync(getApp().data.key_openid)

    //1、判断是否认证
    if (!openid) {
      wx.showModal({
        title: '温馨提示',
        content: '抱歉！您还没有认证，请提交认证后再发布信息',
        showCancel: false,
        confirmText: "我知道了"
      })
      return
    }

    //2、输入从客服处获取的密钥信息
    this.setData({
      hidePermissionModal: false
    })
  },


  //权限验证对话框取消按钮
  permissionCancel: function() {
    this.setData({
      hidePermissionModal: true
    });
  },

  //权限验证对话框确认按钮
  permissionConfirm: function() {
    this.setData({
      hidePermissionModal: true
    })

    wx.showModal({
      title: '温馨提示',
      content: '您输入的密钥值不合法',
      confirmText: '我知道了',
      showCancel: false
    })

    if (this.data.permissionValue == "1234567890") {
      //清空原来的密钥信息
      this.setData({
        permissionValue: ""
      })
      //确认有权限才可以发布
      var self = this
      wx.navigateTo({
        url: '../publish/publish?type=' + self.data.type,
      })
    } else {
      wx.showModal({
        title: '温馨提示',
        content: '您输入的密钥值不合法',
        confirmText: '我知道了',
        showCancel: false
      })
    }
  },

  bindInput: function(input) {
    console.log("输入内容：" + JSON.stringify(input.detail.value))
    var value = input.detail.value

    if (value.length == 10) {
      this.data.permissionValue = value
    }
  }
})