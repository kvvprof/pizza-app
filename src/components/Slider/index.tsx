import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css/bundle'
import './style.css'

const Slider = () => {
	return (
		<section className="slider">
			<div className="container">
				<Swiper
					modules={[Autoplay, Pagination]}
					spaceBetween={50}
					slidesPerView={1}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={{ clickable: true }}>
					<SwiperSlide className="slider__inner">
						<div className="slider__title">Вкусно...</div>
						<img
							className="slider__img"
							src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
							alt=""
						/>
					</SwiperSlide>
					<SwiperSlide className="slider__inner">
						<div className="slider__title">Быстро...</div>
						<img
							className="slider__img"
							src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80"
							alt=""
						/>
					</SwiperSlide>
					<SwiperSlide className="slider__inner">
						<div className="slider__title">Качественно...</div>
						<img
							className="slider__img"
							src="https://images.unsplash.com/photo-1611915365928-565c527a0590?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
							alt=""
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	)
}

export default Slider
