import { cartApi } from './../features/cartApi'
import { configureStore } from '@reduxjs/toolkit'
import { foodApi } from '../features/foodApi'

export const store = configureStore({
	reducer: {
		[foodApi.reducerPath]: foodApi.reducer,
		[cartApi.reducerPath]: cartApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(foodApi.middleware).concat(cartApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
