<template>
  <header class="header">
    <!-- <div> header </div>   -->
    <SiderBar />  
  </header>
</template>

<script>

  import SiderBar from './sidebar.vue';
  
  export default {
    name: 'header',
    components: {
      SiderBar,
    },
    data () {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    height: 100px;
  }
</style>

