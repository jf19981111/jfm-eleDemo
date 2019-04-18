<template>
  <!-- shopCar S -->
  <div class="car">
    <div class="manjian">满20减10元，满60减25元，满80减35元</div>
    <div class="carmiddle" v-if="showList&&totalNum>0">
      <div class="yixuan">
        <div class="goods">已选商品</div>
        <div class="cancelAll" @click="clearAll">
          <span>□</span>
          清空
        </div>
      </div>
      <ul>
        <li class="goodsInfo" v-for="(item,index) in shopList" :key="index" v-if="item.goodsNum">
          <div class="goodsname">{{ item.goodsName }}</div>
          <div class="priceInfo">
            <del v-if="item.yuanjia">￥{{ item.yuanjia }}</del>￥
            <span>{{ item.xianjia }}</span>
          </div>
          <div class="update">
            <div class="jian caozuo" @click="jian(item.shopId),isClick=!isClick">-</div>
            <div class="num">{{ item.goodsNum }}</div>
            <div class="jia caozuo" @click="jia(item.shopId),isClick=!isClick">+</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="car-foot">
      <transition enter-active-class="animate heartBeat" leave-active-class="animated heartBeat">
        <div class="carlogo" :class="{active:totalNum}" @click="showList=!showList"> 
          <span class="iconfont icon-gouwuche"></span>
          
          <i class="countNum">{{ totalNum }}</i>
        </div>
      </transition>
      <div class="price">
        <div class="noShop">
          <i v-if="totalNum==0">未选购商品</i>
          <template v-else>
            <i class="now">￥{{(totalMoneyX).toFixed(2)}}</i>
            <del class="old">￥{{totalMoneyY}}</del>
          </template>
        </div>
        <!-- <p style="color: #999;font-size: 0.14rem;">另需配送费1元</p> -->
      </div>
      <div
        class="account"
        :class="{active:totalNum>0}"
        @click="jiesuan"
      >{{totalMoneyX>=30?'去结算':`还差￥${(30-totalMoneyX).toFixed(2)}`}}</div>
    </div>
  </div>
  <!-- shopCar E -->
</template>

<script>
export default {
    props: ['isclick'],
  data () {
    return {
      numData: 0,
      shopList: [], //购物车商品总信息
      totalNum: 0 ,//购物车商品总数量
      isClick: false,
      totalMoneyY: 0,
      totalMoneyX: 0,
      showList: false
    }
  },
  methods: {
    jian (id) {
      var goodInfo = localStorage.getItem('goodsInfo');
      var arr = JSON.parse(goodInfo);
      // var flag = true; //默认不含有该商品
      //  console.log('===========')
        var flag = true;
        var index = 0;
        for(var i =0;i<arr.length;i++){
          if(id==arr[i].shopId){
            if(arr[i].goodsNum==1){
              arr.splice(i,1);
              // this.showList=false;
              flag=false;
            }
            index = i;
          }
        }
        if(flag){
          arr[index].goodsNum--;
        }
        localStorage.setItem('goodsInfo',JSON.stringify(arr));

    },
    jia (id) {
      var goodInfo = localStorage.getItem('goodsInfo');
      var arr = JSON.parse(goodInfo);
      for(var i =0;i<arr.length;i++){
        if(id==arr[i].shopId){
          arr[i].goodsNum++;
        }
      }
      localStorage.setItem('goodsInfo',JSON.stringify(arr));

    },
    getGoodsInfo () {
      this.totalNum = 0;
      this.totalMoneyY = 0;
      this.totalMoneyX = 0;
      var goodInfo = localStorage.getItem('goodsInfo');
      if(goodInfo){
        var goodsArr = JSON.parse(goodInfo);
        this.shopList = goodsArr;
        for(var i = 0;i<goodsArr.length;i++){
          this.totalNum+=goodsArr[i].goodsNum;
          this.totalMoneyX+=goodsArr[i].xianjia*goodsArr[i].goodsNum;
          this.totalMoneyY+=goodsArr[i].yuanjia*goodsArr[i].goodsNum;
        }
      }
    },
    clearAll () {
      localStorage.clear();
      this.getGoodsInfo();
    },
    jiesuan () {
      sessionStorage.clear();
    //   this.$router.push({
    //     path: '/comfirm'
    //   })
    }
  },
  watch: {
    isclick: function(newVal,oldVal){
      this.getGoodsInfo ();
    },
    isClick: function(newVal,oldVal){
      this.getGoodsInfo ();
    }
  },
  mounted () {
    this.getGoodsInfo();
    // console.log(this.totalNum);
  }
}
</script>

<style>
/* shopCar S */
.car {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  bottom: 0;
}
.car-foot {
  display: flex;
}
.manjian {
  background: #fffad6;
  font-size: 0.12rem;
  opacity: 0.96;
  text-align: center;
  padding: 0.05rem 0;
}
.car-foot {
  position: relative;
  background: rgba(61, 61, 63, 0.9);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 0.5rem;
  /* margin-top: 0.5rem; */
}
.car-foot .carlogo {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 100%;
  background: radial-gradient(circle, #363636 6.266667vw, #444 0);
  border: 0.05rem solid #444;
  position: absolute;
  top: -0.1rem;
  left: 0.1rem;
  text-align: center;
  line-height: 0.4rem;
}
.car-foot .icon-gouwuche {
  color: #666;
  font-size: 0.25rem;
  /* text-align: center;
  margin: 0 auto; */
  position: absolute;
  top: 0;
  left: 20%;
}
.car-foot .carlogo.active {
  color: #fff;
  font-size: 0.25rem;
  background: #3190e8;
}
.car-foot .carlogo.active span {
  color: #fff;
}
.car-foot .carlogo.active .countNum {
  position: absolute;
  top: -0.06rem;
  right: -0.05rem;
  width: 0.15rem;
  height: 0.15rem;
  line-height: 0.15rem;
  background: red;
  font-size: 12px;
  border-radius: 50%;
}
.car-foot .price {
  flex: 4;
  /* text-align: center; */
  padding-left: 0.8rem;
  color: #999;
}
.car-foot .account {
  flex: 2;
  text-align: center;
  line-height: 0.5rem;
  background: #535356;
  color: #fff;
  font-size: 0.16rem;
  font-weight: 700;
  width: 1rem;
}
.noShop {
  font-size: 0.14rem;
}
.noShop .now {
  color: #fff;
  font-size: 0.2rem;
}

.car-foot .account.active {
  background: #38ca73;
}
.carmiddle {
  color: #666;
  /* padding: 0 0.1rem; */
}
.carmiddle ul {
  padding: 0 0.1rem;
  background: #fff;
}
.carmiddle ul li {
  height: 0.5rem;
}
.carmiddle .yixuan {
  display: flex;
  justify-content: space-between;
  font-size: 0.16rem;
  align-items: center;
  height: 100%;
  height: 0.5rem;
  background: #eceff1;
}
.yixuan .goods {
  padding-left: 0.1rem;
}
.yixuan .cancelAll {
  padding-right: 0.1rem;
}
.cancelAll {
  position: relative;
}
.cancelAll span {
  font-size: 0.3rem;
  position: absolute;
  left: -0.2rem;
  top: -0.13rem;
}
.goodsInfo {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.goodsInfo .goodsname {
  /* flex: 2; */
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
  font-size: 0.18rem;
}
.goodsInfo .priceInfo {
  /* flex: 2; */
  width: 1rem;
  text-align: right;
  display: flex;
  align-items: center;
  font-size: 0.12rem;
}
.goodsInfo .priceInfo del {
  font-size: 0.12rem;
  margin-right: 0.03rem;
}
.goodsInfo .priceInfo span {
  font-size: 0.2rem;
  color: rgb(255, 83, 57);
  font-weight: 700;
}
.goodsInfo .update {
  /* flex: 1; */
  display: flex;
  align-items: center;
}
.goodsInfo .update .caozuo {
  width: 0.2rem;
  height: 0.2rem;
  line-height: 0.17rem;
  border: 0.02rem solid rgb(35, 149, 255);
  text-align: center;
  border-radius: 50%;
  font-size: 0.25rem;
}
.goodsInfo .update .jian {
  color: rgb(35, 149, 255);
}
.goodsInfo .update .jia {
  background: rgb(35, 149, 255);
  color: #fff;
}
.goodsInfo .update .num {
  font-size: 0.16rem;
  margin: 0 0.1rem;
}
/* shopCar E" */
</style>
