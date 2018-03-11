// pages/financial/financial.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperInfo: {
      imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
    },
    products: [
      { fid: 0, title: '吉林农信-吉阳财富开放式人民币理财产品', rate: '5.05%', personal: '个人5万起购', company: '企业100万起购', currency: '人民币', pdate: '6月', limitdate: '每月可申购' },
      { fid: 1, title: '吉林农信-吉阳财富开放式人民币理财产品', rate: '5.05%', personal: '个人5万起购', company: '企业100万起购', currency: '人民币', pdate: '6月', limitdate: '每月可申购' },
    ]
  },
  buy:function(e) {
    wx.navigateTo({
      url: '../wdcx/wdcx',
    })
  },
  fdetail: function(e) {
    var fid = e.currentTarget.dataset.fid;
    wx.navigateTo({
      url: 'fdetail/fdetail?fid='+fid,
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