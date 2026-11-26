import { create } from 'zustand';

import { IProduct } from '@/types/product';
import { ICategories } from '@/types/categories';

//TODO: Добавить Devtools. JSDoc

interface IStore {
	products: IProduct[];
	categories: ICategories[];

	setProducts: (products: IProduct[]) => void;
	setCategories: (categories: ICategories[]) => void;
}

const useStore = create<IStore>((set) => ({
	products: [],
	categories: [],

	setProducts: (products) => set({ products }),
	setCategories: (categories) => set({ categories }),
}));

export default useStore;
