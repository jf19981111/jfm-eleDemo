<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide"
        v-for='(item,index) in banners'
        :key='index'>
        <img :src="item.imgUrl" alt=""></div>
        
    </div>
    
    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->

    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
</template>

<script>
/* const Swiper = window.Swiper; */
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
  data(){
    return {
      swiper:null
    }
  },
  mounted(){
    if(!this.swiper){//在 data 中定义一个 swiper 为 null 当他为空的时候就会进来执行一遍，之后就不会再来执行了
      this.swiper = new Swiper('.swiper-container',{
        loop:true,//无缝轮播
        // autoplay:true,
        autoplay: {
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },

        pagination:{//显示分页小圆点
          el:'.swiper-pagination'
        }
  
      })
    }
  },
  /* mounted(){
    new Swiper('.swiper-container',{
      loop:true,//无缝轮播
      pagination:{//显示分页小圆点
        el:'.swiper-pagination'
      }

    })
  }, */
  props:{
    banners:{
      type:Array
    }
  }
}
</script>
/* //如果使用的第三方组件，不要加 scoped 会出现不可控的错误 */
<style lang="scss">
  .swiper-container {
    width: 100%;
    height: 110px;
    img{
      width: 100%;
      height: 110px;
    }
}  
</style>
