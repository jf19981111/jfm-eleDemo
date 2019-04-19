<template>
<div id="order">
    <div class="order">
	    <div class="jf-top">
	      <div class="picImg">
	        <router-link to="/home" class="iconfont icon-xiangzuo"></router-link>
	      </div>
	      <p>订单</p>
	    </div>
	    <ul class="shopBox" v-show="islogin">
	      <li class="jf-shop">
	        <div class="listTop">
	          <a to="/" class="listA"><img src="images/detail/menu01.webp"></a>
	        <div class='listTopLeft'>
	        <div class="listLeft">
	          <a to="/">
	             <p class="pOne">华莱士炸鸡汉堡
	             	<i class="iconfont .icon-llmainpageback-copy-cop"></i>
	             </p>
	           </a>
	          <a to="/">
	            <span class="cancel">订单已送达</span>
	          </a>
	        </div>
	          <p class="time">7时40分钟前</p>
	          <div class="shopBt">
	            <p>
	            	<span>牛肉堡鸡肉卷</span>
	            	<span>等3件商品</span>
	            </p>
	            <p class="monery">￥27.00</p>
	          </div>
	        </div>
	        </div>
	        <p class="buy">
	          <router-link to='/'>
	            <span>再来一单</span>
	          </router-link>
	          </p>
	      </li>
	    </ul>
	    <div class="jf-w" v-show="!islogin">
	      <div class="picimg">
	        <img src="images/detail/login.png">
	      </div>
	      <div class="jf-footer">
	        <h3>登录后查看外卖订单</h3>
	      </div>
	      <div class="jf-footer">
	        <router-link to="/login" class="btns" tag="div">立即登录</router-link>
	      </div>
	    </div>
	 </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      islogin: window.islogin
    }
  }
}
</script>

<style>
#order {
    height: 100%;
overflow: hidden;
  background: #F5F5F5;
}
.order{
  min-height: 6.87rem;
  width: 100%;
  background: #F5F5F5;
}
.picimg{
  display: flex;
  justify-content: center;
  margin-top: 0.85rem;
}
.picimg img{
  width: 2.0rem;
  height: 2.0rem;
}
.jf-w h3 {
  color: #6a6a6a;
  font-weight: 400;
  font-size: 0.18rem;
}
.btns {
  display: block;
  height: 0.35rem;
  background: #56d176;
  color: white;
  width: 1.1rem;
  font-size: 0.16rem;
  padding: 0.03rem;
  text-align: center;
  line-height: 0.35rem;
  margin-top: 0.1rem;
}
.jf-footer{
  display: flex;
  justify-content: center;
}
.jf-top{
  position: relative;
  display: flex;
  height:0.48rem;
  width: 100%;
  background: #2395ff;
  background-image: linear-gradient(90deg,#0af,#2389e7);
  align-items: center;
}
.jf-top p{
  position: absolute;
  left: 50%;
  margin-left: -0.2rem;
  font-size: 0.2rem;
  font-weight: 700;
  color: white;
}
.jf-top .picImg {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 0.48rem;
}
.jf-top img{
  height: 0.23rem;
}
.listTop .listA{
  width: 0.38rem;
  margin-right: 0.1rem;
}
.listTop .listA img{
  width: 100%;
}
.jf-shop {

  margin-top: 0.1rem;
  padding-top: 0.15rem;
  background: white;
  padding: 0.15rem 0.14rem 0 0.16rem;
}
.listTop{
  display: flex;
  height: 1.02rem;
}
.listLeft {
  display: flex;
  align-items: center;
  justify-content:center;
}
.pOne {
  font-size: 0.18rem;
  color: #333;
}
.cancel {
  font-size: 0.145rem;
  color: #333;
  margin-left: 1.2rem;
}
.time {
  color: #999;
  padding-bottom: 0.08rem;
  border-bottom: #f6f2f2 solid 1px;
}
.shopBt{
  display: flex;
  justify-content: space-between;
  padding: 0.16rem 0 0.16rem 0;
  font-size: 0.14rem;
  color: #666;
}
.monry {
  color: #333;
  font-weight: 700;
}
.buy {
  display: flex;
  border-top: #f6f2f2 solid 1px;
  padding: 0.15rem 0 0.15rem 0;
  justify-content: flex-end;
}
.buy span{
  padding: 0.07rem 0.15rem;
  border-radius: 0.03rem;
  color: #2395ff;
  border: 1px solid #2395ff;
}
</style>
