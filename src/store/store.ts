import { create } from 'zustand';

import { IProduct } from '@/types/product';
import { ICategory } from '@/types/category';

//TODO: Добавить Devtools. JSDoc

interface IStore {
	products: IProduct[];
	categories: ICategory[];
	selectedCategories: number[];

	setProducts: (products: IProduct[]) => void;
	setCategories: (categories: ICategory[]) => void;
	setSelectedCategories: (category: number[]) => void;
}

const useStore = create<IStore>((set) => ({
	products: [],
	categories: [],
	selectedCategories: [],

	setProducts: (products) => set({ products }),
	setCategories: (categories) => set({ categories }),
	setSelectedCategories: (categories) =>
		set({ selectedCategories: categories }),
}));

export default useStore;
