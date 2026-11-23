'use client';

import Button from '@/components/button';
import Checkbox from '@/components/checkbox';

//TODO: Добавить реальные данные, пока мок. JSDoc

const Filter = () => {
	return (
		<aside className='sticky top-25 self-start shrink-0'>
			<div className='rounded-3xl border border-white/40 bg-white/40 p-5 shadow-[0_0_25px_rgba(0,0,0,0.06)] backdrop-blur-xl'>
				<div className='mb-6 flex items-center justify-between'>
					<h2 className='text-base font-semibold'>Категории</h2>
				</div>
				<div className='space-y-6'>
					<Checkbox label='Все товары' />
					<div className='border-t border-gray-200/60' />
				</div>
				<Button
					label='Сбросить фильтры'
					className='mt-6 w-full bg-black px-4! py-2.5! text-sm font-medium text-white cursor-pointer'
				/>
			</div>
		</aside>
	);
};

export default Filter;
