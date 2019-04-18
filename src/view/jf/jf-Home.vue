<template>
  <!-- 加载 -->
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
    :offset="10"
    style="padding-bottom: 0.49rem;"
  >
    <div class="main">
      <header class="syHome">
        <div class="addr">
          <i class="iconfont icon-wodedizhi"></i>
          <p @click="dizhi" class="dizhi">{{address?address:'请选择所在城市'}}</p>
          <!-- <p @click="dizhi" class="dizhi">{{$route.query.cityname?$route.query.cityname:'请选择所在城市'}}</p> -->
        </div>
        <div class="search" id="search" :class="{searchFixed: searchFixed}">
          <input type="text" placeholder="搜索饿了么商家、商品名称">
          <span class="iconfont icon-sousuo"></span>
        </div>
      </header>
      <nav class="fruit">
        <ul>
          <li v-for="item in navList" :key="item.id">
            <router-link to="/food">
              <img :src="item.src" alt>
              <p>{{ item.name }}</p>
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- hot S -->
      <div class="hot">
        <ul>
          <li>
            <a class="pz" href>
              <p class="taocan">品质套餐</p>
              <p class="quan">搭配齐全吃得好</p>
              <p class="qiang">
                立即抢购
                <span class="iconfont icon-llmainpageback-copy-copy"></span>
              </p>
            </a>
          </li>
          <li>
            <a class="vip" href>
              <img src="../../static/images/nav/hg.webp">
              <span>
                <b style="font-weight: 700;">超级会员</b> ● 每月领20元红包
              </span>
              <p>
                立即开通
                <span class="iconfont icon-llmainpageback-copy-copy"></span>
              </p>
            </a>
          </li>
        </ul>
      </div>
      <!-- hot E -->
      <!-- banner S -->
      <!-- <div class="slide" id="slide"> -->
        <!-- 轮播 -->
        <!-- <ul id="slid"> -->

          <Banner :banners= "banners"></Banner>
          <!-- <li>
            <a href="">
              <img src="/images/banner/banner1.webp" style="width: 100%;height: 110px;">
            </a>
          </li> -->
          <!-- <li>
            <a href="">
              <img src="/images/banner/banner2.webp" style="width: 100%;height: 110px;">
            </a>
          </li>
          <li>
            <a href="">
              <img src="/images/banner/banner3.webp" style="width: 100%;height: 110px;">
            </a>
          </li> -->
        <!-- </ul> -->
      <!-- </div> -->
      <!-- banner E -->
      <!-- 商家推荐 S -->
      <div id="sell" class="sell">
        <!-- 商家推荐页 -->
        <h2 class="h2">—— 推荐商家 ——</h2>
        <nav class="recomd" id="recomd" :class="{fixed: isFixed}">
          <a href>
            综合排序
            <span class="iconfont icon-xiasanjiao-copy"></span>
          </a>
          <a href>距离最近</a>
          <a href>品质联盟</a>
          <a href class="select">
            筛选
            <img src="../../static/images/sell/select.png" alt>
          </a>
        </nav>
        <!-- 商家推荐内容 -->
      </div>
      <!-- 商家推荐 E -->
      <!-- content S -->
      
        <jfContent :menuArr="menu.restaurant" v-for="(menu,index) in menus" :key="index"></jfContent>
      
      <!-- content E -->
    </div>
  </van-list>
</template>

<script>
import jfContent from "../../components/jf-content.vue"
import Banner from '../../components/Banner.vue'
import { mapMutations, mapState, mapGetters,mapActions } from 'vuex'
// import axios from "axios";
export default {
  data() {
    return {
      /**
       * isShow 显示隐藏
       */
      isShow: true,
      /**
       * search 是否固定
       */
      searchFixed: false,
      /**
       * shopBar是否 固定
       */
      isFixed: false,

      /**
       * 小图标的列表
       */
      navList: [
        {
          id: 1,
          name: "美食",
          src: require("../../static/images/nav/meishi.png")
        },
        {
          id: 2,
          name: "晚餐",
          src: require("../../static/images/nav/wancan.png")
        },
        {
          id: 3,
          name: "商超便利",
          src: require("../../static/images/nav/chaoshi.png")
        },
        {
          id: 4,
          name: "水果",
          src: require("../../static/images/nav/shuiguo.png")
        },
        {
          id: 5,
          name: "医药健康",
          src: require("../../static/images/nav/yiliao.png")
        },
        {
          id: 6,
          name: "浪漫鲜花",
          src: require("../../static/images/nav/xianhua.png")
        },
        {
          id: 7,
          name: "美食",
          src: require("../../static/images/nav/yiliao.png")
        },
        {
          id: 8,
          name: "汉堡披萨",
          src: require("../../static/images/nav/yiliao.png")
        },
        {
          id: 9,
          name: "厨房生鲜",
          src: require("../../static/images/nav/shuicai.png")
        },
        {
          id: 10,
          name: "炸鸡串",
          src: require("../../static/images/nav/xiaochi.png")
        }
      ],
      /**
       * 轮播图的列表
       */
      banners: [
        {
          id: 1,
          imgUrl: '/images/banner/banner1.webp'
        },
         {
          id: 2,
          imgUrl: '/images/banner/banner2.webp'
        },
        {
          id: 3,
          imgUrl: '/images/banner/banner3.webp'
        },
      ],

      // 地址
      address: ""
    };
  },
  computed: {
    ...mapState("seller", [
      // 'loading', // 计算属性是不允许修改的
      "menus",
      "pageNumber",
      "pageSize",
      "totalSize"
    ]),

    ...mapGetters("seller", ["totalPage", "finished"]),

    loading: {
      get() {
        return this.$store.state.seller.loading;
      },

      set(val) {
        // 如果说 要 提交一个子模块的 突变，那么要加上 该模块 seller/changeLoading
        this.$store.commit("seller/changeLoading", val);
      }
    }
  },
  components: {
    jfContent,
    Banner
  },
  methods: {
    /**
     * 地址城市加载
     */
    dizhi() {
      this.$router.push({
        path: "/map"
      });
    },

    ...mapMutations("seller", [
      "changeList",
      "changeTotalSize",
      "changeLoading",
      "addPageNum"
    ]),

    ...mapActions("seller", ["onLoad"]),

    /**
     * 滚动事件 固定
     */
    onScroll() {
      // console.log('1111',scroll)
      // 计算滚动条距离顶部的距离
      let scrollTop = document.documentElement.scrollTop;
      let search = document.getElementById("search");
      let recomd = document.getElementById("recomd");
      // console.log(scrollTop)
      //  console.log(search.offsetTop)
      // let temp = recomd.offsetTop
      // console.log(scrollTop,recomd.offsetTop,temp)
      if (scrollTop >= 30) {
        this.searchFixed = true;
      } else {
        this.searchFixed = false;
      }
      if (scrollTop >= 490) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    }
  },
  mounted() {
    // 判断session是否存在地址
    this.address = sessionStorage.getItem("addr");
    // console.log('hello')
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy () {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>

<style>
/* header S */
.syHome {
  height: 1rem;
  background: linear-gradient(90deg, #0af, #0085ff);
  position: relative;
  display: flex;
  flex-direction: column;
  /* padding: 0.1rem; */
}
.syHome .addr {
  display: flex;
  align-items: center;
  padding: 0.1rem;
  /* padding-top: 0.15rem; */
}
.syHome .addr p {
  color: #fff;
  font-size: 0.2rem;
}
.syHome .icon-wodedizhi {
  color: #eee;
  font-size: 0.33rem;
}
.search {
  padding: 2vw 3.733333vw;
  margin: -0.133333vw 0;
  z-index: 101;
  top: -26px;
  position: relative;
}
.searchFixed {
  position: fixed;
  background-image: linear-gradient(90deg, #0af, #0085ff);
  padding: 2vw 3.733333vw;
  margin: -0.133333vw 0;
  z-index: 101;
  top: 0;
  left: 0;
  right: 0;
}
header input {
  width: 100%;
  height: 0.4rem;
  margin-top: 0.1rem;
  font-size: 0.16rem;
  text-align: center;
  border: 0 none;
}
header .icon-sousuo {
  position: absolute;
  color: #888;
  left: 20%;
  top: 46%;
  font-size: 0.16rem;
  z-index: 101;
}
/* header E */
/* nav S */
nav ul {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.15rem;
}
nav li {
  width: 20%;
  margin-top: 0.15rem;
}
.fruit a {
  display: block;
  text-align: center;
  overflow: hidden;
}
.fruit img {
  width: 0.4rem;
}
/* nav E */
/* hot S */
.hot {
  padding: 0.1rem;
}
.hot li {
  margin: 0.1rem 0;
}
.hot ul li .pz {
  display: block;
  background: #f5f5f5 url(../../static/images/nav/pz.png) no-repeat right bottom;
  background-size: 1.2rem;
  /*height: 1.2rem;*/
  padding: 0.1rem 0.1rem;
}
.hot .taocan {
  font-size: 0.2rem;
  font-weight: 700;
  color: #000;
}
.hot .quan {
  font-size: 0.14rem;
  margin: 0.05rem 0;
  color: #777;
}
.hot .qiang {
  color: #af8260;
  font-weight: 700;
}
.hot .vip {
  display: flex;
  height: 0.38rem;
  background-image: linear-gradient(90deg, #ffefc4, #f3dda0);
  background-size: 100%;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.1rem;
}
.hot .vip img {
  width: 0.29rem;
  height: 0.29rem;
}
.hot .vip p {
  font-size: 0.12rem;
  color: #644f1b;
}
/* hot E */
/* banner S */
#slide {
  width: 100%;
  overflow: hidden;
  position: relative;
}
#slid {
  width: 900%;
  position: relative;
  top: 0;
  left: 0;
}
#slid li {
  float: left;
  width: 11.11%;
}
#slid li a {
  display: block;
}
#slid li a img {
  display: block;
}
/* banner E */
/* 商家内容 S */
.h2 {
  text-align: center;
  line-height: 0.5rem;
  font-weight: normal;
  color: #000;
}
.fixed {
  position: fixed;
  top: 54px;
  width: 100%;
  background: #fff;
  z-index: 10;
}
.recomd {
  display: flex;
  height: 0.6rem;
  align-items: center;
}
.recomd a {
  flex: 1;
  text-align: center;
  font-size: 0.12rem;
}
.recomd .select {
  position: relative;
}
.recomd .select img {
  position: absolute;
  right: 0.1rem;
  top: 26%;
}
/*商家内容 E */
</style>
