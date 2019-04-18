<template>
  <div id="login">
    <div class="main">

    <h1><img src="//shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png" alt=""></h1>
    <div class="main-two">
      <input type="text" placeholder="用户名:" v-model="useName">
     <!--  <div class="hr-30"></div> -->
      <input type="password" placeholder="密码:" v-model="usePsw">
      <div class="main-xy">新用户登录即自动注册，并表示已同意<a href="https://h5.ele.me/service/agreement/#initTitle=%E7%94%A8%E6%88%B7%E6%9C%8D%E5%8A%A1%E5%8D%8F%E8%AE%AE&key=ruleQue18">《用户服务协议》</a></div>
      <div class="main-login" @click="fn">登录</div>
      <div class="main-gy">关于我们</div>
    </div>
    </div>
  </div>
</template>
<script>
import Axios from 'axios';
export default {
  data(){
    return {
      useName:'',
      usePsw:''
    }
  },
  methods:{
    fn(){
      var name = this.useName;
      var pwd = this.usePsw;

      if (name != '' && pwd != '') {
          var goods = localStorage.getItem("logingoods");//获取当前用户的缓存（没有的话就是null）
          if(goods){//存在
            var b = JSON.parse(goods)
            var k = b.find(item => {//
            return  Object.keys(item)[0] === name //当前用户名是否存在 存在返回该数组 不存在 undefined
            })
            if(k){//用户名存在
              if(k[name] === pwd){//密码正确
               window.islogin="true";
                this.$router.push('/home');
    
    
    
              }else{//密码错误
                alert("密码错误,请重新输入")
              }
    
            }else{//用户名不存在
               var obj = {};
               obj[name]=pwd;
               b.push(obj)
               var goodsSTR = JSON.stringify(b);
               localStorage.setItem("logingoods",goodsSTR);//设置缓存
               window.islogin="true";
                this.$router.push('/home');
    
            }
    
          }else{//不存在
          var loginArr = [];
          var obj = {};
          obj[name]=pwd;
          loginArr.push(obj)
          var goodsSTR = JSON.stringify(loginArr);
          localStorage.setItem("logingoods",goodsSTR);//设置缓存
          console.log('缓存没有')
          }

      } else {
          alert('用户名或密码不能为空')
      }
      
    //   console.log(k,'啊啊啊啊')
    }
  }
  
}
</script>
<style lang="scss">
body,html{
  width: 100%;
  height: 100%;
}
.hr-30{
  height: 30px;
  widows: 100%;
}
  #login{
    position: fixed;
    left: 0;
    right: 0;
    top: 40px;
    bottom: 0;
    .main{
      position: absolute;
      top: 0;
      left: 10%;
      right: 10%;
      bottom: 0;
   
      h1{
      width: 130px;
      height: 56px;
      margin: 0 auto;
      img{
        width: 100%
      }
      }
      .main-two{
        width: 100%;
        min-height: 300px;
        background: #fff;
        input{
          width: 100%;
          height: 44px;
          border: 1px solid #ccc;
          border-radius: 10px;
          margin-top: 15px;
          text-indent: 10px
        }
      }
      .main-xy{
        font-size: 14px;
        margin-top: 15px; 
        a{
          color: #2395ff;
        }
      }
      .main-login{
        width: 100%;
        height: 42px;
        line-height: 42px;
        background: #4cd96f;
        border-radius: 10px;
        text-align: center;
        color: #fff;
        margin-top: 30px
      }
      .main-gy{
        width: 100%;
        height: 14px;
        font-size: 12px;
        color: #ccc;
        text-align: center;
        margin-top: 20px;
      }
    }
    
    
  }

</style>
