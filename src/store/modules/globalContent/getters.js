export default {
  //__________________________________USED FOOTER
  getSocialMedia(state) {
    return state.socialMedia
  },
  getFooterLinks(state) {
    return state.footerLinks;
  },
  getLandingNavigations(state) {
    return state.landingNavigations;
  },
  getPlaces(state) {
    return state.places;
  },
  //_______________________________Reviews-Items
  getReviewsItems(state) {
    return state.reviewsItems
  },
  //______________________________________errorMessage
  getErrorMessage(state) {
    return state.errorMessage
  },
  //______________________________________landingNavigation
  getLandingNavigation(state) {
    return state.landingNavigation;
  },
  

}
