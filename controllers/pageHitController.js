// Import express-async-handler from express-async-handler
const asyncHandler = require('express-async-handler');
// Import models
const HomeModel = require('../models/pages/homeModel');
const AboutModel = require('../models/pages/AboutModel');
const SkillsModel = require('../models/pages/SkillsModel');
const EducationModel = require('../models/pages/EducationModel');
const ServicesModel = require('../models/pages/ServicesModel');
const PortfolioModel = require('../models/pages/PortfolioModel');
const ContactModel = require('../models/pages/ContactModel');
const StartQuoteModel = require('../models/pages/StartQuoteModel');
const LandingModel = require('../models/pages/LandingModel');

// @desc    Controller for Home page
// @route   POST /home
// @access  Public
const recordHomeVisit = asyncHandler(async (req, res) => {
  try {
    // Find or create a document for the home page visits
    const homeVisit = await HomeModel.findOne();
    if (!homeVisit) {
      homeVisit = new HomeModel();
    }
    await homeVisit.incrementCount();
    res.status(200).json(homeVisit);
  } catch (error) {
    res.status(500).json({ error: 'Failed to record home visit' });
  }
});

// @desc    Controller for Landing page
// @route   POST /landing
// @access  Public
const landingPageController = async (req, res) => {
  try {
    let visitor = await LandingModel.findOne();
    if (!visitor) {
      visitor = new LandingModel();
    }
    await visitor.incrementCount();
    res.status(200).json({ count: visitor.count });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process request' });
  }
};

// @desc    Controller for About page
// @route   POST /about
// @access  Public
const aboutPageController = async (req, res) => {
  try {
    let visitor = await AboutModel.findOne();
    if (!visitor) {
      visitor = new AboutModel();
    }
    await visitor.incrementCount();
    res.status(200).json({ count: visitor.count });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process request' });
  }
};

// @desc    Controller for Skills page
// @route   POST /skills
// @access  Public
const skillsPageController = async (req, res) => {
  try {
    let visitor = await SkillsModel.findOne();
    if (!visitor) {
      visitor = new SkillsModel();
    }
    await visitor.incrementCount();
    res.status(200).json({ count: visitor.count });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process request' });
  }
};

// @desc    Controller for Education page
// @route   POST /education
// @access  Public
const educationPageController = async (req, res) => {
  try {
    let visitor = await EducationModel.findOne();
    if (!visitor) {
      visitor = new EducationModel();
    }
    await visitor.incrementCount();
    res.status(200).json({ count: visitor.count });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process request' });
  }
};

// @desc    Controller for Services page
// @route   POST /services
// @access  Public
const servicesPageController = async (req, res) => {
  try {
    let visitor = await ServicesModel.findOne();
    if (!visitor) {
      visitor = new ServicesModel();
    }
    await visitor.incrementCount();
    res.status(200).json({ count: visitor.count });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process request' });
  }
};

// @desc    Controller for Portfolio page
// @route   POST /portfolio
// @access  Public
const portfolioPageController = async (req, res) => {
  try {
    let visitor = await PortfolioModel.findOne();
    if (!visitor) {
      visitor = new PortfolioModel();
    }
    await visitor.incrementCount();
    res.status(200).json({ count: visitor.count });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process request' });
  }
};

// @desc    Controller for Contact page
// @route   POST /contact
// @access  Public
const contactPageController = async (req, res) => {
  try {
    let visitor = await ContactModel.findOne();
    if (!visitor) {
      visitor = new ContactModel();
    }
    await visitor.incrementCount();
    res.status(200).json({ count: visitor.count });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process request' });
  }
};

// @desc    Controller for Start Quote page
// @route   POST /start-quote
// @access  Public
const startQuotePageController = async (req, res) => {
  try {
    let visitor = await StartQuoteModel.findOne();
    if (!visitor) {
      visitor = new StartQuoteModel();
    }
    await visitor.incrementCount();
    res.status(200).json({ count: visitor.count });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process request' });
  }
};

module.exports = {
  landingPageController,
  recordHomeVisit,
  aboutPageController,
  skillsPageController,
  educationPageController,
  servicesPageController,
  portfolioPageController,
  contactPageController,
  startQuotePageController,
};
