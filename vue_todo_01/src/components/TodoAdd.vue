<template>
  <div id="addArea">
    <div class="container">
      <div>
        <!-- create todos element -->
        <input type="text" v-on:keyup.enter="sendTodo" v-model="todoContent"/>
      </div>
      <div>
        <button v-on:click="getMockTodo">MockData</button>
      </div>
    </div>

    <div>
      <div
          v-for="(item, index) in mockTodoList"
          v-bind:key="item.id">
        <TodoElement
            v-bind:index="index"
            v-bind:todoId="item.id"
            v-bind:todoTitle="item.title"
            v-bind:todoCompleted="item.completed"
            @deleteTodo="deleteTodo">
        </TodoElement>
      </div>

      <!-- render todos each item component -->
      <div v-for="(item, index) in todoContents" v-bind:key="index">
        <TodoElement
            v-bind:todoTitle="item.title"
            v-bind:index="index"
            @deleteTodo="deleteTodo">
        </TodoElement>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import TodoElement from './TodoElement.vue';

export default {
  // Components
  components: {
    TodoElement,
  },

  // Data
  data: function () {
    return {
      todoContent: null,
      todoContents: [],
      mockTodoList: null,
    };
  },

  // Methods
  methods: {

    getMockTodo: function () {
      axios.get('https://jsonplaceholder.typicode.com/todos')
          .then((response) => {
            // console.log(response.data);
            this.mockTodoList = response.data;
          })
          .catch((error) => console.error(error));
    },

    sendTodo: function (event) {
      if (this.todoContent === '') {
        alert('TODO 내용을 입력해주세요');
        return;
      }

      let todo = {
        id: Math.random(),
        completed: false,
        title: event.target.value,
      }

      // this.todoContents.push(this.todoContent);
      this.todoContents.push(todo);
      this.todoContent = '';
      console.log(this.todoContents);
    },

    deleteTodo: function (index) {
      // Todo: 왜 아래는 동작하고 위는 proxy 객체로 래핑되어 동작하지 않는가?
      // this.todoContents.splice(index, 1);
      this.mockTodoList.splice(index, 1);
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
