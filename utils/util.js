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

// 判断某一个 Storage 是否存在
function isStorageSetted(key) {
    var res = wx.getStorageInfoSync()
    console.log("本地存储信息：" + JSON.stringify(res))
    //{"keys":["logs","grades"],"currentSize":21,"limitSize":10240}
    var keys = res.keys;
    return keys.indexOf(key) > -1
}

/**
 * 存储动作等级的基础信息，方便下一次修改
 */
function setGradesStorage() {
    try {
        wx.setStorageSync(getApp().data.key_grades, getApp().grades)
        console.log("首次添加数据成功")
    } catch (e) {
        console.log("首次添加数据失败")
    }
}

/**
 * 更新学习进度，缓存数据
 */
function updateProgress(gradeIndex, figureIndex, can) {

    //如果没有缓存信息那么先去缓存数据，然后再取出修改
    if (!isStorageSetted(getApp().data.key_grades)) {
        setGradesStorage()
    }

    //如果参数都传递了，才进行值的更改
    if (arguments.length === 3) {
        wx.getStorage({
            key: getApp().data.key_grades,
            //已经保存过缓存的数据了
            success: function (res) {
                var grades = res.data
                grades[gradeIndex].figures[figureIndex].can = can

                wx.setStorage({
                    key: getApp().data.key_grades,
                    data: grades,
                    success: function () {
                        console.log("更新进度数据成功")
                    },
                    fail: function () {
                        console.log("更新进度数据失败")
                    }
                })
            },
            //之前还未保存过缓存数据
            fail: function () {
                console.log("获取存储信息数据失败，key：" + getApp().data.key_grades)
            }
        })
    }
}

function updateFigureInfo(gradeIndex, figureIndex, figure) {
    //如果没有缓存信息那么先去缓存数据，然后再取出修改
    if (!isStorageSetted(getApp().data.key_grades)) {
        setGradesStorage()
    }

    wx.getStorage({
        key: getApp().data.key_grades,
        //已经保存过缓存的数据了
        success: function (res) {
            var grades = res.data
            grades[gradeIndex].figures[figureIndex].version = figure.version
            grades[gradeIndex].figures[figureIndex].skill = figure.skill
            grades[gradeIndex].figures[figureIndex].attention = figure.attention

            wx.setStorage({
                key: getApp().data.key_grades,
                data: grades,
                success: function () {
                    console.log("更新动作信息数据成功：" + JSON.stringify(grades[gradeIndex].figures[figureIndex]))

                },
                fail: function () {
                    console.log("更新动作信息数据失败")
                }
            })
        },
        //之前还未保存过缓存数据
        fail: function () {
            console.log("获取存储信息数据失败，key：" + getApp().data.key_grades)
        }
    })
}

/**
 * 获取学习进度
 */
function getProgress(gradeIndex, figureIndex) {
    console.log("getProgress()")
    var total = 0
    var progress = 0
    var grades

    if (isStorageSetted(getApp().data.key_grades)) {
        grades = wx.getStorageSync(getApp().data.key_grades)
    } else {
        //存储等级基本信息，等级进度默认都是0
        setGradesStorage()

        grades = getApp().grades
        for (var i = 0; i < grades.length; i++) {
            total += grades[i].figures.length
        }
        if (arguments.length === 2) {
            return false
        } else {
            return {grades: grades, total: total, progress: progress}
        }
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
        return {grades: grades, total: total, progress: progress}
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
        return {grades: grades, total: total, progress: progress}
    }
    //有两个参数则代表要获取某一个具体动作是否学会
    else {
        console.log("获取具体某一个动作是否学会")
        return grades[arguments[0]].figures[arguments[1]].can
    }
}

/**
 * 添加用户基本信息
 */
function setUserInfo(userInfo) {
    wx.setStorage({
        key: getApp().data.key_user,
        data: userInfo,
        success: function () {
            console.log("添加用户数据成功")
        },
        fail: function () {
            console.log("添加用户数据失败")
        }
    })
}

function setAddressInfo(addressInfo) {
    wx.setStorage({
        key: getApp().data.key_address,
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
        var value = wx.getStorageSync(getApp().data.key_address)
        return value
    } catch (e) {
        return false
    }
}

function removeAddressInfo() {
    wx.removeStorage({
        key: getApp().data.key_address,
        success: function (res) {
            console.log("删除地址数据成功")
        },
    })
}

function getOpenId() {
    try {
        var value = wx.getStorageSync(getApp().data.key_openid)
        return value
    } catch (e) {
        return false
    }
}

function setOpenId(openid) {
    wx.setStorage({
        key: getApp().data.key_openid,
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
    updateFigureInfo: updateFigureInfo,
    getProgress: getProgress,
    setUserInfo: setUserInfo,
    setAddressInfo: setAddressInfo,
    getAddressInfo: getAddressInfo,
    removeAddressInfo: removeAddressInfo,
    setOpenId: setOpenId,
    getOpenId: getOpenId,
    showDialog: showDialog,
    isStorageSetted: isStorageSetted
}
