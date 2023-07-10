const CONTENT_URL = "http://localhost:3579/content/";

export default {
  async fetchFooterLinks({ commit }) {
    try {
      const response = await fetch(`${CONTENT_URL}footer/links`);
      const footerLinks = await response.json();
      commit('FOOTER_LINKS',footerLinks);
    } catch (err) {
      commit('SET_ERROR_MESSAGE','links not found');
    }
  },

  async fetchLandingNavigation({ commit }) {
    const response = await fetch(`${CONTENT_URL}landing/navigations`);
    const landingNavigation = await response.json()
    commit('LANDING_NAVIGATION',landingNavigation)
  },

  async fetchPlaces({ commit }) {
    const response = await fetch(`${CONTENT_URL}landing/places`);
    const places = await response.json();
    commit('PLACES_ITEM',places);
  },

  async fetchReviews({ commit }) {
    const response = await fetch(`${CONTENT_URL}reviews`);
    const reviews = await response.json();
    commit('REVIEWS_ITEM',reviews);
  },
  saveSendFormTest({commit}, payload) {
    commit('SAVE_SEND_FORM_TEST', payload)
  },
  saveErrorMessage({ commit },payload) {
    commit('SAVE_ERROR_MESSAGE',payload);
  },
}
