const mongoose = require('mongoose');

const businessAnalysisStrategicManagementSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

businessAnalysisStrategicManagementSchema.methods.incrementCount =
  async function () {
    this.count++;
    await this.save();
  };

const BusinessAnalysisStrategicManagementVisitModel = mongoose.model(
  '*BusinessAnalysisStrategicManagement-Visit*',
  businessAnalysisStrategicManagementSchema
);

module.exports = BusinessAnalysisStrategicManagementVisitModel;
