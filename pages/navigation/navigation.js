let plugin = requirePlugin("tencentMap")
// let routeInfo = {
//   // startLat: 39.90469, //起点纬度 选填
//   // startLng: 116.40717, //起点经度 选填
//   // startName: "我的位置", // 起点名称 选填
//   endLat: 30.28779, // 终点纬度必传
//   endLng: 120.16689, //终点经度 必传
//   endName: "朝晖六小区56幢", //终点名称 必传
//   mode: 'bus' //算路方式 选填car bus walk
// }

Page({
  data: {
    routeInfo: getApp().routeInfo
    // routeInfo: {}
  },

  onLoad: function() {
    this.setData({
      routeInfo: getApp().routeInfo
    })
  }
})