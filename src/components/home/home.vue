<template>
  <div id="herader-wrapper">
    <div class="wrap-heard">
      <div class="header-Ico"></div>
      <a href="#/allproducts">
        <span class="head-typeimg"></span>
      </a>
    </div>
    <div  title="分类导航条" class="wrap-menuNavNewProduct">
      <div id="navPanelDiv" class="menuNavNewProductPanel">
        <ul id="navUL" class="menuNavNewProduct" >
          <li class="font-large selected"><a>首页</a></li> <!---->
          <li class="font-large"><a>新品</a></li> <!---->
          <li class="font-large"><a>家务</a></li> <!---->
          <li class="font-large"><a>下厨</a></li> <!---->
          <li class="font-large"><a>家居服</a></li> <!---->
          <li class="font-large"><a>生活</a></li> <!---->
          <li class="font-large"><a>软装</a></li> <!---->
          <li class="font-large"><a>床品</a></li> <!---->
          <li class="font-large"><a>工作和旅行</a></li> <!----><!---->
          <li class="font-large"><a>了解LifeVC</a></li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  header {
    padding: 0;
    width: 100%;
    background: #89be48;
    position: fixed;
    top: 0;
    z-index: 999;
    min-width: 320px;
    max-width: 640px;
    margin: auto;
  }

</style>
