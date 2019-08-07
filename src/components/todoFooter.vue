<template>
  <footer
    class="footer"
    v-show='$store.getters.footershow'
  >
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"><strong>{{$store.getters.left}}</strong> item left</span>

    <!-- Hidden if no completed items are left ↓ -->
    <button class="clear-completed">Clear completed</button>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
</style>
