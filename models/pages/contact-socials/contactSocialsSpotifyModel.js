const mongoose = require('mongoose');

const contactSocialsSpotifyModelSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

contactSocialsSpotifyModelSchema.methods.incrementCount = async function () {
  this.count++;
  await this.save();
};

const ContactSocialsSpotifyModel = mongoose.model(
  '#ContactSocialsSpotify-Visit#',
  contactSocialsSpotifyModelSchema
);

module.exports = ContactSocialsSpotifyModel;
