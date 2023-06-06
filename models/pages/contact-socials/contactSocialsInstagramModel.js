const mongoose = require('mongoose');

const contactSocialsInstagramModelSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

contactSocialsInstagramModelSchema.methods.incrementCount = async function () {
  this.count++;
  await this.save();
};

const ContactSocialsInstagramModel = mongoose.model(
  '#ContactSocialsInstagram-Visit#',
  contactSocialsInstagramModelSchema
);

module.exports = ContactSocialsInstagramModel;
