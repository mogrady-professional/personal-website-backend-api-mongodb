const mongoose = require('mongoose');

const desktopMobileSoftwareDevelopmentSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

desktopMobileSoftwareDevelopmentSchema.methods.incrementCount =
  async function () {
    this.count++;
    await this.save();
  };

const DesktopMobileSoftwareDevelopmentVisitModel = mongoose.model(
  '*DesktopMobileSoftwareDevelopment-Visit*',
  desktopMobileSoftwareDevelopmentSchema
);

module.exports = DesktopMobileSoftwareDevelopmentVisitModel;
