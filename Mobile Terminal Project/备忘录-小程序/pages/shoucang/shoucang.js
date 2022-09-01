import jobList from '../write_note/write_note.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    job:[],
    savejob:[],


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options) {
    console.log(wx.getStorageSync('jobData'));
    let savejob = wx.getStorageSync('jobData')//获得缓存
    let index = savejob.length-1;
    console.log(savejob[index].id);
    let jobid = savejob[index].id
    let temp= jobList[jobid] //将获得缓存后匹配的数据放入新的数组
    let job= [];
    job.push(temp);
    this.setData({
      id:index,
      job: job,
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})