import { create } from 'zustand';

import { IProduct } from '@/types/product';
import { ICategory } from '@/types/category';

/**
 * Интерфейс глобального хранилища приложения.
 *
 * @property {IProduct[]} products - Список товаров
 * @property {ICategory[]} categories - Список категорий
 * @property {(products: IProduct[]) => void} setProducts - Обновление списка товаров
 * @property {(categories: ICategory[]) => void} setCategories - Обновление списка категорий
 */

interface IStore {
	products: IProduct[];
	categories: ICategory[];

	setProducts: (products: IProduct[]) => void;
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
	categories: [],

	setProducts: (products) => set({ products }),
	setCategories: (categories) => set({ categories }),
}));

export default useStore;
