export default {
  async fetchFooterLinks({ commit,}) {
    try {
      const response = await fetch('http://localhost:3579/content/footer2/links');
      const footerLinks = await response.json();
      commit('FOOTER_LINKS',footerLinks);
      console.log('links!!!=',footerLinks)
    } catch (err) {
      console.log('ERROR!!!',err.message )
      commit('SET_ERROR_MESSAGE','links not found');
    }
  }



}  