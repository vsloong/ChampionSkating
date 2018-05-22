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

        console.log("更新结果" + gradeIndex + figureIndex + grades[gradeIndex].figures[figureIndex].can)
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
            console.log("添加数据成功")
          },
          fail: function () {
            console.log("添加数据失败")
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

module.exports = {
  formatTime: formatTime,
  updateProgress: updateProgress,
  getProgress: getProgress
}
