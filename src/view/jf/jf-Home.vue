<template>
  <div class="main">
    <header>
      <div class="addr">
        <i class="iconfont icon-wodedizhi"></i>
        <p class="address">请输入配送地址</p>
      </div>
      <input type="text" placeholder="搜索饿了么商家、商品名称">
      <span class="iconfont icon-sousuo"></span>
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
    <div class="slide" id="slide">
      <!-- 轮播 -->
      <ul id="slid">
        <li>
          <a href>
            <img src="../../static/images/banner/banner1.webp" style="width: 100%;height: 110px;">
          </a>
        </li>
        <li>
          <a href>
            <img src="../../static/images/banner/banner2.webp" style="width: 100%;height: 110px;">
          </a>
        </li>
      </ul>
    </div>
    <!-- banner E -->
    <!-- 商家推荐 S -->
    <div class="sell">
      <!-- 商家推荐页 -->
      <h2>—— 推荐商家 ——</h2>
      <nav class="recomd">
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
    <jfContent
      :menuArr='menu.restaurant'
      v-for="(menu,index) in menus"
      :key="index"
    ></jfContent>
    <!-- 加载 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="item in list"
        :key="item"
      />
    </van-list>
    <!-- content E -->
  </div>
</template>

<script>
import jfContent from '../../components/jf-content.vue'
import axios from 'axios'
export default {
  data() {
    return {
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
      menus: [],
      flavor: '',
      active: '',
      loading: false, // 是否在请求数据
      finished: false, // 代表数据是否没有更多了
      list: [], //商家列表

      pageNum: 1,
      pageSize: 2,
      totalSize: 10
    }
  },
  computed: {
    totalPage() {
      return Math.ceil(this.totalSize / this.pageSize)
    }
  },
  components: {
    jfContent
  },
  methods: {
    getList() {
      axios.get('/json/content.json')
          .then(res => {
              this.menus = res.data.items
              // console.log(res.data)
          })
    },
    /**
     * 加载数据
     */
    onLoad() {
      axios.get('/json/content.json', {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }
      }).then(res => {
        var data = res.data.items
        // 前端处理分页
        this.totalSize = data.length
        this.menus = this.menus.concat(data.splice((this.pageNum - 1) * this.pageSize,this.pageSize))
        console.log(data)
      })
    }
  },
  created() {
      this.getList()
  }
};
</script>


<style>
.main {
  height: 100%;
  width: 100%;
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 0.49rem;
}
/* header S */
header {
  height: 1rem;
  background: linear-gradient(90deg, #0af, #0085ff);
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0.1rem;
}
header .addr {
  display: flex;
  align-items: center;
}
header .addr p {
  color: #fff;
  font-size: 0.2rem;
}
header .icon-wodedizhi {
  color: #eee;
  font-size: 0.33rem;
}
header input {
  height: 0.4rem;
  margin-top: 0.1rem;
  font-size: 0.16rem;
  text-align: center;
  border: 0 none;
}
header .icon-sousuo {
  position: absolute;
  color: #888;
  left: 14%;
  top: 56%;
  font-size: 0.16rem;
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
nav a {
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
h2 {
  text-align: center;
  line-height: 0.5rem;
  font-weight: normal;
  color: #000;
}
.recomd {
  display: flex;
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
  top: 28%;
}
/*商家内容 E */
</style>
