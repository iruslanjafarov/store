'use client';

import useStore from '@/store/store';

import useCategories from '@/hooks/useCategories';

import Button from '@/components/button';
import Checkbox from '@/components/checkbox';
import Spinner from '@/components/spinner';

//TODO: Редизайн. JSDoc

const Filter = () => {
	const { categories, selectedCategories, setSelectedCategories } = useStore();

	const { loading } = useCategories();

	const setCategory = (id: number) => {
		setSelectedCategories(
			selectedCategories?.includes(id)
				? selectedCategories?.filter(
						(selectedCategory) => selectedCategory !== id,
					)
				: [...selectedCategories, id],
		);
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
								<div key={id} onClick={() => setCategory(id)}>
									<Checkbox label={name} />
								</div>
							))}
							<div className='border-t border-gray-200/60' />
						</div>
						<Button
							label='Сбросить фильтры'
							className='mt-6 w-full bg-black px-4! py-2.5! text-sm font-medium text-white cursor-pointer'
						/>
					</>
				)}
			</div>
		</aside>
	);
};

export default Filter;
