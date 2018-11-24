<template>
  <div>
    <p>Main Component</p>
    <p>{{orientation}}</p>
  </div>
</template>

<script>

export default {
  name: 'MainComponent',
  components: {
  },
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
    orientation () {
      console.log(this.$store.getters)
      return this.$store.getters.getX('orientation')
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
