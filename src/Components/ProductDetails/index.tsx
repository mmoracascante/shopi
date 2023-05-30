import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ContextTypes } from '../../Types/ContextTypes'
import './Styles.css'

const ProductDetails = () => {
    const { showDetails, handleShowDetails } = useContext(ShoppingCartContext) as ContextTypes
    return (
        <>
            {showDetails && <aside className='product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white '>
                <div className='flex justify-between items-center p-6'>
                    <h2 className='font-medium text-xl'>Detail</h2>
                    <div onClick={handleShowDetails}>
                        <XMarkIcon className="h-6 w-6 text-black" />
                    </div>
                </div>
            </aside>}
        </>
    )
}

export default ProductDetails