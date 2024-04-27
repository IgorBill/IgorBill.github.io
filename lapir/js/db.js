let products = [
	{
		id: 1,
		badge: {
			title: "Розпродано",
			bg: "sold"	
		},
		image: "./images/product-1.jpg",
		name: "AMELIA",
		price: 2850,
		description: `Її приталений силует підкреслить Вашу жіночність, а трендова довжина максі додасть образу витонченості 🤍<br><br>
        &#8269; Кольори: молочний, чорний<br>
        &#8269; Розміри: ONE SIZE<br>
        &#8269; Склад: 100% віскоза`,
		stars: 5,

	},
	{
		id: 2,
		badge: {
			title: "",
			bg: ""	
		},
		image: "./images/product-2.jpg",
		name: "FEMI",
		price: 3650,
		description: `Кашеміровий костюм «FEMI» з нашої преміальної колекції настільки приємний на дотик, що Вам точно не захочеться його знімати 🥰<br><br>
        &#8269; Кольори: чорний, бежевий, молочний<br>
        &#8269; Розміри: ONE SIZE, довжину брюк підбираємо під Ваш ріст<br>
        &#8269; Тканина: кашемір`,
		stars: 5,
	},
	{
		id: 3,
		badge: {
			title: "Нова коллекція",
			bg: "new"	
		},
		image: "./images/product-3.jpg",
		name: "JESSICA",
		price: 3150,
		description: `Ви точно захочете одягати її на будь-яку подію, вона займе особливе місце в Вашому гардеробі 🤍<br><br>
        &#8269; Кольори: молочний, чорний, бежевий<br>
        &#8269; Розміри: ONE SIZE<br>
        &#8269; Склад: 80% віскоза, 20% еластан`,
		stars: 5,
	},
	{
		id: 4,
		badge: {
			title: "",
			bg: ""	
		},
		image: "./images/product-4.jpg",
		name: "KEROL",
		price: 3250,
		description: `Сукні з білим комірцем - завжди виглядають по-особливому жіночно та елегантно 😍  Наша нова сукня «KEROL» ще й з ідеальною посадкою та силуетним кроєм, в такій сукні Ви точно не залишитесь непоміченою😍<br><br>
        &#8269; Кольори: чорно-білий<br>
        &#8269; Розміри: XS, S, M, L<br>
        &#8269; Тканина: щільний джерсі преміум якості`,
		stars: 1,
	},
	{
		id: 5,
		badge: {
			title: "Розпродаж",
			bg: "sale"	
		},
		image: "./images/product-5.jpg",
		name: "LADY",
		price: 2450,
		description: `Сукні з білими комірцями залишаються в тренді вже не перший сезон 🖤  <br>
        В нашій сукні «LADY» Ви завжди виглядатимете елегантною та жіночною 🤍<br><br>
        &#8269; Колір: чорно-білий<br>
        &#8269; Розміри: XS, S, M, L<br>
        &#8269; Тканина: костюмний креп з підкладкою з американського крему`,
		stars: 5,
	},

	{
		id: 6,
		badge: {
			title: "",
			bg: ""	
		},
		image: "./images/product-6.jpg",
		name: "LILIAN",
		price: 2650,
		description: `В такій сукні Ви з легкістю підкорите серця всіх оточуючих, та нікого не залишите байдужим 🖤<br><br>
        &#8269; Кольори: молочний, чорний, бежевий<br>
        &#8269; Розміри: ONE SIZE<br>
        &#8269; Склад: 100% бавовна`,
		stars: 5,
	},
	{
		id: 7,
		badge: {
			title: "Розпродаж",
			bg: "sale"
		},
		image: "./images/product-7.jpg",
		name: "LOLA",
		price: 3150,
		description: `Топ та силуетна спідниця міді з розрізом на ніжках - завжди стильне поєднання, носити їх можна разом та з легкістю поєднувати з іншими елементами гардеробу 🤍<br><br>
        &#8269; Кольори: молочний, чорний<br>
        &#8269; Розміри: ONE SIZE<br>
        &#8269; Склад: 80% бавовна, 20% еластан`,
		stars: 4,
	},

	{
		id: 8,
		badge: {
			title: "",
			bg: ""	
		},
		image: "./images/product-8.jpg",
		name: "LUISA",
		price: 2850,
		description: `Жакет можна окремо поєднувати з джинсами та брюками, а шорти з блузами та лонгслівами ✔️<br><br>
        &#8269; Кольори: молочний, темний бежевий<br>
        &#8269; Розміри: XS, S, M<br>
        &#8269; Тканина: жаккард, жакет на віскозній підкладці`,
		stars: 3,
	},
                      
	{
		id: 9,
		badge: {
			title: "Розпродано",
			bg: "sold"	
		},
		image: "./images/product-9.jpg",
		name: "MIRANDA MIDI",
		price: 3250,
		description: `Сукня «MIRANDA MIDI» створена для Ваших найособливіших подій🤍<br>
        Вишукана, жіночна та такої ідеальної посадки 😍<br><br>
        &#8269; Кольори: молочний, бежевий, чорний<br>
        &#8269; Розміри: XS, S, M, L<br>
        &#8269; Тканина: італійський шовк люкс якості`,
		stars: 5,
	},
                   
	{
		id: 10,
		badge: {
			title: "Нова коллекція",
			bg: "new"	
		},
		image: "./images/product-10.jpg",
		name: "ЖИЛЕТ «MOLLI»",
		price: 16,
		description: `Жилетка - просто мастхев в осінньому базовому гардеробі🍂<br>
        Нашу жилетку «MOLLI» легко комбінувати не лише з костюмами, а й з базовими сукнями та підборами ✔️<br><br>
        &#8269; Кольори: молочний, сірий<br>
        &#8269; Розміри: ХС-С, М-Л<br>
        &#8269; Склад: 50% вовна, 30% поліестер, 20% акрил<br>
        &#8269; Наповнювач: силікон 200<br>
        `,
		stars: 0,
	},
	{
		id: 11,
		badge: {
			title: "Розпродаж",
			bg: "sale"	
		},
		image: "./images/product-11.jpg",
		name: "КОСТЮМ «MONRO»",
		price: 3150,
		description: `Наш костюм «MONRO» в базовому чорному кольорі 🖤<br><br>
        &#8269; Кольори: чорний, кемел, молочний, електрик, зелений, шоколад, бежевий, сірий<br>
        &#8269; Розміри: ONE SIZE, довжину брюк підбираємо під Ваш ріст<br>
        &#8269; Склад: 50% бавовна, 50% акрил`,
		stars: 5,
    },

	{
		id: 12,
		badge: {
			title: "Нова коллекція",
			bg: "new"	
		},
		image: "./images/product-12.jpg",
		name: "OLIVIA",
		price: 2650,
		description: `Наш бестселер вже другий рік, сукня, яка підкорила серця наших клієнток ❤️‍🔥<br><br>
        &#8269; Кольори: чорно-білий, білий<br>
        &#8269; Розміри: ONE SIZE<br>
        &#8269; Склад: 100% бавовна`,
		stars: 2,
	},
];

let categories = []
// 	{
// 		id: 1,
// 		image: "./images/product-1.jpg",
// 		section: "Electronics",
//     	name: "Headphone"
// 	},
// 	{
//     	id: 2,
//     	name: "Keyboard",
// 		image: "/images/product-2.jpg",
// 		section: "Electronics",
// 	},
// 	{
// 		id: 3,
// 		image: "./images/product-3.jpg",
// 		name: "T-Shirts",
//     	section: "Fashion & Acc"
// 	},
// 	{
// 		id: 4,
// 		image: "/images/product-4.jpg",
// 		name: "Watches",
//     	section: "Fashion & Acc"
// 	},
// 	{
// 		id: 5,
// 		image: "./images/product-5.jpg",
// 		name: "Shoes",
//     	section: "Fashion & Acc"
// 	},

// 	{
// 		id: 6,
// 		image: "./images/product-7.jpg",
// 		name: "Perfume",
//     	section: "Health & Beauty"
// 	},
// 	{
// 		id: 7,
// 		image: "./images/product-11.jpg",
// 		name: "Smartwatch",
//     	section: "Health & Beauty",
// 	},

// 	{
// 		id: 8,
// 		image: "./images/product-8.jpg",
// 		name: "Apple Watch",
//     	section: "Electronics"
// 	},
                      
// 	{
// 		id: 9,
// 		image: "./images/product-9.jpg",
// 		name: "Camera",
//     	section: "Cameras"
// 	},
                   
// 	{
// 		id: 10,
// 		image: "./images/product-10.jpg",
// 		name: "Ipod",
//     	section: "Electronics"
// 	},
// 	{
// 		id: 11,
// 		image: "./images/product-11.jpg",
// 		name: "Digital smartwatch",
//     	section: "Fashion & Acc"
// 	},

// 	{
// 		id: 12,
// 		image: "./images/product-12.jpg",
// 		name: "Lens",
//     	section: "Cameras"
// 	},

// ];
