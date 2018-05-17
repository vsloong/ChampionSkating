var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    figures: {},
    progress: 0,
    percent: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取到当前的等级
    var currentGrade = options.grade;
    wx.setNavigationBarTitle({ title: app.grades[currentGrade].grade })

    var currentFigures = app.grades[currentGrade];
    var currentProgress = 11;
    var totalProgress = currentFigures.figure.length;

    console.log("进度：" + (currentProgress / totalProgress))
    this.setData({
      figures: currentFigures,
      progress: currentProgress,
      percent: (currentProgress / totalProgress) * 100
    })
  },
})