import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Food } from '../app/types'

export const foodApi = createApi({
	reducerPath: 'foodApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
	endpoints: builder => ({
		getPizzas: builder.query<Food[], void>({
			query: () => '/pizzas',
		}),
		getSnacks: builder.query<Food[], void>({
			query: () => '/snacks',
		}),
		getDrinks: builder.query<Food[], void>({
			query: () => '/drinks',
		}),
		getDesserts: builder.query<Food[], void>({
			query: () => '/desserts',
		}),
	}),
})

export const { useGetPizzasQuery, useGetSnacksQuery, useGetDrinksQuery, useGetDessertsQuery } =
	foodApi
