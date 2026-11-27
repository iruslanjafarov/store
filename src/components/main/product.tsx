import Link from 'next/link';
import Image from 'next/image';

import { IProduct } from '@/types/product';

import Button from '@/components/button';

/**
 * Карточка товара с изображением, названием, ценой и кнопками покупки.
 *
 * @param {IProduct} props - Данные товара
 * @returns {JSX.Element} Компонент карточки товара
 */

const Product = ({ id, name, price, thumbnail }: IProduct) => {
	return (
		<div className='relative flex w-60 shrink-0 flex-col gap-2'>
			<Link href={`/detail/${id}`} className='absolute inset-0 z-0' />
			<div className='relative z-10 flex size-60 shrink-0 flex-col gap-2 pointer-events-none'>
				<Image
					src={thumbnail}
					alt={name}
					width={300}
					height={300}
					className='size-full object-contain'
					loading='eager'
				/>
			</div>
			<h3 className='pointer-events-none relative z-10 text-gray-600'>
				{name}
			</h3>
			<data className='pointer-events-none relative z-10' value={price}>
				{price} ₽
			</data>

			<div className='relative z-10 flex w-full flex-1 gap-2'>
				<Button>В корзину</Button>
				<Button>Купить сразу</Button>
			</div>
		</div>
	);
};

export default Product;
