'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

import useCategories from '@/hooks/categories/useCategories';

import useStore from '@/store/store';

import Button from '@/components/button';
import Checkbox from '@/components/checkbox';
import Spinner from '@/components/spinner';

/**
 * Компонент боковой панели фильтрации товаров по категориям.
 * Позволяет выбирать несколько категорий, синхронизируя выбранные значения с URL,
 * а также сбрасывать активные фильтры.
 *
 * @returns {JSX.Element} Боковая панель фильтрации товаров
 */

//TODO: Редизайн?

const Filter = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const { categories } = useStore();

	const { loading } = useCategories();

	const selectedCategories =
		searchParams.get('cat')?.split(',').map(Number) ?? []; //cat - categories

	const setCategory = (id: number) => {
		const params = new URLSearchParams(searchParams.toString());

		const categories = params.get('cat')?.split(',').map(Number) ?? [];

		const updateCategories = categories?.includes(id)
			? categories?.filter((selectedCategory) => selectedCategory !== id)
			: [...categories, id];

		if (updateCategories?.length) {
			params?.set('cat', updateCategories?.join(','));
		} else {
			params?.delete('cat');
		}

		router.replace(`${pathname}?${params.toString()}`, {
			scroll: false,
		});
	};

	const resetFilters = () => {
		const params = new URLSearchParams(searchParams.toString());

		params.delete('cat');

		const query = params.toString();

		router.replace(query ? `${pathname}?${query}` : pathname, {
			scroll: false,
		});
	};

	return (
		<aside className='sticky top-25 self-start shrink-0'>
			<div className='min-w-52 h-75 rounded-3xl border border-white/40 bg-white/40 p-5 shadow-[0_0_25px_rgba(0,0,0,0.06)] backdrop-blur-xl'>
				{loading ? (
					<div className='flex items-center justify-center w-full h-full'>
						<Spinner />
					</div>
				) : (
					<>
						<div className='mb-6 flex items-center justify-between'>
							<h2 className='text-base font-semibold'>Категории</h2>
						</div>
						<div className='space-y-6'>
							{categories?.map(({ id, name }) => (
								<Checkbox
									key={id}
									label={name}
									checked={selectedCategories?.includes(id)}
									onChange={() => setCategory(id)}
								/>
							))}
							<div className='border-t border-gray-200/60' />
						</div>
						<Button
							onClick={resetFilters}
							className='mt-6 w-full bg-black px-4! py-2.5! text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed'
							disabled={!selectedCategories?.length}
						>
							Сбросить фильтры
						</Button>
					</>
				)}
			</div>
		</aside>
	);
};

export default Filter;
