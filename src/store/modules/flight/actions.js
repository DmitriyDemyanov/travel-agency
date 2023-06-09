export default {
  saveEmail({ commit },payload) {
    commit('SAVE_EMAIL',payload);
    console.log('WATCH:',payload)
  }
}