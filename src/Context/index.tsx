import { ReactNode, createContext, useState } from "react";
import { ContextTypes } from "../Types/ContextTypes";

const ShoppingCartContext = createContext<ContextTypes | null>(null)

interface Props {
    children: ReactNode
}

const ShoppingCartProvider = ({ children }: Props) => {

    const [count, setCount] = useState(0)
    const [showDetails, setShowDetails] = useState(false)

    const handleShowDetails = () => {
        setShowDetails(!showDetails)
    }

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            showDetails,
            handleShowDetails
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}


export { ShoppingCartProvider, ShoppingCartContext }