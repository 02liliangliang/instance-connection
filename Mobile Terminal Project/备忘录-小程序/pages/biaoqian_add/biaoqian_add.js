// pages/biaoqian_add/biaoqian_add.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    content:[],
    content1:'',
  },
  input_add(e){
    // console.log(e.detail.value);
    this.data.content1=e.detail.value
  },
  goSave(){
    var content3=this.data.content;
    this.setData({
      content:this.data.content1
     }); 
    //  console.log(this.data.content)
     let data=this.data.content
     wx.navigateTo({
       url: '../biaoqian/biaoqian?data='+data,
     })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
