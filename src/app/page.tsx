'use client';

import useItems from '@/hooks/useItems';

import useStore from '@/store/store';

import { transformImageLink } from '@/utils/supabase/transformImageLink';

import Container from '@/components/container';
import Spinner from '@/components/spinner';
import Filter from '@/sections/main/filter';
import MainItem from '@/components/main/item';

/**
 * Главная страница магазина с каталогом товаров и фильтрацией.
 *
 * @returns {JSX.Element} Компонент главной страницы
 */

const Main = () => {
	const { loading } = useItems();

	const { products } = useStore();

	return (
		<main>
			<Container className='max-w-250! my-12 flex w-full gap-4'>
				<Filter />
				<div className='relative min-w-0 flex flex-1 flex-wrap gap-x-7 gap-y-40'>
					{loading && (
						<div className='absolute inset-0 z-10 flex justify-center items-center'>
							<Spinner />
						</div>
					)}
					{products?.map(({ id, name, price, thumbnail }) => (
						<MainItem
							key={id}
							id={id}
							name={name}
							price={price}
							thumbnail={transformImageLink(thumbnail)}
						/>
					))}
				</div>
			</Container>
		</main>
	);
};

export default Main;
