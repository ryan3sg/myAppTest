<template>
  <div>
    <p>Home Component</p>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  data () {
    return {
      authenticated: false
    }
  }
}
</script>

<style scoped>
  @import url(../compass/homeComponent.scss);
</style>
