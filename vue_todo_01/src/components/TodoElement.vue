<template>
  <div>
    <div class="container">
      <div class="item">
        <input
            type="checkbox"
            @change="$emit('change-completed')"
            :checked="isDone">
      </div>
      <div class="item">
        {{ this.title }}
      </div>
      <div
          class="item"
          @click="$emit('edit-todo', 'testEditValue')">editTest
      </div>
      <div class="item">
        <font-awesome-icon
            @click="$emit('delete-todo')"
            icon="fa-regular fa-trash-can"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {}
  },
  props: ['id', 'title', 'completed'],
  computed: {
    isDone() {
      return this.completed;
    }
  }
  // TODO: edit 기능 아직 미구현
};
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
}

.item {
  padding: 5px;
//margin: 5px;
}
</style>
