<template>
  <div class="questions">
    <div class="questions__list" v-for="(q, i) in question_list" :key="i">
      <span class="name">{{ q.type }}</span>
      <ul>
        <li v-for="(g, j) in q.groups" :key="j">{{ g.name }}</li>
      </ul>
    </div>
  </div>  
</template>

<script>

  import QuestionList from '../config/questions';
  
  export default {
    name: 'questions',
    data () {
      return {
        question_list: QuestionList,
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss">
  .questions {
    margin: 0 auto;
    padding: 50px;
    width: 100%;
    &__list {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-width: 320px;
      ul {
        margin-bottom: 30px;
        width: 100%;
      }
      li {
        display: block;
        margin-bottom: 10px;
        padding: 16px;
        width: 100%;
        text-align: center;
        background-color: #fff;
        box-shadow: 0 1px 3px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.04);
        transition: box-shadow .3s ease-in-out;
        border-radius: 2px;
        outline: none;
      }
      .name {
        margin-bottom: 5px;
        width: 100%;
        text-align: left;
        font-style: italic;
        font-size: 13px;
        color: #333333;
      }
    }
  }
</style>

