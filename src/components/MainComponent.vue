<template>
  <div id="container" :class="setOrientation">
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
  computed: {
    setOrientation () {
      return this.$store.getters.getOrientation
    }
  },
  created () {
    this.window = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    var x
    if (this.window.width > this.window.height) {
      x = 'landscape'
    } else {
      x = 'portrait'
    }
    this.$store.commit('setOrientation', x)
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize: function () {
      this.window = {
        width: document.body.offsetWidth,
        height: document.body.offsetHeight
      }
      var x
      if (this.window.width > this.window.height) {
        x = 'landscape'
      } else {
        x = 'portrait'
      }
      this.$store.commit('setOrientation', x)
    }
  }
}
</script>

<style scoped>
  @import url(../compass/mainComponent.scss);
</style>
