const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now,
  },
  geolocation: {
    latitude: Number,
    longitude: Number,
  },
  location: {
    city: String,
    country: String,
    country_code: String,
    region: String,
    formatted: String,
    flag: String,
    lat: Number,
    lng: Number,
    status_code: Number,
    created_unix: Number,
    created_http: String,
    rate_limit: Number,
    rate_remaining: Number,
  },
  userData: {
    backendUrl: String,
    domain: String,
    page: String,
    hash: String,
    initialLandingPage: String,
  },
  connectionData: {
    downlinkSpeed: Number,
    maxDownlinkSpeed: Number,
    connectionType: String,
    roundTripTime: Number,
    saveDataMode: Boolean,
  },
  ipInformation: {
    status: String,
    continent: String,
    continentCode: String,
    country: String,
    countryCode: String,
    region: String,
    regionName: String,
    city: String,
    district: String,
    zip: String,
    lat: Number,
    lon: Number,
    timezone: String,
    offset: Number,
    currency: String,
    isp: String,
    org: String,
    as: String,
    asname: String,
    reverse: String,
    mobile: Boolean,
    proxy: Boolean,
    hosting: Boolean,
    query: String,
  },
  deviceInfo: {
    deviceType: String,
    operatingSystem: String,
    deviceModel: String,
    browser: {
      name: String,
      version: String,
    },
    screenSize: {
      width: Number,
      height: Number,
      availableWidth: Number,
      availableHeight: Number,
    },
    viewportSize: {
      width: Number,
      height: Number,
    },
    connectionType: String,
    batteryLevel: Object,
    orientation: String,
    language: String,
    motion: {
      acceleration: String,
      rotation: String,
    },
  },
});

const VisitorModel = mongoose.model('**visitor-data**', visitorSchema);

module.exports = VisitorModel;
