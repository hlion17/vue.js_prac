<template>
  <div id="apptemplate">
    <TodoAdd></TodoAdd>
  </div>
</template>

<script>
import TodoAdd from './TodoAdd.vue';

export default {
  name: 'AppTemplate',
  components: {
    TodoAdd,
  },
};
</script>

<style>
#apptemplate {
  width: 40%;
  border: 1px black solid;
  margin: 100px auto;
}
</style>
