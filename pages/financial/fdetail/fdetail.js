// pages/financial/fdetail/fdetail.js
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
    detailtext: '我行"吉林农信-吉阳财富"宝盈人民币理财产品第2018001期(产品代码:BY2018001)于2017年12月26日-2018年01月02日进行公开发售.',
    prodetail: [
      { title: '产品名称', con: '"吉林农信-吉阳财富"宝盈理财产品(第2018001期)' },
      { title: '拟销售规模', con: '2000万' },
      { title: '产品登记编码', con: 'c1368317000059' },
      { title: '预期年化收益率', con: '' },
      { title: '产品期限', con: '' },
      { title: '产品类型', con: '' },
      { title: '发售日期', con: '' },
      { title: '起息日', con: '' },
      { title: '到期日', con: '' },
      { title: '个人起售金额', con: '' },
      { title: '机构起售金额', con: '' },
      { title: '销售渠道', con: '' },
      { title: '风险评估', con: '' },
      { title: '适合投资者类型', con: '' },
    ]
  },
  buy: function (e) {
    wx.navigateTo({
      url: '../../wdcx/wdcx',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.fid)
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