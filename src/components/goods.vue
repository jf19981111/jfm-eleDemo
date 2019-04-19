<template>
    <div>
        <!-- 详情头部 S -->
        <jfGohead></jfGohead>
        <!-- 详情头部 E -->
        <!-- 选项切换 S -->
        <jfShopTab></jfShopTab>
        <!-- 选项切换 E -->
        <!-- 推荐 S -->
        <jfRecomd></jfRecomd>
        <!-- 推荐 E -->
        <!-- detail 详情 S -->
        <jfDetail></jfDetail>
        <!-- detail 详情 E -->
        <!-- shopCar S -->
        <ShopCar :isclick='0'></ShopCar>
        <!-- shopCar E -->
    </div>
</template>

<script>
import jfGohead from './jf-goHead.vue'
import jfShopTab from './jf-shopTab.vue'
import jfRecomd from './jf-recommend.vue'
import jfDetail from './jf-detail.vue'
import ShopCar from './ShopCar'
export default {
  data () {
    return {
      isclick: 0
    }
  },
  components: {
    jfGohead,
    jfShopTab,
    jfRecomd,
    jfDetail,
    ShopCar
  }
}
</script>
