const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

educationSchema.methods.incrementCount = async function () {
  this.count++;
  await this.save();
};

const EducationModel = mongoose.model('Education-Visit', educationSchema);

module.exports = EducationModel;
