import Joi from "joi";

const movieSchema = Joi.object({
    title: Joi.string()
        .min(3)
        .max(10)
        .required(),
    
    producer: Joi.string()
        .required(),
    year: Joi.number()
        .required()
});


export default movieSchema;