const mongoose = require('mongoose');

const cloudSolutionsDevelopmentSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

cloudSolutionsDevelopmentSchema.methods.incrementCount = async function () {
  this.count++;
  await this.save();
};

const CloudSolutionsDevelopmentVisitModel = mongoose.model(
  '*CloudSolutionsDevelopment-Visit*',
  cloudSolutionsDevelopmentSchema
);

module.exports = CloudSolutionsDevelopmentVisitModel;
