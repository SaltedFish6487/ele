<template>
  <footer id="bottombar" class="footer">
    <div>
      <ul id="footermenuNav">
        <li>
          <a href="#/" class="selected">
            <div class="ico homeico"></div>
            <span class="lispan">首页</span>
          </a>
        </li>
        <li>
          <a href="#/allproducts" class="">
            <div class="ico allico"></div>
            <span>全部产品</span>
          </a>
        </li>
        <li>
          <a href="#/stroll" class="">
            <div class="ico strollico"></div>
            <span>闲逛</span>
          </a>
        </li>
        <li>
          <a href="#/shopcart" class="">
            <div class="ico cartico"></div>
            <span>购物车</span> <!----> <!---->
          </a>
        </li>
        <li>
          <a href="#/usercenter" class="">
            <div class="ico usercenterico"></div>
            <span>账户中心</span> <span class=""></span>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  footer {
    padding: 0;
    height: 4.5rem;
    position: fixed;
    bottom: 0;
    z-index: 900;
    width: 100%;
    background: #f8f8f8;
    border-top: .04rem solid #ddd;
  }
  #footermenuNav {
    margin: 0;
    padding: 0;
    background: #f8f8f8;
    text-align: center;
  }
  #footermenuNav li {
    width: 20%;
    float: left;
    margin: 0 auto;
    position: relative;
  }
  #footermenuNav a.selected {
    color: #009c42;
  }
  #footermenuNav li a {
    margin-top: 0;
    display: block;
    color: #ababab;
    line-height: .1rem;
    font-size: 1.1rem;
    vertical-align: bottom;
    text-align: center;
    text-decoration: none;
  }
  #footermenuNav .ico {
    width: 100%;
    height: 3.3rem;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 28%;
    margin-bottom: .2rem;
  }
  .homeico {
    background-image url("./homeico1.png")
  }
  .allico {
    background-image url("./all.png")
  }
  .strollico{
    background-image url("./stroll.png")
  }
  .cartico{
    background-image url("./cart.png")
  }
  .usercenterico{
    background-image url("./usercenter.png")
  }



</style>
