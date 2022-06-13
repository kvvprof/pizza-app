import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useGetCartQuery } from '../../features/cartApi'
import Cart from '../Cart'
import './style.css'

const Header = () => {
	const { data: cart } = useGetCartQuery()
	const [total, setTotal] = useState<number>(0)
	const [isCartActive, setIsCartActive] = useState<boolean>(false)
	const [headerShadow, setHeaderShadow] = useState(false)

	const closeCart = () => {
		setIsCartActive(!isCartActive)
		document.body.style.paddingRight = '0px'
		document.body.style.overflowY = 'auto'
	}

	const openCart = () => {
		document.body.style.paddingRight = `${window.innerWidth - document.body.offsetWidth}px`
		document.body.style.overflowY = 'hidden'

		setIsCartActive(!isCartActive)
	}

	useEffect(() => {
		setTotal(0)
		cart?.map(food => setTotal(prev => (prev += food.value)))
	}, [cart])

	window.addEventListener('scroll', () => {
		if (window.pageYOffset > 50) {
			setHeaderShadow(true)
		} else {
			setHeaderShadow(false)
		}
	})

	return (
		<>
			<header className={`header ${headerShadow ? 'header--shadow' : 'header--no-shadow'}`}>
				<div className="container header__container">
					<Link className="header__logo-link" to="/">
						<img className="header__logo" src="./../../images/logo.png" alt="" />
					</Link>
					<nav className="header__menu">
						<HashLink className="header__menu-link" to="/#pizza">
							Пицца
						</HashLink>
						<HashLink className="header__menu-link" to="/#snacks">
							Закуски
						</HashLink>
						<HashLink className="header__menu-link" to="/#desserts">
							Десерты
						</HashLink>
						<HashLink className="header__menu-link" to="/#drinks">
							Напитки
						</HashLink>
						<HashLink className="header__menu-link" to="/stocks#stocks">
							Акции
						</HashLink>
					</nav>
					<div className="header__cart" onClick={openCart}>
						<div className="header__cart-name">Корзина |</div>
						<div className="header__cart-counter">{total}</div>
					</div>
				</div>
			</header>
			<Cart isCartActive={isCartActive} closeCart={closeCart} />
		</>
	)
}

export default Header
