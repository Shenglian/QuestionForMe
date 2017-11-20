<template>
  <div class="index">
    <HeadTop />
    <Slider />
    <div class="main">
      <Questions />
    </div>
  </div>
</template>

<script>

import HeadTop from './common/header';
import Questions from './Questions';
import Slider from './common/sliders';

export default {
  name: 'index',
  components: {
    HeadTop,
    Slider,
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
