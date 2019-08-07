<template>
  <section class="main">
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
    />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      <li
        :class="{completed:item.done ,editing:item.id==editId}"
        v-for="item in $store.state.list"
        :key='item.id'
      >
        <div class="view">
          <input
            class="toggle"
            type="checkbox"
            :checked='item.done'
            @input="stateChange(item.id)"
          />
          <label @dblclick="showEdit(item.id)">{{item.name}}</label>
          <button
            class="destroy"
            @click='deleteTodo(item.id)'
          ></button>
        </div>
        <input
          class="edit"
          v-model='item.name'
          @keyup.enter='hideEdit'
        />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data () {
    return {
      editId: -1
    }
  },
  methods: {
    showEdit (id) {
      this.editId = id
    },
    hideEdit () {
      this.editId = -1
    },
    deleteTodo (id) {
      this.$store.commit('deleteTodo', {
        id
      })
    },
    stateChange (id) {
      this.$store.commit('stateChange', {
        id
      })
    }
  },
}
</script>

<style>
</style>
