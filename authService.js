// backend/services/authService.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};

exports.register = async (userData) => {
  const existingUser = await User.findOne({ email: userData.email });
  if (existingUser) throw new Error('Email already in use');

  const user = new User(userData);
  await user.save();

  const token = generateToken(user);
  return { user, token };
};

exports.login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    throw new Error('Invalid email or password');
  }

  const token = generateToken(user);
  return { user, token };
};
