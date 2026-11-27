'use client';

import { useState } from 'react';

import useProducts from '@/hooks/useProducts';

import useStore from '@/store/store';

import { transformImageLink } from '@/utils/supabase/transformImageLink';

import Container from '@/components/container';
import TransitionView from '@/components/transitionView';
import Spinner from '@/components/spinner';
import Filter from '@/sections/main/filter';
import Product from '@/components/main/product';

/**
 * Главная страница магазина с каталогом товаров и фильтрацией.
 * Вынесеный в отдельный компонент для использования Suspense.
 *
 * @returns {JSX.Element} Компонент главной страницы
 */

const Content = () => {
	const [isFirstView, setIsFirstView] = useState(true);

	const { loading } = useProducts();

	const { products } = useStore();

	return (
		<main>
			<Container className='max-w-250! my-12 flex w-full gap-4'>
				<Filter />
				<div className='relative min-w-0 flex flex-1 flex-wrap gap-x-7 gap-y-40'>
					{loading ? (
						<div className='absolute inset-0 z-10 flex items-center justify-center'>
							<Spinner />
						</div>
					) : products?.length ? (
						products.map(({ id, name, price, thumbnail }, index) => (
							<TransitionView
								key={id}
								index={index}
								animate={isFirstView}
								onAnimationComplete={() => setIsFirstView(false)}
							>
								<Product
									id={id}
									name={name}
									price={price}
									thumbnail={transformImageLink(thumbnail)}
								/>
							</TransitionView>
						))
					) : (
						<div className='w-full text-center'>
							<p className='text-gray-500'>
								По вашему запросу ничего не найдено
							</p>
						</div>
					)}
				</div>
			</Container>
		</main>
	);
};

export default Content;
