const express = require('express'); // Express web server framework
const router = express.Router(); // Create a new Express router
// Bring in the routes
const { logVisitorData, createHit } = require('../controllers/hitController');
const {
  landingPageController,
  recordHomeVisit,
  aboutPageController,
  skillsPageController,
  educationPageController,
  servicesPageController,
  portfolioPageController,
  contactPageController,
  startQuotePageController,
} = require('../controllers/pageHitController'); // Bring in the page routes
const {
  businessAnalysisStrategicManagementController,
  businessIntelligenceDataAnalyticsController,
  cloudSolutionsDevelopmentController,
  desktopMobileSoftwareDevelopmentController,
  webApplicationDevelopmentController,
  webDesignGraphicsDigitalMarketingController,
} = require('../controllers/serviceHitController'); // Bring in the service routes
const {
  landingSocialsInstagramController,
  landingSocialsLinkedinController,
  landingSocialsSpotifyController,
  landingSocialsTwitterMogradyPersController,
  landingSocialsTwitterMogradyProfController,
} = require('../controllers/landingSocialHitController'); // Bring in the landing socials routes
const {
  contactSocialsGithubMogradyPersonalController,
  contactSocialsGithubMogradyProfessionalController,
  contactSocialsInstagramController,
  contactSocialsLinkedinController,
  contactSocialsSpotifyController,
  contactSocialsTwitterMogradyPersonalController,
  contactSocialsTwitterMogradyProfessionalController,
} = require('../controllers/contactSocialHitController'); // Bring in the contact socials routes

// Log visitor data
router.post('/', logVisitorData);

// log a website hit
router.post('/hit', createHit);

// Pages
router.post('/landing', landingPageController);
router.post('/home', recordHomeVisit);
router.post('/about', aboutPageController);
router.post('/skills', skillsPageController);
router.post('/education', educationPageController);
router.post('/services', servicesPageController);
router.post('/portfolio', portfolioPageController);
router.post('/contact', contactPageController);
router.post('/start-quote', startQuotePageController);
// Services
router.post(
  '/services/business-analysis-strategic-management',
  businessAnalysisStrategicManagementController
);
router.post(
  '/services/business-intelligence-data-analytics',
  businessIntelligenceDataAnalyticsController
);
router.post(
  '/services/cloud-solutions-development',
  cloudSolutionsDevelopmentController
);
router.post(
  '/services/desktop-mobile-software-development',
  desktopMobileSoftwareDevelopmentController
);
router.post(
  '/services/web-application-development',
  webApplicationDevelopmentController
);
router.post(
  '/services/web-design-graphics-digital-marketing',
  webDesignGraphicsDigitalMarketingController
);
// Landing Socials
router.post('/landing-socials/instagram', landingSocialsInstagramController);
router.post('/landing-socials/linkedin', landingSocialsLinkedinController);
router.post('/landing-socials/spotify', landingSocialsSpotifyController);
router.post(
  '/landing-socials/twitter-mogrady-personal',
  landingSocialsTwitterMogradyPersController
);
router.post(
  '/landing-socials/twitter-mogrady-professional',
  landingSocialsTwitterMogradyProfController
);
// Contact Socials
router.post(
  '/contact-socials/github-mogrady-personal',
  contactSocialsGithubMogradyPersonalController
);
router.post(
  '/contact-socials/github-mogrady-professional',
  contactSocialsGithubMogradyProfessionalController
);
router.post('/contact-socials/instagram', contactSocialsInstagramController);
router.post('/contact-socials/linkedin', contactSocialsLinkedinController);
router.post('/contact-socials/spotify', contactSocialsSpotifyController);
router.post(
  '/contact-socials/twitter-mogrady-personal',
  contactSocialsTwitterMogradyPersonalController
);
router.post(
  '/contact-socials/twitter-mogrady-professional',
  contactSocialsTwitterMogradyProfessionalController
);

// Export the router
module.exports = router;
