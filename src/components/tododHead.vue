<template>
  <header class="header">
    <h1>todos</h1>
    <input
      class="new-todo"
      placeholder="What needs to be done?"
      autofocus
      @keyup.enter="addEdit"
      v-model="todoName"
    />
  </header>
</template>

<script>
export default {
  data () {
    return {
      todoName: ''
    }
  },
  methods: {
    addEdit () {
      this.$store.commit('addEdit', {
        todoName: this.todoName
      })
      this.todoName = ''
    }
  },
}
</script>

<style>
</style>
