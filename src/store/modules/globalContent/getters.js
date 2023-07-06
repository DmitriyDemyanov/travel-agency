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
  //_______________________________page-flight country-cards
  getCountryCards(state) {
    return state.countryCards;
  },
  getTourismPhoto(state) {
    return state.tourismPhoto;
  }
}
