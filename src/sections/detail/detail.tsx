'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';

import useProduct from '@/hooks/products/useProduct';

import useStore from '@/store/store';

import { transformImageLink } from '@/utils/supabase/transformImageLink';

import Container from '@/components/container';
import Spinner from '@/components/spinner';
import TransitionView from '@/components/transitionView';

/**
 * Страница подробной информации о товаре.
 * Получает идентификатор товара из параметров маршрута
 * и отображает его данные после завершения загрузки.
 * Вынесеный в отдельный компонент для использования Suspense.
 *
 * @returns {JSX.Element} Страница товара
 */

//TODO: Продумать дизайн

const Detail = () => {
	const params = useParams<{ id: string }>();
	const productId = params?.id;

	const { loading } = useProduct(productId);

	const { product } = useStore();

	return (
		<main className='flex w-full min-h-[calc(100vh-4rem)]'>
			<Container className='max-w-250! flex flex-col flex-1 w-full justify-between items-center'>
				{loading ? (
					<div className='w-full h-full flex justify-center items-center'>
						<Spinner />
					</div>
				) : (
					<TransitionView
						index={1}
						className='w-full h-full flex justify-between items-center'
						animate
					>
						<Image
							src={transformImageLink(product?.thumbnail ?? '')}
							width={300}
							height={300}
							alt={product?.name ?? ''}
							className='h-auto max-h-[70vh] w-auto object-contain'
						/>
						<div className='flex flex-col'>
							<h2 className='text-3xl'>{product?.name}</h2>
							<data
								className='pointer-events-none relative z-10'
								value={product?.price}
							>
								{product?.price ? `${product?.price} ₽` : ''}
							</data>
						</div>
					</TransitionView>
				)}
			</Container>
		</main>
	);
};

export default Detail;
