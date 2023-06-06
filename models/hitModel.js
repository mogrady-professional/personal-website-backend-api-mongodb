const mongoose = require('mongoose');

const hitSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

hitSchema.methods.incrementCount = async function () {
  this.count++;
  await this.save();
};

const HitModel = mongoose.model('Site-Visit', hitSchema);

module.exports = HitModel;
