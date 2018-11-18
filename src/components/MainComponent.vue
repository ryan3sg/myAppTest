<template>
  <div id="container">
    <h1>{{msg}}</h1>
    <p>
      Width: {{ window.width }} <br />
      Height: {{ window.height }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'MainComponent',
  data () {
    return {
      msg: 'Whats your plan for today?',
      window: {
        width: '',
        height: ''
      }
    }
  },
  created () {
    this.window = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize: function () {
      this.window = {
        width: document.body.offsetWidth,
        height: document.body.offsetHeight
      }
      if (this.window.width > this.window.height) {
        this.$store.commit('setOrientation', 'portrait')
      } else {
        this.$store.commit('setOrientation', 'landscape')
      }
    }
  }
}
</script>

<style scoped>
  @import url(../compass/mainComponent.scss);
</style>
