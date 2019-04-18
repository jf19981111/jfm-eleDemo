<template>
    <!-- 详情 头部 S -->
	<div>
	    <nav class="nav">
	      <router-link to="/home" class="iconfont icon-xiangzuo"></router-link>
	    </nav>
	    <div class="shop_info">
	      <div class="logo">
	        <span>品牌</span>
	        <img src="images/content/hls.webp" alt="">
	      </div>
	      <div class="title">
	        <h2>
	          <span>华莱士炸鸡汉堡（黄田店）</span>
	          <i class="iconfont icon-yousanjiao"></i>
	        </h2>
	        <div class="tag">
	          <span>评价4.7</span>
	          <span>月售840单</span>
	          <span>商家配送约40分钟</span>
	        </div>
	        <div class="discount">
	          <div>
	            <span class="special">满减</span>
	            <span class="dis_active">满28减5，满52减12，满108减38</span>
	          </div>
	          <div class="dis_count">3个优惠<i class="iconfont icon-xiasanjiao-copy"></i></div>
	        </div>
	        <p class="notice">
	        	公告：欢迎光临，华莱士优先配送饿了么外卖
				1、任凭风吹雨打，华仔全力以赴若有延误，万分抱歉！查询进度请电82596750，谢谢！
				2、蕃茄酱是薯条的专配！孜然粉与手扒鸡是绝配，如需要，请备注！
				3、客官，给个好评！颜值倍增，不信试试
				4、宝贵意见请致电餐厅经理15814721779杨
	        </p>
	      </div>
	    </div>
  ·</div>
  <!-- 详情头部 E -->
</template>

<style>
/* 详情 头部 S */
.nav {
    background: url('/images/detail/gohead.webp') center;
    height: 1rem;
    background-size: cover;
  }
  .nav .icon-xiangzuo {
    font-size: 0.26rem;
    color: #ccc;
    padding-top: 0.02rem;
    display: block;
    margin-left: 0.03rem;
  }
  .shop_info {
    position: relative;
  }
  .shop_info .logo {
    height: 0.8rem;
    width: 0.8rem;
    border: 1px solid #ebebeb;
    border-radius: 0.02rem;
    position: absolute;
    top: -0.9rem;
    left: 50%;
    margin-left: -0.33rem;
  }
  .shop_info .logo img {
    width: 100%;
  }
  .shop_info .logo span {
    position: absolute;
    color: #6f3f15;
    font-weight: 700;
    background-image: linear-gradient(90deg,#fff100,#ffe339);
    border-radius: 0.02rem;
  }
  .shop_info .title {
    margin-top: 0.3rem;
  }
  .shop_info .title h2 {
    font-size: 0.24rem;
    text-align: center;
    color: #333333;
  }
  .shop_info .title .icon-yousanjiao {
    font-size: 0.23rem;
  }
  .shop_info .title .tag {
    color: #666666;
    text-align: center;
    margin-top: 0.06rem;
  }
  .shop_info .title .tag span {
    margin: 0 0.02rem;
  }
  .shop_info .title .discount {
    margin-top: 0.1rem;
    display: flex;
    justify-content: space-around;
  }
  .discount .special {
    width: 0.23rem;
    height: 0.11rem;
    padding: 0 0.04rem;
    background-color: rgb(241, 136, 79);
    color: #fff;
    padding-bottom: 0.01rem;
  }
  .discount .dis_count {
    color: #999999;
  }
  .shop_info .notice {
    color: #999999;
    width: 2.98rem;
    margin: auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 0.09rem;
  }
 /* 详情头部 E */

</style>
