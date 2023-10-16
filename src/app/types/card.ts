export interface Product {
    id?: BigInteger
    company?: string
    title?: string
    image?: string
    //rating?: ProductRating
    colors: {
        one: ProductColor
        two: ProductColor
        three: ProductColor
    }
}

export interface ProductColor {
    color?: string
    image?: string
}

export interface ProductBage {
    color?: string
    text?: string
}