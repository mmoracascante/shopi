import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const LayOut = ({ children }: Props) => {
    return (
        <div className='flex flex-col mt-20 items-center'>{children}</div>
    )
}

export default LayOut