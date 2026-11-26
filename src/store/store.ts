import { create } from 'zustand';

import { IProduct } from '@/types/product';
import { ICategory } from '@/types/category';

//TODO: Добавить Devtools. JSDoc

interface IStore {
	products: IProduct[];
	categories: ICategory[];

	setProducts: (products: IProduct[]) => void;
	setCategories: (categories: ICategory[]) => void;
}

const useStore = create<IStore>((set) => ({
	products: [],
	categories: [],

	setProducts: (products) => set({ products }),
	setCategories: (categories) => set({ categories }),
}));

export default useStore;
