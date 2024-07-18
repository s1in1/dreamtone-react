import slide1 from '../public/images/banner/banner1.png'
import slide2 from '../public/images/banner/banner2.png'
import slide3 from '../public/images/banner/banner3.png'
import product1 from '../public/images/products/ibanez.jpg'
import product2 from '../public/images/products/rockdale.jpg'
import product3 from '../public/images/products/gibson.png'
import product4 from '../public/images/products/yamaha.jpg'
import product5 from '../public/images/products/bass.jpg'
import product6 from '../public/images/products/drum.jpeg'

export const slides = [
    {
        id: 1,
        name: 'Подробнее',
        photo: slide1,
    },
    {
        id: 2,
        name: 'В каталог',
        photo: slide2,
    },
    {
        id: 3,
        name: 'В каталог',
        photo: slide3,
    },
  ]

export const cards = [
    {
        id: 0,
        name: 'IBANEZ TCY10E-BK',
        description: 'Электроакустическая гитара, черная модель в корпусе talman, 20 ладов. Корпус ель и махагони, гриф махагони, накладка палисандр. Звукосниматель, преамп с эквалайзером и тюнером.',
        code:'A052681 ',
        category:'acoustic',
        photo: product1,
        price: 28500,
        rating: 5,
    },
    {
        id: 1,
        name: 'ROCKDALE Stars Black Limited Edition HSS BK',
        description: 'Электрогитара. Форма корпуса стратокастер. Цвет черный. Глянцевое покрытие. Хромированная фурнитура. Корпус из тополя. Гриф из клена. 22 лада. Анкерный стержень. Накладка на гриф из древесно-полимерного композита. Фиксированный бридж (hardtail). Конфигурация звукоснимателей H-S-S. Управление звуком: громкость, 2 тона, 5-ти позиционный переключатель. Рекомендованный диаметр струн 10/46.',
        code:'A144898',
        category:'electro',
        photo: product2,
        price: 12000,
        rating: 5,
    },
    {
        id: 2,
        name: 'GIBSON Les Paul Standard 50s Faded Vintage Honey Burst',
        description: 'Электрогитара, цвет санберст, в комплекте кожаный чехол',
        code:'A193257',
        category:'electro',
        photo: product3,
        price: 485000,
        rating: 5,
    },
    {
        id: 3,
        name: 'YAMAHA C40',
        description: 'Классическая гитара, дека ель, корпус меранти, гриф нато, накладка на гриф палисандр, колки хромированные, цвет натуральный        ',
        code:'A052681 ',
        category:'classic',
        photo: product4,
        price: 16000,
        rating: 5,
    },
    {
        id: 4,
        name: 'IBANEZ SR305EB-WK',
        description: 'Электрическая бас-гитара, черная модель, 24 лада. Корпус красное дерево, гриф клен и палисандр, накладка палисандр. HH, 3-позиционный переключатель, громкость, баланс, EQ.',
        code:'A063491',
        category:'bass',
        photo: product5,
        price: 51000,
        rating: 5,
    },
    {
        id: 5,
        name: 'Бас-барабан Yamaha LNB2216 Black Shadow Sunburst',
        description: 'Барабаны серии Live Custom разработаны компанией Yamaha специально для живых выступлений. В серии Live Custom использованы слои дуба 1,2мм, что толще слоев серии Oak Custom на 10%! При создании обечайки бас бочки использованы восемь слоёв, 9,6мм.',
        code:'ZF68460',
        category:'drum',
        photo: product6,
        price: 80000,
        rating: 0,
    },
    
]