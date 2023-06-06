// Import express-async-handler
const asyncHandler = require('express-async-handler');
// Import models
const businessAnalysisStrategicManagementModel = require('../models/pages/services/businessAnalysisStrategicManagementModel');
const businessIntelligenceDataAnalyticsModel = require('../models/pages/services/businessIntelligenceDataAnalyticsmodel');
const cloudSolutionsDevelopmentModel = require('../models/pages/services/cloudSolutionsDevelopmentModel');
const desktopMobileSoftwareDevelopmentModel = require('../models/pages/services/desktopMobileSoftwareDevelopmentModel');
const webApplicationDevelopmentModel = require('../models/pages/services/webApplicationDevelopmentModel');
const webDesignGraphicsDigitalMarketingModel = require('../models/pages/services/webDesignGraphicsDigitalMarketingModel');

// @desc Controller for Business Analysis and Strategic Management page
// @route POST /services/business-analysis-strategic-management
// @access Public
const businessAnalysisStrategicManagementController = asyncHandler(
  async (req, res) => {
    try {
      // Find or create a document for the page visits
      let businessAnalysisStrategicManagement =
        await businessAnalysisStrategicManagementModel.findOne();
      if (!businessAnalysisStrategicManagement) {
        businessAnalysisStrategicManagement =
          new businessAnalysisStrategicManagementModel();
      }
      await businessAnalysisStrategicManagement.incrementCount();
      res.status(200).json(businessAnalysisStrategicManagement);
    } catch (error) {
      res.status(500).json({
        error:
          'Failed to record business analysis and strategic management visit',
      });
    }
  }
);

// @desc Controller for Business Intelligence and Data Analytics page
// @route POST /services/business-intelligence-data-analytics
// @access Public
const businessIntelligenceDataAnalyticsController = asyncHandler(
  async (req, res) => {
    try {
      // Find or create a document for the page visits
      let businessIntelligenceDataAnalytics =
        await businessIntelligenceDataAnalyticsModel.findOne();
      if (!businessIntelligenceDataAnalytics) {
        businessIntelligenceDataAnalytics =
          new businessIntelligenceDataAnalyticsModel();
      }
      await businessIntelligenceDataAnalytics.incrementCount();
      res.status(200).json(businessIntelligenceDataAnalytics);
    } catch (error) {
      res.status(500).json({
        error:
          'Failed to record business intelligence and data analytics visit',
      });
    }
  }
);

// @desc Controller for Cloud Solutions Development page
// @route POST /services/cloud-solutions-development
// @access Public
const cloudSolutionsDevelopmentController = asyncHandler(async (req, res) => {
  try {
    // Find or create a document for the page visits
    let cloudSolutionsDevelopment =
      await cloudSolutionsDevelopmentModel.findOne();
    if (!cloudSolutionsDevelopment) {
      cloudSolutionsDevelopment = new cloudSolutionsDevelopmentModel();
    }
    await cloudSolutionsDevelopment.incrementCount();
    res.status(200).json(cloudSolutionsDevelopment);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to record cloud solutions development visit' });
  }
});

// @desc Controller for Desktop and Mobile Software Development page
// @route POST /services/desktop-mobile-software-development
// @access Public
const desktopMobileSoftwareDevelopmentController = asyncHandler(
  async (req, res) => {
    try {
      // Find or create a document for the page visits
      let desktopMobileSoftwareDevelopment =
        await desktopMobileSoftwareDevelopmentModel.findOne();
      if (!desktopMobileSoftwareDevelopment) {
        desktopMobileSoftwareDevelopment =
          new desktopMobileSoftwareDevelopmentModel();
      }
      await desktopMobileSoftwareDevelopment.incrementCount();
      res.status(200).json(desktopMobileSoftwareDevelopment);
    } catch (error) {
      res.status(500).json({
        error: 'Failed to record desktop and mobile software development visit',
      });
    }
  }
);

// @desc Controller for Web Application Development page
// @route POST /services/web-application-development
// @access Public
const webApplicationDevelopmentController = asyncHandler(async (req, res) => {
  try {
    // Find or create a document for the page visits
    let webApplicationDevelopment =
      await webApplicationDevelopmentModel.findOne();
    if (!webApplicationDevelopment) {
      webApplicationDevelopment = new webApplicationDevelopmentModel();
    }
    await webApplicationDevelopment.incrementCount();
    res.status(200).json(webApplicationDevelopment);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to record web application development visit' });
  }
});

// @desc Controller for Web Design Graphics Digital Marketing page
// @route POST /services/web-design-graphics-digital-marketing
// @access Public
const webDesignGraphicsDigitalMarketingController = asyncHandler(
  async (req, res) => {
    try {
      // Find or create a document for the page visits
      let webDesignGraphicsDigitalMarketing =
        await webDesignGraphicsDigitalMarketingModel.findOne();
      if (!webDesignGraphicsDigitalMarketing) {
        webDesignGraphicsDigitalMarketing =
          new webDesignGraphicsDigitalMarketingModel();
      }
      await webDesignGraphicsDigitalMarketing.incrementCount();
      res.status(200).json(webDesignGraphicsDigitalMarketing);
    } catch (error) {
      res.status(500).json({
        error: 'Failed to record web design graphics digital marketing visit',
      });
    }
  }
);

// Export the routes
module.exports = {
  businessAnalysisStrategicManagementController,
  businessIntelligenceDataAnalyticsController,
  cloudSolutionsDevelopmentController,
  desktopMobileSoftwareDevelopmentController,
  webApplicationDevelopmentController,
  webDesignGraphicsDigitalMarketingController,
};
