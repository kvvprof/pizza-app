import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './pages/App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style.css'
import Stocks from './pages/Stocks'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/stocks" element={<Stocks />} />
					<Route path="*" element={<App />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
)
