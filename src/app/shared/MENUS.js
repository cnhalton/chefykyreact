import newnachos from '../assets/img/newnachos.jpg';
import neopizza from '../assets/img/neopizza.jpg';
import lobsterandclam  from '../assets/img/lobsterandclam.jpg';
import chipsandgrits from '../assets/img/chipsandgrits.jpg';
import newpasta from '../assets/img/newpasta.jpg';

export const MENUS = [
    {
        id: 0,
        name: 'Neapolitan Pizza',
        image: neopizza,
        featured: false,
        description:
            'This pizza tastes like it is straight from Italy! Handmade crust and sauce with your choice of fresh protein and veggie toppings!'
    },
    {
        id: 1,
        name: 'Nachos',
        image: newnachos,
        featured: false,
        description:
            ''
    },
    {
        id: 2,
        name: 'Fried Catfish with Shrimp and Grits',
        image: chipsandgrits,
        featured: false,
        description:
            ''
    },
    {
        id: 3,
        name: 'Clams and Lobster',
        image: lobsterandclam,
        featured: false,
        description:
            ''
    },
    {
        id: 4,
        name: 'Greek Alfredo Pasta',
        image: newpasta,
        featured: false,
        description:
            ''
    }
];