const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

contactSchema.methods.incrementCount = async function () {
  this.count++;
  await this.save();
};

const ContactModel = mongoose.model('Contact-Visit', contactSchema);

module.exports = ContactModel;
