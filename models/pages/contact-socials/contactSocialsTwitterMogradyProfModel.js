const mongoose = require('mongoose');

const contactSocialsTwitterMogradyProfModelSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

contactSocialsTwitterMogradyProfModelSchema.methods.incrementCount =
  async function () {
    this.count++;
    await this.save();
  };

const ContactSocialsTwitterMogradyProfModel = mongoose.model(
  '#ContactSocialsTwitterMogradyProf-Visit#',
  contactSocialsTwitterMogradyProfModelSchema
);

module.exports = ContactSocialsTwitterMogradyProfModel;
