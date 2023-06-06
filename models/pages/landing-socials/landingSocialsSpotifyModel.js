const mongoose = require('mongoose');

const landingSocialsSpotifyModelSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

landingSocialsSpotifyModelSchema.methods.incrementCount = async function () {
  this.count++;
  await this.save();
};

const LandingSocialsSpotifyModel = mongoose.model(
  '#LandingSocialsSpotify-Visit#',
  landingSocialsSpotifyModelSchema
);

module.exports = LandingSocialsSpotifyModel;
