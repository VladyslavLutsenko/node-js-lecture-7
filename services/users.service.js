const {createError} = require('../helpers');
const {User} = require('../models');
const {bcrypt} = require('../helpers');

const findByEmail = async email => {
  return await User.findOne({ email });
};

const register = async user => {
  try {
    const existingUser = await findByEmail(user.email);
    if (existingUser) {
      throw createError(409, 'User already exists');
    }

    const passwordHash = await bcrypt.hashString(user.password)
    const dbUser = (await User.create({...user, password: passwordHash})).toObject();

    const {password, ...newUser} = dbUser;

    return newUser;
  } catch (error) {
    throw createError(error.status ?? 400, error.errorMessage ?? error.message);
  }
};

const login = async ({email, password}) => {
  const existingUser = await findByEmail(email);
  if (!existingUser || !(await bcrypt.compareHashes(password, existingUser.password))) {
    throw createError(401, 'Email and/or password do not match');
  }
  return {
    token: 'sfnsdjhfjhsd',
  };
}

module.exports = {
  register,
  login,
};
