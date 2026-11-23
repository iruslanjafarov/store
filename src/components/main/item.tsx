import Image from 'next/image';

import { IProduct } from '@/types/product';

import Button from '@/components/button';

/**
 * Карточка товара с изображением, названием, ценой и кнопками покупки.
 *
 * @param {IProduct} props - Данные товара
 * @returns {JSX.Element} Компонент карточки товара
 */

const MainItem = ({ name, price, thumbnail }: IProduct) => {
	return (
		<div className='size-60 flex flex-col gap-2'>
			<Image
				src={thumbnail}
				alt={name}
				width={300}
				height={300}
				className='size-full'
				loading='eager'
			/>
			<h3 className='text-gray-600'>{name}</h3>
			<data value={price}>{price} ₽</data>
			<div className='flex w-full flex-1 gap-2'>
				<Button label='В корзину' />
				<Button label='Купить сразу' />
			</div>
		</div>
	);
};

export default MainItem;
