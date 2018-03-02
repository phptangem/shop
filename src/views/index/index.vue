<template>
  <div>
    <section class="head">
      <div class="navbar">

      </div>
    </section>
    <section class="main">
      <div class="swiper-wrap">
        <swiper :list="demoList" auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
      </div>
      <div class="series-wrap">
        <div class="series-title">
          <h3>Nature自然系列</h3>
        </div>
        <div class="series-goods">
          <div class="goods">
            <div class="g-img">
              <img src="https://img01.hua.com/uploadpic/newpic/9012241.jpg_220x240.jpg" alt="" style="width:100%">
            </div>
            <div class="g-info">
              <div class="g-title">自然系列丨混合版</div>
              <div class="g-subtitle">每束2~3种花材</div>
              <div class="g-price">¥95/<span class="g-num">4束</span></div>
            </div>
          </div>
           <div class="goods">
            <div class="g-img">
              <img src="https://img01.hua.com/uploadpic/newpic/9012241.jpg_220x240.jpg" alt="" style="width:100%">
            </div>
            <div class="g-info">
              <div class="g-title">自然系列丨混合版</div>
              <div class="g-subtitle">每束2~3种花材</div>
              <div class="g-price">¥95/<span class="g-num">4束</span></div>
            </div>
          </div>
           <div class="goods">
            <div class="g-img">
              <img src="https://img01.hua.com/uploadpic/newpic/9012241.jpg_220x240.jpg" alt="" style="width:100%">
            </div>
            <div class="g-info">
              <div class="g-title">自然系列丨混合版</div>
              <div class="g-subtitle">每束2~3种花材</div>
              <div class="g-price">¥95/<span class="g-num">4束</span></div>
            </div>
          </div>
           <div class="goods">
            <div class="g-img">
              <img src="https://img01.hua.com/uploadpic/newpic/9012241.jpg_220x240.jpg" alt="" style="width:100%">
            </div>
            <div class="g-info">
              <div class="g-title">自然系列丨混合版</div>
              <div class="g-subtitle">每束2~3种花材</div>
              <div class="g-price">¥95/<span class="g-num">4束</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="series-wrap">
        <div class="series-title">
          <h3>Nature自然系列</h3>
        </div>
        <div class="series-goods">
          <div class="goods">
            <div class="g-img">
              <img src="https://img01.hua.com/uploadpic/newpic/9012241.jpg_220x240.jpg" alt="" style="width:100%">
            </div>
            <div class="g-info">
              <div class="g-title">自然系列丨混合版</div>
              <div class="g-subtitle">每束2~3种花材</div>
              <div class="g-price">¥95/<span class="g-num">4束</span></div>
            </div>
          </div>
           <div class="goods">
            <div class="g-img">
              <img src="https://img01.hua.com/uploadpic/newpic/9012241.jpg_220x240.jpg" alt="" style="width:100%">
            </div>
            <div class="g-info">
              <div class="g-title">自然系列丨混合版</div>
              <div class="g-subtitle">每束2~3种花材</div>
              <div class="g-price">¥95/<span class="g-num">4束</span></div>
            </div>
          </div>
           <div class="goods">
            <div class="g-img">
              <img src="https://img01.hua.com/uploadpic/newpic/9012241.jpg_220x240.jpg" alt="" style="width:100%">
            </div>
            <div class="g-info">
              <div class="g-title">自然系列丨混合版</div>
              <div class="g-subtitle">每束2~3种花材</div>
              <div class="g-price">¥95/<span class="g-num">4束</span></div>
            </div>
          </div>
           <div class="goods">
            <div class="g-img">
              <img src="https://img01.hua.com/uploadpic/newpic/9012241.jpg_220x240.jpg" alt="" style="width:100%">
            </div>
            <div class="g-info">
              <div class="g-title">自然系列丨混合版</div>
              <div class="g-subtitle">每束2~3种花材</div>
              <div class="g-price">¥95/<span class="g-num">4束</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="clear"></div>
    <section class="foot">
      <div class="link">
        <a href="http://www.baidu.com">首页</a>
        <a href="http://www.baidu.com">会员中心</a>
        <a href="http://www.baidu.com">常见问题</a>
      </div>
    </section>
  </div>
</template>
<script>
import { Swiper } from 'vux'

export default {
  components: {
    Swiper
  },
  created () {
    var that = this
    this.axios.get('/api/index', {
    }, {
    })
      .then(function (response) {
        let data = response.data.data
        that.demoList = data.map((one, index) => ({
          url: 'javascript:',
          img: one
        }))
      })
      .catch(function (response) {
        console.log(response)
      })
  },
  methods: {
  },
  data () {
    return {
      demoList: []
    }
  }
}
</script>
<style>
.goods{
  width: 49%;
}
.goods:nth-of-type(odd){
  float: left;
}
.goods:nth-of-type(even){
  float: right;
}
.g-info{
  text-align: left;
  padding-left: 20px
}
.g-title{
  margin: 10px 0
}
.g-subtitle{
  color: #ccc;
  margin: 10px 0
}
.g-price{
  margin: 10px 0;
  color: #ff6672;
  font-size: 20px
}
.g-num{
  font-size: 12px
}
.foot{
  padding: 20px 0;
  margin-top: 30px
}
.foot>.link>a{
  text-decoration: none;
  font-size: 14px;
  color: #231916;
  display: inline-block;
  min-width: 60px;
  padding: 0 10px;
  font-weight: bold;
}
.clear{
  clear:both;
  height:0;
  overflow:hidden;
}
.vux-indicator{
  display: none
}
</style>
