<template>
  <div>
    <!-- shop组件 -->


    <shop-header :imgPic='goddsImg'></shop-header>

    <!-- <shop-detail ></shop-detail> -->
    <div class="shop-middle">
        <h2>{{goodsName}}</h2>
        <div class="detail">
          <div class="left">
            <span class="sell">{{tips}}</span>
            <p class="price">
              ￥{{xianjia}}
              <del>￥{{yuanjia}}</del>
              <span class="discount">{{discount}}折</span>
            </p>
          </div>
          <div class="right">
            <template v-if='ShopNum>0'>
              <i class="oparate reduce" @click='jian(),isClick--'>-</i>
                <span></span>
              <!-- <span class="num" >{{ShopNum}}</span> -->
            </template>
            <i class="oparate plus" @click='add(),isClick++' >+</i>
          </div>

        </div>
        <p class="produce">
            {{description}}

        </p>
      </div>

    <ShopCar :isclick='isClick'></ShopCar>

  </div>
</template>

<script>
import ShopHeader from './ShopHeader.vue'
// import ShopDetail from './ShopDetail.vue'
import ShopCar from './ShopCar.vue'
import axios from 'axios'
export default {
    name: 'Shop',

  components: {
    ShopHeader,
    // ShopDetail,
    ShopCar
  },
  data () {
    return {
      ShopNum: 0,//当前商品加入购物车的数量
      yuanjia: '58', //当前商品的原价
      xianjia: '30', //当前商品的现价
      goodsName: '四季套餐', //当前商品的名称
      shopId: '3', //当前商品的id编号
      allGoodsNum: 0, //所有加入购物车商品的总数量
      isClick: 0,
      tips: '' ,//好评
      goddsImg: '',
      discount: '',
      description: '', //介绍
      dianId: ''
    }
  },
  methods: {
    add () {
      this.ShopNum++; //控制上面的框
      // console.log(this.ShopNum);

      var obj = {
        shopId: this.shopId,
        yuanjia: this.yuanjia,
        xianjia: this.xianjia,
        goodsName: this.goodsName,
        goodsNum: 1,
        dianId: this.dianId
      }
      this.getGoodInfo(obj);
    },
    jian () {
      this.ShopNum--; //控制上面的框

      var stJson = localStorage.getItem('goodsInfo');
      var stArr = JSON.parse(stJson);
      if(stJson!='null'&&stJson){
        console.log('==============',);
        var flag = true;
        // var index = 0;
        for(var i =0;i<stArr.length;i++){
          if(this.shopId==stArr[i].shopId){
            // index = i;
            if(stArr[i].goodsNum==1){
              stArr.splice(i,1);
              flag = false;
            }
          }
        }
        if(flag){
          for(var i =0;i<stArr.length;i++){
            if(this.shopId==stArr[i].shopId){
               stArr[i].goodsNum--;
            }
          }

        }
      localStorage.setItem('goodsInfo',JSON.stringify(stArr));
      }
      // console.log(this.ShopNum);
    },
    getGoodInfo (obj) {
      var localstarage = localStorage.getItem('goodsInfo');
      if(localstarage!='null'&&localstarage){
        // console.log(localstarage);
        console.log('================')
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
        // console.log(8888888)
        var arr = [{
          shopId: this.shopId,
          yuanjia: this.yuanjia,
          xianjia: this.xianjia,
          goodsName: this.goodsName,
          goodsNum: 1,
          dianId: this.dianId
        }];
        // console.log(arr);
        localStorage.setItem('goodsInfo',JSON.stringify(arr));
      }
    }
  },
  mounted () {
    var num = localStorage.getItem('goodsInfo');
    if(num!='null'&&num){
      var arr = JSON.parse(num);
      for(var i =0;i < arr.length;i++){
        this.allGoodsNum+=arr[i].goodsNum;
        if(arr[i].shopId==this.shopId){
          this.ShopNum = arr[i].goodsNum;
        }
      }
    }
    // console.log(this.$route.params.shop_id);
    this.shopId = this.$route.params.shop_id;

    //去拿json数据
    axios.get('/json/goods.json')
    .then((res) => {
      console.log(res.data.menu);
      var data = res.data.menu;
      for(var i =0;i<data.length;i++){
        var foods = data[i].foods;
        // console.log('==================')
        for(var j=0;j<foods.length;j++){
          // console.log(foods[j]);
          // console.log('==================')
          var specfoods = foods[j].specfoods[0];
          if(this.shopId==specfoods.food_id){
      //       yuanjia: '58', //当前商品的原价
      // xianjia: '30', //当前商品的现价
      // goodsName: '四季套餐', //当前商品的名称
      // shopId: '3', //当前商品的id编号
      //goddsImg: '',
            this.yuanjia = specfoods.original_price;
            this.xianjia = specfoods.price;
            this.goodsName = specfoods.name;
            this.goddsImg = foods[j].image_path;
            this.tips = foods[j].tips;
            this.discount = foods[j].rating_count;
            this.description = foods[j].description;
            this.dianId = foods[j].restaurant_id;
          }
        }
      }
    })
     console.log(this.yuanjia,this.goddsImg);
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
  margin: 0 2px;
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
