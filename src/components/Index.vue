<template>
  <div class="index">
    <HeadTop />
    <div class="main">
      <Questions />
    </div>
  </div>
</template>

<script>

import HeadTop from './common/header';
import Questions from './Questions';

export default {
  name: 'index',
  components: {
    HeadTop,
    Questions,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  
  .index {
    .main {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: auto;
    }
  }
  
</style>
