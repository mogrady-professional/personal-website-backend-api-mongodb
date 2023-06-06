const mongoose = require('mongoose');

const startQuoteSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

startQuoteSchema.methods.incrementCount = async function () {
  this.count++;
  await this.save();
};

const StartQuoteModel = mongoose.model('StartQuote-Visit', startQuoteSchema);

module.exports = StartQuoteModel;
