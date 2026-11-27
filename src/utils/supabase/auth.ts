import { supabase } from './supabase';

/**
 * Регистрирует нового пользователя через Supabase Auth.
 *
 * @param {Object} params - Данные для регистрации.
 * @param {string} params.email - Электронная почта пользователя.
 * @param {string} params.password - Пароль пользователя.
 * @returns {Promise<void>} Результат регистрации.
 */

//TODO: Довести до ума

export const auth = async ({
	email,
	password,
}: {
	email: string;
	password: string;
}) => {
	const { data, error } = await supabase.auth.signUp({
		email,
		password,
	});
};
