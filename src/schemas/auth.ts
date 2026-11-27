import * as z from 'zod';

/**
 * Схема валидации данных для формы авторизации.
 *
 * @constant loginSchema
 * @property {string} email - Адрес электронной почты. Должен соответствовать формату email.
 * @property {string} password - Пароль. Обязательное поле, не допускающее пустого значения.
 */

export const loginSchema = z?.object({
	email: z?.email({ error: 'Данная запись не является почтовым адресом!' }),
	password: z
		?.string()
		.nonempty({ error: "Поле 'Пароль' является обязательным для заполнения!" }),
});

/**
 * Тип данных формы авторизации, выведенный из схемы loginSchema.
 */

export type LoginSchema = z.infer<typeof loginSchema>;
