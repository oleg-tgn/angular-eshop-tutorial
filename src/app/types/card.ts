export interface Product {
    id?: number
    company?: string
    title?: string
    image?: string
    rating?: ProductRating
    reviews?: number
    price?: ProductPrice
    bage?: ProductBage
    deliveryOptions?: DeliveryOptions
    colors: {
        black?: ProductColor
        white?: ProductColor
        red?: ProductColor
    }
}

export interface ProductPrice {
    value: number
    discount?: number
}

export interface ProductRating {
    value?: number
    reviews?: number
}

export interface DeliveryOptions {
    delivery?: string
    postamate?: boolean
    available?: number
}

export interface ProductBage {
    color?: string
    text?: string
}

export interface ProductColor {
    color: string
    image?: string
}
