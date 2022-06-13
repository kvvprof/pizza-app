import React, { FC } from 'react'
import { Food } from '../../app/types'
import './style.css'

type CardPopupProps = {
	food: Food
	cart: Food[] | undefined
	popup: boolean
	count: (cart: Food[], food: Food) => number
	closePopup: () => void
	addToCartHandler: (food: Food) => Promise<void>
}

const CardPopup: FC<CardPopupProps> = props => {
	const addToCartFromPopup = () => {
		props.addToCartHandler(props.food)
	}

	return (
		<div
			className={`card-popup ${
				props.popup === true ? 'card-popup--enabled' : 'card-popup--disable'
			}`}>
			<div className="card-popup__close-area" onClick={() => props.closePopup()}></div>
			<div className="card-popup__content">
				<img className="card-popup__img" src={props.food.url} alt="" />
				<div className="card-popup__details">
					<div className="card-popup__text">
						<div className="card-popup__title">{props.food.title}</div>
						<div className="card-popup__description">{props.food.description}</div>
					</div>
					<button className="card-popup__add-to-card" onClick={addToCartFromPopup}>
						{props.cart?.find(el => el.id === props.food.id) === undefined
							? `Добавить в корзину за ${props.food.price} ₽`
							: `В корзине ${props.count(props.cart, props.food)} (${
									props.count(props.cart, props.food) * props.food.price
							  } ₽)`}
					</button>
				</div>
			</div>
		</div>
	)
}

export default CardPopup
