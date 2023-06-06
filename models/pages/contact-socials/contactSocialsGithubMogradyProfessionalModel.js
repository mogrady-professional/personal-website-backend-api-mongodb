const mongoose = require('mongoose');

const contactSocialsGithubMogradyProfessionalModelSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

contactSocialsGithubMogradyProfessionalModelSchema.methods.incrementCount =
  async function () {
    this.count++;
    await this.save();
  };

const GithubMogradyProfessionalModel = mongoose.model(
  '#ContactSocialsGithubMogradyProfessional-Visit#',
  contactSocialsGithubMogradyProfessionalModelSchema
);

module.exports = GithubMogradyProfessionalModel;
