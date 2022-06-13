import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Food } from '../app/types'

export const cartApi = createApi({
	reducerPath: 'cartApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
	tagTypes: ['Cart'],
	endpoints: builder => ({
		getCart: builder.query<Food[], void>({
			query: () => '/cart',
			providesTags: ['Cart'],
		}),
		addToCart: builder.mutation<Food, Food>({
			query: food => ({
				url: '/cart',
				method: 'POST',
				body: food,
			}),
			invalidatesTags: ['Cart'],
		}),
		deleteFromCart: builder.mutation<Food, Food>({
			query: food => ({
				url: `/cart/${food.id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Cart'],
		}),
		increaseValue: builder.mutation<Food, Food>({
			query: food => ({
				url: `/cart/${food.id}`,
				method: 'PUT',
				body: { ...food, value: food.value + 1 },
			}),
			invalidatesTags: ['Cart'],
		}),
		decreaseValue: builder.mutation<Food, Food>({
			query: food => ({
				url: `/cart/${food.id}`,
				method: 'PUT',
				body: { ...food, value: food.value - 1 },
			}),
			invalidatesTags: ['Cart'],
		}),
	}),
})

export const {
	useGetCartQuery,
	useAddToCartMutation,
	useDeleteFromCartMutation,
	useIncreaseValueMutation,
	useDecreaseValueMutation,
} = cartApi
