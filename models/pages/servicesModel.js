const mongoose = require('mongoose');

const servicesSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

servicesSchema.methods.incrementCount = async function () {
  this.count++;
  await this.save();
};

const ServicesModel = mongoose.model('Services-Visit', servicesSchema);

module.exports = ServicesModel;
