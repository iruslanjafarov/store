import { Suspense } from 'react';

import DetailSection from '@/sections/detail/detail';

/**
 * Страница подробной информации о товаре.
 * Получает идентификатор товара из параметров маршрута
 * и отображает его данные после завершения загрузки.
 *
 * @returns {JSX.Element} Страница товара
 */

const Detail = () => {
	return (
		<Suspense>
			<DetailSection />
		</Suspense>
	);
};

export default Detail;
