import Joi from "joi";

export const musicSchema = Joi.object({
    title: Joi.string().required(),
    favorite: Joi.boolean(),
    artist: Joi.string().required(),
    genre: Joi.string().required(),
    album: Joi.string().required()
    
});

export const isFavoriteSchema = Joi.object({
    isFavorite: Joi.boolean()
});