const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

homeSchema.methods.incrementCount = async function () {
  this.count++;
  await this.save();
};

const HomeModel = mongoose.model('Home-Visit', homeSchema);

module.exports = HomeModel;
