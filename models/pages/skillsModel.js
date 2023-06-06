const mongoose = require('mongoose');

const skillsSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

skillsSchema.methods.incrementCount = async function () {
  this.count++;
  await this.save();
};

const SkillsModel = mongoose.model('Skills-Visit', skillsSchema);

module.exports = SkillsModel;
