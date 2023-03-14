const express = require('express');
const {controllerWrapper} = require('../../helpers');
const {validationMiddleware} = require('../../middlewares');
const {createValidator} = require('express-joi-validation');

const router = express.Router();
const validator = createValidator();

// router.get('/', controllerWrapper(findAll));

// router.get('/:id', controllerWrapper(findOne));

// router.post('/', validator.body(bookAddSchema), controllerWrapper(add));

// router.patch('/:id', validationMiddleware(bookUpdateSchema), controllerWrapper(updateById));

// router.delete('/:id', controllerWrapper(deleteById));

module.exports = router;
