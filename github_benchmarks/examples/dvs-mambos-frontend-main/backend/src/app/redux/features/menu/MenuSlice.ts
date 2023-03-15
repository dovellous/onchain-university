import { createSlice } from '@reduxjs/toolkit'

export const MenuSlice = createSlice({
	name: 'menu',
	initialState: {
		value: {
			products: [],
			addons: [],
			featured: [],
			currency: 'USD',
		}
	},
	reducers: {
		setMenu: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.value = action.payload;
		},
		setProducts: (state, action) => {
			// @ts-ignore
			state.value.products = action.payload;
		},
		addProduct: (state, action) => {
			// @ts-ignore
			state.value.products = [...state.value.products, action.payload];
		},
		resetProducts: (state, action) => {
			// @ts-ignore
			state.value.products = [];
		},
		setAddons: (state, action) => {
			// @ts-ignore
			state.value.addons = action.payload;
		},
		addAddon: (state, action) => {
			// @ts-ignore
			state.value.addons = [...state.value.addons, action.payload];
		},
		resetAddons: (state, action) => {
			// @ts-ignore
			state.value.addons = [];
		},
		setFeatured: (state, action) => {
			// @ts-ignore
			state.value.featured = action.payload;
		},
		addFeatured: (state, action) => {
			// @ts-ignore
			state.value.featured = [...state.value.featured, action.payload];
		},
		resetFeatured: (state, action) => {
			// @ts-ignore
			state.value.featured = [];
		},
		setCurrency: (state, action) => {
			// @ts-ignore
			state.value.currency = action.payload;
		}
	}
})

// Action creators are generated for each case reducer function
export const { setMenu, setProducts, addProduct, setAddons, addAddon, setCurrency } = MenuSlice.actions

export default MenuSlice.reducer