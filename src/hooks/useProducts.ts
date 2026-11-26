import { useEffect, useState } from 'react';

import { supabase } from '@/utils/supabase/supabase';

import useStore from '@/store/store';

/**
 * Кастомный хук для загрузки списка товаров.
 * Предоставляет данные и состояние загрузки для списка товаров.
 *
 * @returns Объект с полем `loading`, указывающим на процесс загрузки.
 */

const useProducts = () => {
	const [loading, setLoading] = useState<boolean>(true);

	const { setProducts } = useStore();

	useEffect(() => {
		const fetchData = async () => {
			const { data: products, error } = await supabase
				.from('products')
				.select('*')
				.order('id');

			if (error) {
				console.error(error);
			} else {
				setProducts(products);
			}

			setLoading(false);
		};

		fetchData();
	}, [setProducts]);

	return { loading };
};

export default useProducts;
