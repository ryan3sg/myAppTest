<template>
  <div id="container" v-on:load="windowSize()">
    <h1>{{msg}}</h1>
    <p>Sample</p>
    <p>{{windowWidth}}</p>
    <p>{{windowHeight}}</p>
  </div>
</template>

<script>
export default {
  name: 'MainComponent',
  data () {
    return {
      msg: 'Whats your plan for today?',
      windowWidth: 0,
      windowHeight: 0
    }
  },
  method: {
    windowSize: function () {
      console.log('window resize')
    }
  },
  created: function () {
  }
}
</script>

<style scoped>
  h1 {
    font-weight: normal;
  }
</style>
