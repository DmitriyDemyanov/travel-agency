export default {
  FOOTER_LINKS(state,payload) {
    state.footerLinks = payload
  },
  SET_ERROR_MESSAGE(state,payload) {
    state.errorMessage = payload;
  },
  LANDING_NAVIGATION(state,payload) {
    state.landingNavigation = payload;
  },
  PLACES_ITEM(state,payload) {
    state.places = payload;
  },
  REVIEWS_ITEM(state,payload) {
    state.reviewsItems = payload;
  },
  SAVE_SEND_FORM_TEST(state,payload) {
    state.sendFormTest = payload;
    console.log('mutations',state.sendFormTest)
  },
  SAVE_ERROR_MESSAGE(state,payload) {
    state.errorMessage = payload;
  },
}