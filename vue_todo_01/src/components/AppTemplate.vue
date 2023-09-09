<template>
  <div id="appTemplate">
    <TodoAdd
        @add-todo="addTodo"
    ></TodoAdd>
    <div
        v-for="todo in todoList" :key="todo.id">
      <TodoElement
          :id="todo.id"
          :title="todo.title"
          :completed="todo.completed"
          @edit-todo="editTodo(todo.id, $event)"
          @delete-todo="deleteTodo(todo.id)"
          @change-completed="changeTodoComplete(todo.id)"
      ></TodoElement>
    </div>
  </div>
</template>

<script>
import TodoAdd from './TodoAdd.vue';
import TodoElement from './TodoElement.vue';
import uniqueId from 'lodash.uniqueid';

export default {
  name: 'AppTemplate',
  data: function () {
    return {
      todoList: [{
        id: uniqueId('todo-'),
        title: 'sample todo 1',
        completed: false,
      },
        {
          id: uniqueId('todo-'),
          title: 'sample todo 2',
          completed: true,
        }
      ]
    }
  },
  components: {
    TodoAdd,
    TodoElement,
  },
  methods: {
    addTodo: function (title) {
      this.todoList.push({
        id: uniqueId('todo-'),
        title: title,
        completed: false,
      })
    },
    editTodo: function (todoId, newTitle) {
      const findTodo = this.todoList.find((todo) => todo.id === todoId);
      findTodo.title = newTitle;
    },
    changeTodoComplete: function (todoId) {
      const findTodo = this.todoList.find((todo) => todo.id === todoId);
      findTodo.completed = !findTodo.completed;
    },
    deleteTodo: function (todoId) {
      const findIndex = this.todoList.findIndex((todo) => todo.id === todoId);
      this.todoList.splice(findIndex, 1);
    }
  }
};
</script>

<style>
#appTemplate {
  width: 90%;
  border: 1px black solid;
  margin: 100px auto;
}
</style>
