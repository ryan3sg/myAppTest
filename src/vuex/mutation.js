export default {
  mutations: {
    setOrientation (state, data) {
      state.orientation = data
      console.log('Orientation', data)
    }
  }
}
