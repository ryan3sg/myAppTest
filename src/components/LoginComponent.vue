<template>
  <div>
    <HomeComponent />
    <MainComponent />
  </div>
</template>

<script>
import MainComponent from '@/components/MainComponent'
import HomeComponent from '@/components/HomeComponent'

export default {
  name: 'LoginComponent',
  components: {
    MainComponent,
    HomeComponent
  },
  data () {
    return {
      authenticated: false
    }
  }
}
</script>

<style scoped>
  @import url(../compass/loginComponent.scss);
</style>
