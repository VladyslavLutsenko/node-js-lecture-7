const {createError} = require('../helpers');
const {booksService} = require('../services');

const findAll = async (req, res, next) => {
  const books = await booksService.findAll();
  res.json(books);
};

const findOne = async (req, res, next) => {
  const { id } = req.params;
  const book = await booksService.findOne(id);
  if (!book) {
    throw createError(404, 'Book not found');
  }
  res.json(book);
};

const add = async (req, res, next) => {
  const { title, author, rating, isbn, genre } = req.body;
  const book = await booksService.create({ title, author, rating, isbn, genre });
  res.status(201).json(book);
};

const updateById = async (req, res, next) => {
  const { title, author, rating, isbn, genre } = req.body;
  const { id } = req.params;
  const book = await booksService.update(id, { title, author, rating, isbn, genre });
  res.json(book);
};

const deleteById = async (req, res, next) => {
  const { id } = req.params;
  const book = await booksService.remove(id);
  res.json(book);
};

module.exports = {
  findAll,
  findOne,
  add,
  updateById,
  deleteById,
};
