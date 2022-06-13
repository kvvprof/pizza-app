import React from 'react'
import './style.css'
import {
	useGetDessertsQuery,
	useGetDrinksQuery,
	useGetPizzasQuery,
	useGetSnacksQuery,
} from '../../features/foodApi'
import Food from '../Food'

const FoodList = () => {
	const { data: pizzas } = useGetPizzasQuery()
	const { data: snacks } = useGetSnacksQuery()
	const { data: desserts } = useGetDessertsQuery()
	const { data: drinks } = useGetDrinksQuery()

	return (
		<section className="food">
			<div className="container">
				<h3 className="food__title" id="pizza">
					Пицца
				</h3>
				<div className="food__list">
					{pizzas?.map(food => (
						<Food
							key={food.id}
							id={food.id}
							title={food.title}
							description={food.description}
							price={food.price}
							url={food.url}
							value={food.value}
						/>
					))}
				</div>
				<h3 className="food__title" id="snacks">
					Закуски
				</h3>
				<div className="food__list">
					{snacks?.map(food => (
						<Food
							key={food.id}
							id={food.id}
							title={food.title}
							description={food.description}
							price={food.price}
							url={food.url}
							value={food.value}
						/>
					))}
				</div>
				<h3 className="food__title" id="desserts">
					Десерты
				</h3>
				<div className="food__list">
					{desserts?.map(food => (
						<Food
							key={food.id}
							id={food.id}
							title={food.title}
							description={food.description}
							price={food.price}
							url={food.url}
							value={food.value}
						/>
					))}
				</div>
				<h3 className="food__title" id="drinks">
					Напитки
				</h3>
				<div className="food__list">
					{drinks?.map(food => (
						<Food
							key={food.id}
							id={food.id}
							title={food.title}
							description={food.description}
							price={food.price}
							url={food.url}
							value={food.value}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default FoodList
