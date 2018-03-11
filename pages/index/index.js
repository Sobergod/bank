Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    img1: '../../images/card.png',
    img2: '../../images/cardShadow.png',
    nav: [
      { img: "../../images/lccp.png", title: "理财产品", url: '/pages/financial/financial' },
      { img: "../../images/gjs.png", title: "贵金属", url: '/pages/metal/metal' },
      { img: "../../images/wdcx.png", title: "网店查询", url: '/pages/wdcx/wdcx' },
      { img: "../../images/znwd.png", title: "助农网点", url: '/pages/znwd/znwd' },
      { img: "../../images/ckyw.png", title: "存款业务", url: '/pages/deposit/deposit' },
      { img: "../../images/dkyw.png", title: "贷款业务", url: '/pages/loan/loan' },
      { img: "../../images/dzyh.png", title: "电子银行", url: '/pages/bank/bank' },
      { img: "../../images/myjr.png", title: "贸易金融", url: '/pages/trade/trade' }
    ],
    activityContent: [
      { id: 1, img: "../../images/test1.png" },
      { id: 2, img: "../../images/test2.png" },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        that.setData({
          userInfo: res.userInfo,
        })
      }
    })
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