import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Stocks = () => {
	return (
		<>
			<Header />
			<section
				className="stocks"
				id="stocks"
				style={{
					height: '100vh',
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					paddingTop: '100px',
				}}>
				<div className="container">
					<div
						className="stocks__title"
						style={{ fontSize: '40px', fontWeight: '600', height: '100%' }}>
						Новых акций пока нет =(
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Stocks
