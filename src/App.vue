<template>
  <v-app light :class="setOrientation">
    <router-view/>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  computed: {
    setOrientation () {
      return this.$store.getters.getOrientation
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  width: 100%;
  height: 100vh;
}
</style>
