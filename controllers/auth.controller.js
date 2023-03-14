const {createError} = require('../helpers');
const {usersService} = require('../services');

const register = async (req, res, next) => {
  const user = await usersService.register(req.body);
  res.status(201).json(user);
};

const login = async (req, res, next) => {
  const result = await usersService.login(req.body);
  res.status(201).json(result);
};


module.exports = {
  register,
  login
};
