import { useEffect, useState } from 'react';

import { supabase } from '@/utils/supabase/supabase';

import useStore from '@/store/store';

/**
 * Кастомный хук для загрузки категорий.
 * Предоставляет данные и состояние загрузки для списка категорий.
 *
 * @returns Объект с полем `loading`, указывающим на процесс загрузки.
 */

const useCategories = () => {
	const [loading, setLoading] = useState<boolean>(true);

	const { setCategories } = useStore();

	useEffect(() => {
		const fetchData = async () => {
			const { data: categories, error } = await supabase
				.from('categories')
				.select('*')
				.order('id');

			if (error) {
				console.error(error);
			} else {
				setCategories(categories);
			}

			setLoading(false);
		};

		fetchData();
	}, [setCategories]);

	return { loading };
};

export default useCategories;
