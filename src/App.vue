<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">

@import './scss/reset.scss';

html {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*, 
*::before, 
*::after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  width: 100%;
  min-height: 100vh;
  &.overflow_hidden {
    overflow: hidden;
  }
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ul li {
  list-style: none;
}

a {
  text-decoration: none;
}

input {
  border: none;
  outline: none;
}

input,
select {
  padding: 0;
  &:focus {
    outline: none;
  }
}

</style>
