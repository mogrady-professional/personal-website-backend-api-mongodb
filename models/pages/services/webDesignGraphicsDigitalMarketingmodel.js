const mongoose = require('mongoose');

const webDesignGraphicsDigitalMarketingSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

webDesignGraphicsDigitalMarketingSchema.methods.incrementCount =
  async function () {
    this.count++;
    await this.save();
  };

const WebDesignGraphicsDigitalMarketingVisitModel = mongoose.model(
  '*WebDesignGraphicsDigitalMarketing-Visit*',
  webDesignGraphicsDigitalMarketingSchema
);

module.exports = WebDesignGraphicsDigitalMarketingVisitModel;
