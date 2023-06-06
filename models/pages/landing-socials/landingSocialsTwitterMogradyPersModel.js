const mongoose = require('mongoose');

const landingSocialsTwitterMogradyPersModelSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

landingSocialsTwitterMogradyPersModelSchema.methods.incrementCount =
  async function () {
    this.count++;
    await this.save();
  };

const LandingSocialsTwitterMogradyPersModel = mongoose.model(
  '#LandingSocialsTwitterMogradyPers-Visit#',
  landingSocialsTwitterMogradyPersModelSchema
);

module.exports = LandingSocialsTwitterMogradyPersModel;
