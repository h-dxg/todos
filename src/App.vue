<template>

  <section class="todoapp">
    <!-- 头部 -->
    <tododHead></tododHead>

    <!-- 列表部分 -->
    <todoList></todoList>

    <!-- 底部 -->
    <todoFooter></todoFooter>

  </section>
</template>

<script>
import tododHead from './components/tododHead.vue'
import todoList from './components/todoList.vue'
import todoFooter from './components/todoFooter.vue'


export default {
  name: 'app',
  components: {
    tododHead, todoList, todoFooter
  }
}
</script>

<style>
</style>
