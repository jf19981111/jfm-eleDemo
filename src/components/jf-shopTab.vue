<template>
    <!-- 选项切换 S -->
  		<div>
    <div class="shop_tab">
      <ul>
        <li><p class="active">点餐</p></li>
        <li><p>评价</p></li>
        <li><p>商家</p></li>
      </ul>
    </div>
    <div class="hot">
      <img src="images/detail/hlsbanner.webp" alt="">
    </div>
  </div>
  <!-- 选项切换 E -->
</template>

<script>
export default {
  data () {
    return {
      scrollTop: 0,
      top: 0,
      barFixed: false
    }
  }
}
</script>

<style>
/* 选项切换 S */
.tabFixed {
    position: fixed;
    width: 100%;
    z-index: 999;
    top: 0;
    background: #fff;
  }
  .shop_tab ul {
    display: flex;
  }
  .shop_tab ul li{
    flex: 1;
    text-align: center;
    font-size: 0.16rem;
    margin: 0.16rem 0 0.08rem;
  }
  .shop_tab li p {
    width: 0.38rem;
    margin: auto;
    padding-bottom: 0.05rem;
    color: #666666;
  }
  .shop_tab .active {
    border-bottom: 0.03rem solid #2395ff;
    font-weight: 700;
    color: #000;
  }
  .hot {
    padding: 0 0.16rem;
  }
  .hot img {
    width: 100%;
    border-radius: 0.04rem;
  }
/* 选项切换 E */
</style>
