<template>
  <div id="city">
    <div class="city-head">
       <router-link to="/home" class="iconfont icon-xiangzuo"></router-link>
      <div>城市选择</div>
    </div>
    <div class="city-seach">
      <input type="text" placeholder="输入城市名或拼音">
      <i class="iconfont icon-search-line"></i>
    </div>
    <!-- 城市列表 -->
    <div class="city-list" id="city-list">
      <div class="dq-city">
        <p class="x-1px">当前城市</p>
        <div>深圳</div>
      </div>
      <li v-for="(item,index) in getCity"
      :key="index" :id="item.py">
        <div class="x-1px">{{item.py}}</div>
        <ul>
          <li @click="fn1(items.name)" 
          v-for="(items,index) in item.list"
          :key="index">{{items.name}}</li>
        </ul>
      </li>
     
    </div>

    <div class="zmdh-city">
      <div v-for="(item,index) in getCity"
      :key="index"
      @click="fn(item.py)">
      {{item.py}}
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  data(){
    return {
      oldCity:[]
    }
  },
  methods:{
    getoldCity(){
      Axios.get('/json/city.json')
      .then(res => {
        this.oldCity = res.data.data.cities;
        console.log(this.oldCity)
        this.getCity();
      })
      .catch(err => {
        console.log('11111111111');
      })
    },
    
    fn1(a){
    
      sessionStorage.setItem('addr', a)


      this.$router.push({

        path:'/home',
        query:{
          cityname:a
        }
      })
      alert(a)
    },
    fn(a){
      var el = document.getElementById(a);
      var list = document.getElementById("city-list");
      list.scrollTop = el.offsetTop
      console.log(el.offsetTop)
    }
  },
  computed:{
    getCity(){
      var index = 0 ; //做一个标记，用来找到某个 py 集合的下标
      var flag = {}; //用来判断 某个 py 集合是否已存在，并且可以得到他的下标   {"B":1,"A":2}类似这样
      var result = []; //最终的记过集合

      this.oldCity.forEach(item => {
        //1. 得到当前城市的首字母
        let py = item.pinyin.substr(0,1).toUpperCase();
        //2. 判断当前拼音首字母是否已存在
        if(flag[py]){
          //存在
          result[flag[py] -1 ].list.push(item); //找到该首字母的集合将 数据放到集合内部中
        }else{
          //不存在
          let obj = {// 将数据变成我们想要的格式
            py:py,
            list: [item]
          }
          result.push(obj); //将理想的数据放到最终数组中
          flag[py] = ++index; //在flag中记录下该首字母的位置
        }
      })
      result.sort((a,b) => {
        return a.py.charCodeAt() - b.py.charCodeAt()
      })
      return result
    },
  },
  created(){
    this.getoldCity();
    
  }
  
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
li{
  list-style: none;
}
.x-1px{
   border-bottom: 1px solid #ddd;
   height: 40px;
   background: #f5f5f5;
   line-height: 40px;
}
#city{
  color: #666;
  .city-head{
    height: 44px;
    background: #0085ff;
    display: flex;
    font-size: 18px;
    line-height: 44px;
    color: #fff;
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 100;
    i{
      position: absolute;
      left: 12px;
    }
    div{
      width: 100%;
      height: 100%;
    }
  }
  .city-seach{
     height: 44px;
    background: #0085ff;
    display: flex;
    font-size: 18px;
    line-height: 44px;
    color: #fff;
    position:fixed;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 100;
    input{
      height: 30px;
      width: 290px;
      background: #fff;
      border-radius: 15px;
      border: 0;
      position: absolute;
      left: 25px;
      right: 25px;
      margin: 7px 0 0 ;
      padding: 1px 0px 1px 35px ;
      
    }
    i{
        position: absolute;
        left: 33px;
        z-index: 10;
        color: #000
      }
  }
  .city-list{
    position: absolute;
    left:0;
    right: 0;
    top: 88px;
    bottom: 50px;
    font-size: 14px;
    text-indent: 15px;
    overflow-y: scroll;
    .dq-city{
      width: 100%;
      height: 90px;
     
      p{
        height: 40px;
        background: #f5f5f5;
        line-height: 40px;
       
      }
      div{
        height: 50px;
        line-height: 50px;        
      }
    }
    li{
      ul{
        li{
          height: 50px;
          line-height: 50px;
          margin-left: 15px;
          border-bottom: 1px solid #ddd;
        }
      }
    }
    
  }
  .city-list::-webkit-scrollbar {
        display: none;
    }
  .zmdh-city{
      position: fixed;
      font-size: 20px;
      line-height: 20px;
      right: 0;
      top: 130px;
      color: #999;
    }
}

</style>
