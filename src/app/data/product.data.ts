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
        discount: 0.17
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
        one: {
            color: 'black',
            image: 'assets/img/bmw-g310r/bmw_g310r_black.jpg',
        },
        two: {
            color: 'blue-white',
            image: 'assets/img/bmw-g310r/bmw_g310r_blue-white.jpg',
        },
        three: {
            color: 'red',
            image: 'assets/img/bmw-g310r/bmw_g310r_red.jpg',
        },        
    }
}
