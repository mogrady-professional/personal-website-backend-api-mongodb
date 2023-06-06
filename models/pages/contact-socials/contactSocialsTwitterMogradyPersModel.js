const mongoose = require('mongoose');

const contactSocialsTwitterMogradyPersModelSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

contactSocialsTwitterMogradyPersModelSchema.methods.incrementCount =
  async function () {
    this.count++;
    await this.save();
  };

const ContactSocialsTwitterMogradyPersModel = mongoose.model(
  '#ContactSocialsTwitterMogradyPers-Visit#',
  contactSocialsTwitterMogradyPersModelSchema
);

module.exports = ContactSocialsTwitterMogradyPersModel;
