import React, { useContext } from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'
import { ItemTypes } from '../../Types/ItemsTypes'
import { ContextTypes } from '../../Types/ContextTypes';
import { ShoppingCartContext } from '../../Context';

interface Props {
	data: ItemTypes;
}

const Card = ({ data }: Props) => {
	const { count, setCount, handleShowDetails } = useContext(ShoppingCartContext) as ContextTypes

	return (
		<div
			onClick={handleShowDetails}
			className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
			<figure className='relative mb-1 w-full h-4/5'>
				<span
					className='
										absolute
										bottom-0
										left-0
										bg-white/60
										rounded-lg
										text-black
										text-xs
										m-2
										px-3
										py-0.5
                '>
					{data.category.name}
				</span>
				<img
					className='w-full h-full object-cover rounded-lg'
					src={data.images[0]}
					alt={data.title}
				/>
				<div
					onClick={() => setCount(count + 1)}
					className='absolute right-0 top-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
				>
					<PlusIcon className="h-6 w-6 text-black" />

				</div>
			</figure>
			<p className='flex justify-between items-center'>
				<span className='text-sm font-light'>{data.title}</span>
				<span className='text-lg font-medium'>{`$${data.price}`}</span>
			</p>
		</div>
	)
}


export default Card