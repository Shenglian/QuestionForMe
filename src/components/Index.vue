<template>
  <div class="index">
    <Questions />
  </div>
</template>

<script>

import Questions from './Questions'

export default {
  name: 'hello',
  components: {
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
  
</style>
