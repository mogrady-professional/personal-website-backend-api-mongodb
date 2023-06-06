const mongoose = require('mongoose');

const businessIntelligenceDataAnalyticsSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

businessIntelligenceDataAnalyticsSchema.methods.incrementCount =
  async function () {
    this.count++;
    await this.save();
  };

const BusinessIntelligenceDataAnalyticsModel = mongoose.model(
  '*BusinessIntelligenceDataAnalytics-Visit*',
  businessIntelligenceDataAnalyticsSchema
);

module.exports = BusinessIntelligenceDataAnalyticsModel;
