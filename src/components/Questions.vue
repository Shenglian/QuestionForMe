<template>
  <div class="questions">
    
    <h2> 問題列表： </h2>

    <ul class="questions__list">
        <li v-for="(q, i) in question_list" :key="i">
          <span class="name">{{ q.type }}</span>
          <ul>
            <li v-for="(g, j) in q.groups" :key="j">{{ g.name }}</li>
          </ul>
        </li>
    </ul>
  
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

<style lang="scss" scoped>
  .questions {
    &__list {
      .name {
        
        font-size: 13px;
      }
    }
  }
</style>

