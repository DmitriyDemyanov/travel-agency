export default {
  FOOTER_LINKS(state,payload) {
    state.footerLinks = payload
  },
  SET_ERROR_MESSAGE(state,payload) {
    state.errorMessage = payload;
  }
}