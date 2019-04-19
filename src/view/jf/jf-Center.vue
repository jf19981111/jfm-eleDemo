<template>
  <div id="profile">
    <div class="profile-top">
      <div class="profile-top-main">
        <h1><img src="/images/elm.png" alt=""></h1>
        <div class="profile-top-main-text" @click="login">
          <p class="p1">{{sjs=sjs?sjs:"登录/注册"}}</p>
          <p class="p2"><i class="iconfont icon-shouji"></i>{{sj=sj?sj:"登陆后享受更多"}}</p>
          <i class="iconfont icon-jiantou"></i>
        </div>
      </div>
    </div>
    <div class="profile-hbjb">
      <div class="profile-hbjb-l">
        <a href="">
          <p><i class="iconfont icon-qunfenghongbao"></i></p>
          <p>红包</p>
        </a>
        </div>
      <div class="profile-hbjb-r" @click="login">
        <a href="">
          <p><i class="iconfont icon-jinbi"></i></p>
          <p>金币</p>
        </a>
      </div>
    </div>
    <div @click="login" class="profile-fy sMg12"><i class="iconfont icon-weizhi i1"></i><p>我的地址</p><i class="iconfont icon-jiantou i2"></i></div>
    <div @click="login" class="profile-fy sMg12"><i class="iconfont icon-shangcheng i1"></i><p>金币商城</p><i class="iconfont icon-jiantou i2"></i></div>
    <div @click="login" class="profile-fy "><i class="iconfont icon-xinshoulibao i1"></i><p>分享领红包</p><i class="iconfont icon-jiantou i2"></i></div>
    <div @click="login" class="profile-fy sMg12"><i class="iconfont icon-kefu i1"></i><p>我的客服</p><i class="iconfont icon-jiantou i2"></i></div>
    <div @click="login" class="profile-fy "><i class="iconfont icon-changyonglogo40 i1"></i><p>下载App</p><i class="iconfont icon-jiantou i2"></i></div>
    <div @click="login" class="profile-fy "><i class="iconfont icon-guizeshuoming i1"></i><p>规则中心</p><i class="iconfont icon-jiantou i2"></i></div>
    <div @click="login" class="profile-foot"><a href="https://h5.ele.me/service/agreement/#HEAEDER_SHOW=1&initTitle=%E9%9A%90%E7%A7%81%E6%94%BF%E7%AD%96&key=ruleQue50">隐私政策</a></div>
  </div>
</template>
<script>
import { parse } from 'path';
export default {
  data(){
    return {
      sj:"",
      sjs:''
    }
  },
  
  methods:{
    login(){
      if(document.cookie){
        this.$router.push('./home')
      }else{
        this.$router.push('./login')

      }
        
    },
    getCook(){
    if(document.cookie){
      var sjh = document.cookie.substr(6)
      this.sj = sjh.substr(0,3)+"****"+sjh.substr(7)
      this.sjs = new Date().getTime()
      this.sjs = parseInt(sjh.substr(0,3))*3+3+"nelm"+parseInt(sjh.substr(7))*2+2
      
    }
  },
  },
  
  mounted(){
    this.getCook()
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0
}

.sMg12{
  margin-top: 12px;
}
.xMg12{
  margin-bottom: 12px;
}
  #profile{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 50px;
     background: #f5f5f5;
    .profile-top{
      background: #0085ff;
      width: 100%;
      height: 110px;
      position: relative;
    .profile-top-main{
      display: flex;
      justify-content: space-between;
      position: absolute;
      left: 15px;
      right: 15px;
      top: 25px;
      bottom: 25px;
      h1{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
        
        img{
          width: 100%;
        }
      }
      .profile-top-main-text{
        position: relative;
        height: 60px;
        width: 257px;
        .p1{
          font-size: 21px;
          color: #fff;
          margin-bottom: 8px;
        }
        .p2{
          font-size: 12px;
          color: #fff;
        }
        .icon-jiantou{
          position: absolute;
          right: 0;
          top: 20px;
          font-size: 10px;
          color: #fff;
        }
      }
    }
    }
    .profile-hbjb{
      width: 100%;
      height: 84px;
      display: flex;
      box-sizing: border-box;
      background: #fff;
      .profile-hbjb-l{
        border-right: 1px solid #ddd;
      }
      .profile-hbjb-l,.profile-hbjb-r{
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;

        a{
          display: block;
          width: 100%;
         overflow: hidden;
          color: #666;
          p{
            text-align: center;
            i{
              color: red !important ;
              font-size: 30px;
            }
            .icon-jinbi{
              color: green !important;
              font-size: 30px;
            }
          }
        }
      }
    }
    .profile-fy{
      width: 100%;
      height: 45px;
      background: #fff;
      position: relative;
      line-height: 45px;
      .i1{
        position: absolute;
        left: 25px;
        color: #4da6f0;
        font-size: 22px;
      }
      .i2{
        position: absolute;
        right: 15px;
        color: #bbb;
      }
      p{
        position: absolute;
        left: 60px;
      }
    }
    .profile-foot{
      width: 100%;
      height: 18px;
      font-size: 15px;
      line-height: 18px;
      margin-top: 30px;
      text-align: center;
      a{
        color: #4da6f0;
      }
    }
  }
</style>
