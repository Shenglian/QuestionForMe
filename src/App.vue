<template>
  <div id="app">
    <div class="background_style">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
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

ul {
  margin: 0;
  padding: 0;
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

// Custom Setting 
body {
  font: 400 15px/20px Roboto,RobotoDraft, Helvetica, Arial, sans-serif;
  // background-color: #f7f7f7;
}

#app {
  position: relative;
}

.background_style {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: grid;
  grid: repeat(5, 200px) / repeat(10, 1fr);
  background: linear-gradient(#507eb1,#709dc7 10%,#dde9f5 38%,#eaf2f9 48%,#f6f9fc 62%);

  transform: skewY(-12deg);
  transform-origin: 0;

  z-index: -1;
  span {
    &:nth-child(1) {
      grid-column: span 3;
    }

    &:nth-child(2) {
      grid-area: 3 / span 3 / auto / -1;
    }

    &:nth-child(3) {
      grid-row: 4;
      grid-column: span 5;
    }

    &:nth-child(4) {}

    &:nth-child(5) {
      grid-area: auto/1/-1/-1;
      background: linear-gradient(100grad,#fff 80%,#f5fafd);
    }
  }
}

@media (min-width: 670px) {
  .background_style span {
    &:nth-child(1) {
      background: linear-gradient(100grad,rgba(243,251,255,.4),rgba(243,251,255,.15) 20%,rgba(243,251,255,0));
    }

    &:nth-child(2) {
      background: linear-gradient(100grad,rgba(0,119,204,0),rgba(0,119,204,.05) 40%,rgba(0,119,204,.35));
    }

    &:nth-child(3) {
      background: linear-gradient(100grad,#fff 50%,hsla(0,0%,100%,0));
    }

    &:nth-child(4) {
      background: linear-gradient(100grad,rgba(0,119,204,0) 10%,rgba(0,119,204,.05));
    }
  }
}


</style>
