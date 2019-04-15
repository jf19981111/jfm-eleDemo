<template>
    <!-- footer S -->
    	<footer class="foo">
		    <ul>
		      <li
                v-for="(tab,index) in tabs"
                :key="index"
               >
		        <router-link :to="tab.href" class="home" active-class="active">
		          <span :class="['iconfont', tab.icon]"></span>
		          	{{ tab.name }}
		        </router-link>
		      </li>
		       <!-- <li>
                   icon-changyonglogo401
		        <a href="#/find">
		          <span class="iconfont icon-faxian"></span>
		          	发现
		        </a>
		      </li>
		       <li>
		        <a href="#/order">
		          <span class="iconfont icon-icon--copy"></span>
		          	订单
		        </a>
		      </li>
		       <li>
		        <a href="#/center">
		          <span class="iconfont icon-wode-copy"></span>
		          	我的
		        </a>
		      </li> -->
		    </ul>
  		</footer>
    <!-- footer E -->
</template>

<script>
export default {
    props: {
        tabs: {
            type: Array
        }
    }
}
</script>


<style>
/* footer S */
footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;
  }
  footer ul {
    display: flex;
    align-items: center;
    /* border-top: 1px solid #888; */
    box-shadow: 0 -0.266667vw 0.533333vw rgba(0,0,0,.1);
    /* font-size: 0.16rem; */
    font-size: 16px;
    color: #333;
  }
  footer ul li {
    flex: 1;
    text-align: center;
  }
  footer ul li a {
    display: flex;
    flex-direction: column;
  }
  .foo ul li a  span {
    /* font-size: 0.26rem; */
    font-size: 26px;
  }
  .foo .home span {
    /* font-size: 0.28rem; */
    font-size: 28px;
  }
  footer a.active {
    color: #0089dc;
  }
/* footer E */

</style>
