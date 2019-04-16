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
    </div>
</template>

<script>
import jfGohead from './jf-goHead.vue'
import jfShopTab from './jf-shopTab.vue'
import jfRecomd from './jf-recommend.vue'
import jfDetail from './jf-detail.vue'
export default {
    components: {
       jfGohead,
       jfShopTab,
       jfRecomd,
       jfDetail,
    }
}
</script>