import React, { FC } from 'react'
import { Food } from '../../app/types'
import {
	useDecreaseValueMutation,
	useDeleteFromCartMutation,
	useIncreaseValueMutation,
} from '../../features/cartApi'
import './style.css'

const CartItem: FC<Food> = food => {
	const [deleteFromCart] = useDeleteFromCartMutation()
	const [increaseValue] = useIncreaseValueMutation()
	const [decreaseValue] = useDecreaseValueMutation()

	const deleteItem = async (food: Food) => {
		await deleteFromCart(food)
	}

	const increaseItem = async (food: Food) => {
		await increaseValue(food)
	}

	const decreaseItem = async (food: Food) => {
		if (food.value > 1) {
			await decreaseValue(food)
		} else {
			await deleteFromCart(food)
		}
	}

	return (
		<div className="cart__item" key={food.id}>
			<div className="cart__item-header">
				<img className="cart__item-img" src={`${food.url}`} alt="" />
				<div className="cart__item-details">
					<div className="cart__item-title">{food.title}</div>
					<div className="cart__item-description">{food.description}</div>
				</div>
				<div className="cart__item-delete" onClick={() => deleteItem(food)}>
					x
				</div>
			</div>
			<div className="cart__item-footer">
				<div className="cart__item-price">{food.price * food.value} ₽</div>
				<div className="cart__item-counter">
					<div className="cart__item-decrease" onClick={() => decreaseItem(food)}>
						-
					</div>
					<div className="cart__item-value">{food.value}</div>
					<div className="cart__item-increase" onClick={() => increaseItem(food)}>
						+
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartItem
