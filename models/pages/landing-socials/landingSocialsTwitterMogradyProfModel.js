const mongoose = require('mongoose');

const landingSocialsTwitterMogradyProfModelSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

landingSocialsTwitterMogradyProfModelSchema.methods.incrementCount =
  async function () {
    this.count++;
    await this.save();
  };

const LandingSocialsTwitterMogradyProfModel = mongoose.model(
  '#LandingSocialsTwitterMogradyProf-Visit#',
  landingSocialsTwitterMogradyProfModelSchema
);

module.exports = LandingSocialsTwitterMogradyProfModel;
