export interface ItemData {
    data: ItemTypes
}
export interface ItemTypes {
    id: number
    title: string
    price: number
    description: string
    images: string[]
    creationAt: string
    updatedAt: string
    category: CategoryTypes
}

export interface CategoryTypes {
    id: number
    name: string
    image: string
    creationAt: string
    updatedAt: string
}