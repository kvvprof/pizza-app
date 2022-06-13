import React, { useEffect, useState } from 'react'
import { useGetCartQuery } from '../../features/cartApi'
import CartItem from '../CartItem'
import './style.css'

type CartProps = {
	isCartActive: boolean
	closeCart: () => void
}

const Cart: React.FC<CartProps> = ({ isCartActive, closeCart }) => {
	const { data: cart, error } = useGetCartQuery()

	const [value, setValue] = useState<number>(0)
	const [price, setPrice] = useState<number>(0)

	useEffect(() => {
		setValue(0)
		setPrice(0)
		cart?.map(food => setValue(prev => (prev += food.value)))
		cart?.map(food => setPrice(prev => (prev += food.price * food.value)))
	}, [cart])

	return (
		<section className={`cart ${isCartActive ? 'cart--enabled' : 'cart--disabled'}`}>
			<div className="cart__area" onClick={closeCart}></div>
			<div
				className={`cart__wrapper ${
					isCartActive ? 'cart__wrapper--enabled' : 'cart__wrapper--disabled'
				}`}>
				<div className="cart__title">Корзина</div>
				<div className="cart__stats">
					{value} {value > 4 ? <span>товаров</span> : <span>товара</span>} на сумму {price} ₽
				</div>
				{error && <p>Ошибка загрузки данных</p>}
				<div className="cart__item-wrapper">
					{cart?.map(food => (
						<CartItem
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
				<div className="cart__order-wrapper">
					<button className="cart__order">Оформить заказ</button>
				</div>
			</div>
		</section>
	)
}

export default Cart
