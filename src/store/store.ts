import { create } from 'zustand';

import { IProduct } from '@/types/product';
import { ICategory } from '@/types/category';

/**
 * Интерфейс глобального хранилища приложения.
 *
 * @property {IProduct[]} products - Список товаров
 * @property {IProduct | null} product - Выбранный товар
 * @property {ICategory[]} categories - Список категорий
 * 
 * @property {(products: IProduct[]) => void} setProducts - Обновление списка товаров
 * @property {(product: IProduct) => void} setProduct - Обновление выбранного товара
 * @property {(categories: ICategory[]) => void} setCategories - Обновление списка категорий
 */

interface IStore {
	products: IProduct[];
	product: IProduct | null;
	categories: ICategory[];

	setProducts: (products: IProduct[]) => void;
	setProduct: (product: IProduct | null) => void;
	setCategories: (categories: ICategory[]) => void;
}

/**
 * Глобальное хранилище приложения на основе Zustand.
 *
 * @returns {IStore} Состояние хранилища и методы управления данными
 */

//TODO: Добавить Devtools

const useStore = create<IStore>((set) => ({
	products: [],
	product: null,
	categories: [],

	setProducts: (products) => set({ products }),
	setProduct: (product) => set({ product }),
	setCategories: (categories) => set({ categories }),
}));

export default useStore;
