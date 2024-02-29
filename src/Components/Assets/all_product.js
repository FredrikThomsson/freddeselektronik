import p1_img from './images/laptop1.png'
import p2_img from './images/soundbar1.png'
import p3_img from './images/tv1.png'
import p4_img from './images/gameboy.jpeg'
import p5_img from './images/ps2.jpeg'
import p6_img from './images/street-fighter-1.jpeg'

let all_product = [
    {
        id:1,
        name:"Acer Aspire 1 A114-61 14",
        image:p1_img,
        new_price: 3500.00,
        category: "Computer",
    },
    {
        id:2,
        name:"LG QNED MiniLED",
        image:p3_img,
        new_price: 9999.00,
        old_price: 12000.00,
        category: ["Television", "CurrentOffer"],
    },
    {
        id:3,
        name:"HW-B660/XE Soundbar",
        image:p2_img,
        new_price: 2999.00,
        old_price: 3599.00,
        category: ["Soundbar", "CurrentOffer"],
    },
    {
        id:4,
        name:"HW-B660/XE Soundbar",
        image:p2_img,
        new_price: 2999.00,
        old_price: 3599.00,
        category: "Soundbar",
    },
    {
        id:5,
        name:"HW-B660/XE Soundbar",
        image:p2_img,
        new_price: 2999.00,
        old_price: 3599.00,
        category: "Soundbar",
    },
    {
        id:6,
        name:"HW-B660/XE Soundbar",
        image:p2_img,
        new_price: 2999.00,
        old_price: 3599.00,
        category: "Soundbar",
    },
    {
        id:7,
        name:"HW-B660/XE Soundbar",
        image:p2_img,
        new_price: 2999.00,
        old_price: 3599.00,
        category: "Soundbar",
    },
    {
        id: 8,
        name: "HW-B660/XE Soundbar",
        image: p2_img,
        new_price: 2999.00,
        old_price: 3599.00,
        category: ["Soundbar", "Popular"],
    },
    {
        id:9,
        name:"HW-B660/XE Soundbar",
        image:p2_img,
        new_price: 2999.00,
        old_price: 3599.00,
        category: "Popular",
    },
    {
        id:10,
        name:"HW-B660/XE Soundbar",
        image:p2_img,
        new_price: 2999.00,
        old_price: 3599.00,
        category: "Popular",
    },
    {
        id:11,
        name:"Gameboy",
        image:p4_img,
        new_price: 2499.00,
        category: ["Gaming"],
    },
    {
        id:12,
        name:"Playstation 2",
        image:p5_img,
        new_price: 1999.00,
        old_price: 2499.00,
        category: ["Gaming", "CurrentOffer"],
    },
    {
        id:13,
        name:"Street fighter arcade",
        image:p6_img,
        new_price: 2499.00,
        category: ["Gaming"],
    },
   
];

export default all_product;