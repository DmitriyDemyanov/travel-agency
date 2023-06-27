const path = require('../utils/path');
const loadFile = require('../utils/loadFile');

module.exports = class ContentModel {
  constructor() {
    this.footerLinks = [];
    this.landing = {
      navigations: [],
      places: []
    };
    this.reviews = [];
  }

  async getFooterLinks() {
    if (!this.footerLinks.length) {
      this.footerLinks = await loadFile(path.getPathName('data', 'footerLinks.json'));
    }
    return this.footerLinks;
  }

  async getLandingNavigations() {
    if (!this.landing.navigations.length) {
      this.landing.navigations = await loadFile(path.getPathName('data', 'landing', 'navigations.json'));
    }
    return this.landing.navigations;
  }

  async getLandingPlaces() {
    if (!this.landing.places.length) {
      this.landing.places = await loadFile(path.getPathName('data', 'landing', 'places.json'));
    }
    return this.landing.places;
  }

  async getReviews() {
    if (!this.reviews.length) {
      this.reviews = await loadFile(path.getPathName('data', 'reviews.json'));
    }
    return this.reviews;
  }
}
