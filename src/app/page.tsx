import { Suspense } from 'react';

import MainSection from '@/sections/main';

/**
 * Главная страница магазина с каталогом товаров и фильтрацией.
 *
 * @returns {JSX.Element} Компонент главной страницы
 */

const Main = () => {
	return (
		<Suspense>
			<MainSection />
		</Suspense>
	);
};

export default Main;
