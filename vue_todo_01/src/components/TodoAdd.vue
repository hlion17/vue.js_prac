<template>
  <div id="addArea">
    <div class="container">
      <div>
        <input
            type="text"
            @keyup.enter="sendTodo"
            v-model="title"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoAdd',
  data: function () {
    return {
      title: ''
    }
  },
  methods: {
    sendTodo: function () {
      if (this.title === '') {
        alert('TODO 내용을 입력해주세요');
        return;
      }

      this.$emit('add-todo', this.title)
      this.title = ''
    },

  },
};
</script>

<style>
#addArea {
  margin: 10px;
  border: 1px black solid;
}

.container {
  display: flex;
  flex-direction: row;
}
</style>
