// pages/metal/metal.js
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
    mdetails: [
      { mid: 0, bagUrl: '../../images/mbg1.png', figure: '../../images/mf1.png', title: '《狗年大吉》' },
      { mid: 1, bagUrl: '../../images/mbg2.png', figure: '../../images/mf2.png', title: '《福满堂 金元宝》' },
      { mid: 2, bagUrl: '../../images/mbg3.png', figure: '../../images/mf3.png', title: '《皇家福桶》' },
      { mid: 3, bagUrl: '../../images/mbg4.png', figure: '../../images/mf4.png', title: '《金犬旺福》' },
      { mid: 4, bagUrl: '../../images/mbg5.png', figure: '../../images/mf5.png', title: '《钱到家 发财树》' },
    ]
  },
  // 加载更多
  loadMore:function() {
    console.log(1);
  },
  mDetail:function(e) {
    var mid = e.currentTarget.dataset.mid;
    wx.navigateTo({
      url: 'mdetail/mdetail?mid='+mid,
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