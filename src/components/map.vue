<template>
  <div>
    <div class="heard">
      <div class="top">
        <h2>选择收货地址</h2>
        <p>新增地址</p>
      </div>
    </div>
    <div>
      <div class="opting">
        <p class="jf-city" id="city">请输入</p>
        <input
          type="text"
          id="suggestId"
          name="address_detail"
          placeholder="请输入地址"
          class="input_style"
        >
        <div id="allmap"></div>
      </div>
      <p class="p">
        <span>当前地址</span>
      </p>
      <div class="site">
        <p style="font-weight: 700" class="addr2"></p>
        <p style="color:#2395ff">重新定位</p>
      </div>
      <p class="p">
        <span>收货地址</span>
      </p>
      <ul class="site">
        <p style="font-weight: 700">后瑞草围社区龟山路</p>
      </ul>
    </div>
  </div>
</template>

<style>
body {
  background: #f5f5f5;
}

#city {
  width: 0.60rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.heard {
  height: 0.51rem;
  width: 100%;
}
.top {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 4;
  color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 0.12rem 0;
  align-items: center;
  background-image: linear-gradient(90deg, #0af, #0085ff);
}
.top h1 {
  font-size: 0.19rem;
  font-weight: 100;
}
.top p {
  position: absolute;
  right: 0.2rem;
}
.opting {
  display: flex;
  padding: 0.18rem;
  color: #333;
  font-size: 0.14rem;
  align-items: center;
  background: white;
}
.opting input {
  width: 2.52rem;
  padding: 0.1rem;
  background: #f5f5f5;
  outline: 0;
  border: 0;
  border: 1px solid #f5f5f5;
  margin-left: 0.15rem;
}
.p {
  width: 100%;
  padding: 0.12rem 0;
  font-size: 0.14rem;
}
.p span {
  margin-left: 0.12rem;
}
.site {
  background: white;
  display: flex;
  font-size: 0.16rem;
  padding: 0.15rem 0.12rem;
  justify-content: space-between;
}
.jf-city {
  background: white;
  height: 0.28rem;
  line-height: 0.28rem;
  width: 100%;
  height: 0.28rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.addr2 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
