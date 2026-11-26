import { Suspense } from 'react';

import MainContent from '@/sections/main/suspense/content';

/**
 * Главная страница магазина с каталогом товаров и фильтрацией.
 *
 * @returns {JSX.Element} Компонент главной страницы
 */

const Main = () => {
	return (
		<Suspense>
			<MainContent />
		</Suspense>
	);
};

export default Main;
