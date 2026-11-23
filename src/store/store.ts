import { create } from 'zustand';

import { IProduct } from '@/types/product';

//TODO: Добавить Devtools. JSDoc

interface IStore {
	products: IProduct[];
	setProducts: (products: IProduct[]) => void;
}

const useStore = create<IStore>((set) => ({
	products: [],

	setProducts: (products) => set({ products }),
}));

export default useStore;
