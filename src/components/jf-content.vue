<template>

<!-- list S -->
  <div class="content">
    <ul>
      <li>
        <!-- <router-link to="/goods"> -->
        <router-link :to="{ path: '/goods', query: { sellId: menuArr.id } }">
          <div class="shop_info">
            <img :src="menuArr.image_path" class="shop_img">
            <div class="shop_main">
              <div class="main_top">
                <h3>{{ menuArr.name }}</h3>
                <span class="spot">▤···</span>
              </div>
              <div class="main_shop">
                <div class="main_shop_l">
                  <img src="../static/images/content/star.png" alt>
                  <span class="score">{{ menuArr.rating }}</span>
                  <span class="sale">月售{{ menuArr.recent_order_num }}单</span>
                </div>
              </div>
              <div class="main_give">
                <div class="money_limit">
                  <span class="money_up">￥{{ menuArr.float_minimum_order_amount }}起送</span>
                  <span class="postage">配送费￥{{ menuArr.float_delivery_fee }}</span>
                </div>
                <div class="time">
                  <span class="distance">{{ menuArr.distance >= 1000 ? (menuArr.distance/1000).toFixed(2) + 'km' : menuArr.distance + 'm' }}</span>
                  <span class="de_time">{{ menuArr.order_lead_time }}分钟</span>
                </div>
              </div>
            </div>
          </div>
          <div class="active_warp">
            <div class="main_tag">
                <span class="mini_tag"
                      v-for="(flavor,index) in menuArr.support_tags"
                      :key="index">
                      {{ flavor.text }}
                </span>
                <span class="koubei" v-if="menuArr.recommend.is_ad">
                  <i class="iconfont icon-koubei"></i>
                  <span>口碑人气好店</span>
                </span>
              </div>
            <div class="flexble">
              <div class="activeList">
                <div class="act_row"
                  v-for="(active,index) in menuArr.activities.slice(0, 2)"
                  :key="index"
                >
                  <span class="act_icon">{{ active.icon_name }}</span>
                  <span class="act_desc">{{ active.tips }}</span>
                </div>
              </div>
              <div class="active_btn">
                <span>{{ menuArr.activities.length }}个活动</span>
                <i class="iconfont icon-xiasanjiao-copy"></i>
              </div>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
  <!-- list E -->
</template>

<script>

export default {
  props: {
    menuArr: {
      type: Object
    }
  }

}
</script>

<style>
/* content S */
.content li {
    padding: 0.15rem 0;
    background: #ffffff;
    border-bottom: 1px solid #eee;
    color: #666;
  }
  .content .shop_info {
    padding: 0 0.11rem;
    display: flex;
  }
  .content .shop_info .shop_img {
    border: 1px solid #eeeeee;
    border-radius: 0.02rem;
    width: 0.7rem;
    height: 0.7rem;
  }
  .shop_main {
    flex: 1;
    margin-left: 0.11rem;
  }
  .main_top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.14rem;
  }
  .main_top h3 {
    color: #333333;
    font-size: .16rem;
  }
  .main_top .spot {
    font-size: 0.14rem;
    letter-spacing: 0.008rem;
  }
  .main_shop_l {
    color: #666666;
  }
  .main_shop_l .score {
    margin: 0 0.05rem;
  }
  .shop_main .main_give {
    display: flex;
    justify-content: space-between;
    margin-top: 0.14rem;
  }
  .main_give .postage,
  .main_give .de_time {
    border-left: 2px solid #eeeeee;
    padding-left: 0.05rem;
  }
  .active_warp {
    padding-left: 0.93rem;
    margin-top: 0.11rem;
    padding-right: 0.11rem;
  }
  .main_tag {
    padding-bottom: 0.16rem;
    border-bottom: 1px dashed #eeeeee;
  }
  .main_tag .mini_tag {
    border: 2px solid #eeeeee;
    padding: 0 0.03rem;
    border-radius: 0.02rem;
    margin: 0 0.05rem;
  }
  .main_tag .koubei {
    color: #ea4403;
    position: relative;
  }
  .icon-koubei {
    position: absolute;
  }
  .koubei span {
    margin-left: 0.16rem;
  }
  .activeList {
  	float: left;
  }
  .activeList .act_icon {
    background-color: rgb(240, 115, 115);
    padding: 0 0.02rem;
    border-radius: 0.02rem;
    color: #ffffff;
    margin-right: 0.02rem;
  }
  .act_row {
    margin-top: 0.07rem;
    width: 2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .flexble {
    display: flex;
    justify-content: space-between;
  }
  .active_btn {
    padding-top: 0.03rem;
    position: relative;
    color: #999999;
  }
  .active_btn span {
    vertical-align: middle;
    margin-right: 0.2rem;
    margin-bottom: 0.07rem;
  }
  .active_btn .icon-xiasanjiao-copy {
    position: absolute;
    right: 0;
    top: 0.06rem;
  }
/*content E*/
</style>
