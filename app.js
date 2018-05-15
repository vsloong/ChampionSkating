//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
  },

  //动作等级表
  grades: [
    //0、基础
    {
      grade: "基础",
      figure: [
        {
          name: "V字站立",
          other: "外八站立",
        },
        {
          name: "平行站立",
          other: "",
        },
        {
          name: "A字站立",
          other: "内八站立",
        },
        {
          name: "扶膝抬脚",
          other: "",
        },
        {
          name: "提膝抬脚",
          other: "",
        },
        {
          name: "横向侧行",
          other: "",
        },
        {
          name: "扶膝踏步前行",
          other: "",
        },
        {
          name: "背手踏步前行",
          other: "",
        },
        {
          name: "原地蹬收脚",
          other: "",
        },
        {
          name: "扶膝单侧蹬收脚滑行",
          other: "",
        },
        {
          name: "背手蹬收脚滑行",
          other: "",
        },
        {
          name: "摆臂蹬收脚滑行",
          other: "",
        },
        {
          name: "画葫芦向前",
          other: "",
        },
        {
          name: "画葫芦向后",
          other: "",
        },
        {
          name: "A字刹车",
          other: "",
        },
      ]
    },
    //1、入门
    {
      grade: "入门",
      figure: [
        {
          name: "鱼形向前",
          other: "",
        },
        {
          name: "鱼形向后",
          other: "",
        },
        {
          name: "交叉向前",
          other: "",
        },
        {
          name: "交叉向后",
          other: "",
        },
        {
          name: "攀藤",
          other: "",
        },
        {
          name: "蛇形向前",
          other: "",
        },
        {
          name: "蛇形向后",
          other: "",
        },
        {
          name: "尼尔森向前",
          other: "",
        },
        {
          name: "尼尔森向后",
          other: "",
        },
        {
          name: "单脚向前",
          other: "",
        },
        {
          name: "T字刹车",
          other: "",
        },
        {
          name: "单脚向后",
          other: "",
        },
        {
          name: "后铲刹车",
          other: "",
        },
        {
          name: "脚跟Sun",
          other: "",
        },
        {
          name: "脚尖Sun",
          other: "",
        },
      ]
    },

    //2、初级
    {
      grade: "初级",
      figure: [
        {
          name: "疯狂绕单桩",
          other: "",
        },
        {
          name: "疯狂",
          other: "",
        },
        {
          name: "伏特",
          other: "",
        },
        {
          name: "fun伏特",
          other: "",
        },
        {
          name: "漫步向后",
          other: "",
        },
        {
          name: "漫步向前",
          other: "",
        },
        {
          name: "Q转",
          other: "",
        },
        {
          name: "反Q转",
          other: "",
        },
        {
          name: "Crazy Sun",
          other: "",
        },
        {
          name: "墨西哥人",
          other: "",
        },
        {
          name: "意大利人",
          other: "",
        },
        {
          name: "双脚连续转向",
          other: "",
        },
        {
          name: "反尼尔森向后",
          other: "",
        },
        {
          name: "恰恰",
          other: "",
        },
        {
          name: "蟹绕桩跳",
          other: "",
        },
        {
          name: "蟹交叉跳",
          other: "",
        },
      ]
    },

    //3、中级
    {
      grade: "中级",
      figure: [
        {
          name: "刷子",
          other: "",
        },
        {
          name: "X步",
          other: "",
        },
        {
          name: "X跳",
          other: "",
        },
        {
          name: "玛丽向前",
          other: "",
        },
        {
          name: "玛丽向后",
          other: "",
        },
        {
          name: "玛丽Speci",
          other: "",
        },
        {
          name: "脚尖X",
          other: "",
        },
        {
          name: "画8",
          other: "",
        },
        {
          name: "反向画8",
          other: "",
        },
        {
          name: "太空步",
          other: "",
        },
        {
          name: "蟹步",
          other: "",
        },
        {
          name: "蟹剪",
          other: "",
        },
        {
          name: "Z蟹",
          other: "",
        },
        {
          name: "内蟹",
          other: "",
        },
        {
          name: "双轮蟹",
          other: "",
        },
        {
          name: "双轮内蟹",
          other: "",
        },
        {
          name: "交叉玛丽向前",
          other: "",
        },
        {
          name: "交叉玛丽向后",
          other: "",
        },
        {
          name: "天鹅蟹",
          other: "",
        },
        {
          name: "蹲坐鱼形向前",
          other: "",
        },
        {
          name: "小汽车",
          other: "",
        },
      ]
    },

    //4、高级
    {
      grade: "高级",
      figure: [
        {
          name: "茶壶向前",
          other: "",
        },
        {
          name: "茶壶向后",
          other: "",
        },
        {
          name: "茶壶跳向前",
          other: "",
        },
        {
          name: "茶壶跳向后",
          other: "",
        },
        {
          name: "蹲坐玛丽向后",
          other: "",
        },
        {
          name: "天国向前",
          other: "",
        },
        {
          name: "天国向后",
          other: "",
        },
        {
          name: "单轮茶壶向前",
          other: "",
        },
        {
          name: "单轮茶壶向后",
          other: "",
        },
        {
          name: "蹲坐交叉玛丽向前",
          other: "",
        },
        {
          name: "单轮天国向前",
          other: "",
        },
        {
          name: "单轮天国向后",
          other: "",
        },
        {
          name: "单脚横跳",
          other: "",
        },
        {
          name: "单脚连续转向跳",
          other: "",
        },
        {
          name: "单脚连续正转向",
          other: "",
        },
        {
          name: "单脚连续反转向",
          other: "",
        },
        {
          name: "双脚转",
          other: "",
        },
        {
          name: "双轮转",
          other: "",
        },
        {
          name: "天鹅过桩转",
          other: "",
        },
        {
          name: "黑天鹅单桩转",
          other: "",
        },
        {
          name: "黑天鹅过桩转",
          other: "",
        },
      ]
    },

    //5、专业级
    {
      grade: "专业级",
      figure: [
        {
          name: "单轮向前",
          other: "",
        },
        {
          name: "单轮前转后",
          other: "",
        },
        {
          name: "单轮后转前",
          other: "",
        },
        {
          name: "单轮捅捅",
          other: "",
        },
        {
          name: "单轮Special",
          other: "",
        },
        {
          name: "脚尖X跳",
          other: "",
        },
        {
          name: "单轮Wiper",
          other: "",
        },
        {
          name: "单轮摆摆",
          other: "",
        },
        {
          name: "单轮反向摆摆",
          other: "",
        },
        {
          name: "单轮连续转向",
          other: "",
        },
        {
          name: "单轮前內刃单桩转",
          other: "",
        },
        {
          name: "单轮前內刃过桩转",
          other: "",
        },
        {
          name: "单轮前外刃单桩转",
          other: "",
        },
        {
          name: "单轮前外刃过桩转",
          other: "",
        },
        {
          name: "单轮后外刃单桩转",
          other: "",
        },
        {
          name: "单轮后内刃过桩转",
          other: "",
        },
        {
          name: "单轮后外刃过桩转",
          other: "",
        },
        {
          name: "单脚前外刃单桩转",
          other: "",
        },
        {
          name: "单脚后内刃单桩转",
          other: "",
        },
        {
          name: "单脚后外刃单桩转",
          other: "",
        },
        {
          name: "单轮半蹲转",
          other: "",
        },
      ]
    }
  ]
})