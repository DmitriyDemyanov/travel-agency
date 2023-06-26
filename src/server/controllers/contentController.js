const ContentModel = require('../models/contentModel');

const model = new ContentModel();

exports.getFooterLinks = async (req, res) => {
  const links = await model.getFooterLinks();
  res.status(200).json(links);
}

exports.getLandingNavigations = async (req, res) => {
  const list = await model.getLandingNavigations();
  res.status(200).json(list);
}

exports.getLandingPlaces = async (req, res) => {
  const list = await model.getLandingPlaces();
  res.status(200).json(list);
}

exports.getReviews = async (req, res) => {
  const reviews = await model.getReviews();
  res.status(200).json(reviews);
}
