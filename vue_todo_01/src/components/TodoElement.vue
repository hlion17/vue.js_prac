<template>
  <div>
    <div class="container">
      <div>
        <input type="checkbox" v-model="completed">
      </div>
      <div>
        {{ this.todoTitle }}
      </div>
      <div>
        <font-awesome-icon
            @click="$emit('deleteTodo', this.index)"
            icon="fa-regular fa-trash-can"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      completed: this.todoCompleted
    }
  },
  props: ['index', 'todoTitle', 'todoId', 'todoCompleted'],
};
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
}
</style>
