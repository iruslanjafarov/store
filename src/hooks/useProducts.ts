import { useSearchParams } from 'next/navigation';
import { useState, useMemo, useEffect } from 'react';

import { supabase } from '@/utils/supabase/supabase';

import useStore from '@/store/store';

/**
 * Кастомный хук для загрузки списка товаров.
 * Предоставляет данные и состояние загрузки для списка товаров.
 *
 * @returns Объект с полем `loading`, указывающим на процесс загрузки.
 */

const useProducts = () => {
	const searchParams = useSearchParams();

	const [loading, setLoading] = useState<boolean>(true);

	const selectedCategories = useMemo(() => {
		return (searchParams.get('cat') ?? '')
			.split(',')
			.map(Number)
			.filter((category) => Number?.isFinite(category) && category !== 0);
	}, [searchParams]);

	const { setProducts } = useStore();

	useEffect(() => {
		const fetchData = async () => {
			let query = supabase.from('products').select('*').order('id');

			if (selectedCategories?.length) {
				query = query.in('category_id', selectedCategories);
			}

			const { data: products, error } = await query;

			if (error) {
				console.error(error);
			} else {
				setProducts(products);
			}

			setLoading(false);
		};

		fetchData();
	}, [selectedCategories, setProducts]);

	return { loading };
};

export default useProducts;
