<template>
  <header>
    <h1>{{ propsdata }}</h1>
    <button v-on:click="renew">renew</button>
  </header>
</template>

<script>
export default {
  props: ['propsdata'],
  methods: {
    renew: function () {
      this.$emit('renewEvent');
    },
  },
};
</script>

<style></style>
