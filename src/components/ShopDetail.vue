<template>
  <div class="shop-middle">
    <h2>四季套餐</h2>
    <div class="detail">
      <div class="left">
        <span class="sell">月售8份 好评率100%</span>
        <p class="price">
          ￥30
          <del>￥58</del>
          <span class="discount">5.8折</span>
        </p>
      </div>
      <div class="right">
        <template v-if='ShopNum>0'>
          <i class="oparate reduce" @click='jian'>-</i>

          <span class="num" >{{ShopNum}}</span>
        </template>
        <i class="oparate plus" @click='add'>+</i>
      </div>

    </div>
    <p class="produce">
        香辣鸡腿堡+上校鸡块+中可\n主要原料: 鸡肉
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ShopNum: 0,//当前商品加入购物车的数量
      yuanjia: '58', //当前商品的原价
      xianjia: '30', //当前商品的现价
      goodsName: '四季套餐', //当前商品的名称
      shopId: '1', //当前商品的id编号
      allGoodsNum: 0 //所有加入购物车商品的总数量
    }
  },
  methods: {
    add () {
      this.ShopNum++;
      console.log(this.ShopNum);
      var obj = {
        shopId: this.shopId,
        yuanjia: this.yuanjia,
        xianjia: this.xianjia,
        goodsName: this.goodsName,
        goodsNum: 1
      }
      this.getGoodInfo(obj);
    },
    jian () {
      this.ShopNum--;
      var stJson = localStorage.getItem('goodsInfo');
      var stArr = JSON.parse(stJson);
      if(this.ShopNum<=0){
        this.ShopNum = 0;
        //需要删除localstorage这条商品数据
        for(var i =0;i<stArr.length;i++){
          if(this.shopId==stArr[i].shopId){
            stArr.splice(i,1);
          }
        }
      }else{
        // 将该商品的goodsNum数量-1操作
        for(var i =0;i<stArr.length;i++){
          if(this.shopId==stArr[i].shopId){
            stArr[i].goodsNum--;
          }
        }
      }
      localStorage.setItem('goodsInfo',JSON.stringify(stArr));
      console.log(this.ShopNum);
    },
    getGoodInfo (obj) {
      var localstarage = localStorage.getItem('goodsInfo');
      if(localstarage){
        // console.log(localstarage);
        var localstarageArr = JSON.parse(localstarage);
        // console.log(localstarageArr);
        var flag = true;//默认没有加入该商品到购物车
        for(var i = 0;i < localstarageArr.length;i++ ){
          if(this.shopId==localstarageArr[i].shopId){
            localstarageArr[i].goodsNum++;
            flag = false;
          }
        }
        if(flag){
          localstarageArr.push(obj);
        }
        localStorage.setItem('goodsInfo',JSON.stringify(localstarageArr));
      }else{
        console.log(8888888)
        var arr = [{
          shopId: this.shopId,
          yuanjia: this.yuanjia,
          xianjia: this.xianjia,
          goodsName: this.goodsName,
          goodsNum: 1
        }];
        console.log(arr);
        localStorage.setItem('goodsInfo',JSON.stringify(arr));
      }
    }
  },
  mounted () {
    var num = localStorage.getItem('goodsInfo');
    if(num){
      var arr = JSON.parse(num);
      for(var i =0;i < arr.length;i++){
        this.allGoodsNum+=arr[i].goodsNum;
        if(arr[i].shopId==this.shopId){
          this.ShopNum = arr[i].goodsNum;
        }
      }
    }
  }
}
</script>

<style>
h2 {
  font-size: 0.25rem;
}
.shop-middle {
  display: flex;
  flex-direction: column;
  padding: 0.1rem 0.12rem;
}
.detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right {
  display: flex;
  align-items: center;
}
.oparate {
  display: inline-block;
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 100%;
  text-align: center;
  line-height: 0.18rem;
  font-size: 0.25rem;
  border: 1px solid rgb(35, 149, 255);
}
.num {
  margin: 0 0.1rem;
  font-size: 0.18rem;
}
.reduce {
  color: rgb(35, 149, 255);
}
.plus {
  color: #fff;
  background: rgb(35, 149, 255);
}
.left .sell {
  line-height: 0.2rem;
  padding: 0.1rem 0;
  color: #666;
}
.left .price {
  color: rgb(255, 83, 57);
  font-size: 0.18rem;
}
.produce {
  color: #666;
  margin-top: 0.1rem;
}
.price del {
  color: #999;
  font-size: 0.12rem;
}
.discount {
  color: #ff5339;
  font-size: 0.12rem;
}
</style>
