<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <ele-footer></ele-footer>
  </div>


</template>


<script>
  import footer from './components/footer/footer.vue'
  export default {
    data(){
      return {

      }
    },
    components: {
      'ele-footer': footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
