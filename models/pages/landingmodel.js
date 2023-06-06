const mongoose = require('mongoose');

const landingSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

landingSchema.methods.incrementCount = async function () {
  this.count++;
  await this.save();
};

const LandingModel = mongoose.model('Landing-Visit', landingSchema);

module.exports = LandingModel;
