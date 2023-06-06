const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

aboutSchema.methods.incrementCount = async function () {
  this.count++;
  await this.save();
};

const AboutModel = mongoose.model('About-Visit', aboutSchema);

module.exports = AboutModel;
