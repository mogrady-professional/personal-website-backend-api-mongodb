const mongoose = require('mongoose');

const ContactSocialsGithubMogradyPersonalModelSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

ContactSocialsGithubMogradyPersonalModelSchema.methods.incrementCount =
  async function () {
    this.count++;
    await this.save();
  };

const GithubMogradyPersonalModel = mongoose.model(
  '#ContactSocialsGithubMogradyPersonal-Visit#',
  ContactSocialsGithubMogradyPersonalModelSchema
);

module.exports = GithubMogradyPersonalModel;
