<template>
    <!-- 正面刚 S -->
  		 <div>
		    <div class="recommend">
		      <p class="recommend_title">正面刚</p>
		      <div class="rec_menu">
		        <ul>
		          <li>
		            <img src="images/detail/menu01.webp" alt="">
		            <div class="menu_title">
		              <p class="des">8.8元周年庆单人套餐</p>
		              <p class="sale">月售325  好评率100%</p>
		              <div class="price">
		                <p><small>￥</small>40</p>
		                <a href="#">＋</a>
		              </div>
		            </div>
		          </li>
		          <li>
		            <img src="images/detail/menu02.webp" alt="">
		            <div class="menu_title">
		              <p class="des">手扒鸡送可乐</p>
		              <p class="sale">月售58  好评率100%</p>
		              <div class="price">
		                <p><small>￥</small>24.99</p>
		                <a href="#">＋</a>
		              </div>
		            </div>
		          </li>
		          <li>
		            <img src="images/detail/menu03.webp" alt="">
		            <div class="menu_title">
		              <p class="des">特价单人套餐</p>
		              <p class="sale">月售81  好评率100%</p>
		              <div class="price">
		                <p><small>￥</small>16.99</p>
		                <a href="#">＋</a>
		              </div>
		            </div>
		          </li>
		          <li>
		            <img src="images/detail/menu04.webp" alt="">
		            <div class="menu_title">
		              <p class="des">牛肉煲买一送一</p>
		              <p class="sale">月售72  好评率100%</p>
		              <div class="price">
		                <p><small>￥</small>12</p>
		                <a href="#">＋</a>
		              </div>
		            </div>
		          </li>
		        </ul>
		      </div>
		    </div>
		</div>
  <!-- 正面刚 E -->
</template>

<style>
/* 正面刚 S */
 .recommend {
    background: #fff;
    padding: 0 0.16rem;
    padding-top: 0.1rem;
  }
  .recommend .recommend_title {
    font-size: 0.18rem;
    color: #000;
    font-weight: 700;
  }
  .rec_menu ul {
    overflow-x: scroll;
    display: flex;
  }
  .rec_menu ul li {
    width: 1.3rem;
    flex: none;
    margin-right: 0.14rem;
  }
  .rec_menu img {
    width: 100%;
  }
  .rec_menu .menu_title .des {
    padding: 0.05rem 0;
    font-size: 0.16rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .rec_menu .menu_title .sale {
    color: #999999;
    margin-bottom: 0.06rem;
  }
  .price {
    display: flex;
    justify-content: space-between;
  }
  .price p {
    color: rgb(255, 83, 57);
    font-size: 0.18rem;
  }
  .price p small {
    font-size: 0.16rem;
  }
  .price a {
    display: block;
    width: 0.25rem;
    height: 0.25rem;
    background: rgb(35, 149, 255);
    text-align: center;
    color: #fff;
    font-size: 0.18rem;
    border-radius: 45%;
  }
  ::-webkit-scrollbar {
    width: 0;
  }
/* 正面刚 E */
</style>
