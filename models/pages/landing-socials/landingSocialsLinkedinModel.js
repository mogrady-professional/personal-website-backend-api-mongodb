const mongoose = require('mongoose');

const landingSocialsLinkedinModelSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

landingSocialsLinkedinModelSchema.methods.incrementCount = async function () {
  this.count++;
  await this.save();
};

const LandingSocialsLinkedinModel = mongoose.model(
  '#LandingSocialsLinkedin-Visit#',
  landingSocialsLinkedinModelSchema
);

module.exports = LandingSocialsLinkedinModel;
