// Import express-async-handler from express-async-handler
const asyncHandler = require('express-async-handler');
// Import models

const GithubMogradyPersonalModel = require('../models/pages/contact-socials/ContactSocialsGithubMogradyPersonalModel');
const GithubMogradyProfessionalModel = require('../models/pages/contact-socials/ContactSocialsGithubMogradyProfessionalModel');
const ContactSocialsInstagramModel = require('../models/pages/contact-socials/ContactSocialsInstagramModel');
const ContactSocialsLinkedinModel = require('../models/pages/contact-socials/ContactSocialsLinkedinModel');
const ContactSocialsSpotifyModel = require('../models/pages/contact-socials/ContactSocialsSpotifyModel');
const ContactSocialsTwitterMogradyPersModel = require('../models/pages/contact-socials/ContactSocialsTwitterMogradyPersModel');
const ContactSocialsTwitterMogradyProfModel = require('../models/pages/contact-socials/ContactSocialsTwitterMogradyProfModel');

// @desc Controller for Contact Socials Github Mogrady Personal page
// @route POST /contact-socials/github-mogrady-personal
// @access Public
const contactSocialsGithubMogradyPersonalController = asyncHandler(
  async (req, res) => {
    try {
      // Find or create a document for the home page visits
      let contactSocialsGithubMogradyPersonal =
        await GithubMogradyPersonalModel.findOne();
      if (!contactSocialsGithubMogradyPersonal) {
        contactSocialsGithubMogradyPersonal = new GithubMogradyPersonalModel();
      }
      await contactSocialsGithubMogradyPersonal.incrementCount();
      res.status(200).json(contactSocialsGithubMogradyPersonal);
    } catch (error) {
      res.status(500).json({
        error: 'Failed to record contact socials Github Mogrady Personal visit',
      });
    }
  }
);

// @desc Controller for Contact Socials Github Mogrady Professional page
// @route POST /contact-socials/github-mogrady-professional
// @access Public
const contactSocialsGithubMogradyProfessionalController = asyncHandler(
  async (req, res) => {
    try {
      // Find or create a document for the home page visits
      let contactSocialsGithubMogradyProfessional =
        await GithubMogradyProfessionalModel.findOne();
      if (!contactSocialsGithubMogradyProfessional) {
        contactSocialsGithubMogradyProfessional =
          new GithubMogradyProfessionalModel();
      }
      await contactSocialsGithubMogradyProfessional.incrementCount();
      res.status(200).json(contactSocialsGithubMogradyProfessional);
    } catch (error) {
      res.status(500).json({
        error:
          'Failed to record contact socials Github Mogrady Professional visit',
      });
    }
  }
);

// @desc Controller for Contact Socials Instagram page
// @route POST /contact-socials/instagram
// @access Public
const contactSocialsInstagramController = asyncHandler(async (req, res) => {
  try {
    // Find or create a document for the home page visits
    let contactSocialsInstagram = await ContactSocialsInstagramModel.findOne();
    if (!contactSocialsInstagram) {
      contactSocialsInstagram = new ContactSocialsInstagramModel();
    }
    await contactSocialsInstagram.incrementCount();
    res.status(200).json(contactSocialsInstagram);
  } catch (error) {
    res.status(500).json({
      error: 'Failed to record contact socials Instagram visit',
    });
  }
});

// @desc Controller for Contact Socials Linkedin page
// @route POST /contact-socials/linkedin
// @access Public
const contactSocialsLinkedinController = asyncHandler(async (req, res) => {
  try {
    // Find or create a document for the home page visits
    let contactSocialsLinkedin = await ContactSocialsLinkedinModel.findOne();
    if (!contactSocialsLinkedin) {
      contactSocialsLinkedin = new ContactSocialsLinkedinModel();
    }
    await contactSocialsLinkedin.incrementCount();
    res.status(200).json(contactSocialsLinkedin);
  } catch (error) {
    res.status(500).json({
      error: 'Failed to record contact socials Linkedin visit',
    });
  }
});

// @desc Controller for Contact Socials Spotify page
// @route POST /contact-socials/spotify
// @access Public
const contactSocialsSpotifyController = asyncHandler(async (req, res) => {
  try {
    // Find or create a document for the home page visits
    let contactSocialsSpotify = await ContactSocialsSpotifyModel.findOne();
    if (!contactSocialsSpotify) {
      contactSocialsSpotify = new ContactSocialsSpotifyModel();
    }
    await contactSocialsSpotify.incrementCount();
    res.status(200).json(contactSocialsSpotify);
  } catch (error) {
    res.status(500).json({
      error: 'Failed to record contact socials Spotify visit',
    });
  }
});

// @desc Controller for Contact Socials Twitter Mogrady Personal page
// @route POST /contact-socials/twitter-mogrady-personal
// @access Public
const contactSocialsTwitterMogradyPersonalController = asyncHandler(
  async (req, res) => {
    try {
      // Find or create a document for the home page visits
      let contactSocialsTwitterMogradyPersonal =
        await ContactSocialsTwitterMogradyPersModel.findOne();
      if (!contactSocialsTwitterMogradyPersonal) {
        contactSocialsTwitterMogradyPersonal =
          new ContactSocialsTwitterMogradyPersModel();
      }
      await contactSocialsTwitterMogradyPersonal.incrementCount();
      res.status(200).json(contactSocialsTwitterMogradyPersonal);
    } catch (error) {
      res.status(500).json({
        error:
          'Failed to record contact socials Twitter Mogrady Personal visit',
      });
    }
  }
);

// @desc Controller for Contact Socials Twitter Mogrady Professional page
// @route POST /contact-socials/twitter-mogrady-professional
// @access Public
const contactSocialsTwitterMogradyProfessionalController = asyncHandler(
  async (req, res) => {
    try {
      // Find or create a document for the home page visits
      let contactSocialsTwitterMogradyProfessional =
        await ContactSocialsTwitterMogradyProfModel.findOne();
      if (!contactSocialsTwitterMogradyProfessional) {
        contactSocialsTwitterMogradyProfessional =
          new ContactSocialsTwitterMogradyProfModel();
      }
      await contactSocialsTwitterMogradyProfessional.incrementCount();
      res.status(200).json(contactSocialsTwitterMogradyProfessional);
    } catch (error) {
      res.status(500).json({
        error:
          'Failed to record contact socials Twitter Mogrady Professional visit',
      });
    }
  }
);

// Export the routes
module.exports = {
  contactSocialsGithubMogradyPersonalController,
  contactSocialsGithubMogradyProfessionalController,
  contactSocialsInstagramController,
  contactSocialsLinkedinController,
  contactSocialsSpotifyController,
  contactSocialsTwitterMogradyPersonalController,
  contactSocialsTwitterMogradyProfessionalController,
};
