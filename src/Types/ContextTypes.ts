import { Dispatch, SetStateAction } from "react";

export interface ContextTypes {
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
    showDetails: boolean
    handleShowDetails: () => void
}