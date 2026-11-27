'use client';

import { useState } from 'react';

import { auth } from '@/utils/supabase/auth';

import { Field, Label, Input } from '@headlessui/react';

import Button from '@/components/button';

/**
 * Форма регистрации и авторизации пользователя.
 *
 * @returns {JSX.Element} Компонент формы авторизации.
 */

//TODO: Довести до ума

const Login = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const handleSubmit = () => {
		auth({ email, password });
  };

  

	return (
		<main className='w-full min-h-[calc(90vh-4rem)] flex justify-center items-center'>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit();
				}}
				className='flex flex-col gap-5'
			>
				<Field className='flex flex-col gap-1'>
					<Label className='ml-4'>Почта</Label>
					<Input
						type='email'
						id='email'
						name='email'
						required
						autoComplete='on'
						value={email}
						onChange={(e) => setEmail(e?.target?.value)}
						className='w-100 px-5 py-3 rounded-full bg-white/30 border border-white/20 backdrop-blur-xs shadow-[0_0_8px_rgba(0,0,0,0.12)]'
						placeholder='E-Mail'
					/>
				</Field>
				<Field className='flex flex-col gap-1'>
					<Label className='ml-4'>Пароль</Label>
					<Input
						type='password'
						id='password'
						name='password'
						required
						autoComplete='on'
						value={password}
						onChange={(e) => setPassword(e?.target?.value)}
						className='w-100 px-5 py-3 rounded-full bg-white/30 border border-white/20 backdrop-blur-xs shadow-[0_0_8px_rgba(0,0,0,0.12)]'
						placeholder='Пароль'
					/>
				</Field>
				<Button type='submit'>Продолжить</Button>
			</form>
		</main>
	);
};

export default Login;
