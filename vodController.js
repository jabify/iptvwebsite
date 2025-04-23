// backend/controllers/vodController.js
const vodService = require('../services/vodService');

exports.addVod = async (req, res) => {
  try {
    const vod = await vodService.addVod(req.body);
    res.status(201).json(vod);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllVods = async (req, res) => {
  try {
    const vods = await vodService.getAllVods();
    res.status(200).json(vods);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getVodById = async (req, res) => {
  try {
    const vod = await vodService.getVodById(req.params.id);
    if (!vod) {
      return res.status(404).json({ error: 'VOD not found' });
    }
    res.status(200).json(vod);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
