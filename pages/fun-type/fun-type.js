// pages/fun-type/fun-type.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parent: [
      {
        name: '后端开发',
        id: "01",
        children: [
          {
            value: 'PHP',
            id: '101',
            grandson:[
              {
                value: 'PHP-11',
                id: '1001'
              },
              {
                value: 'PHP-2',
                id: '1002'
              },
              {
                value: 'PHP-3',
                id: '1003'
              }
            ]
          },
          {
            value: 'Java',
            id: '102',
            grandson: [
              {
                value: 'Java-11',
                id: '1101'
              },
              {
                value: 'Java-2',
                id: '1102'
              },
              {
                value: 'Java-3',
                id: '1103'
              }
            ]
          }
        ]
      },
      {
        name: '前端开发',
        id: "02",
        children: [
          {
            value: 'JS',
            id: '201',
            grandson: [
              {
                value: 'JS-11',
                id: '2001'
              },
              {
                value: 'JS-2',
                id: '2002'
              },
              {
                value: 'JS-3',
                id: '2003'
              }
            ]
          },
          {
            value: 'VUE',
            id: '202',
            grandson: [
              {
                value: 'VUE-11',
                id: '2101'
              },
              {
                value: 'VUE-2',
                id: '2102'
              },
              {
                value: 'VUE-3',
                id: '2103'
              }
            ]
          }
        ]
      },
      {
        name: '人工职能',
        id: "03",
        children: [
          {
            value: 'Python',
            id: '301',
            grandson: [
              {
                value: 'Python-11',
                id: '3001'
              },
              {
                value: 'Python-2',
                id: '3002'
              },
              {
                value: 'Python-3',
                id: '3003'
              }
            ]
          },
          {
            value: 'C#',
            id: '302',
            grandson: [
              {
                value: 'C#-11',
                id: '3101'
              },
              {
                value: 'C#-2',
                id: '3102'
              },
              {
                value: 'C#-3',
                id: '3103'
              }
            ]
          }
        ]
      }
    ],
    popoverSecond: false,
    second: [], // 第二层
    third: [], //第三层
    currentIndex: 0, // 当前第二 变色
    currentTmp: 0, // 当前第二  展示
  },
  // 点击第一  展示第二  第三
  showFirst (e) {
    console.log(e)
    this.setData({
      popoverSecond: true,
      currentTmp: e.target.dataset.index,
      currentThird: 0,
    })
    this.dispose()
  },

  // 点击第二  展示第三
  selectSecond (e) {
    const second = this.data.second
    const third = new Array()
    second.forEach(i => {
      third.push(i.grandson)
    })
    this.setData({
      currentIndex: e.target.dataset.index,
      third: third[e.target.dataset.index]
    })
  },

  // 点击第三
  selectThird (e) {
    const jobType = e.target.dataset.title
    console.log(e)
    wx.navigateTo({
      url: '../update-job/update-job?id=' + jobType
    })
    this.setData({
      currentTmp: e.target.dataset.index
    })
  },

  // 后端返回数据处理
  dispose () {
    const tmp = this.data.currentTmp
    const first = this.data.parent
    const second = new Array()
    first.forEach(item => {
      second.push(item.children)
    })
    this.setData({
      second: second[tmp]
    })
    const Newsecond = this.data.second 
    const third = new Array()
    Newsecond.forEach(i => {
      third.push(i.grandson)
    })
    this.setData({
      third: third[0]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})