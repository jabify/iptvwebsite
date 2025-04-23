// backend/services/vodService.js
const Vod = require('../models/Vod');

exports.addVod = async (vodData) => {
  const vod = new Vod(vodData);
  await vod.save();
  return vod;
};

exports.getAllVods = async () => {
  return await Vod.find().sort({ createdAt: -1 });
};

exports.getVodById = async (id) => {
  return await Vod.findById(id);
};
