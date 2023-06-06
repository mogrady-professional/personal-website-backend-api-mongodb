const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

portfolioSchema.methods.incrementCount = async function () {
  this.count++;
  await this.save();
};

const PortfolioModel = mongoose.model('Portfolio-Visit', portfolioSchema);

module.exports = PortfolioModel;
