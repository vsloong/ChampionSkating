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
          can: false,
        },
        {
          name: "平行站立",
          other: "",
          can: false,
        },
        {
          name: "A字站立",
          other: "内八站立",
          can: false,
        },
        {
          name: "扶膝抬脚",
          other: "",
          can: false,
        },
        {
          name: "提膝抬脚",
          other: "", can: false,
        },
        {
          name: "横向侧行",
          other: "", can: false,
        },
        {
          name: "扶膝踏步前行",
          other: "", can: false,
        },
        {
          name: "背手踏步前行",
          other: "", can: false,
        },
        {
          name: "原地蹬收脚",
          other: "", can: false,
        },
        {
          name: "扶膝单侧蹬收脚滑行",
          other: "", can: false,
        },
        {
          name: "背手蹬收脚滑行",
          other: "", can: false,
        },
        {
          name: "摆臂蹬收脚滑行",
          other: "", can: false,
        },
        {
          name: "画葫芦向前",
          other: "", can: false,
        },
        {
          name: "画葫芦向后",
          other: "", can: false,
        },
        {
          name: "A形刹车",
          other: "", can: false,
        },
      ]
    },
    //1、入门
    {
      grade: "入门",
      figure: [
        {
          name: "鱼形向前",
          other: "", can: false,
        },
        {
          name: "鱼形向后",
          other: "", can: false,
        },
        {
          name: "交叉向前",
          other: "", can: false,
        },
        {
          name: "交叉向后",
          other: "", can: false,
        },
        {
          name: "攀藤",
          other: "", can: false,
        },
        {
          name: "蛇形向前",
          other: "", can: false,
        },
        {
          name: "蛇形向后",
          other: "", can: false,
        },
        {
          name: "尼尔森向前",
          other: "", can: false,
        },
        {
          name: "尼尔森向后",
          other: "", can: false,
        },
        {
          name: "单脚向前",
          other: "", can: false,
        },
        {
          name: "T形刹车",
          other: "", can: false,
        },
        {
          name: "单脚向后",
          other: "", can: false,
        },
        {
          name: "后铲刹车",
          other: "", can: false,
        },
        {
          name: "脚跟Sun",
          other: "", can: false,
        },
        {
          name: "脚尖Sun",
          other: "", can: false,
        },
      ]
    },

    //2、初级
    {
      grade: "初级",
      figure: [
        {
          name: "疯狂绕单桩",
          other: "", can: false,
        },
        {
          name: "疯狂",
          other: "", can: false,
        },
        {
          name: "伏特",
          other: "", can: false,
        },
        {
          name: "fun伏特",
          other: "", can: false,
        },
        {
          name: "漫步向后",
          other: "", can: false,
        },
        {
          name: "漫步向前",
          other: "", can: false,
        },
        {
          name: "Q转",
          other: "", can: false,
        },
        {
          name: "反Q转",
          other: "", can: false,
        },
        {
          name: "Crazy Sun",
          other: "", can: false,
        },
        {
          name: "墨西哥人",
          other: "", can: false,
        },
        {
          name: "意大利人",
          other: "", can: false,
        },
        {
          name: "双脚连续转向",
          other: "", can: false,
        },
        {
          name: "反尼尔森向后",
          other: "", can: false,
        },
        {
          name: "恰恰",
          other: "", can: false,
        },
        {
          name: "蟹绕桩跳",
          other: "", can: false,
        },
        {
          name: "蟹交叉跳",
          other: "", can: false,
        },
      ]
    },

    //3、中级
    {
      grade: "中级",
      figure: [
        {
          name: "刷子",
          other: "", can: false,
        },
        {
          name: "X步",
          other: "", can: false,
        },
        {
          name: "X跳",
          other: "", can: false,
        },
        {
          name: "玛丽向前",
          other: "", can: false,
        },
        {
          name: "玛丽向后",
          other: "", can: false,
        },
        {
          name: "玛丽Speci",
          other: "", can: false,
        },
        {
          name: "脚尖X",
          other: "", can: false,
        },
        {
          name: "画8",
          other: "", can: false,
        },
        {
          name: "反向画8",
          other: "", can: false,
        },
        {
          name: "太空步",
          other: "", can: false,
        },
        {
          name: "蟹步",
          other: "", can: false,
        },
        {
          name: "蟹剪",
          other: "", can: false,
        },
        {
          name: "Z蟹",
          other: "", can: false,
        },
        {
          name: "内蟹",
          other: "", can: false,
        },
        {
          name: "双轮蟹",
          other: "", can: false,
        },
        {
          name: "双轮内蟹",
          other: "", can: false,
        },
        {
          name: "交叉玛丽向前",
          other: "", can: false,
        },
        {
          name: "交叉玛丽向后",
          other: "", can: false,
        },
        {
          name: "天鹅蟹",
          other: "", can: false,
        },
        {
          name: "蹲坐鱼形向前",
          other: "", can: false,
        },
        {
          name: "小汽车",
          other: "", can: false,
        },
      ]
    },

    //4、高级
    {
      grade: "高级",
      figure: [
        {
          name: "茶壶向前",
          other: "", can: false,
        },
        {
          name: "茶壶向后",
          other: "", can: false,
        },
        {
          name: "茶壶跳向前",
          other: "", can: false,
        },
        {
          name: "茶壶跳向后",
          other: "", can: false,
        },
        {
          name: "蹲坐玛丽向后",
          other: "", can: false,
        },
        {
          name: "天国向前",
          other: "", can: false,
        },
        {
          name: "天国向后",
          other: "", can: false,
        },
        {
          name: "单轮茶壶向前",
          other: "", can: false,
        },
        {
          name: "单轮茶壶向后",
          other: "", can: false,
        },
        {
          name: "蹲坐交叉玛丽向前",
          other: "", can: false,
        },
        {
          name: "单轮天国向前",
          other: "", can: false,
        },
        {
          name: "单轮天国向后",
          other: "", can: false,
        },
        {
          name: "单脚横跳",
          other: "", can: false,
        },
        {
          name: "单脚连续转向跳",
          other: "", can: false,
        },
        {
          name: "单脚连续正转向",
          other: "", can: false,
        },
        {
          name: "单脚连续反转向",
          other: "", can: false,
        },
        {
          name: "双脚转",
          other: "", can: false,
        },
        {
          name: "双轮转",
          other: "", can: false,
        },
        {
          name: "天鹅过桩转",
          other: "", can: false,
        },
        {
          name: "黑天鹅单桩转",
          other: "", can: false,
        },
        {
          name: "黑天鹅过桩转",
          other: "", can: false,
        },
      ]
    },

    //5、专业级
    {
      grade: "专业级",
      figure: [
        {
          name: "单轮向前",
          other: "", can: false,
        },
        {
          name: "单轮前转后",
          other: "", can: false,
        },
        {
          name: "单轮后转前",
          other: "", can: false,
        },
        {
          name: "单轮捅捅",
          other: "", can: false,
        },
        {
          name: "单轮Special",
          other: "", can: false,
        },
        {
          name: "脚尖X跳",
          other: "", can: false,
        },
        {
          name: "单轮Wiper",
          other: "", can: false,
        },
        {
          name: "单轮摆摆",
          other: "", can: false,
        },
        {
          name: "单轮反向摆摆",
          other: "", can: false,
        },
        {
          name: "单轮连续转向",
          other: "", can: false,
        },
        {
          name: "单轮前內刃单桩转",
          other: "", can: false,
        },
        {
          name: "单轮前內刃过桩转",
          other: "", can: false,
        },
        {
          name: "单轮前外刃单桩转",
          other: "", can: false,
        },
        {
          name: "单轮前外刃过桩转",
          other: "", can: false,
        },
        {
          name: "单轮后外刃单桩转",
          other: "", can: false,
        },
        {
          name: "单轮后内刃过桩转",
          other: "", can: false,
        },
        {
          name: "单轮后外刃过桩转",
          other: "", can: false,
        },
        {
          name: "单脚前外刃单桩转",
          other: "", can: false,
        },
        {
          name: "单脚后内刃单桩转",
          other: "", can: false,
        },
        {
          name: "单脚后外刃单桩转",
          other: "", can: false,
        },
        {
          name: "单轮半蹲转",
          other: "", can: false,
        },
      ]
    }]
})