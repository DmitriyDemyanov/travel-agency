

export default {
  async fetchFooterLinks({ commit,}) {
    try {
      const response = await fetch('http://localhost:3579/content/footer/links');
      const footerLinks = await response.json();
      commit('FOOTER_LINKS',footerLinks);
    } catch (err) {
      commit('SET_ERROR_MESSAGE','links not found');
    }
  },

  async fetchLandingNavigation({ commit }) {
    const response = await fetch('http://localhost:3579/content/landing/navigations');
    const landingNavigation = await response.json()
    commit('LANDING_NAVIGATION',landingNavigation)
  },

  async fetchPlaces({ commit }) {
    const response = await fetch('http://localhost:3579/content/landing/places');
    const places = await response.json();
    commit('PLACES_ITEM',places);
  },
  async fetchReviews({ commit }) {
    const response = await fetch('http://localhost:3579/content/reviews');
    const reviews = await response.json();
    commit('REVIEWS_ITEM',reviews);
    console.log('review',reviews)
  }



}  