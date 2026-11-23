import { useEffect, useState } from 'react';

import { supabase } from '@/utils/supabase/supabase';

import useStore from '@/store/store';

/**
 * Кастомный хук для загрузки списка элементов.
 * Предоставляет данные и состояние загрузки для списка элементов.
 *
 * @returns Объект с полем `loading`, указывающим на процесс загрузки.
 */

const useItems = () => {
	const [loading, setLoading] = useState<boolean>(true);

	const { setProducts } = useStore();

	useEffect(() => {
		const fetchData = async () => {
			const { data, error } = await supabase.from('products').select('*');

			if (error) {
				console.error(error);
			} else {
				setProducts(data);
			}

			setLoading(false);
		};

		fetchData();
	}, [setProducts]);

	return { loading };
};

export default useItems;
