const Joi = require('joi')

const BookValidations = {
    createOrUpdateBookValidator: {
        body: Joi.object({
            name: Joi.string().required(),
            author: Joi.string().required(),
            summary: Joi.string().required(),
            numberOfPages: Joi.number().required(),
        })
    }
}

module.exports = BookValidations