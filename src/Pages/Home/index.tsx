import React, { useState, useEffect } from 'react'
import { ItemTypes } from '../../Types/ItemsTypes'
import Card from '../../Components/Card'
import ProductDetails from '../../Components/ProductDetails'

const Home = () => {

	const [items, setItems] = useState<ItemTypes[]>([])

	const getData = async () => {
		const data = await fetch('https://api.escuelajs.co/api/v1/products')
		const response = await data.json()
		setItems(response)
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<>
			<div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
				{
					items?.map(item =>
						<Card key={item.id} data={item} />
					)
				}
			</div>
			<ProductDetails />
		</>

	)
}

export default Home