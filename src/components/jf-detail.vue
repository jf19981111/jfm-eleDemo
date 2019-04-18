<template>
<!-- 商家详情页 -->
  <div>
    <div class="main_menu">
      <div class="menu_category">
        <ul>
          <li v-for="(item,index) in category"
              :key="index"
              :class="{'active': curTab == index}"
              @click="curTab = index">
            <img :src="item.imgSrc" v-if="item.isExist">
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
      <div class="menu_list">
        <dl v-for="(label,index) in menuArr"
            :key="index">
          <dt class="menu_label">
            <span>{{ label.name }}</span>
          </dt>
          <dd class="menuItem"
              v-for="(sel,index) in label.foods"
              :key="index" @click="shopId(sel.specfoods[0].food_id)">
            <img :src="sel.image_path" alt="">
            <section class="food_info">
              <p class="food_name">{{ sel.name }}</p>
              <p class="food_des">{{ sel.description }}</p>
              <p class="food_sale">
                <span>月售{{ sel.month_sales }}份</span>
                <span>好评率{{ sel.satisfy_rate }}%</span>
              </p>
              <div class="food_act"  v-if="sel.activity != null">
                <span>{{ sel.activity.benefit_text }}</span>
                <span>{{ sel.activity.applicable_quantity_text }}</span>
              </div>
              <div class="food_p">
                <div class="price">
                  <span>￥</span>
                  {{ sel.specfoods[0].price }}
                  <del v-if="sel.specfoods[0].original_price">
                    ￥{{ sel.specfoods[0].original_price }}
                  </del>
                </div>
                <a href="#">＋</a>
              </div>
            </section>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'detail',
  data () {
    return {
      curTab: '',
      category: [
        {
          name: '热销',
          imgSrc: '../../images/detail/fire.webp',
          isExist: true
        },
        {
          name: '优惠',
          imgSrc: '../../images/detail/youhui.webp',
          isExist: true
        },
        {
          name: '华莱士超值套餐'
        },
        {
          name: '华莱士超值双人餐'
        },
        {
          name: '套餐'
        },
        {
          name: '华莱士新品'
        },
        {
          name: '主食'
        },
        {
          name: '华莱士小食餐'
        },
        {
          name: '华莱士饮料'
        },
        {
          name: '天天优惠'
        },
        {
          name: '经典主食'
        },
        {
          name: '特惠套餐'
        },
        {
          name: '华莱士单人餐'
        }
      ],
      menuArr: []
    }
  },
  mounted () {
    axios.get('/json/goods.json')
      .then((result) => {
        // console.log(result.data.menu)
        this.menuArr = result.data.menu
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    shopId (val_id) {
      // console.log(val_id)
      this.$router.push({
        name: 'Shop',
        params: {
          shop_id: val_id
        }
      })
    }
  }
}
</script>

<style>
/* menu S */
.main_menu {
    display: flex;
    height: 6.9rem;
    overflow: hidden;
    padding-bottom: .5rem;
  }
  .menu_category {
    background-color: #f8f8f8;
    overflow-y: auto;
  }
  .menu_category li img {
    width: 0.15rem;
    position: relative;
    top: 0.02rem;
    left: -0.04rem;
  }
  .menu_category li {
    padding: 0.2rem 0.1rem;
    text-align: left;
    font-size: 0.15rem;
    width: 0.7rem;
    flex: none;
  }
  .menu_category .active {
    background-color: #fff;
  }
  .menu_label {
    padding: 0.06rem 0;
  }
  .menu_label span {
    margin-left: 0.1rem;
    font-size: 0.15rem;
  }
  .menuItem {
    margin-left: 0.1rem;
    display: flex;
    margin: 0.05rem 0;
  }
  .menuItem img {
    margin-right: 0.1rem;
    width: 1.2rem;
    height: 1.2rem;
  }
  .food_info {
    padding: 0 0.1rem 0.15rem 0;
  }
  .food_info .food_name {
    font-size: 0.16rem;
    font-weight: 700;
  }
  .food_info .food_des {
    width: 1.6rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 0.05rem 0;
    color: #9999a6;
  }
  .food_sale {
    color: #9999a6;
    margin-bottom: 0.06rem;
  }
  .food_info a {
    display: block;
    width: 0.25rem;
    height: 0.25rem;
    background: rgb(35, 149, 255);
    text-align: center;
    color: #fff;
    font-size: 0.18rem;
    border-radius: 45%;
  }
  .food_act {
    color: #eb6551;
  }
  .price {
    color: rgb(255, 83, 57);
    font-size: 0.18rem;
  }
  /*.price span {
    font-size: 0.16rem;
    margin-right: -0.06rem;
  }*/
  .price del {
    font-size: 0.12rem;
    color: #9999a6;
  }
  .food_p {
    display: flex;
    justify-content: space-between;
    margin-top: 0.05rem;
  }
  .menu_list {
    overflow-y: auto;
  }
/* menu E */

</style>
