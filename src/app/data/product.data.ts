import { Product } from "../types/card"

export const product: Product = {
    id: 1,
    company: 'BMW',
    title: 'G310R 2023',
    image: 'assets/img/bmw-g310r/bmw_g310r_blue-white.jpg',
    rating: {
        value: 5,
        reviews: 4,
    },
    price: {
        value: 5600,
        discount: 0.05
    },
    deliveryOptions: {
        delivery: '21.07',
        postamate: true,
        available: 1,
    },
    bage: {
        color: '#198038',
        text: 'Customer choise'
    },
    colors: {
        black: {
            color: 'black',
            image: 'assets/img/bmw-g310r/bmw_g310r_black.jpg',
        },
        white: {
            color: 'white',
            image: 'assets/img/bmw-g310r/bmw_g310r_blue-white.jpg',
        },
        red: {
            color: 'red',
            image: 'assets/img/bmw-g310r/bmw_g310r_red.jpg',
        },        
    }
}

export const products: Array<Product> = [
    {
        id: 1,
        company: 'BMW',
        title: 'G310R 2023',
        image: 'assets/img/bmw-g310r/bmw_g310r_blue-white.jpg',
        rating: {
            value: 5,
            reviews: 4,
        },
        price: {
            value: 5600,
            discount: 0.05
        },
        deliveryOptions: {
            delivery: '21.07',
            postamate: true,
            available: 1,
        },
        bage: {
            color: '#198038',
            text: 'Customer choise'
        },
        colors: {
            black: {
                color: 'black',
                image: 'assets/img/bmw-g310r/bmw_g310r_black.jpg',
            },
            white: {
                color: 'white',
                image: 'assets/img/bmw-g310r/bmw_g310r_blue-white.jpg',
            },
            red: {
                color: 'red',
                image: 'assets/img/bmw-g310r/bmw_g310r_red.jpg',
            },        
        }
    },
    {
        id: 2,
        company: 'BMW',
        title: 'F750GS 2023',
        image: 'assets/img/bmw-f750gs/f750gs.avif',
        rating: {
            value: 5,
            reviews: 4,
        },
        price: {
            value: 13655,
            discount: 0
        },
        deliveryOptions: {
            delivery: '21.07',
            postamate: true,
            available: 1,
        },
        colors: {            
            white: {
                color: 'white',
                image: 'assets/img/bmw-f750gs/f750gs.avif',
            },                  
        }
    },
    {
        id: 3,
        company: 'BMW',
        title: 'R nineT 2023',
        image: 'assets/img/rninet/rninet-scrambler.avif',
        rating: {
            value: 5,
            reviews: 4,
        },
        price: {
            value: 12995,
            discount: 0
        },
        deliveryOptions: {
            delivery: '21.07',
            postamate: true,
            available: 1,
        },
        bage: {
            color: '#198038',
            text: 'Customer choise'
        },
        colors: {
            black: {
                color: 'black',
                image: 'assets/img/rninet/rninet-scrambler.avif',
            },  
        }
    }       
]