// 引入mockjs
const Mock = require('mockjs')
// 使用mockjs模拟数据
Mock.mock('/api/index', (req, res) => {
  return {
    data: [
      'https://img02.hua.com/zhuanti/womanday/2018/pc/banner.jpg',
      'https://img02.hua.com/banner/longtou.jpg',
      'https://img02.hua.com/slider/18_syz_pc.jpg'
    ]
  }
})
