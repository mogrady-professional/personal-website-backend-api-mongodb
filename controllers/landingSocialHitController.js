// Import express-async-handler from express-async-handler
const asyncHandler = require('express-async-handler');
// Import models

const LandingSocialsInstagramModel = require('../models/pages/landing-socials/landingSocialsInstagramModel');
const LandingSocialsLinkedinModel = require('../models/pages/landing-socials/landingSocialsLinkedinModel');
const LandingSocialsSpotifyModel = require('../models/pages/landing-socials/landingSocialsSpotifyModel');
const LandingSocialsTwitterMogradyPersModel = require('../models/pages/landing-socials/landingSocialsTwitterMogradyPersModel');
const LandingSocialsTwitterMogradyProfModel = require('../models/pages/landing-socials/landingSocialsTwitterMogradyProfModel');

// @desc Controller for Landing Socials Instagram page
// @route POST /landing-socials/instagram
// @access Public
const landingSocialsInstagramController = asyncHandler(async (req, res) => {
  try {
    // Find or create a document for the home page visits
    let landingSocialsInstagram = await LandingSocialsInstagramModel.findOne();
    if (!landingSocialsInstagram) {
      landingSocialsInstagram = new LandingSocialsInstagramModel();
    }
    await landingSocialsInstagram.incrementCount();
    res.status(200).json(landingSocialsInstagram);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to record landing socials Instagram visit' });
  }
});

// @desc Controller for Landing Socials Linkedin page
// @route POST /landing-socials/linkedin
// @access Public
const landingSocialsLinkedinController = asyncHandler(async (req, res) => {
  try {
    // Find or create a document for the home page visits
    let landingSocialsLinkedin = await LandingSocialsLinkedinModel.findOne();
    if (!landingSocialsLinkedin) {
      landingSocialsLinkedin = new LandingSocialsLinkedinModel();
    }
    await landingSocialsLinkedin.incrementCount();
    res.status(200).json(landingSocialsLinkedin);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to record landing socials Linkedin visit' });
  }
});

// @desc Controller for Landing Socials Spotify page
// @route POST /landing-socials/spotify
// @access Public
const landingSocialsSpotifyController = asyncHandler(async (req, res) => {
  try {
    // Find or create a document for the home page visits
    let landingSocialsSpotify = await LandingSocialsSpotifyModel.findOne();
    if (!landingSocialsSpotify) {
      landingSocialsSpotify = new LandingSocialsSpotifyModel();
    }
    await landingSocialsSpotify.incrementCount();
    res.status(200).json(landingSocialsSpotify);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to record landing socials Spotify visit' });
  }
});

// @desc Controller for Landing Socials Twitter Mogrady Pers page
// @route POST /landing-socials/twitter-mogrady-pers
// @access Public
const landingSocialsTwitterMogradyPersController = asyncHandler(
  async (req, res) => {
    try {
      // Find or create a document for the home page visits
      let landingSocialsTwitterMogradyPers =
        await LandingSocialsTwitterMogradyPersModel.findOne();
      if (!landingSocialsTwitterMogradyPers) {
        landingSocialsTwitterMogradyPers =
          new LandingSocialsTwitterMogradyPersModel();
      }
      await landingSocialsTwitterMogradyPers.incrementCount();
      res.status(200).json(landingSocialsTwitterMogradyPers);
    } catch (error) {
      res
        .status(500)
        .json({
          error: 'Failed to record landing socials Twitter Mogrady Pers visit',
        });
    }
  }
);

// @desc Controller for Landing Socials Twitter Mogrady Prof page
// @route POST /landing-socials/twitter-mogrady-prof
// @access Public
const landingSocialsTwitterMogradyProfController = asyncHandler(
  async (req, res) => {
    try {
      // Find or create a document for the home page visits
      let landingSocialsTwitterMogradyProf =
        await LandingSocialsTwitterMogradyProfModel.findOne();
      if (!landingSocialsTwitterMogradyProf) {
        landingSocialsTwitterMogradyProf =
          new LandingSocialsTwitterMogradyProfModel();
      }
      await landingSocialsTwitterMogradyProf.incrementCount();
      res.status(200).json(landingSocialsTwitterMogradyProf);
    } catch (error) {
      res
        .status(500)
        .json({
          error: 'Failed to record landing socials Twitter Mogrady Prof visit',
        });
    }
  }
);

// Export the routes
module.exports = {
  landingSocialsInstagramController,
  landingSocialsLinkedinController,
  landingSocialsSpotifyController,
  landingSocialsTwitterMogradyPersController,
  landingSocialsTwitterMogradyProfController,
};
