import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './features/menu/MenuSlice'

export default configureStore({
	reducer: {
		menu: menuReducer
	}
})