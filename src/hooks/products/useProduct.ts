'use client';

import { useState, useEffect } from 'react';

import { supabase } from '@/utils/supabase/supabase';

import useStore from '@/store/store';

/**
 * Кастомный хук для получения данных отдельного товара.
 * Загружает товар по его идентификатору вместе со связанной категорией.
 *
 * @param {string} id - Идентификатор товара
 * @returns {{ loading: boolean }} Состояние загрузки товара
 */

const useProduct = (id: string) => {
	const [loading, setLoading] = useState<boolean>(false);

	const { setProduct } = useStore();

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);

			const { data: product, error } = await supabase
				?.from('products')
				?.select(
					`*, category:categories (
          name
          )`,
				)
				.eq('id', id)
				.single();

			if (error) {
				console.error(error);
			} else {
				setProduct(product);
			}

			setLoading(false);
		};

		fetchData();
	}, [id, setProduct]);

	return { loading };
};

export default useProduct;
