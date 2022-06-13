import React, { FC, useState } from 'react'
import { Food } from '../../app/types'
import {
	useAddToCartMutation,
	useGetCartQuery,
	useIncreaseValueMutation,
} from '../../features/cartApi'
import FoodPopup from '../FoodPopup'
import './style.css'

const FoodItem: FC<Food> = food => {
	const { data: cart } = useGetCartQuery()
	const [addToCart] = useAddToCartMutation()
	const [increaseValue] = useIncreaseValueMutation()
	const [popup, setPopup] = useState<boolean>(false)

	const addToCartHandler = async (food: Food) => {
		if (cart?.find(el => el.id === food.id) === undefined) {
			await addToCart(food)
		} else {
			cart.map(async el => {
				if (el.id === food.id) {
					await increaseValue(el)
				}
				return el
			})
		}
	}

	const openPopup = () => {
		document.body.style.paddingRight = `${window.innerWidth - document.body.offsetWidth}px`
		document.body.style.overflowY = 'hidden'
		setPopup(!popup)
	}

	const closePopup = () => {
		setTimeout(() => {
			document.body.style.paddingRight = '0px'
			document.body.style.overflowY = 'auto'
		}, 300)

		setPopup(!popup)
	}

	const count = (cart: Food[], food: Food): number => {
		let currentValue = 0
		cart.map(el => {
			if (el.id === food.id) {
				return (currentValue = el.value)
			}
			return el
		})

		return currentValue
	}

	return (
		<>
			<div className="food-card" key={food.id}>
				<div className="food-card__img-wrapper">
					<img className="food-card__img" src={food.url} alt="" onClick={openPopup} />
				</div>
				<div className="food-card__details">
					<div className="food-card__title">{food.title}</div>
					<div className="food-card__description">{food.description}</div>
				</div>
				<div className="food-card__footer">
					<div className="food-card__price">{food.price} ₽</div>
					<button className="food-card__add-to-cart" onClick={() => addToCartHandler(food)}>
						{cart?.find(el => el.id === food.id) === undefined
							? 'Выбрать'
							: `В корзине ${count(cart, food)}`}
					</button>
				</div>
			</div>
			<FoodPopup
				popup={popup}
				closePopup={closePopup}
				addToCartHandler={addToCartHandler}
				food={food}
				cart={cart}
				count={count}
			/>
		</>
	)
}

export default FoodItem
