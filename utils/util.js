const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const key_grades = "grades"
const key_user = "user"
const key_openid = "openid"
const key_address = "address"

/**
 * 更新学习进度，缓存数据
 */
function updateProgress(gradeIndex, figureIndex, can) {
  //如果参数都传递了，才进行值的更改
  if (arguments.length === 3) {
    console.log("updateProgress()")
    const key = "grades"
    var grades
    wx.getStorage({
      key: key,
      //已经保存过缓存的数据了
      success: function (res) {
        grades = res.data
        grades[gradeIndex].figures[figureIndex].can = can

        // console.log("更新结果" + gradeIndex + figureIndex + grades[gradeIndex].figures[figureIndex].can)
        // console.log(JSON.stringify(grades))
        wx.setStorage({
          key: key,
          data: grades,
          success: function () {
            console.log("更新数据成功")
          },
          fail: function () {
            console.log("更新数据失败")
          }
        })
      },
      //之前还未保存过缓存数据
      fail: function () {
        grades = getApp().grades
        grades[gradeIndex].figures[figureIndex].can = can
        wx.setStorage({
          key: key,
          data: grades,
          success: function () {
            console.log("首次添加数据成功")
          },
          fail: function () {
            console.log("首次添加数据失败")
          }
        })
      }
    })
  }
}


function getProgress(gradeIndex, figureIndex) {
  console.log("getProgress()")
  var total = 0
  var progress = 0
  var grades

  try {
    var temp = wx.getStorageSync("grades")
    // console.log("等级数据" + JSON.stringify(temp))
    if (!temp) {
      grades = getApp().grades
      for (var i = 0; i < grades.length; i++) {
        total += grades[i].figures.length
      }
      if (arguments.length === 2) {
        return false
      } else {
        return { grades: grades, total: total, progress: progress }
      }
    } else {
      grades = temp
      // console.log("等级数据" + JSON.stringify(grades))
    }
  } catch (e) {
    console.log("同步获取等级数据错误")
    grades = getApp().grades
    for (var i = 0; i < grades.length; i++) {
      total += grades[i].figures.length
    }
    return { grades: grades, total: total, progress: progress }
  }

  //没有参数则代表要获取所有的进度
  if (arguments.length === 0) {
    console.log("获取所有进度")
    for (var i = 0; i < grades.length; i++) {
      var length = grades[i].figures.length
      total += length
      for (var j = 0; j < length; j++) {
        if (grades[i].figures[j].can)
          progress++
      }
    }
    return { grades: grades, total: total, progress: progress }
  }
  //有一个参数则代表要获取某一个等级的进度
  else if (arguments.length === 1) {
    console.log("获取某一等级的进度")
    var figures = grades[arguments[0]].figures
    total = figures.length
    for (var i = 0; i < figures.length; i++) {
      if (figures[i].can)
        progress++
    }
    return { grades: grades, total: total, progress: progress }
  }
  //有两个参数则代表要获取某一个具体动作是否学会
  else {
    console.log("获取具体某一个动作是否学会")
    return grades[arguments[0]].figures[arguments[1]].can
  }
}

function setUserInfo(userInfo) {
  wx.setStorage({
    key: key_user,
    data: userInfo,
    success: function () {
      console.log("添加用户数据成功")
    },
    fail: function () {
      console.log("添加用户数据失败")
    }
  })
}

function isSetUserInfo() {
  try {
    var value = wx.getStorageSync(key_user)
    if (value) {
      console.log("用户信息：" + JSON.stringify(value))
      return true
    } else {
      return false
    }
  } catch (e) {
    return false
  }
}

function setAddressInfo(addressInfo) {
  wx.setStorage({
    key: key_address,
    data: addressInfo,
    success: function () {
      console.log("添加地址数据成功")
    },
    fail: function () {
      console.log("添加地址数据失败")
    }
  })
}

function getAddressInfo() {
  try {
    var value = wx.getStorageSync(key_address)
    return value
  } catch (e) {
    return false
  }
}

function removeAddressInfo() {
  wx.removeStorage({
    key: key_address,
    success: function (res) {
      console.log("删除地址数据成功")
    },
  })
}

function getOpenId() {
  try {
    var value = wx.getStorageSync(key_openid)
    return value
  } catch (e) {
    return false
  }
}

function setOpenId(openid) {
  wx.setStorage({
    key: key_openid,
    data: openid,
    success: function () {
      console.log("添加用户数据成功")
    },
    fail: function () {
      console.log("添加用户数据失败")
    }
  })
}

function showDialog(content) {
  wx.showModal({
    title: '温馨提醒',
    content: content,
    showCancel: false,
    confirmText: '我知道了'
  })
}

module.exports = {
  formatTime: formatTime,
  updateProgress: updateProgress,
  getProgress: getProgress,
  setUserInfo: setUserInfo,
  isSetUserInfo: isSetUserInfo,
  setAddressInfo: setAddressInfo,
  getAddressInfo: getAddressInfo,
  removeAddressInfo: removeAddressInfo,
  setOpenId: setOpenId,
  getOpenId: getOpenId,
  showDialog: showDialog
}
