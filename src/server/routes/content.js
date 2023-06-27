const express = require("express");
const {
    getFooterLinks,
    getLandingNavigations,
    getLandingPlaces,
    getReviews
} = require("../controllers/contentController");

const router = express.Router();

router.get("/reviews", getReviews);

router.get("/footer/links", getFooterLinks);

router.get("/landing/navigations", getLandingNavigations);
router.get("/landing/places", getLandingPlaces);

module.exports = router;
