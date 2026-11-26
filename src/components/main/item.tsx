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
		<div className='w-60 flex flex-col shrink-0 gap-2'>
			<div className='size-60 flex shrink-0 flex-col gap-2'>
				<Image
					src={thumbnail}
					alt={name}
					width={300}
					height={300}
					className='size-full object-contain'
					loading='eager'
				/>
			</div>
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
