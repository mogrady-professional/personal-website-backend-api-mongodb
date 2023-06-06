const mongoose = require('mongoose');

const landingSocialsInstagramModelSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

landingSocialsInstagramModelSchema.methods.incrementCount = async function () {
  this.count++;
  await this.save();
};

const LandingSocialsInstagramModel = mongoose.model(
  '#LandingSocialsInstagram-Visit#',
  landingSocialsInstagramModelSchema
);

module.exports = LandingSocialsInstagramModel;
