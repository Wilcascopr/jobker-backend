import Joi from 'joi';
import RoleModel from '../models/Role';


const loginValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

const registerValidator = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required(),
    roleId: Joi.number().required().external(async (value, helpers) => {
        const validRole = await RoleModel.model.count({ where: { id: value } });
        if (validRole < 1)
            return helpers.error('any.invalid', { custom: 'Invalid Role Id' })
        return value;
    })
});

export { loginValidator, registerValidator }