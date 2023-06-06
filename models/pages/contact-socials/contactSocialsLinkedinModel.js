const mongoose = require('mongoose');

const contactSocialsLinkedinModelSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

contactSocialsLinkedinModelSchema.methods.incrementCount = async function () {
  this.count++;
  await this.save();
};

const ContactSocialsLinkedinModel = mongoose.model(
  '#ContactSocialsLinkedin-Visit#',
  contactSocialsLinkedinModelSchema
);

module.exports = ContactSocialsLinkedinModel;
