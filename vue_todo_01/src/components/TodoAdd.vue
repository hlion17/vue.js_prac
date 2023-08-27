<template>
  <div id="addArea">
    <div>
      <!-- create todo element -->
      <input type="text" v-on:keyup.enter="sendTodo" v-model="todoContent" />
    </div>
    <div>
      <!-- tood list render -->
      <div v-for="(item, index) in todoContents" v-bind:key="item.id">
        <input type="checkbox" />
        <span>{{ item }}</span>
        <button v-on:click="deleteTodo(index)">x</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      todoContent: '',
      todoContents: [],
    };
  },
  methods: {
    sendTodo: function (e) {
      if (this.todoContent === '') {
        alert('TODO 내용을 입력해주세요');
        return;
      }
      this.todoContents.push(this.todoContent);
      console.log(this.todoContent);
      console.log(this.todoContents);
      console.log(e);
      this.todoContent = '';
    },
    deleteTodo: function (index) {
      console.log(index);
      this.todoContents.splice(index, 1);
    },
  },
};
</script>

<style>
#addArea {
  margin: 10px;
  border: 1px black solid;
}
</style>
