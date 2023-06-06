const mongoose = require('mongoose');

const webApplicationDevelopmentSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

webApplicationDevelopmentSchema.methods.incrementCount = async function () {
  this.count++;
  await this.save();
};

const WebApplicationDevelopmentVisitModel = mongoose.model(
  '*WebApplicationDevelopment-Visit*',
  webApplicationDevelopmentSchema
);

module.exports = WebApplicationDevelopmentVisitModel;
