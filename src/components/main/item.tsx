import Image from 'next/image';

import BasePhoto from '@/assets/items/base.png';
import Button from '@/components/button';

//TODO: Добавить реальные данные, пока мок. JSDoc

const MainItem = () => {
	return (
		<div className='size-60 flex flex-col gap-2'>
			<Image src={BasePhoto} alt='base' />
			<h3 className='text-gray-600'>Керамическая ваза</h3>
			<p>
				<data value='2490'>2490 ₽</data>
			</p>
			<div className='flex w-full flex-1 gap-2'>
				<Button label='В корзину' />
				<Button label='Купить сразу' />
			</div>
		</div>
	);
};

export default MainItem;
